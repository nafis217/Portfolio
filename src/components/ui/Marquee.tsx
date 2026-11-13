import { motion, useReducedMotion, useScroll, useSpring, useTransform, useVelocity } from 'motion/react';

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  duration?: number;
}

/** Endless ticker that leans with scroll speed. The second copy is hidden from assistive tech. */
export function Marquee({ items, reverse = false, duration = 40 }: MarqueeProps) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { stiffness: 260, damping: 40 });
  const skewX = useTransform(velocity, [-2500, 2500], reverse ? [7, -7] : [-7, 7]);

  return (
    <motion.div style={reduce ? undefined : { skewX }}>
      <div className="marquee" role="list" aria-label="Technologies">
        <div
          className={`marquee-track ${reverse ? 'reverse' : ''}`}
          style={{ '--dur': `${duration}s` } as React.CSSProperties}
        >
          {[0, 1].map((copy) => (
            <div key={copy} className="marquee-group" aria-hidden={copy === 1 ? 'true' : undefined}>
              {items.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  role={copy === 0 ? 'listitem' : undefined}
                  className="font-display text-3xl sm:text-5xl text-fg border border-line rounded-full px-7 py-3 whitespace-nowrap bg-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
