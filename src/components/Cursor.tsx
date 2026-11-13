import { useEffect, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import { useMediaQuery } from '../hooks/useMediaQuery';

/** Desktop-only: a spotlight glow plus a ring that grows over interactive elements. */
export function Cursor() {
  const finePointer = useMediaQuery('(hover: hover) and (pointer: fine)');
  const reduce = useReducedMotion();
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const ringX = useSpring(x, { stiffness: 280, damping: 26, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 280, damping: 26, mass: 0.4 });
  const glowX = useSpring(x, { stiffness: 80, damping: 22, mass: 0.8 });
  const glowY = useSpring(y, { stiffness: 80, damping: 22, mass: 0.8 });
  const [overInteractive, setOverInteractive] = useState(false);
  const enabled = finePointer && !reduce;

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target instanceof Element ? e.target : null;
      setOverInteractive(Boolean(target?.closest('a, button, [data-cursor]')));
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div aria-hidden="true" className="cursor-glow" style={{ x: glowX, y: glowY }} />
      <motion.div
        aria-hidden="true"
        className="cursor-ring"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: overInteractive ? 1.8 : 1, opacity: overInteractive ? 0.9 : 0.6 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div aria-hidden="true" className="cursor-dot" style={{ x, y }} />
    </>
  );
}
