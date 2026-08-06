"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

/**
 * Soft accent glow that trails the cursor across the whole site (screen blend).
 * Spring-smoothed so it lags slightly — feels alive without being distracting.
 * Hidden under prefers-reduced-motion.
 */
export default function CursorGlow() {
  const reduce = useReducedMotion();
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const sx = useSpring(x, { stiffness: 120, damping: 22, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 120, damping: 22, mass: 0.4 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y, reduce]);

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-40 -ml-[240px] -mt-[240px] h-[480px] w-[480px] rounded-full mix-blend-screen"
    >
      <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.09),transparent_62%)]" />
    </motion.div>
  );
}
