"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote: "Origo One didn't just build software; they re-architected our entire operational model. We dropped our processing time by 84% in three months.",
    author: "Sarah Jenkins",
    role: "COO, Apex Global",
  },
  {
    quote: "The sheer velocity at which they ship production-ready AI features is terrifying. They delivered in 6 weeks what our internal team estimated at 8 months.",
    author: "David Chen",
    role: "VP Engineering, Quantum Scale",
  },
  {
    quote: "Every agency promises 'AI transformation'. Origo One actually delivered it. Fixed scope, no retainers, and the code quality is flawless.",
    author: "Marcus Thorne",
    role: "Founder, Nebula Health",
  },
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl py-12">
      <div className="relative h-[220px] w-full md:h-[180px]">
        {TESTIMONIALS.map((t, idx) => {
          const isActive = idx === activeIndex;
          return (
            <motion.div
              key={idx}
              className="absolute inset-0 flex flex-col items-start justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: isActive ? 1 : 0,
                y: isActive ? 0 : 10,
                pointerEvents: isActive ? "auto" : "none",
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <svg className="mb-6 h-8 w-8 text-white/20" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H9.2c.4-2.2 2.3-4 4.8-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-4.8c.4-2.2 2.3-4 4.8-4V8z" />
              </svg>
              <p className="font-display text-[clamp(20px,2.5vw,32px)] font-medium leading-snug tracking-tight text-ink">
                "{t.quote}"
              </p>
              <div className="mt-6 flex flex-col">
                <span className="font-semibold text-ink">{t.author}</span>
                <span className="text-sm text-mute">{t.role}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Dots */}
      <div className="mt-8 flex gap-3">
        {TESTIMONIALS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className="group relative flex h-4 w-4 items-center justify-center focus:outline-none"
            aria-label={`Go to testimonial ${idx + 1}`}
          >
            <span
              className={`absolute h-[2px] w-8 transition-colors duration-500 ${
                idx === activeIndex ? "bg-white" : "bg-white/20 group-hover:bg-white/40"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
