import { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'motion/react';
import { EXPERIENCE_DATA } from '../data/experience';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';
import { SpotlightCard } from './ui/SpotlightCard';

const COUNT = EXPERIENCE_DATA.length;
/** Scroll positions (0–1 through the list) where each role's colour is fully shown. */
const STOPS = EXPERIENCE_DATA.map((_, i) => (COUNT === 1 ? 0.2 : 0.2 + (i / (COUNT - 1)) * 0.62));
const SOFTS = EXPERIENCE_DATA.map((e) => e.theme.soft);
const DEEPS = EXPERIENCE_DATA.map((e) => e.theme.deep);
// Each colour holds for a stretch; between roles the section dips through the light paper
// tone, so two pastels never average into a muddy midpoint.
const HOLD = 0.12;
const PAPER = '#f6f4ef';
const HOLD_STOPS: number[] = [];
const HOLD_SOFTS: string[] = [];
STOPS.forEach((stop, i) => {
  HOLD_STOPS.push(Math.max(0, stop - HOLD), Math.min(1, stop + HOLD));
  HOLD_SOFTS.push(SOFTS[i], SOFTS[i]);
  if (i < STOPS.length - 1) {
    HOLD_STOPS.push((stop + STOPS[i + 1]) / 2);
    HOLD_SOFTS.push(PAPER);
  }
});

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Section colour blends continuously between roles as you scroll.
  const { scrollYProgress: listProgress } = useScroll({ target: listRef, offset: ['start 65%', 'end 55%'] });
  const background = useTransform(listProgress, HOLD_STOPS, HOLD_SOFTS);
  const scaleY = useSpring(listProgress, { stiffness: 120, damping: 28, mass: 0.3 });

  useMotionValueEvent(listProgress, 'change', (v) => {
    let nearest = 0;
    STOPS.forEach((stop, i) => {
      if (Math.abs(stop - v) < Math.abs(STOPS[nearest] - v)) nearest = i;
    });
    setActive(nearest);
  });

  return (
    <section id="experience" ref={sectionRef} className="relative px-3 py-3 sm:px-6">
      <motion.div aria-hidden="true" className="absolute inset-x-3 inset-y-0 rounded-[2rem] sm:inset-x-6 sm:rounded-[3rem]" style={{ backgroundColor: background }} />

      <div className="page-container section-pad relative">
        <SectionHeading
          index="03"
          eyebrow="Career"
          title="Professional Experience"
          description="Full-stack engineering across enterprise software, mobile field applications and custom e-commerce."
        />

        <div ref={listRef} className="relative mt-16">
          {/* Timeline rail: fills as you scroll and shifts colour with each role */}
          <div aria-hidden="true" className="absolute bottom-0 left-[11px] top-2 w-[3px] rounded-full bg-black/10 sm:left-[15px]">
            <motion.div
              className="h-full w-full origin-top rounded-full"
              style={{ scaleY, backgroundImage: `linear-gradient(to bottom, ${DEEPS.join(', ')})` }}
            />
          </div>

          <ol className="space-y-10">
            {EXPERIENCE_DATA.map((exp, i) => {
              const isActive = i === active;
              return (
                <li key={exp.id} className="relative pl-11 sm:pl-14">
                  <motion.span
                    aria-hidden="true"
                    className="absolute left-0 top-6 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-paper sm:h-8 sm:w-8"
                    style={{ borderColor: exp.theme.deep }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: '-120px' }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                  >
                    <motion.span
                      className="rounded-full"
                      style={{ backgroundColor: exp.theme.deep }}
                      animate={{ width: isActive ? 12 : 7, height: isActive ? 12 : 7 }}
                      transition={{ duration: 0.35 }}
                    />
                  </motion.span>

                  <Reveal x={30} y={0} delay={0.05 * i}>
                    <motion.div animate={{ opacity: isActive ? 1 : 0.62, scale: isActive ? 1 : 0.985 }} transition={{ duration: 0.45 }}>
                      <SpotlightCard tilt className="space-y-5 p-6 sm:p-8">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <span className="chip font-semibold" style={{ color: exp.theme.deep, borderColor: exp.theme.deep }}>{exp.period}</span>
                            <h3 className="mt-4 font-display text-3xl text-fg sm:text-4xl">{exp.company}</h3>
                            <p className="mt-1 font-mono text-xs text-subtle">{exp.location}</p>
                          </div>
                          <div className="text-left sm:text-right">
                            <p className="font-display text-2xl" style={{ color: exp.theme.deep }}>{exp.role}</p>
                            {exp.subRole && <p className="font-mono text-xs text-muted">{exp.subRole}</p>}
                          </div>
                        </div>

                        <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">{exp.description}</p>

                        <ul className="grid gap-2.5 sm:grid-cols-2">
                          {exp.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2.5 text-sm text-muted">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: exp.theme.deep }} aria-hidden="true" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </SpotlightCard>
                    </motion.div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
