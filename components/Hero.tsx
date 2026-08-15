"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";
import { useEffect } from "react";
import { HERO } from "@/constants/site";
import BrandMark from "@/components/BrandMark";
import MagneticButton from "@/components/MagneticButton";
import { useSceneOptional } from "@/components/scene/SceneProvider";

const ACCENT_WORD = "business";

export default function Hero() {
  const reduce = useReducedMotion();
  const scene = useSceneOptional();
  const words = HERO.headline.split(" ");

  const spotX = useMotionValue(0.35);
  const spotY = useMotionValue(0.28);
  const sx = useSpring(spotX, { stiffness: 50, damping: 22 });
  const sy = useSpring(spotY, { stiffness: 50, damping: 22 });
  const spotlight = useMotionTemplate`radial-gradient(640px circle at ${useTransform(
    sx,
    (v) => v * 100
  )}% ${useTransform(sy, (v) => v * 100)}%, rgba(232,226,214,0.1), transparent 58%)`;

  const titleX = useSpring(0, { stiffness: 40, damping: 18 });
  const titleY = useSpring(0, { stiffness: 40, damping: 18 });

  useEffect(() => {
    if (reduce) return;
    const el = document.getElementById("hero");
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      if (e.clientY > r.bottom + 40) return;
      spotX.set((e.clientX - r.left) / r.width);
      spotY.set((e.clientY - r.top) / r.height);
      titleX.set((e.clientX / window.innerWidth - 0.5) * -12);
      titleY.set((e.clientY / window.innerHeight - 0.5) * -6);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [spotX, spotY, titleX, titleY, reduce]);

  return (
    <section
      id="hero"
      data-scene="hero"
      className="relative flex min-h-[100svh] flex-col justify-start overflow-hidden pb-[7.5rem] pt-[5.75rem] sm:justify-center sm:pb-28 md:pb-24 md:pt-[7.5rem]"
    >
      <div className="hero-mesh opacity-40 mix-blend-screen" aria-hidden />
      <div className="hero-grid opacity-30" aria-hidden />
      
      {!reduce && (
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/3 z-0 h-[60vw] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px] opacity-50 mix-blend-screen"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
            background: [
              "radial-gradient(ellipse at center, rgba(255,176,0,0.4) 0%, rgba(255,94,0,0) 60%)",
              "radial-gradient(ellipse at center, rgba(255,94,0,0.5) 0%, rgba(255,176,0,0) 70%)",
              "radial-gradient(ellipse at center, rgba(255,176,0,0.4) 0%, rgba(255,94,0,0) 60%)"
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-base/60 to-base" />

      <div className="relative z-[2] mx-auto w-full max-w-page px-5 md:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 flex items-center gap-3 md:mb-7"
        >
          <span className="status-dot" />
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-mute">
            ( 00 ) — Origo One · Strategy sessions open
          </span>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <BrandMark size="hero" />
        </motion.div>

        <motion.h1
          style={reduce ? undefined : { x: titleX, y: titleY }}
          className="mt-4 max-w-[16ch] font-display text-[clamp(28px,5.8vw,92px)] font-semibold leading-[1.02] tracking-display text-ink will-change-transform max-[700px]:mt-3 md:mt-6 [@media(max-height:700px)]:text-[clamp(28px,8vh,56px)]"
        >
          {words.map((word, i) => {
            const clean = word.replace(/[.,!?;:]$/, "");
            const punct = word.slice(clean.length);
            const accent = clean.toLowerCase() === ACCENT_WORD;
            return (
              <span key={i} className="inline-block overflow-hidden pb-[0.06em] align-top">
                <motion.span
                  className={`inline-block ${accent ? "text-transparent bg-clip-text bg-gradient-to-br from-signal via-signal to-signal-glow font-bold drop-shadow-[0_0_15px_rgba(255,176,0,0.5)]" : ""}`}
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.95, delay: 0.28 + i * 0.055, ease: [0.22, 1, 0.36, 1] }}
                >
                  {clean}
                  {punct}
                </motion.span>
                {i < words.length - 1 && "\u00A0"}
              </span>
            );
          })}
        </motion.h1>

        <motion.div
          initial={reduce ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="my-5 h-px w-full max-w-[420px] origin-left bg-gradient-to-r from-accent via-line to-transparent md:my-8"
        />

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.85 }}
          className="max-w-[460px] text-[15px] leading-relaxed text-mute md:text-[18px]"
        >
          {HERO.subline}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.98 }}
          className="mt-6 flex flex-wrap gap-3 md:mt-9"
        >
          <MagneticButton href={HERO.primaryCta.href}>{HERO.primaryCta.label}</MagneticButton>
          <button
            type="button"
            onClick={() =>
              document
                .querySelector(`[data-scene="${HERO.secondaryCta.scene}"]`)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            onMouseEnter={() => scene?.setCursorBig(true)}
            onMouseLeave={() => scene?.setCursorBig(false)}
            className="group inline-flex min-h-[48px] items-center gap-2 border border-line px-6 text-[15px] text-ink transition-all duration-300 hover:border-mute hover:bg-white/[0.03] md:min-h-[52px] md:px-7"
          >
            {HERO.secondaryCta.label}
            <span className="font-mono transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5">
              ↓
            </span>
          </button>
        </motion.div>
      </div>

      <motion.button
        type="button"
        aria-label="Scroll to next section"
        onClick={() => document.querySelector("[data-scene=proof]")?.scrollIntoView({ behavior: "smooth" })}
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.35, duration: 0.7 }}
        className="absolute bottom-[5.75rem] left-1/2 z-[2] hidden -translate-x-1/2 flex-col items-center gap-2.5 sm:flex md:bottom-10"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">Scroll</span>
        <span className="scroll-cue relative h-[46px] w-px overflow-hidden bg-gradient-to-b from-accent/80 via-line to-transparent">
          <span className="scroll-cue-dot absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent" />
        </span>
      </motion.button>
    </section>
  );
}
