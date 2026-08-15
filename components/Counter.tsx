"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Counter({
  value,
  from = 0,
  prefix = "",
  suffix = "",
  duration = 1.6,
}: {
  value: number;
  /** Start of the count-up. Use for ranges like "4–6 wks" so the low bound holds. */
  from?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(from);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      setDone(true);
      return;
    }
    let start: number | null = null;
    let frame = 0;
    const tick = (t: number) => {
      if (start === null) start = t;
      const p = Math.min(1, (t - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(from + (value - from) * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
      else {
        setDisplay(value);
        setDone(true);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, from, duration, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {(done ? value : display).toLocaleString()}
      {suffix}
    </span>
  );
}
