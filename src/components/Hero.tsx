import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Building2, Download, MapPin } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { SELECTED_PROJECTS, EXPERIMENT_PROJECTS } from '../data/projects';
import { EXPERIENCE_DATA } from '../data/experience';
import { SKILL_GROUPS } from '../data/skills';
import { INTRO_DELAY } from '../lib/intro';
import { SplitText } from './ui/SplitText';
import { Magnetic } from './ui/Magnetic';
import { Counter } from './ui/Counter';

const CV_HREF = `${import.meta.env.BASE_URL}${PROFILE_DATA.cvPath}`;

const ROLES = [
  'enterprise web platforms',
  'React Native mobile apps',
  'ASP.NET Core APIs',
  'Shopify storefronts',
  'tools people actually use',
];

const INNER_RING = ['React', 'React Native', 'TypeScript', 'Next.js', '.NET'];
const OUTER_RING = ['SQL Server', 'ASP.NET Core', 'Shopify', 'Docker', 'Node.js', 'PostgreSQL'];

function RoleCycler() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 2600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p className="flex flex-wrap items-baseline gap-x-2 font-display text-xl sm:text-3xl font-medium text-muted">
      <span>I build</span>
      <span className="relative inline-flex h-[1.4em] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={ROLES[index]}
            className="text-gradient font-semibold whitespace-nowrap"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {ROLES[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </p>
  );
}

function OrbitRing({ items, radius, duration, reverse = false }: { items: string[]; radius: string; duration: number; reverse?: boolean }) {
  return (
    <div
      className={`orbit ${reverse ? 'reverse' : ''}`}
      style={{ '--dur': `${duration}s`, inset: `calc(50% - ${radius})` } as CSSProperties}
    >
      {items.map((item, i) => (
        <div key={item} className="orbit-slot" style={{ '--a': `${(360 / items.length) * i}deg`, '--r': radius } as CSSProperties}>
          <span className="orbit-chip" style={{ '--a': `${(360 / items.length) * i}deg` } as CSSProperties}>
            <span className="chip !text-[11px] !text-fg bg-panel/90 border-line-strong shadow-lg shadow-black/30 whitespace-nowrap" style={{ '--dur': `${duration}s` } as CSSProperties}>
              {item}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const technologies = new Set(SKILL_GROUPS.flatMap((g) => g.skills)).size;
  const projectCount = SELECTED_PROJECTS.length + EXPERIMENT_PROJECTS.length;
  const stats = [
    { value: projectCount, label: 'Projects built' },
    { value: EXPERIENCE_DATA.length, label: 'Teams & companies' },
    { value: technologies, label: 'Technologies used' },
  ];
  const d = INTRO_DELAY;

  return (
    <section ref={ref} id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-24">
      {/* Atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="grid-bg absolute inset-0" />
        <motion.div style={{ y: blobY }} className="absolute inset-0">
          <motion.div
            className="blob left-[-8%] top-[8%] h-[420px] w-[420px] bg-accent/40"
            animate={{ x: [0, 70, -30, 0], y: [0, 50, 90, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="blob right-[-6%] top-[18%] h-[480px] w-[480px] bg-accent-3/35"
            animate={{ x: [0, -80, 20, 0], y: [0, 70, -20, 0] }}
            transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="blob bottom-[-12%] left-[35%] h-[380px] w-[380px] bg-accent-2/30"
            animate={{ x: [0, 50, -60, 0], y: [0, -40, 30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="page-container relative z-10 w-full">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          {/* Copy */}
          <div className="space-y-7 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: d, duration: 0.6 }}
              className="inline-flex flex-wrap items-center gap-3 rounded-full glass px-4 py-2 text-xs font-mono"
            >
              <span className="pulse-dot" aria-hidden="true" />
              <span className="uppercase tracking-widest text-accent">{PROFILE_DATA.role}</span>
              <span className="text-line-strong">•</span>
              <span className="flex items-center gap-1.5 text-muted">
                <MapPin className="h-3 w-3" aria-hidden="true" /> {PROFILE_DATA.location}
              </span>
            </motion.div>

            <h1 className="font-display font-bold text-fg text-[clamp(2.8rem,8vw,6.5rem)]">
              <span className="block"><SplitText text="Md Nafis" delay={d + 0.1} /></span>
              <span className="block text-gradient"><SplitText text="Al Safayet" delay={d + 0.35} /></span>
            </h1>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: d + 0.9, duration: 0.7 }} className="space-y-5">
              <RoleCycler />
              <p className="max-w-xl text-base sm:text-lg text-muted">{PROFILE_DATA.tagline}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: d + 1.1, duration: 0.7 }}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <Magnetic>
                <a href="#work" className="btn btn-primary">
                  <span>View selected work</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Magnetic>
              <Magnetic>
                <a href={CV_HREF} download className="btn btn-ghost">
                  <span>Download CV</span>
                  <Download className="h-4 w-4" aria-hidden="true" />
                </a>
              </Magnetic>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: d + 1.3, duration: 0.7 }}
              className="flex items-center gap-2 font-mono text-xs text-subtle"
            >
              <Building2 className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              <span>{PROFILE_DATA.currentRoleContext}</span>
            </motion.div>
          </div>

          {/* Orbit visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: d + 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-square w-full max-w-[460px] lg:col-span-5"
            aria-hidden="true"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/10 via-transparent to-accent-3/10 blur-2xl" />
            <OrbitRing items={OUTER_RING} radius="clamp(125px, 17vw, 200px)" duration={55} reverse />
            <OrbitRing items={INNER_RING} radius="clamp(80px, 11vw, 125px)" duration={38} />
            <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] glass shadow-2xl shadow-accent/10">
              <span className="font-display text-4xl font-bold text-gradient">NS</span>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: d + 1.4, duration: 0.8 }}
          className="mt-16 grid max-w-2xl grid-cols-3 gap-4 border-t border-line pt-8"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse justify-end">
              <dt className="text-xs text-subtle sm:text-sm">{s.label}</dt>
              <dd className="font-display text-3xl sm:text-5xl font-bold text-fg">
                <Counter to={s.value} suffix="+" />
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      <a href="#work" aria-label="Scroll to selected work" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-subtle transition-colors hover:text-accent sm:flex">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-line-strong pt-1.5">
          <span className="scroll-cue-dot block h-1.5 w-1 rounded-full bg-accent" />
        </span>
      </a>
    </section>
  );
}
