"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";

const REGIONS = [
  { label: "AU · AEST overlap", tz: "Australia/Sydney" },
  { label: "US · 7–11am ET", tz: "America/New_York" },
  { label: "EU · async daily", tz: "Europe/Berlin" },
  { label: "ME · GST window", tz: "Asia/Dubai" },
];

function regionTime(tz: string) {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: tz,
    }).format(new Date());
  } catch {
    return "";
  }
}

export default function RegionsClock() {
  // Must start empty: these pages are statically prerendered, so computing the
  // time during render bakes the *build* time into the HTML and then mismatches
  // on hydration. Real times are filled in on the client below.
  const [times, setTimes] = useState<string[]>(() => REGIONS.map(() => ""));

  useEffect(() => {
    const tick = () => setTimes(REGIONS.map((r) => regionTime(r.tz)));
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <Reveal className="flex flex-wrap justify-center gap-3 md:justify-start">
      {REGIONS.map((r, i) => (
        <span
          key={r.tz}
          className="inline-flex items-center gap-2.5 border border-line bg-raised/50 px-3.5 py-2 font-mono text-[12px] text-mute backdrop-blur-sm transition-colors duration-300 hover:border-mute hover:text-ink"
        >
          {r.label}
          <span className="text-signal tabular-nums">{times[i] || "--:--"}</span>
        </span>
      ))}
    </Reveal>
  );
}
