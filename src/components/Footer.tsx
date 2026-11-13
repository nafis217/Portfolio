import { ArrowUp } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-line bg-ink-2/80 py-10">
      <div className="page-container flex flex-col items-center justify-between gap-6 text-xs font-mono text-subtle sm:flex-row">
        <div className="text-center sm:text-left">
          <span className="block font-display text-sm font-semibold text-fg">{PROFILE_DATA.name}</span>
          <span>{PROFILE_DATA.role} • {PROFILE_DATA.location}</span>
        </div>
        <div className="flex items-center gap-5">
          <span>© {new Date().getFullYear()} {PROFILE_DATA.name}</span>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 rounded-full border border-line px-3 py-2 text-muted transition-colors hover:border-accent hover:text-accent"
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
