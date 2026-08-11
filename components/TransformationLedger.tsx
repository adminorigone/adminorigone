"use client";

import Link from "next/link";
import type { Transformation } from "@/constants/site";
import { useSceneOptional } from "@/components/scene/SceneProvider";

const MODE2TAG: Record<string, string> = {
  ai: "03",
  saas: "02",
  market: "02",
  auto: "01",
};

/** Claude-style ledger: swipe bar, FOR YOU badge, quote CTA swap. */
export default function TransformationLedger({ items }: { items: Transformation[] }) {
  const scene = useSceneOptional();
  const focusTag = scene?.lastExplored ? MODE2TAG[scene.lastExplored] : null;

  return (
    <div className="overflow-hidden border border-line bg-raised/40 backdrop-blur-md">
      {items.map((t) => {
        const focus = focusTag === t.tag;
        return (
          <Link
            key={t.slug}
            href={`/services#${t.slug}`}
            onMouseEnter={() => {
              scene?.setCursorLabel("QUOTE");
              scene?.setCursorBig(true);
              scene?.setLastService({ tag: t.tag, name: `${t.from} → ${t.to}` });
            }}
            onMouseLeave={() => {
              scene?.setCursorLabel(null);
              scene?.setCursorBig(false);
            }}
            className={`group relative grid grid-cols-[48px_1fr] items-center gap-3 border-t border-line px-5 py-7 transition-[padding,background] duration-400 first:border-t-0 hover:bg-gradient-to-r hover:from-accent/[0.08] hover:to-transparent hover:pl-8 md:grid-cols-[56px_1.1fr_1.45fr_130px] md:gap-5 md:px-7 ${
              focus ? "bg-gradient-to-r from-accent/[0.06] to-transparent" : ""
            }`}
          >
            <span
              className={`absolute inset-y-0 left-0 w-0.5 origin-top bg-accent transition-transform duration-400 ${
                focus ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
              }`}
            />
            <span className="font-mono text-[12px] text-faint transition-colors group-hover:text-signal">
              {t.tag}
            </span>
            <div>
              <h3 className="font-display text-[19px] font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-accent md:text-[22px]">
                <span className="text-mute transition-colors group-hover:text-accent/70">{t.from}</span>
                <span className="mx-2 text-faint transition-colors group-hover:text-accent/50">→</span>
                <span>{t.to}</span>
                {focus && (
                  <span className="ml-2.5 align-middle bg-signal px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-base-ink">
                    For you
                  </span>
                )}
              </h3>
            </div>
            <p className="col-start-2 text-[14px] leading-relaxed text-mute transition-colors group-hover:text-mute md:col-start-auto md:text-[15px]">
              {t.summary}
            </p>
            <span className="relative hidden h-4 justify-self-end overflow-hidden font-mono text-[12px] md:block">
              <span className="absolute right-0 top-0 text-mute transition-all duration-300 group-hover:-translate-x-2 group-hover:opacity-0">
                {t.package}
              </span>
              <span className="absolute right-0 top-0 translate-x-3 text-signal opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                Explore →
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
