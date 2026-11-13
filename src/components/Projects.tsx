import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import { AlertCircle, ArrowUpRight, Layers, X } from 'lucide-react';
import { SELECTED_PROJECTS, EXPERIMENT_PROJECTS, type ProjectItem } from '../data/projects';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { GithubIcon } from './SocialIcons';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';
import { SpotlightCard } from './ui/SpotlightCard';

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

// TODO placeholders are only shown in dev so they never ship to the live site.
const visibleMetrics = (metrics?: string[]) =>
  (metrics ?? []).filter((m) => import.meta.env.DEV || !m.startsWith('TODO'));

const GRADIENTS = [
  'from-accent/30 via-accent-2/10 to-transparent',
  'from-accent-3/30 via-accent/10 to-transparent',
  'from-accent-2/30 via-accent-3/10 to-transparent',
  'from-accent/25 via-accent-3/15 to-transparent',
  'from-accent-2/25 via-accent/10 to-transparent',
];

/* ---------- Visual: screenshot, or an animated wireframe when none exists ---------- */
function ProjectVisual({ project, index }: { project: ProjectItem; index: number }) {
  const cover = project.images?.[0];
  if (cover) {
    return (
      <img
        src={assetUrl(cover)}
        alt={`${project.title} screenshot`}
        loading="lazy"
        className="h-full w-full rounded-2xl object-cover object-top"
      />
    );
  }

  return (
    <div className={`relative flex h-full min-h-[220px] w-full items-center justify-center overflow-hidden rounded-2xl border border-line bg-gradient-to-br ${GRADIENTS[index % GRADIENTS.length]}`}>
      <span aria-hidden="true" className="font-display text-outline absolute -bottom-6 -right-2 text-[9rem] font-bold leading-none sm:text-[12rem]">
        {project.number}
      </span>
      <div aria-hidden="true" className="relative w-[78%] rounded-xl glass p-4 shadow-2xl shadow-black/40">
        <div className="mb-4 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent-2/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent-3/70" />
        </div>
        <div className="space-y-2.5">
          <div className="skeleton h-3 w-2/3" />
          <div className="skeleton h-3 w-full" />
          <div className="skeleton h-3 w-5/6" />
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="skeleton h-12 !rounded-lg" />
            <div className="skeleton h-12 !rounded-lg" />
            <div className="skeleton h-12 !rounded-lg" />
          </div>
        </div>
      </div>
      <span className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-widest text-subtle">
        Screenshots available on request
      </span>
    </div>
  );
}

/* ---------- Card ---------- */
interface CardProps {
  project: ProjectItem;
  index: number;
  onOpen: (p: ProjectItem) => void;
  className?: string;
}

