import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { EXPERIENCE_DATA } from '../data/experience';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';
import { SpotlightCard } from './ui/SpotlightCard';

export function Experience() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 70%', 'end 55%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });

  return (
    <section id="experience" className="relative section-pad">
      <div className="page-container">
        <SectionHeading
          index="03"
          eyebrow="Career"
          title="Professional Experience"
          description="Full-stack engineering across enterprise software, mobile field applications and custom e-commerce."
        />

        <div ref={listRef} className="relative mt-16">
          {/* Timeline rail that fills while you scroll */}
          <div aria-hidden="true" className="absolute bottom-0 left-[11px] top-2 w-px bg-line sm:left-[15px]">
            <motion.div className="h-full w-full origin-top bg-gradient-to-b from-deep via-deep-2 to-deep-3" style={{ scaleY }} />
          </div>

          <ol className="space-y-10">
            {EXPERIENCE_DATA.map((exp, i) => (
              <li key={exp.id} className="relative pl-11 sm:pl-14">
                <motion.span
                  aria-hidden="true"
                  className="absolute left-0 top-6 flex h-6 w-6 items-center justify-center rounded-full border border-deep/50 bg-paper sm:h-8 sm:w-8"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                >
                  <span className="h-2 w-2 rounded-full bg-deep shadow-[0_0_12px_2px_rgba(47,93,134,0.45)]" />
                </motion.span>

                <Reveal x={30} y={0} delay={0.05 * i}>
                  <SpotlightCard tilt className="space-y-5 p-6 sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <span className="chip chip-accent">{exp.period}</span>
                        <h3 className="mt-4 font-display text-2xl font-bold text-fg sm:text-3xl">{exp.company}</h3>
                        <p className="mt-1 font-mono text-xs text-subtle">{exp.location}</p>
                      </div>
                      <div className="text-left sm:text-right">
                        <p className="font-display text-lg font-semibold text-deep">{exp.role}</p>
                        {exp.subRole && <p className="font-mono text-xs text-muted">{exp.subRole}</p>}
                      </div>
                    </div>

                    <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">{exp.description}</p>

                    <ul className="grid gap-2.5 sm:grid-cols-2">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-sm text-muted">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-deep" aria-hidden="true" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </SpotlightCard>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
