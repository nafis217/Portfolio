import { motion } from 'motion/react';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';
import { SpotlightCard } from './ui/SpotlightCard';

const STEPS = [
  { step: '01', title: 'Understand', description: 'Understand the actual operational problem and the people involved.' },
  { step: '02', title: 'Structure', description: 'Map workflows, permissions, data and edge cases.' },
  { step: '03', title: 'Build', description: 'Create interfaces, APIs and reliable data flows.' },
  { step: '04', title: 'Improve', description: 'Test with real usage, solve friction and iterate.' },
];

export function HowIWork() {
  return (
    <section id="how-i-work" className="relative section-pad">
      <div className="page-container">
        <SectionHeading
          index="07"
          eyebrow="Methodology"
          title="How I approach a problem"
          description="A disciplined, product-focused workflow for engineering reliable systems."
        />

        <div className="relative mt-16">
          {/* Connector line draws across when the steps enter view */}
          <motion.div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[3.1rem] hidden h-px origin-left bg-gradient-to-r from-deep via-deep-2 to-deep-3 lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
          />
          <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.step}>
                <Reveal delay={i * 0.12} className="h-full">
                  <SpotlightCard tilt className="relative h-full space-y-3 p-6 pt-8">
                    <span className="font-display text-outline absolute right-4 top-2 text-6xl font-bold" aria-hidden="true">{s.step}</span>
                    <span className="relative flex h-4 w-4 items-center justify-center rounded-full bg-deep shadow-[0_0_18px_3px_rgba(47,93,134,0.4)]" aria-hidden="true" />
                    <h3 className="pt-2 font-display text-2xl font-bold text-fg">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{s.description}</p>
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
