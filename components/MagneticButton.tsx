"use client";

import { motion, useSpring, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { useSceneOptional } from "@/components/scene/SceneProvider";

// `motion(Component)` is deprecated in framer-motion 11 and logged a console
// warning on every page load.
const MotionLink = motion.create(Link);

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
  // mailto:, tel: and http(s) leave the app — everything else is an in-app route
  // and must go through next/link so we keep client-side navigation.
  const isExternal = /^(https?:|mailto:|tel:)/i.test(href);
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
    "group relative inline-flex min-h-[54px] items-center justify-center gap-2.5 overflow-hidden whitespace-nowrap px-8 text-[15px] will-change-transform";
  const look =
    variant === "solid"
      ? "bg-gradient-to-r from-signal to-signal_glow font-semibold text-base-ink shadow-[0_0_0_0_transparent] transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(255,176,0,0.6)]"
      : "glass-card text-ink transition-all duration-300 hover:border-signal/50 hover:bg-white/[0.06]";

  const shared = {
    ref,
    onMouseMove: onMove,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    style: { x, y, scale },
    className: `${base} ${look} ${className}`,
  };

  const inner = (
    <>
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
    </>
  );

  if (isExternal) {
    const newTab = /^https?:/i.test(href);
    return (
      <motion.a
        {...shared}
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <MotionLink {...shared} href={href}>
      {inner}
    </MotionLink>
  );
}
