import type Lenis from "lenis";

let instance: Lenis | null = null;

/** Called by <SmoothScroll> so other components can reach the running instance. */
export function registerLenis(l: Lenis | null) {
  instance = l;
}

/**
 * Lock page scrolling — use whenever an overlay covers the page.
 *
 * `body { overflow: hidden }` on its own is NOT enough here. It blocks
 * user-initiated scrolling, but Lenis reads wheel/touch events itself and moves
 * the page with programmatic scrolls, which `overflow: hidden` does not stop.
 * Without `lenis.stop()` the page scrolls behind an open overlay.
 *
 * No-ops when Lenis isn't running (reduced motion), where the overflow lock is
 * already sufficient on its own.
 */
export function lockScroll() {
  instance?.stop();
}

export function unlockScroll() {
  instance?.start();
}
