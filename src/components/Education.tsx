import { Award, GraduationCap } from 'lucide-react';
import { EDUCATION_DATA, HONORS_DATA } from '../data/education';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';
import { SpotlightCard } from './ui/SpotlightCard';

export function Education() {
  const primary = EDUCATION_DATA.find((e) => e.isPrimary);
  const earlier = EDUCATION_DATA.filter((e) => !e.isPrimary);

  return (
    <section id="education" className="relative section-pad">
      <div className="page-container">
        <SectionHeading
          index="06"
          eyebrow="Academics"
          title="Education & Honors"
          description="Computer science engineering education and recognitions."
        />

        <div className="mt-14 space-y-6">
          {primary && (
            <Reveal>
              <SpotlightCard tilt className="space-y-5 p-7 sm:p-10">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-2 text-ink">
                      <GraduationCap className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <span className="font-mono text-xs text-deep">{primary.period}</span>
                      <h3 className="font-display text-2xl font-bold text-fg sm:text-3xl">{primary.institution}</h3>
                      <p className="mt-1 text-sm text-muted">{primary.degree} in {primary.field}</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-subtle">{primary.location}</span>
                </div>
                {primary.scholarship && (
                  <p className="chip chip-accent !text-xs">★ {primary.scholarship}</p>
                )}
              </SpotlightCard>
            </Reveal>
          )}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {earlier.map((edu, i) => (
              <Reveal key={edu.institution} delay={i * 0.1}>
                <SpotlightCard className="h-full space-y-1.5 p-6">
                  <div className="flex items-center justify-between font-mono text-xs text-subtle">
                    <span>{edu.period}</span>
                    <span>{edu.location}</span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-fg">{edu.institution}</h4>
                  <p className="font-mono text-xs text-muted">{edu.degree} ({edu.field})</p>
                </SpotlightCard>
              </Reveal>
            ))}

            {HONORS_DATA.map((h, i) => (
              <Reveal key={h.title} delay={(earlier.length + i) * 0.1}>
                <SpotlightCard className="h-full space-y-1.5 p-6">
                  <div className="flex items-center justify-between font-mono text-xs text-subtle">
                    <span className="flex items-center gap-1.5 text-deep-2">
                      <Award className="h-3.5 w-3.5" aria-hidden="true" /> Honor
                    </span>
                    <span>{h.year}</span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-fg">{h.title}</h4>
                  <p className="font-mono text-xs text-muted">{h.issuer}</p>
                  {h.description && <p className="pt-1 text-xs text-muted">{h.description}</p>}
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
