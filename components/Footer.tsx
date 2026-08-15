"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV, SITE, CITIES } from "@/constants/site";
import BrandMark from "@/components/BrandMark";
import { useSceneOptional } from "@/components/scene/SceneProvider";

function quarterLabel(d: Date) {
  return `Q${Math.floor(d.getMonth() / 3) + 1} ${d.getFullYear()}`;
}

const BUILD_DATE = new Date();

/** Shared so every footer link has the same 44px touch target. */
const LINK = "flex min-h-[44px] items-center text-sm text-mute transition-colors hover:text-ink md:min-h-0 md:py-1";

export default function Footer() {
  const scene = useSceneOptional();
  // The page is statically prerendered, so the build-time date would stick until
  // the next deploy. Correct it on the client once mounted.
  const [now, setNow] = useState(BUILD_DATE);
  useEffect(() => setNow(new Date()), []);
  const year = now.getFullYear();

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
                {/* Was hard-coded "Q3 2026" — silently goes stale every quarter. */}
                Accepting strategy sessions · {quarterLabel(now)}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-16">
            <div className="flex flex-col gap-1 md:gap-3">
              <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">Index</p>
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => scene?.setCursorBig(true)}
                  onMouseLeave={() => scene?.setCursorBig(false)}
                  className={LINK}
                >
                  {item.label}
                </Link>
              ))}
              {/* Labelled "Strategy session" everywhere else — the footer used
                  to call the same route "Discovery" here and "Talk to an AI
                  architect" in the next column. */}
              <Link
                href="/discovery"
                onMouseEnter={() => scene?.setCursorBig(true)}
                onMouseLeave={() => scene?.setCursorBig(false)}
                className={LINK}
              >
                Strategy session
              </Link>
            </div>
            <div className="flex flex-col gap-1 md:gap-3">
              <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">Contact</p>
              <a
                href={`mailto:${SITE.email}`}
                onMouseEnter={() => scene?.setCursorBig(true)}
                onMouseLeave={() => scene?.setCursorBig(false)}
                className={LINK}
              >
                {SITE.email}
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => scene?.setCursorBig(true)}
                onMouseLeave={() => scene?.setCursorBig(false)}
                className={LINK}
              >
                LinkedIn
              </a>
              <Link
                href="/contact"
                onMouseEnter={() => scene?.setCursorBig(true)}
                onMouseLeave={() => scene?.setCursorBig(false)}
                className={LINK}
              >
                Contact
              </Link>
            </div>
            <div className="flex flex-col gap-1 md:gap-3">
              <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">Locations</p>
              {CITIES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/locations/${c.slug}`}
                  onMouseEnter={() => scene?.setCursorBig(true)}
                  onMouseLeave={() => scene?.setCursorBig(false)}
                  className={LINK}
                >
                  {c.name}
                </Link>
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
