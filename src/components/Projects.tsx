import { useCallback, useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'motion/react';
import { AlertCircle, ArrowLeft, ArrowRight, ArrowUpRight, Layers, X } from 'lucide-react';
import { SELECTED_PROJECTS, EXPERIMENT_PROJECTS, type ProjectItem, type ProjectTheme } from '../data/projects';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { scrollToY, startScroll, stopScroll } from '../lib/scroll';
import { GithubIcon } from './SocialIcons';
import { ProjectArt } from './ProjectArt';
import { Reveal } from './ui/Reveal';
import { SpotlightCard } from './ui/SpotlightCard';
import { SplitText } from './ui/SplitText';

const N = SELECTED_PROJECTS.length;
const FALLBACK_THEME: ProjectTheme = { soft: '#bcd4e6', deep: '#2f5d86' };
const themeOf = (p: ProjectItem): ProjectTheme => p.theme ?? FALLBACK_THEME;
const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

// TODO placeholders are only shown in dev so they never ship to the live site.
const visibleMetrics = (metrics?: string[]) =>
  (metrics ?? []).filter((m) => import.meta.env.DEV || !m.startsWith('TODO'));

/** Vertical position (in % of the viewport) of a project's node on the spine. */
const nodeY = (i: number) => 21 + (i / (N - 1)) * 58;

/* ---------- Visual: screenshot if supplied, otherwise the project's own illustration ---------- */
function ProjectVisual({ project, className = '' }: { project: ProjectItem; className?: string }) {
  const cover = project.images?.[0];
  const theme = themeOf(project);
  return (
    <div className={`flex flex-col overflow-hidden rounded-3xl border border-line bg-white/65 shadow-[0_30px_60px_-36px_rgba(19,19,20,0.4)] ${className}`}>
      <div className="min-h-0 flex-1">
        {cover ? (
          <img src={assetUrl(cover)} alt={`${project.title} screenshot`} loading="lazy" className="h-full w-full object-cover object-top" />
        ) : (
          <ProjectArt id={project.id} soft={theme.soft} deep={theme.deep} />
        )}
      </div>
      {!cover && (
        <p className="px-4 pb-2.5 text-right font-mono text-[10px] uppercase tracking-widest text-subtle">
          Concept illustration<span className="hidden sm:inline"> · screenshots on request</span>
        </p>
      )}
    </div>
  );
}

/* ---------- Text block ---------- */
function ProjectInfo({ project, onOpen, size = 'lg' }: { project: ProjectItem; onOpen: (p: ProjectItem) => void; size?: 'lg' | 'sm' }) {
  const theme = themeOf(project);
  const metrics = visibleMetrics(project.metrics);
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
        <span className="rounded-full px-2.5 py-1 font-semibold" style={{ backgroundColor: theme.deep, color: '#fff' }}>{project.number}</span>
        <span className="text-muted">{project.category}</span>
        {project.isPrototype && (
          <span className="chip">
            <AlertCircle className="h-3 w-3" aria-hidden="true" /> Prototype
          </span>
        )}
      </div>

      <h3 className={`font-display text-fg ${size === 'lg' ? 'text-[clamp(2.4rem,4.6vw,4.4rem)]' : 'text-4xl'}`}>
        {size === 'lg' ? <SplitText text={project.title} by="word" delay={0.2} /> : project.title}
      </h3>
      {project.subtitle && <p className="font-mono text-xs" style={{ color: theme.deep }}>{project.subtitle}</p>}
      <p className="max-w-xl text-sm leading-relaxed text-muted">{project.description}</p>

      {metrics.length > 0 && (
        <ul className="flex flex-wrap gap-2" aria-label="Key results">
          {metrics.map((m) => (
            <li key={m} className="chip font-semibold" style={{ color: theme.deep, borderColor: theme.deep }}>{m}</li>
          ))}
        </ul>
      )}

      <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
        {project.technologies.slice(0, size === 'lg' ? 6 : 4).map((t) => (
          <li key={t} className="chip">{t}</li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center gap-3 pt-1">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary !px-4 !py-2.5 text-xs">
            <span>Visit live site</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !px-4 !py-2.5 text-xs">
            <GithubIcon className="h-3.5 w-3.5" />
            <span>Code</span>
          </a>
        )}
        {project.caseStudyDetails && (
          <button type="button" onClick={() => onOpen(project)} className="btn btn-ghost !px-4 !py-2.5 text-xs" aria-haspopup="dialog">
            <Layers className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Case overview</span>
          </button>
        )}
      </div>
    </div>
  );
}

/* ---------- Case study modal ---------- */
function CaseModal({ project, onClose }: { project: ProjectItem; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const details = project.caseStudyDetails;
  const theme = themeOf(project);

  useEffect(() => {
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    stopScroll();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.querySelector<HTMLElement>('button')?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>('button, a[href]');
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      startScroll();
      previouslyFocused?.focus();
    };
  }, [onClose]);

  if (!details) return null;

  const blocks = [
    { title: 'Operational challenge', text: details.problem },
    { title: 'Engineering contribution', text: details.contribution },
    { title: 'System delivered', text: details.system },
    { title: 'Technology', text: details.technology },
  ];

  return (
    <motion.div
      className="fixed inset-0 z-[180] flex items-end justify-center bg-ink/45 p-0 backdrop-blur-md sm:items-center sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-title"
        data-lenis-prevent
        className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-[2rem] border border-line bg-paper p-6 shadow-2xl sm:rounded-3xl sm:p-9"
        style={{ borderTop: `4px solid ${theme.deep}` }}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="eyebrow" style={{ color: theme.deep }}>Case overview</span>
            <h3 id="case-title" className="mt-2 font-display text-4xl text-fg">{project.title}</h3>
          </div>
          <button type="button" onClick={onClose} aria-label="Close case overview" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line-strong text-fg transition-colors hover:bg-ink hover:text-paper">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {blocks.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07 }}
              className="rounded-2xl border border-line p-5"
              style={{ backgroundColor: i % 3 === 0 ? `${theme.soft}99` : 'rgba(255,255,255,0.7)' }}
            >
              <strong className="mb-2 block font-mono text-xs uppercase tracking-wider" style={{ color: theme.deep }}>{b.title}</strong>
              <p className="text-sm leading-relaxed text-muted">{b.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 space-y-3">
          <strong className="block font-mono text-xs uppercase tracking-wider text-subtle">Key capabilities</strong>
          <ul className="grid gap-2 sm:grid-cols-2">
            {details.keyWork.map((k) => (
              <li key={k} className="flex items-start gap-2.5 rounded-xl border border-line bg-white/60 p-3 text-sm text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: theme.deep }} aria-hidden="true" />
                <span>{k}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ---------- Desktop: pinned stage ---------- */
function SpineSegment({ progress, i }: { progress: MotionValue<number>; i: number }) {
  const scaleY = useTransform(progress, [i / (N - 1), (i + 1) / (N - 1)], [0, 1], { clamp: true });
  return (
    <div className="relative w-[3px] flex-1 overflow-hidden rounded-full bg-black/10" aria-hidden="true">
      <motion.div className="h-full w-full origin-top" style={{ scaleY, backgroundColor: themeOf(SELECTED_PROJECTS[i + 1]).deep }} />
    </div>
  );
}

function Stage({ onOpen }: { onOpen: (p: ProjectItem) => void }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const layerId = useRef(0);
  const [index, setIndex] = useState(0);
  const [layers, setLayers] = useState([{ id: 0, idx: 0 }]);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });

  const indexFor = useCallback((v: number) => clamp(Math.round(v * (N - 1)), 0, N - 1), []);
  useMotionValueEvent(scrollYProgress, 'change', (v) => setIndex(indexFor(v)));
  useEffect(() => setIndex(indexFor(scrollYProgress.get())), [indexFor, scrollYProgress]);

  // Each change stacks a new colour layer that wipes in from the active node.
  useEffect(() => {
    const id = ++layerId.current;
    setLayers((prev) => (prev[prev.length - 1].idx === index ? prev : [...prev.slice(-1), { id, idx: index }]));
  }, [index]);

  const goTo = useCallback((i: number) => {
    const el = sectionRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const distance = el.offsetHeight - window.innerHeight;
    scrollToY(top + (clamp(i, 0, N - 1) / (N - 1)) * distance);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      if (document.querySelector('[role="dialog"]')) return;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const middle = window.innerHeight / 2;
      if (rect.top > middle || rect.bottom < middle) return;
      e.preventDefault();
      goTo(index + (e.key === 'ArrowRight' ? 1 : -1));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goTo, index]);

  const project = SELECTED_PROJECTS[index];
  const theme = themeOf(project);

  return (
    <div ref={sectionRef} style={{ height: `${N * 100}vh` }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Colour wipe layers */}
        {layers.map((layer) => (
          <motion.div
            key={layer.id}
            aria-hidden="true"
            className="absolute inset-0"
            style={{ backgroundColor: themeOf(SELECTED_PROJECTS[layer.idx]).soft }}
            initial={layer.id === 0 ? false : { clipPath: `circle(0% at 3% ${nodeY(layer.idx)}%)` }}
            animate={{ clipPath: `circle(135% at 3% ${nodeY(layer.idx)}%)` }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          />
        ))}
        <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-60" />

        {/* Spine: a connecting line whose colour changes project to project */}
        <nav aria-label="Projects" className="absolute left-4 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center xl:left-8" style={{ height: '58vh' }}>
          {SELECTED_PROJECTS.map((p, i) => {
            const active = i === index;
            const passed = i < index;
            const t = themeOf(p);
            return (
              <div key={p.id} className="flex flex-1 flex-col items-center last:flex-none">
                <button
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to project ${p.number}: ${p.title}`}
                  aria-current={active ? 'true' : undefined}
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full border-2 bg-paper font-mono text-[11px] font-semibold transition-all duration-300"
                  style={{
                    borderColor: active || passed ? t.deep : 'rgba(19,19,20,0.2)',
                    backgroundColor: active ? t.deep : '#fff',
                    color: active ? '#fff' : '#131314',
                    transform: active ? 'scale(1.18)' : undefined,
                  }}
                >
                  {p.number}
                  <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-xs font-medium text-paper opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    {p.title}
                  </span>
                </button>
                {i < N - 1 && <SpineSegment progress={scrollYProgress} i={i} />}
              </div>
            );
          })}
        </nav>

        <div className="page-container relative z-10 flex h-full flex-col justify-between pb-8 pt-28 lg:pl-24">
          <div className="flex items-center justify-between">
            <span className="eyebrow" style={{ color: theme.deep }}>01 / Selected work</span>
            <span className="font-mono text-xs text-muted" aria-live="polite">
              <strong className="text-base" style={{ color: theme.deep }}>0{index + 1}</strong> / 0{N}
            </span>
          </div>

          <div className="flex flex-1 items-center">
            <AnimatePresence mode="wait">
              <motion.div key={project.id} className="grid w-full grid-cols-12 items-center gap-8 xl:gap-14">
                <motion.div
                  className="col-span-5"
                  initial={{ opacity: 0, x: -48 }}
                  animate={{ opacity: 1, x: 0, transition: { duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] } }}
                  exit={{ opacity: 0, x: -36, transition: { duration: 0.25 } }}
                >
                  <ProjectInfo project={project} onOpen={onOpen} />
                </motion.div>
                <motion.div
                  className="col-span-7"
                  initial={{ opacity: 0, y: 60, rotate: 3, scale: 0.94 }}
                  animate={{ opacity: 1, y: 0, rotate: 0, scale: 1, transition: { duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] } }}
                  exit={{ opacity: 0, y: -40, scale: 0.96, transition: { duration: 0.3 } }}
                >
                  <ProjectVisual project={project} className="mx-auto h-[min(50vh,430px)] w-full max-w-[600px]" />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between gap-6">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
              Scroll · click the line · or use ← → keys
            </p>
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => goTo(index - 1)} disabled={index === 0} aria-label="Previous project" className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-white/70 text-fg transition-colors hover:bg-ink hover:text-paper disabled:opacity-30 disabled:hover:bg-white/70 disabled:hover:text-fg">
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button type="button" onClick={() => goTo(index + 1)} disabled={index === N - 1} aria-label="Next project" className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-white/70 text-fg transition-colors hover:bg-ink hover:text-paper disabled:opacity-30 disabled:hover:bg-white/70 disabled:hover:text-fg">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Mobile / reduced motion: swipe carousel ---------- */
function Carousel({ onOpen }: { onOpen: (p: ProjectItem) => void }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const [pos, setPos] = useState(0);
  const active = clamp(Math.round(pos), 0, N - 1);
  const theme = themeOf(SELECTED_PROJECTS[active]);

  const maxScroll = () => {
    const el = scrollerRef.current;
    return el ? el.scrollWidth - el.clientWidth : 0;
  };

  const onScroll = () => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const el = scrollerRef.current;
      const max = maxScroll();
      if (el && max > 0) setPos(clamp((el.scrollLeft / max) * (N - 1), 0, N - 1));
    });
  };

  const goTo = (i: number) => {
    scrollerRef.current?.scrollTo({ left: (clamp(i, 0, N - 1) / (N - 1)) * maxScroll(), behavior: 'smooth' });
  };

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  return (
    <motion.div
      className="mx-3 rounded-[2rem] py-8 sm:mx-6"
      animate={{ backgroundColor: theme.soft }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
      <div className="space-y-3 px-5">
        <span className="eyebrow" style={{ color: theme.deep }}>01 / Selected work</span>
        <h2 className="font-display text-5xl text-fg">Systems &amp; products</h2>
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted">Swipe · or tap the line</p>
      </div>

      {/* Horizontal spine: segments fill and change colour with each project */}
      <div className="mt-6 flex gap-2 px-5" role="tablist" aria-label="Projects">
        {SELECTED_PROJECTS.map((p, i) => {
          const fill = clamp(pos - i + 1, 0, 1);
          return (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Project ${p.number}: ${p.title}`}
              onClick={() => goTo(i)}
              className="group flex flex-1 flex-col gap-2 py-2 text-left"
            >
              <span className="font-mono text-[10px] font-semibold" style={{ color: i === active ? themeOf(p).deep : 'rgba(19,19,20,0.45)' }}>{p.number}</span>
              <span className="relative h-[4px] w-full overflow-hidden rounded-full bg-black/10">
                <span className="absolute inset-y-0 left-0 rounded-full" style={{ width: `${fill * 100}%`, backgroundColor: themeOf(p).deep }} />
              </span>
            </button>
          );
        })}
      </div>

      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className="hide-scrollbar mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-pl-5 px-5 pb-2"
        aria-label="Project carousel"
      >
        {SELECTED_PROJECTS.map((p, i) => (
          <motion.article
            key={p.id}
            className="w-[80vw] max-w-[540px] shrink-0 snap-start space-y-5 rounded-3xl border border-line bg-white/75 p-4 sm:p-5"
            animate={{ scale: i === active ? 1 : 0.95, opacity: i === active ? 1 : 0.6 }}
            transition={{ duration: 0.4 }}
          >
            <ProjectVisual project={p} className="aspect-[10/7] w-full" />
            <ProjectInfo project={p} onOpen={onOpen} size="sm" />
          </motion.article>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between px-5">
        <span className="font-mono text-xs text-muted" aria-live="polite">
          <strong className="text-base" style={{ color: theme.deep }}>0{active + 1}</strong> / 0{N}
        </span>
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Previous project" className="flex h-12 w-12 items-center justify-center rounded-full border border-line-strong bg-white/80 text-fg disabled:opacity-30">
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button type="button" onClick={() => goTo(active + 1)} disabled={active === N - 1} aria-label="Next project" className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-paper disabled:opacity-30">
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------- Section ---------- */
export function Projects() {
  const wide = useMediaQuery('(min-width: 1024px) and (min-height: 680px)');
  const reduce = useReducedMotion();
  const [active, setActive] = useState<ProjectItem | null>(null);
  const pinned = wide && !reduce;
  const close = useCallback(() => setActive(null), []);

  return (
    <section id="work" className="relative">
      <div className={pinned ? '' : 'pt-24'}>
        {pinned ? <Stage onOpen={setActive} /> : <Carousel onOpen={setActive} />}
      </div>

      {/* Archive */}
      <div className="page-container pb-24 pt-16 lg:pt-28">
        <Reveal className="mb-8 border-t border-line pt-10">
          <h3 className="font-display text-4xl text-fg sm:text-5xl">Experiments &amp; Archive</h3>
          <p className="mt-2 font-mono text-xs text-subtle">Smaller projects, API integrations and computer-vision experiments.</p>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {EXPERIMENT_PROJECTS.map((exp, i) => (
            <Reveal key={exp.id} delay={i * 0.1}>
              <SpotlightCard tilt className="flex h-full flex-col justify-between gap-5 p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-subtle">{exp.number}</span>
                    <span className="text-deep">{exp.category}</span>
                  </div>
                  <h4 className="font-display text-3xl text-fg">{exp.title}</h4>
                  <p className="text-sm leading-relaxed text-muted">{exp.description}</p>
                </div>
                <div className="space-y-4 border-t border-line pt-4">
                  <ul className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((t) => (
                      <li key={t} className="chip">{t}</li>
                    ))}
                  </ul>
                  {exp.githubUrl && (
                    <a href={exp.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-fg transition-colors hover:text-deep">
                      <GithubIcon className="h-4 w-4" />
                      <span>View code</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>{active && <CaseModal key={active.id} project={active} onClose={close} />}</AnimatePresence>
    </section>
  );
}
