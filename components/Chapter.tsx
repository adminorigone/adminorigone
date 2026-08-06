"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import Reveal from "@/components/Reveal";

/** Full-viewport narrative chapter with subtle parallax depth. */
export default function Chapter({
  no,
  label,
  headline,
  body,
  children,
}: {
  no: string;
  label: string;
  headline: string;
  body: string;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="relative mx-auto max-w-page px-5 py-[110px] md:px-8 md:py-[130px]">
      <Reveal className="mb-10 flex items-center gap-4">
        <span className="h-px w-12 bg-accent/70" aria-hidden />
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
          ( {no} ) — {label}
        </p>
      </Reveal>

      <motion.div style={{ y }} className="will-change-transform">
        <Reveal>
          <h2 className="max-w-[16ch] whitespace-pre-line font-display text-[clamp(32px,5.2vw,64px)] font-semibold leading-[1.05] tracking-display text-ink text-balance">
            {headline}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-7 max-w-[540px] text-[18px] leading-relaxed text-mute md:text-[19px]">
            {body}
          </p>
        </Reveal>
        {children && <div className="mt-12">{children}</div>}
      </motion.div>
    </section>
  );
}
