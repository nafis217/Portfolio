import { motion, useScroll, useSpring } from 'motion/react';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[120] h-[3px] origin-left bg-gradient-to-r from-deep via-deep-2 to-deep-3"
      style={{ scaleX }}
    />
  );
}
