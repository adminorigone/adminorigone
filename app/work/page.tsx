import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import { CASE_STUDIES, FINAL_CTA, SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Work",
  description: "Immersive case stories — operational redesigns shipped to production.",
};

export default function WorkPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Enterprise AI Work & Case Studies",
    description: "Proof that operations can be redesigned. Context, constraints, thinking, architecture, and results for our AI projects.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: CASE_STUDIES.map((study, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Article",
          name: study.name,
          description: study.summary,
          url: `https://${SITE.domain}/work/${study.slug}`,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <section className="mx-auto max-w-page px-5 pt-[140px] md:px-8">
        <Reveal as="span" className="block font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
          ( Work ) — Documentary, not a gallery
        </Reveal>
        <Reveal>
          <h1 className="mt-6 max-w-[14ch] font-display text-[clamp(40px,7vw,84px)] font-semibold leading-[1.02] tracking-display text-ink">
            Proof that operations can be redesigned.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-7 max-w-[520px] text-[18px] leading-relaxed text-mute md:text-[19px]">
            Each story is a before → after. Context, constraints, thinking, architecture, results —
            not a logo wall.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-page px-5 py-20 md:px-8 md:py-24">
        <div className="rule" />
        {CASE_STUDIES.map((w, i) => {
          // A row is only styled as interactive when it actually goes somewhere.
          // Previously every row carried hover-lift + accent affordances, so the
          // two rows with no destination read as broken links.
          const destination = w.hasStory ? `/work/${w.slug}` : w.url ?? null;
          const inner = (
            <div
              className={`grid grid-cols-[40px_1fr] items-center gap-x-4 gap-y-2 border-t border-line py-9 md:grid-cols-[56px_1.15fr_1.5fr_160px_40px] md:gap-6 ${
                destination ? "group transition-[padding] duration-300 hover:pl-3" : ""
              }`}
            >
              <span className="font-mono text-[13px] text-faint">{String(i + 1).padStart(2, "0")}</span>
              <div>
                {/* h2, not h3 — these are the page's top-level items and sat
                    directly under the h1 with nothing in between. */}
                <h2
                  className={`font-display text-[22px] font-semibold tracking-tight text-ink ${
                    destination ? "transition-colors group-hover:text-accent" : ""
                  }`}
                >
                  {w.name}
                </h2>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                  {w.tag}
                </p>
              </div>
              <p className="col-start-2 text-[15px] leading-relaxed text-mute md:col-start-auto">
                {w.summary}
              </p>
              {/* `result` was desktop-only, so mobile lost the proof point entirely. */}
              <span className="col-start-2 font-mono text-xs text-signal md:col-start-auto">
                {w.result}
              </span>
              <span
                className="hidden text-right font-mono text-faint transition-transform duration-300 group-hover:translate-x-1 md:block"
                aria-hidden
              >
                {destination ? "→" : ""}
              </span>
            </div>
          );

          if (!destination) {
            return (
              <Reveal key={w.slug} delay={i * 0.05}>
                {inner}
              </Reveal>
            );
          }

          const isExternal = destination.startsWith("http");
          return (
            <Reveal key={w.slug} delay={i * 0.05}>
              {isExternal ? (
                <a href={destination} target="_blank" rel="noopener noreferrer" className="block">
                  {inner}
                </a>
              ) : (
                <Link href={destination} className="block">
                  {inner}
                </Link>
              )}
            </Reveal>
          );
        })}
        <div className="rule" />
      </section>

      <section className="mx-auto max-w-page px-5 pb-32 md:px-8">
        <div className="flex flex-wrap items-center gap-5">
          <MagneticButton href={FINAL_CTA.cta.href}>{FINAL_CTA.cta.label}</MagneticButton>
          <span className="text-sm text-mute">Your operating system could be the next chapter.</span>
        </div>
      </section>
    </>
  );
}
