"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { registerLenis } from "@/components/lenisControl";

/** Premium smooth scrolling — disabled when user prefers reduced motion. */
export default function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Published so overlays (the mobile menu) can actually stop the scroller.
    registerLenis(lenis);

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      registerLenis(null);
      lenis.destroy();
    };
  }, []);

  return null;
}
