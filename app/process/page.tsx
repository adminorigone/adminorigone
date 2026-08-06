import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ProcessTimeline from "@/components/ProcessTimeline";
import MagneticButton from "@/components/MagneticButton";
import { FINAL_CTA, PACKAGES } from "@/constants/site";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "Strategy session → Discovery Sprint → build in the open → production ownership. Transparent by default.",
};

export default function ProcessPage() {
  return (
    <>
      <section className="mx-auto max-w-page px-5 pt-[140px] md:px-8">
        <Reveal as="span" className="block font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
          ( Approach )
        </Reveal>
        <Reveal>
          <h1 className="mt-6 max-w-[14ch] font-display text-[clamp(40px,7vw,84px)] font-semibold leading-[1.02] tracking-display text-ink">
            A product machine — not a proposal theater.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-7 max-w-[540px] text-[18px] leading-relaxed text-mute md:text-[19px]">
            Enterprise seriousness without the slideware. You see the system form every week. You own
            everything at the end.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-page px-5 py-20 md:px-8 md:py-24">
        <ProcessTimeline />
      </section>

      <section className="mx-auto max-w-page px-5 pb-24 md:px-8">
        <Reveal>
          <h2 className="mb-10 font-display text-[clamp(26px,3.5vw,40px)] font-semibold tracking-tight text-ink">
            Engagement models
          </h2>
        </Reveal>
        <div className="border border-line">
          {PACKAGES.map((p) => (
            <div
              key={p.name}
              className="grid gap-2 border-t border-line px-6 py-7 first:border-t-0 md:grid-cols-[220px_1fr] md:gap-10 md:px-8"
            >
              <div>
                <p className="font-display text-[17px] font-semibold text-ink">{p.name}</p>
                <p className="mt-1 font-mono text-[12px] text-signal">{p.price}</p>
              </div>
              <p className="text-[15px] leading-relaxed text-mute">{p.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-page px-5 pb-32 md:px-8">
        <div className="rule" />
        <div className="flex flex-wrap items-center justify-between gap-6 pt-12">
          <h2 className="max-w-[420px] font-display text-[clamp(26px,3.5vw,40px)] font-semibold tracking-tight text-ink">
            Start with a strategy session.
          </h2>
          <MagneticButton href={FINAL_CTA.cta.href}>{FINAL_CTA.cta.label}</MagneticButton>
        </div>
      </section>
    </>
  );
}
