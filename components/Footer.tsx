"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV, SITE, FINAL_CTA } from "@/constants/site";
import BrandMark from "@/components/BrandMark";
import { useSceneOptional } from "@/components/scene/SceneProvider";

const BUILD_YEAR = new Date().getFullYear();

export default function Footer() {
  const scene = useSceneOptional();
  // The page is statically prerendered, so the build-time year would stick until
  // the next deploy. Correct it on the client once mounted.
  const [year, setYear] = useState(BUILD_YEAR);
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer className="relative border-t border-line bg-base/70 backdrop-blur-md">
      <div className="mx-auto max-w-page px-5 py-16 md:px-8">
        <div className="flex flex-wrap justify-between gap-12 pb-16 md:pb-0">
          <div className="max-w-[340px]">
            <BrandMark size="footer" />
            <p className="mt-4 text-sm leading-relaxed text-mute">{SITE.tagline}</p>
            <div className="mt-5 flex items-center gap-2">
              <span className="status-dot" />
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                Accepting strategy sessions · Q3 2026
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-16">
            <div className="flex flex-col gap-3">
              <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">Index</p>
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => scene?.setCursorBig(true)}
                  onMouseLeave={() => scene?.setCursorBig(false)}
                  className="text-sm text-mute transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/discovery"
                onMouseEnter={() => scene?.setCursorBig(true)}
                onMouseLeave={() => scene?.setCursorBig(false)}
                className="text-sm text-mute transition-colors hover:text-ink"
              >
                Discovery
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">Contact</p>
              <a
                href={`mailto:${SITE.email}`}
                onMouseEnter={() => scene?.setCursorBig(true)}
                onMouseLeave={() => scene?.setCursorBig(false)}
                className="text-sm text-mute transition-colors hover:text-ink"
              >
                {SITE.email}
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => scene?.setCursorBig(true)}
                onMouseLeave={() => scene?.setCursorBig(false)}
                className="text-sm text-mute transition-colors hover:text-ink"
              >
                LinkedIn
              </a>
              <Link
                href="/contact"
                onMouseEnter={() => scene?.setCursorBig(true)}
                onMouseLeave={() => scene?.setCursorBig(false)}
                className="text-sm text-mute transition-colors hover:text-ink"
              >
                Contact
              </Link>
              <Link
                href={FINAL_CTA.cta.href}
                onMouseEnter={() => scene?.setCursorBig(true)}
                onMouseLeave={() => scene?.setCursorBig(false)}
                className="text-sm text-mute transition-colors hover:text-ink"
              >
                {FINAL_CTA.cta.label}
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">Markets</p>
              {SITE.markets.map((m) => (
                <span key={m} className="text-sm text-mute">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="rule my-12" />
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-[11px] text-faint">
            © {year} {SITE.name} · {SITE.location}
          </p>
          <p className="font-mono text-[11px] text-faint">Outcomes · Fixed scope · Your IP</p>
        </div>
      </div>
    </footer>
  );
}
