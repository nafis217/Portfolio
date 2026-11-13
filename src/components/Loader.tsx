import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { LOADER_MS, SHOW_LOADER, markIntroSeen } from '../lib/intro';
import { PROFILE_DATA } from '../data/profile';
import { startScroll, stopScroll } from '../lib/scroll';

export function Loader() {
  const [visible, setVisible] = useState(SHOW_LOADER);

  useEffect(() => {
    if (!SHOW_LOADER) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    stopScroll();
    const timer = window.setTimeout(() => {
      setVisible(false);
      markIntroSeen();
      document.body.style.overflow = prev;
      startScroll();
    }, LOADER_MS);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          role="status"
          aria-label="Loading portfolio"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-8 bg-paper"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0, rotate: -12 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-24 w-24 items-center justify-center rounded-3xl bg-ink font-display text-4xl text-paper"
          >
            <span>NS</span>
          </motion.div>
          <div className="w-56 space-y-3 text-center">
            <div className="h-[2px] w-full overflow-hidden rounded-full bg-line">
              <motion.div
                className="h-full origin-left bg-gradient-to-r from-deep via-deep-2 to-deep-3"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: (LOADER_MS - 250) / 1000, ease: [0.65, 0, 0.35, 1] }}
              />
            </div>
            <p className="font-mono text-xs tracking-[0.2em] text-subtle uppercase">{PROFILE_DATA.name}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
