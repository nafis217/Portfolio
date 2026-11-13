import { SKILL_GROUPS } from '../data/skills';
import { Marquee } from './ui/Marquee';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';
import { SpotlightCard } from './ui/SpotlightCard';

export function SkillsSystem() {
  const all = SKILL_GROUPS.flatMap((g) => g.skills);
  const mid = Math.ceil(all.length / 2);

  return (
    <section id="skills" className="relative section-pad">
      <div className="page-container">
        <SectionHeading
          index="04"
          eyebrow="Stack"
          title="Skills & Technologies"
          description="The toolkit I use across enterprise backends, mobile field tools and modern web applications."
        />
      </div>

      <div className="mt-14 space-y-4">
        <Marquee items={all.slice(0, mid)} duration={48} />
        <Marquee items={all.slice(mid)} duration={56} reverse />
      </div>

      <div className="page-container mt-14">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.07}>
              <SpotlightCard tilt className="h-full space-y-4 p-6">
                <div className="flex items-center justify-between border-b border-line pb-3">
                  <h3 className="font-display text-lg font-bold text-fg">{group.category}</h3>
                  <span className="font-mono text-xs text-deep">0{i + 1}</span>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="chip !text-xs !text-fg">{skill}</li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
