"use client";

import { motion, useSpring, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { useSceneOptional } from "@/components/scene/SceneProvider";

export default function MagneticButton({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const scene = useSceneOptional();
  const x = useSpring(0, { stiffness: 220, damping: 16, mass: 0.35 });
  const y = useSpring(0, { stiffness: 220, damping: 16, mass: 0.35 });
  const scale = useSpring(1, { stiffness: 280, damping: 20 });

  const onMove = (e: MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.38);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.38);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
    scale.set(1);
    scene?.setCursorBig(false);
  };
  const onEnter = () => {
    scale.set(1.03);
    scene?.setCursorBig(true);
  };

  const base =
    "group relative inline-flex min-h-[54px] items-center justify-center gap-2.5 overflow-hidden whitespace-nowrap px-8 text-[15px]";
  const look =
    variant === "solid"
      ? "btn-glow bg-accent font-medium text-base shadow-[0_0_0_0_transparent] transition-shadow duration-500 hover:shadow-[0_0_44px_rgba(194,168,120,0.38)]"
      : "border border-line text-ink transition-colors hover:border-mute hover:bg-white/[0.03]";

  return (
    <motion.a
      ref={ref}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{ x, y, scale }}
      className={`${base} ${look} ${className}`}
    >
      {variant === "solid" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        />
      )}
      <span className="relative z-[1]">{children}</span>
      {variant === "solid" && (
        <span
          aria-hidden
          className="relative z-[1] font-mono text-sm opacity-70 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100"
        >
          →
        </span>
      )}
    </motion.a>
  );
}
