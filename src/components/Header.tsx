import { useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { Download, Menu, X } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { NAV_LINKS } from '../data/nav';
import { useActiveSection } from '../hooks/useActiveSection';
import { Magnetic } from './ui/Magnetic';

const CV_HREF = `${import.meta.env.BASE_URL}${PROFILE_DATA.cvPath}`;
const IDS = ['hero', ...NAV_LINKS.map((l) => l.id)];

export function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const active = useActiveSection(IDS);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 240 && !open);
  });

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-[100] flex justify-center px-4 pt-4"
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: hidden && !open ? -110 : 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative w-full max-w-[1100px]">
        <div className="glass flex items-center justify-between gap-4 rounded-full py-2 pl-3 pr-2 shadow-2xl shadow-black/10">
          <a href="#hero" className="flex items-center gap-3 rounded-full pr-3" aria-label={`${PROFILE_DATA.name} — back to top`}>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink font-display text-base text-paper">
              NS
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-display text-base text-fg">{PROFILE_DATA.name}</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-subtle">{PROFILE_DATA.role}</span>
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors ${
                    isActive ? 'text-paper' : 'text-muted hover:text-fg'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-ink"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Magnetic strength={0.2}>
              <a href={CV_HREF} download className="btn btn-ghost !py-2.5 !px-4 text-xs">
                <span>Download CV</span>
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </Magnetic>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg lg:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              className="absolute inset-x-0 top-[calc(100%+0.6rem)] rounded-3xl border border-line-strong bg-paper p-4 shadow-2xl shadow-black/15 lg:hidden"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <ul className="flex flex-col">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium ${
                        active === link.id ? 'bg-accent/50 text-fg' : 'text-fg hover:bg-black/5'
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a href={CV_HREF} download onClick={() => setOpen(false)} className="btn btn-primary mt-3 w-full">
                <span>Download CV</span>
                <Download className="h-4 w-4" aria-hidden="true" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
