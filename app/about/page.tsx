import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import MagneticButton from "@/components/MagneticButton";
import { ABOUT, FINAL_CTA, SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "About",
  description: ABOUT.body.slice(0, 155),
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-narrative px-5 pt-[140px] md:px-8">
        <Reveal as="span" className="block font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
          ( About )
        </Reveal>
        <h1 className="sr-only">About Origo One — Enterprise AI Consulting & Automation Firm serving USA, Europe, and Australia</h1>
        <Reveal>
          <h2 className="mt-6 whitespace-pre-line font-display text-[clamp(40px,7vw,88px)] font-semibold leading-[0.98] tracking-display text-ink">
            {ABOUT.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-[680px] text-[19px] leading-relaxed text-mute md:text-[20px]">
            {ABOUT.body}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 font-mono text-[12px] uppercase tracking-[0.14em] text-faint">
            {SITE.markets.join(" · ")}
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-page px-5 py-24 md:px-8">
        {/* This eyebrow is the section's only heading — h1 → h3 otherwise. */}
        <SectionHead no="01" label="Philosophy" as="h2" />
        <div className="grid gap-px border border-line bg-line md:grid-cols-2">
          {ABOUT.philosophy.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.06}
              className="bg-base p-8 md:p-10"
            >
              <h3 className="font-display text-[20px] font-semibold tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-mute">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </section>



      <section className="mx-auto max-w-page px-5 pb-32 md:px-8">
        <div className="rule" />
        <div className="flex flex-wrap items-center justify-between gap-6 pt-12">
          <h2 className="max-w-[440px] font-display text-[clamp(26px,3.5vw,40px)] font-semibold tracking-tight text-ink">
            {FINAL_CTA.heading}
          </h2>
          <MagneticButton href={FINAL_CTA.cta.href}>{FINAL_CTA.cta.label}</MagneticButton>
        </div>
      </section>
    </>
  );
}
