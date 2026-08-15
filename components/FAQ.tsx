"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "@/constants/site";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-trigger-${i}`;
        return (
          <div key={item.q} className="border-t border-line last:border-b">
            <button
              id={buttonId}
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full items-start justify-between gap-6 rounded-md px-3 py-5 text-left transition-colors duration-300 hover:bg-white/[0.03] -mx-3"
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className="text-[16px] font-medium leading-snug text-ink transition-colors duration-300 group-hover:text-signal">{item.q}</span>
              <span aria-hidden className="mt-0.5 font-mono text-sm text-faint transition-colors duration-300 group-hover:text-signal">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[520px] pb-6 text-[15px] leading-relaxed text-mute">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
