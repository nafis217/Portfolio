import { ArrowUp } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export function Footer() {
  return (
    <footer className="on-dark relative z-10 border-t border-white/10 bg-ink py-10 text-paper">
      <div className="page-container flex flex-col items-center justify-between gap-6 font-mono text-xs text-paper/60 sm:flex-row">
        <div className="text-center sm:text-left">
          <span className="block font-display text-xl text-paper">{PROFILE_DATA.name}</span>
          <span>{PROFILE_DATA.role} • {PROFILE_DATA.location}</span>
        </div>
        <div className="flex items-center gap-5">
          <span>© {new Date().getFullYear()} {PROFILE_DATA.name}</span>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-2 text-paper/80 transition-colors hover:border-accent hover:text-accent"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
