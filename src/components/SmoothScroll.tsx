import { useEffect } from 'react';
import Lenis from 'lenis';
import { useReducedMotion } from 'motion/react';
import { setLenis } from '../lib/scroll';

/**
 * Inertial smooth scrolling on desktop wheels/trackpads. Touch devices keep
 * their native momentum scrolling, so phones feel exactly as expected.
 */
export function SmoothScroll() {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;

    const lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.95, smoothWheel: true });
    setLenis(lenis);

    let frame = requestAnimationFrame(function loop(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    });

    // In-page anchor links glide instead of jumping.
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey) return;
      const target = event.target instanceof Element ? event.target : null;
      const link = target?.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute('href')?.slice(1) ?? '';
      const destination = id ? document.getElementById(id) : document.documentElement;
      if (!destination) return;
      event.preventDefault();
      lenis.scrollTo(id ? destination : 0, { duration: 1.5 });
    };
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
      setLenis(null);
    };
  }, [reduce]);

  return null;
}
