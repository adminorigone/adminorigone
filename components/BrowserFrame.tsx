"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Minimal browser chrome for screenshot mockups.
 * `tilt` gives it a floating 3D pose that levels out on hover.
 */
export default function BrowserFrame({
  url,
  children,
  tilt = false,
}: {
  url: string;
  children: ReactNode;
  tilt?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <div className={tilt && !reduce ? "[perspective:1200px]" : undefined}>
      <motion.div
        initial={tilt && !reduce ? { rotateY: -9, rotateX: 4, rotateZ: 0.5 } : false}
        whileInView={tilt && !reduce ? { rotateY: -9, rotateX: 4 } : undefined}
        whileHover={tilt && !reduce ? { rotateY: 0, rotateX: 0, rotateZ: 0 } : undefined}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        style={tilt && !reduce ? { transformStyle: "preserve-3d" } : undefined}
        className="overflow-hidden border border-line bg-raised/80 shadow-[0_50px_90px_-30px_rgba(0,0,0,0.7)] backdrop-blur-md"
      >
        <div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-faint/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-faint/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-faint/40" />
          </div>
          <div className="flex-1 bg-white/[0.03] px-3 py-1 text-center font-mono text-[11px] text-faint">
            {url}
          </div>
        </div>
        {children}
      </motion.div>
    </div>
  );
}
