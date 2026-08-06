"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Reveal from "@/components/Reveal";
import { PROCESS } from "@/constants/site";

export default function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  return (
    <div ref={ref} className="grid grid-cols-1 gap-0 md:grid-cols-4">
      {PROCESS.map((p, i) => (
        <Reveal key={p.step} delay={i * 0.08} className="relative border-t border-line py-8 pr-6 md:pr-8">
          <motion.span
            aria-hidden
            className="absolute left-0 top-0 h-px bg-accent"
            initial={{ width: reduce ? "100%" : 0 }}
            animate={{ width: inView || reduce ? "100%" : 0 }}
            transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          />
          <span className="font-mono text-[13px] text-signal">{p.step}</span>
          <h3 className="mt-4 font-display text-[18px] font-semibold tracking-tight text-ink">
            {p.title}
          </h3>
          <p className="mt-3 text-[14px] leading-relaxed text-mute">{p.body}</p>
        </Reveal>
      ))}
    </div>
  );
}
