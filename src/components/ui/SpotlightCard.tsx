import { useRef, type ReactNode } from 'react';
import { motion, useReducedMotion, useSpring } from 'motion/react';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  /** Adds a subtle 3D tilt that follows the pointer. */
  tilt?: boolean;
}

/** Card with a pointer-following glow and optional 3D tilt. */
export function SpotlightCard({ children, className = '', tilt = false }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const rx = useSpring(0, { stiffness: 160, damping: 18 });
  const ry = useSpring(0, { stiffness: 160, damping: 18 });
  const useTilt = tilt && !reduce;

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== 'mouse') return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty('--mx', `${px * 100}%`);
    el.style.setProperty('--my', `${py * 100}%`);
    if (useTilt) {
      ry.set((px - 0.5) * 8);
      rx.set(-(py - 0.5) * 8);
    }
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`spot-card ${className}`}
      style={useTilt ? { rotateX: rx, rotateY: ry, transformPerspective: 1100 } : undefined}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}
