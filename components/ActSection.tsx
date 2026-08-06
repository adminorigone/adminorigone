"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import { useSceneOptional } from "@/components/scene/SceneProvider";

/**
 * Full-viewport act. No opacity dimming (that washed out content).
 * Side rail marks the active chapter; entering fires a soft particle pulse.
 */
export default function ActSection({
  scene,
  children,
  className = "",
  id,
}: {
  scene?: string;
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduce = useReducedMotion();
  const sceneApi = useSceneOptional();
  const wasIn = useRef(false);

  useEffect(() => {
    if (reduce || !sceneApi || !inView || wasIn.current) {
      if (!inView) wasIn.current = false;
      return;
    }
    wasIn.current = true;
    // Soft impulse when a chapter enters — keeps the field feeling alive
    sceneApi.engine.current.impulse = Math.max(sceneApi.engine.current.impulse, 0.28);
  }, [inView, reduce, sceneApi]);

  return (
    <section
      ref={ref as never}
      id={id}
      data-scene={scene}
      data-inview={inView ? "1" : "0"}
      className={`relative mx-auto flex min-h-[100svh] max-w-page flex-col justify-center px-5 py-24 md:px-8 md:py-28 ${className}`}
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/2 hidden h-14 w-px -translate-y-1/2 bg-accent lg:block"
        initial={false}
        animate={{
          scaleY: inView || reduce ? 1 : 0.15,
          opacity: inView || reduce ? 1 : 0.12,
        }}
        transition={{ duration: 0.45 }}
        style={{ originY: 0.5 }}
      />
      {children}
    </section>
  );
}
