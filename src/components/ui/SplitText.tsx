import { motion, type Variants } from 'motion/react';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  /** 'char' animates each letter, 'word' each word. */
  by?: 'char' | 'word';
}

// Units start pushed below their mask. The trigger lives on the parent so the
// clipped children never need to report their own visibility.
const unitVariants: Variants = {
  hidden: { y: '115%', rotate: 6 },
  visible: (delay: number) => ({
    y: '0%',
    rotate: 0,
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

/** Masked rise-in text. Screen readers get the plain string via aria-label. */
export function SplitText({ text, className = '', delay = 0, stagger, by = 'char' }: SplitTextProps) {
  const step = stagger ?? (by === 'char' ? 0.03 : 0.07);
  const words = text.split(' ');
  let index = 0;

  return (
    <motion.span
      className={className}
      aria-label={text}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {words.map((word, wi) => {
        const units = by === 'char' ? Array.from(word) : [word];
        return (
          <span key={`${word}-${wi}`} aria-hidden="true" className="inline-block overflow-hidden pb-[0.12em] align-bottom">
            {units.map((unit, ui) => {
              const i = index++;
              return (
                <motion.span key={`${unit}-${ui}`} className="inline-block" variants={unitVariants} custom={delay + i * step}>
                  {unit}
                </motion.span>
              );
            })}
            {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        );
      })}
    </motion.span>
  );
}
