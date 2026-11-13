import type Lenis from 'lenis';

let instance: Lenis | null = null;

export function setLenis(next: Lenis | null): void {
  instance = next;
}

/** Smoothly scrolls to a page offset, using Lenis when it is active. */
export function scrollToY(y: number): void {
  if (instance) instance.scrollTo(y, { duration: 1.3 });
  else window.scrollTo({ top: y, behavior: 'smooth' });
}

/** Pause/resume page scrolling (used while modals and the loader are open). */
export function stopScroll(): void {
  instance?.stop();
}

export function startScroll(): void {
  instance?.start();
}
