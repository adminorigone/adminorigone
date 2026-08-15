import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import MagneticButton from "@/components/MagneticButton";
import { TRANSFORMATIONS, PACKAGES, FINAL_CTA } from "@/constants/site";

export const metadata: Metadata = {
  title: "Transformations",
  description:
    "From manual operations to intelligent systems. Outcome packages — Discovery Sprint, Production, Enterprise Partnership.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-page px-5 pt-[140px] md:px-8">
        <Reveal as="span" className="block font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
          ( Transformations )
        </Reveal>
        <h1 className="sr-only">AI Workflow Automation, Technical Audits & AI Product Engineering Services</h1>
        <Reveal>
          <h2 className="mt-6 max-w-[16ch] font-display text-[clamp(40px,7vw,84px)] font-semibold leading-[1.02] tracking-display text-ink">
            Sell the before → after. Not the tech.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-7 max-w-[560px] text-[18px] leading-relaxed text-mute md:text-[19px]">
            Every engagement redesigns how work moves. Technology is the medium. The deliverable is
            operational advantage.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-page px-5 pt-16 md:px-8">
        {TRANSFORMATIONS.map((t) => (
          <Reveal key={t.slug} id={t.slug} className="scroll-mt-28 border-t border-line py-14 md:py-16">
            <div className="mb-3 flex items-center gap-4">
              <span className="font-mono text-[13px] text-signal">{t.tag}</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                {t.package} · {t.timeline}
              </span>
            </div>
            <h2 className="font-display text-[clamp(28px,4vw,46px)] font-semibold tracking-tight text-ink">
              <span className="text-mute">{t.from}</span>
              <span className="mx-3 text-faint">→</span>
              <span>{t.to}</span>
            </h2>

            <div className="mt-10 grid items-start gap-10 md:grid-cols-2 md:gap-16">
              <div className="space-y-8">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">Problem</p>
                  <p className="mt-3 text-[16px] leading-relaxed text-mute">{t.problem}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">Approach</p>
                  <p className="mt-3 text-[16px] leading-relaxed text-mute">{t.approach}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">Ideal customer</p>
                  <p className="mt-3 text-[16px] leading-relaxed text-mute">{t.ideal}</p>
                </div>
                {/* Outline, and using the site-wide label for this destination.
                    Six solid buttons down the page competed with the page's own
                    primary CTA, and "Explore your AI roadmap" was a third name
                    for the route the navbar calls "Strategy session". */}
                <MagneticButton href={FINAL_CTA.cta.href} variant="outline">
                  {FINAL_CTA.cta.label}
                </MagneticButton>
              </div>
              <div>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                  Deliverables
                </p>
                <ul>
                  {t.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 border-t border-line py-3.5 text-[15px] text-mute"
                    >
                      <span className="font-mono text-xs text-signal">→</span>
                      <span className="text-ink/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
        <div className="rule" />
      </section>

      <section className="mx-auto max-w-page px-5 py-24 md:px-8">
        {/* Was "( P )" — every other SectionHead on the site is numbered. */}
        <SectionHead no="01" label="Engagement models" aside="Value · Not hours" />
        <Reveal>
          <h2 className="mb-12 max-w-[14ch] font-display text-[clamp(28px,3.8vw,44px)] font-semibold tracking-display text-ink">
            Packages around outcomes.
          </h2>
        </Reveal>
        <div className="border border-line">
          {PACKAGES.map((p) => (
            <Reveal
              key={p.name}
              className="grid gap-3 border-t border-line px-6 py-8 first:border-t-0 md:grid-cols-[200px_1fr_280px] md:gap-8 md:px-8"
            >
              <p className="font-display text-[18px] font-semibold text-ink">{p.name}</p>
              <p className="text-[15px] leading-relaxed text-mute">{p.detail}</p>
              <div>
                <p className="font-mono text-[12px] text-signal">{p.price}</p>
                <p className="mt-2 text-[13px] text-faint">{p.filter}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-page px-5 pb-28 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <h2 className="max-w-[480px] font-display text-[clamp(26px,3.5vw,40px)] font-semibold tracking-tight text-ink">
            Not sure which transformation fits? Start with a strategy session.
          </h2>
          <MagneticButton href={FINAL_CTA.cta.href}>{FINAL_CTA.cta.label}</MagneticButton>
        </div>
      </section>
    </>
  );
}
