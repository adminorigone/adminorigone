"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { PROCESS } from "@/constants/site";

/** Claude Design process strip under shipped work. */
export default function ProcessSteps() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reduce = useReducedMotion();

  return (
    <div ref={ref} className="mt-16 grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-4">
      {PROCESS.map((p, i) => (
        <Reveal key={p.step} delay={i * 0.07} className="relative border-t border-line py-7 pr-5 md:pr-6">
          <motion.span
            aria-hidden
            className="absolute left-0 top-0 h-px bg-accent"
            initial={{ width: reduce ? "100%" : 0 }}
            animate={{ width: inView || reduce ? "100%" : 0 }}
            transition={{ duration: 0.9, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          />
          <span className="font-mono text-[13px] text-signal">{p.step}</span>
          {/* h3, not h4 — this strip sits directly under the section's h2 and
              the jump broke the heading outline for screen readers. */}
          <h3 className="mt-3.5 font-display text-[17px] font-semibold tracking-tight text-ink">
            {p.title}
          </h3>
          <p className="mt-2.5 text-[13px] leading-relaxed text-mute">{p.body}</p>
        </Reveal>
      ))}
    </div>
  );
}
