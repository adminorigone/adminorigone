import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import { DISCOVERY, SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Strategy session",
  description: DISCOVERY.subline,
};

export default function DiscoveryPage() {
  return (
    <>
      <section className="mx-auto max-w-narrative px-5 pt-[140px] pb-32 md:px-8">
        <Reveal as="span" className="block font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
          ( Discovery )
        </Reveal>
        <Reveal>
          <h1 className="mt-6 font-display text-[clamp(40px,7vw,84px)] font-semibold leading-[0.98] tracking-display text-ink">
            {DISCOVERY.heading}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-7 max-w-[520px] text-[18px] leading-relaxed text-mute md:text-[19px]">
            {DISCOVERY.subline}
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-14 border border-line">
          <ul>
            {DISCOVERY.points.map((point) => (
              <li
                key={point}
                className="flex items-baseline gap-4 border-t border-line px-6 py-5 first:border-t-0 md:px-8"
              >
                <span className="font-mono text-xs text-signal">→</span>
                <span className="text-[16px] text-ink/90">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2} className="mt-12 flex flex-wrap gap-3">
          <MagneticButton href={SITE.calLink}>Book the strategy session</MagneticButton>
          <MagneticButton href={`mailto:${SITE.email}`} variant="outline">
            Prefer email
          </MagneticButton>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-10 max-w-[420px] text-[14px] leading-relaxed text-faint">
            This call filters for fit. If budget, timeline, or ambition don&apos;t align, we&apos;ll
            say so — and point you toward a better option when we can.
          </p>
        </Reveal>
      </section>
    </>
  );
}
