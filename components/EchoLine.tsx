"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useScene } from "@/components/scene/SceneProvider";

/** Personalized CTA echo — remembers what the visitor explored. */
export default function EchoLine() {
  const { echo } = useScene();
  return (
    <div className="flex min-h-[1.25rem] items-center justify-center md:justify-start" aria-live="polite">
      <AnimatePresence mode="wait">
        {echo ? (
          <motion.p
            key={echo}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-[13px] text-signal"
          >
            {echo}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
