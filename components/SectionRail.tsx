"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HOME_SECTIONS } from "@/constants/site";

/**
 * Fixed chapter rail — click to jump, highlights active act.
 * Reads HOME_SECTIONS so every act on the page has a dot and the dot's number
 * matches the "( 04 ) — Transformations" label rendered inside that act.
 */
export default function SectionRail() {
  const [active, setActive] = useState<string>(HOME_SECTIONS[0].id);

  useEffect(() => {
    const nodes = HOME_SECTIONS.map((c) =>
      c.id === "hero" ? document.getElementById("hero") : document.querySelector(`[data-scene="${c.id}"]`)
    ).filter(Boolean) as Element[];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const scene = e.target.getAttribute("data-scene") || (e.target.id === "hero" ? "hero" : null);
          if (scene) setActive(scene);
        });
      },
      { rootMargin: "-42% 0px -42% 0px" }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  const go = (id: string) => {
    const el =
      id === "hero" ? document.getElementById("hero") : document.querySelector(`[data-scene="${id}"]`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Page chapters"
      className="pointer-events-none fixed right-4 top-1/2 z-[45] hidden -translate-y-1/2 flex-col gap-3 lg:flex"
    >
      {HOME_SECTIONS.map((c) => {
        const on = active === c.id;
        return (
          <button
            key={c.id}
            type="button"
            onClick={() => go(c.id)}
            className="pointer-events-auto group flex items-center justify-end gap-2.5"
            aria-label={`Go to section ${c.no} — ${c.label}`}
            aria-current={on ? "true" : undefined}
          >
            <motion.span
              animate={{ opacity: on ? 1 : 0, x: on ? 0 : 6 }}
              transition={{ duration: 0.25 }}
              className="font-mono text-[9px] tracking-[0.14em] text-signal"
            >
              {c.no}
            </motion.span>
            <span
              className={`block rounded-full transition-all duration-400 ${
                on
                  ? "h-2 w-2 bg-accent shadow-[0_0_12px_rgba(232,226,214,0.45)]"
                  : "h-1.5 w-1.5 bg-faint/60 group-hover:scale-125 group-hover:bg-mute"
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}
