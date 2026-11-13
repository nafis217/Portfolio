import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react';
import { MapPin, Sparkles } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';
import { SpotlightCard } from './ui/SpotlightCard';

function Word({ word, range, progress }: { word: string; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.28em] inline-block">
      {word}
    </motion.span>
  );
}

export function About() {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: paragraphRef, offset: ['start 82%', 'end 45%'] });
  const words = PROFILE_DATA.about.philosophy.split(' ');

  return (
    <section id="about" className="relative section-pad">
      <div className="page-container">
        <SectionHeading index="02" eyebrow="Perspective" title="About & Mindset" />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {/* Words light up as you scroll */}
            <p ref={paragraphRef} className="font-display text-2xl font-medium leading-snug text-fg sm:text-3xl lg:text-4xl" aria-label={PROFILE_DATA.about.philosophy}>
              <span aria-hidden="true">
                {words.map((word, i) => (
                  <Word key={`${word}-${i}`} word={word} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
                ))}
              </span>
            </p>
          </div>

          <div className="space-y-6 lg:col-span-5">
            <Reveal>
              <SpotlightCard tilt className="space-y-4 p-6">
                <h3 className="font-display text-lg font-bold text-fg">Beyond the screen</h3>
                <ul className="flex flex-wrap gap-2.5">
                  {PROFILE_DATA.about.interests.map((interest, i) => (
                    <motion.li
                      key={interest}
                      className="chip !text-sm !px-4 !py-2.5 !text-fg"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3.2 + (i % 3) * 0.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.25 }}
                    >
                      {interest}
                    </motion.li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>

            <Reveal delay={0.1}>
              <SpotlightCard className="space-y-3 p-6">
                <div className="flex items-center gap-2 font-mono text-xs text-muted">
                  <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  {PROFILE_DATA.location}
                </div>
                <p className="flex items-start gap-2 text-sm text-muted">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent-2" aria-hidden="true" />
                  <span>{PROFILE_DATA.currentRoleContext}</span>
                </p>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
