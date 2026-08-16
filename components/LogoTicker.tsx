"use client";

import React from "react";
import { motion } from "framer-motion";

const LOGOS = [
  "Acme Corp",
  "Quantum",
  "Echo Valley",
  "Celestial",
  "Vantage Point",
  "Apex",
  "Nebula",
  "Horizon",
];

export default function LogoTicker() {
  return (
    <section className="relative w-full overflow-hidden border-y border-white/5 bg-[#030303] py-16">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-base to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-base to-transparent"></div>

      <div className="flex w-full overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
        >
          {/* Duplicate list to create seamless loop */}
          {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
            <div
              key={i}
              className="mx-12 flex items-center justify-center text-3xl font-bold tracking-tight text-white/10 uppercase"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
