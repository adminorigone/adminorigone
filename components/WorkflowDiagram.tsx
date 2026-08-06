"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";

const NODES = [
  {
    id: "ops",
    label: "Operations",
    from: "Hand-offs & spreadsheets",
    to: "Intelligent routing",
  },
  {
    id: "support",
    label: "Support",
    from: "Ticket queues",
    to: "AI customer teams",
  },
  {
    id: "knowledge",
    label: "Knowledge",
    from: "Tribal docs",
    to: "Company intelligence",
  },
  {
    id: "decisions",
    label: "Decisions",
    from: "Static dashboards",
    to: "Decision systems",
  },
];

/**
 * Interactive diagram — workflows transform as the user explores.
 * Motion explains the idea: manual → intelligent.
 */
export default function WorkflowDiagram() {
  const [active, setActive] = useState(0);
  const node = NODES[active];

  return (
    <Reveal>
      <div className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:gap-14">
        <div className="grid grid-cols-2 gap-px bg-line border border-line">
          {NODES.map((n, i) => (
            <button
              key={n.id}
              type="button"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              className={`relative min-h-[120px] bg-raised/80 p-6 text-left transition-colors duration-400 ${
                active === i ? "bg-accent/[0.06]" : "hover:bg-white/[0.02]"
              }`}
            >
              <span
                className={`absolute inset-x-0 top-0 h-0.5 origin-left bg-accent transition-transform duration-500 ${
                  active === i ? "scale-x-100" : "scale-x-0"
                }`}
              />
              <span className="font-mono text-[11px] text-faint">0{i + 1}</span>
              <p className="mt-3 font-display text-[18px] font-semibold text-ink">{n.label}</p>
            </button>
          ))}
        </div>

        <div className="flex flex-col justify-center border border-line bg-raised/40 p-8 md:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal">
                Transformation
              </p>
              <p className="mt-6 font-display text-[clamp(24px,3vw,36px)] font-semibold leading-tight tracking-tight text-ink">
                <span className="text-mute">{node.from}</span>
                <span className="mx-3 text-faint">→</span>
                <span>{node.to}</span>
              </p>
              <p className="mt-5 max-w-[400px] text-[15px] leading-relaxed text-mute">
                Hover a domain. This is how we think before a line of code — redesign the workflow,
                then choose the intelligence that earns its place.
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Reveal>
  );
}
