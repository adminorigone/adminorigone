import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import { CASE_STUDIES, FINAL_CTA } from "@/constants/site";

export const metadata: Metadata = {
  title: "Work",
  description: "Immersive case stories — operational redesigns shipped to production.",
};

export default function WorkPage() {
  return (
    <>
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
          const inner = (
            <div className="group grid grid-cols-[40px_1fr] items-center gap-x-4 gap-y-2 border-t border-line py-9 transition-[padding] duration-300 hover:pl-3 md:grid-cols-[56px_1.15fr_1.5fr_160px_40px] md:gap-6">
              <span className="font-mono text-[13px] text-faint">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display text-[22px] font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
                  {w.name}
                </h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                  {w.tag}
                </p>
              </div>
              <p className="col-start-2 text-[15px] leading-relaxed text-mute md:col-start-auto">
                {w.summary}
              </p>
              <span className="hidden font-mono text-xs text-signal md:block">{w.result}</span>
              <span className="hidden text-right font-mono text-faint transition-transform duration-300 group-hover:translate-x-1 md:block">
                {w.external ? "" : "→"}
              </span>
            </div>
          );
          return (
            <Reveal key={w.slug} delay={i * 0.05}>
              {w.external ? inner : <Link href={`/work/${w.slug}`}>{inner}</Link>}
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
