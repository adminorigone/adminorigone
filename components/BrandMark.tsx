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
    nav: "h-1.5 w-1.5",
    hero: "h-2.5 w-2.5",
    footer: "h-1.5 w-1.5",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 font-display font-semibold tracking-tight ${sizes[size]} ${className}`}
      aria-label={SITE.name}
    >
      {withMark && (
        <span
          aria-hidden
          className={`${markSize[size]} shrink-0 rounded-full bg-signal`}
          style={{ boxShadow: "0 0 10px rgba(194,168,120,0.55)" }}
        />
      )}
      <span>
        <span className="text-ink">{SITE.shortName}</span>
        <span className="text-signal"> One</span>
      </span>
    </span>
  );
}