function ProjectCard({ project, index, onOpen, className = '' }: CardProps) {
  const metrics = visibleMetrics(project.metrics);
  return (
    <SpotlightCard tilt className={`flex flex-col gap-6 p-5 sm:p-7 lg:flex-row lg:gap-8 ${className}`}>
      <div className="order-1 min-h-[200px] lg:order-2 lg:w-[46%] lg:shrink-0">
        <ProjectVisual project={project} index={index} />
      </div>

      <div className="order-2 flex flex-1 flex-col justify-between gap-5 lg:order-1">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <span className="font-bold text-accent">{project.number}</span>
            <span className="text-line-strong">•</span>
            <span className="text-muted">{project.category}</span>
            {project.isPrototype && (
              <span className="chip !text-amber-200/90 !border-amber-200/30 !bg-amber-200/10">
                <AlertCircle className="h-3 w-3" aria-hidden="true" /> Prototype
              </span>
            )}
          </div>
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-fg">{project.title}</h3>
          {project.subtitle && <p className="font-mono text-xs text-accent-2">{project.subtitle}</p>}
          <p className="text-sm leading-relaxed text-muted">{project.description}</p>

          {metrics.length > 0 && (
            <ul className="flex flex-wrap gap-2" aria-label="Key results">
              {metrics.map((m) => (
                <li key={m} className="chip chip-accent font-semibold">{m}</li>
              ))}
            </ul>
          )}

          <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
            {project.technologies.map((t) => (
              <li key={t} className="chip">{t}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary !py-2.5 !px-4 text-xs">
              <span>Visit live site</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !py-2.5 !px-4 text-xs">
              <GithubIcon className="h-3.5 w-3.5" />
              <span>Code</span>
            </a>
          )}
          {project.caseStudyDetails && (
            <button type="button" onClick={() => onOpen(project)} className="btn btn-ghost !py-2.5 !px-4 text-xs" aria-haspopup="dialog">
              <Layers className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Case overview</span>
            </button>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
}

/* ---------- Case study modal ---------- */
function CaseModal({ project, onClose }: { project: ProjectItem; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const details = project.caseStudyDetails;

  useEffect(() => {
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
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
      previouslyFocused?.focus();
    };
  }, [onClose]);

  if (!details) return null;

  const blocks = [
    { title: 'Operational challenge', text: details.problem, color: 'text-accent' },
    { title: 'Engineering contribution', text: details.contribution, color: 'text-accent-2' },
    { title: 'System delivered', text: details.system, color: 'text-accent-3' },
    { title: 'Technology', text: details.technology, color: 'text-accent' },
  ];

  return (
    <motion.div
      className="fixed inset-0 z-[180] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-md"
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
        className="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-line-strong bg-ink-2 p-6 shadow-2xl shadow-black/50 sm:p-9"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="eyebrow">Case overview</span>
            <h3 id="case-title" className="mt-2 font-display text-3xl font-bold text-fg">{project.title}</h3>
          </div>
          <button type="button" onClick={onClose} aria-label="Close case overview" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line-strong text-fg transition-colors hover:border-accent hover:text-accent">
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
              className="rounded-2xl border border-line bg-ink/50 p-5"
            >
              <strong className={`mb-2 block font-mono text-xs uppercase tracking-wider ${b.color}`}>{b.title}</strong>
              <p className="text-sm leading-relaxed text-muted">{b.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 space-y-3">
          <strong className="block font-mono text-xs uppercase tracking-wider text-subtle">Key capabilities</strong>
          <ul className="grid gap-2 sm:grid-cols-2">
            {details.keyWork.map((k) => (
              <li key={k} className="flex items-start gap-2.5 rounded-xl border border-line bg-white/[0.03] p-3 text-sm text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>{k}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ---------- Pinned horizontal gallery (desktop) ---------- */
function PinnedGallery({ onOpen }: { onOpen: (p: ProjectItem) => void }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [current, setCurrent] = useState(0);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: 0.35 });
  const x = useTransform(progress, [0, 1], [0, -distance]);
  const ghostX = useTransform(progress, [0, 1], ['4%', '-45%']);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setCurrent(Math.min(SELECTED_PROJECTS.length - 1, Math.max(0, Math.round(v * (SELECTED_PROJECTS.length - 1)))));
  });

  return (
    <div ref={sectionRef} style={{ height: `calc(${distance}px + 100vh)` }} className="relative">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <motion.div
          aria-hidden="true"
          style={{ x: ghostX }}
          className="font-display text-outline pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap text-[26vw] font-bold leading-none opacity-25"
        >
          SELECTED WORK
        </motion.div>

        <div className="page-container relative z-10 flex items-end justify-between pb-8 pt-20">
          <div>
            <span className="eyebrow">Keep scrolling — projects slide by</span>
            <h2 className="mt-2 font-display text-4xl font-bold text-fg sm:text-5xl">Selected Work</h2>
          </div>
          <div className="text-right font-mono text-sm text-muted" aria-live="polite">
            <span className="text-3xl font-bold text-accent">0{current + 1}</span>
            <span className="text-subtle"> / 0{SELECTED_PROJECTS.length}</span>
          </div>
        </div>

        <motion.div ref={trackRef} style={{ x }} className="relative z-10 flex w-max gap-8 pl-[max(1.25rem,calc((100vw-1200px)/2+2.5rem))] pr-[10vw]">
          {SELECTED_PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={onOpen}
              className="h-[min(62vh,560px)] w-[min(86vw,1040px)] shrink-0"
            />
          ))}
        </motion.div>

        <div className="page-container relative z-10 pt-8">
          <div className="h-[3px] w-full overflow-hidden rounded-full bg-line" aria-hidden="true">
            <motion.div className="h-full origin-left bg-gradient-to-r from-accent via-accent-2 to-accent-3" style={{ scaleX: progress }} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Section ---------- */
export function Projects() {
  const wide = useMediaQuery('(min-width: 1024px) and (min-height: 640px)');
  const reduce = useReducedMotion();
  const [active, setActive] = useState<ProjectItem | null>(null);
  const pinned = wide && !reduce;
  const close = useCallback(() => setActive(null), []);

  return (
    <section id="work" className="relative">
      {pinned ? (
        <PinnedGallery onOpen={setActive} />
      ) : (
        <div className="page-container section-pad">
          <SectionHeading
            index="01"
            eyebrow="Selected work"
            title="Systems & products"
            description="A selection of systems, digital products and commerce experiences I've worked on."
          />
          <div className="mt-14 space-y-8">
            {SELECTED_PROJECTS.map((project, i) => (
              <Reveal key={project.id}>
                <ProjectCard project={project} index={i} onOpen={setActive} />
              </Reveal>
            ))}
          </div>
        </div>
      )}

      {/* Archive */}
      <div className="page-container pb-24 pt-16 lg:pt-28">
        <Reveal className="mb-8 flex items-end justify-between gap-4 border-t border-line pt-10">
          <div>
            <h3 className="font-display text-2xl font-bold text-fg sm:text-3xl">Experiments & Archive</h3>
            <p className="mt-1 font-mono text-xs text-subtle">Smaller projects, API integrations and computer-vision experiments.</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {EXPERIMENT_PROJECTS.map((exp, i) => (
            <Reveal key={exp.id} delay={i * 0.1}>
              <SpotlightCard tilt className="flex h-full flex-col justify-between gap-5 p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-subtle">{exp.number}</span>
                    <span className="text-accent">{exp.category}</span>
                  </div>
                  <h4 className="font-display text-xl font-bold text-fg">{exp.title}</h4>
                  <p className="text-sm leading-relaxed text-muted">{exp.description}</p>
                </div>
                <div className="space-y-4 border-t border-line pt-4">
                  <ul className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((t) => (
                      <li key={t} className="chip">{t}</li>
                    ))}
                  </ul>
                  {exp.githubUrl && (
                    <a href={exp.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-fg transition-colors hover:text-accent">
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

