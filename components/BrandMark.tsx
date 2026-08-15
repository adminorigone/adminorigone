"use client";

import { SITE } from "@/constants/site";

type BrandMarkProps = {
  className?: string;
  /** Larger hero wordmark */
  size?: "nav" | "hero" | "footer";
  /** Show the origin point mark beside the type */
  withMark?: boolean;
};

/**
 * Origo One wordmark — "Origo" carries the weight; "One" is the signal.
 * The optional mark is a single origin point: where every system begins.
 */
export default function BrandMark({
  className = "",
  size = "nav",
  withMark = true,
}: BrandMarkProps) {
  const sizes = {
    nav: "text-[15px]",
    hero: "text-[clamp(22px,3.2vw,40px)]",
    footer: "text-base",
  };
  const markSize = {
    nav: "h-[18px] w-[18px]",
    hero: "h-[32px] w-[32px]",
    footer: "h-[18px] w-[18px]",
  };

  return (
    <span
      className={`inline-flex items-center gap-2.5 font-display font-semibold tracking-tight ${sizes[size]} ${className}`}
      aria-label={SITE.name}
    >
      {withMark && (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${markSize[size]} shrink-0 text-signal`}
          style={{ overflow: "visible" }}
          aria-hidden
        >
          {/* Inner Core */}
          <circle cx="12" cy="12" r="2.5" fill="currentColor" style={{ filter: "drop-shadow(0 0 6px rgba(255,176,0,0.85))" }} />
          {/* Middle Orbit */}
          <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1" strokeDasharray="1 3" strokeLinecap="round" opacity="0.6" />
          {/* Outer Mesh */}
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" opacity="0.15" />
          <path d="M12 2C17.5228 2 22 6.47715 22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
          {/* Connection Nodes */}
          <circle cx="22" cy="12" r="1" fill="currentColor" />
          <circle cx="12" cy="2" r="1" fill="currentColor" />
        </svg>
      )}
      <span>
        <span className="text-ink">{SITE.shortName}</span>
        <span className="text-signal"> One</span>
      </span>
    </span>
  );
}
