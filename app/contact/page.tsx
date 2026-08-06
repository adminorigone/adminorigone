import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import { SITE, FINAL_CTA } from "@/constants/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to an AI architect. Strategy sessions for executives redesigning operations.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-narrative px-5 pt-[140px] pb-32 md:px-8">
      <Reveal as="span" className="block font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
        ( Contact )
      </Reveal>
      <Reveal>
        <h1 className="mt-6 font-display text-[clamp(40px,7vw,84px)] font-semibold leading-[0.98] tracking-display text-ink">
          Let&apos;s redesign your business.
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-7 max-w-[480px] text-[18px] leading-relaxed text-mute">
          Prefer a structured conversation? Book a strategy session. Prefer writing? Email an
          architect directly.
        </p>
      </Reveal>

      <Reveal delay={0.15} className="mt-14 space-y-6">
        <div className="border-t border-line pt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">Email</p>
          <a href={`mailto:${SITE.email}`} className="mt-2 block text-[20px] text-ink hover:text-accent">
            {SITE.email}
          </a>
        </div>
        <div className="border-t border-line pt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">Markets</p>
          <p className="mt-2 text-[16px] text-mute">{SITE.markets.join(" · ")}</p>
        </div>
      </Reveal>

      <Reveal delay={0.2} className="mt-12 flex flex-wrap gap-3">
        <MagneticButton href={FINAL_CTA.cta.href}>{FINAL_CTA.cta.label}</MagneticButton>
        <MagneticButton href={SITE.linkedin} variant="outline">
          LinkedIn
        </MagneticButton>
      </Reveal>
    </section>
  );
}
