const SEEN_KEY = 'portfolio-intro-seen';

function readShouldShow(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    return window.sessionStorage.getItem(SEEN_KEY) !== '1';
  } catch {
    return true;
  }
}

/** Evaluated once at load so Loader and Hero agree on timing. */
export const SHOW_LOADER = readShouldShow();
export const LOADER_MS = 1700;
/** Seconds the hero should wait before animating in. */
export const INTRO_DELAY = SHOW_LOADER ? LOADER_MS / 1000 - 0.15 : 0.1;

export function markIntroSeen(): void {
  try {
    window.sessionStorage.setItem(SEEN_KEY, '1');
  } catch {
    /* storage unavailable: loader just plays again next visit */
  }
}
