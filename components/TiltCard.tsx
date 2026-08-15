"use client";

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion, useMotionTemplate } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

/** Metric / glass cell with subtle 3D tilt toward the cursor. */
export default function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 220, damping: 14 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-15, 15]), { stiffness: 220, damping: 14 });
  const glareX = useSpring(useTransform(mx, [-0.5, 0.5], [10, 90]), { stiffness: 100, damping: 20 });
  const glareY = useSpring(useTransform(my, [-0.5, 0.5], [10, 90]), { stiffness: 100, damping: 20 });
  const glare = useMotionTemplate`radial-gradient(400px circle at ${glareX}% ${glareY}%, rgba(255,176,0,0.25), transparent 60%)`;

  const onMove = (e: MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div className="group [perspective:1200px]">
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        whileHover={reduce ? undefined : { y: -6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 350, damping: 20 }}
        style={reduce ? undefined : { rotateX: rx, rotateY: ry }}
        className={`glass-card relative overflow-hidden will-change-transform transition-[background] duration-400 ${className}`}
      >
        {!reduce && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-400 group-hover:opacity-100"
            style={{ background: glare }}
          />
        )}
        <div className="relative z-[1]">{children}</div>
      </motion.div>
    </div>
  );
}
