import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BrowserFrame from "@/components/BrowserFrame";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import MagneticButton from "@/components/MagneticButton";
import TextLink from "@/components/TextLink";
import { HIRECAR_CASE, FINAL_CTA } from "@/constants/site";

export const metadata: Metadata = {
  title: "HireCarMarketplace — case study",
  description: HIRECAR_CASE.intro,
};

/**
 * One labelled section of the case study. The label is the section's heading —
 * as a <p> the whole document had no outline below the h1.
 */
function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Reveal className="grid gap-3 border-t border-line py-8 md:grid-cols-[180px_1fr] md:gap-8">
      <h2 className="font-mono text-[11px] font-normal uppercase tracking-[0.16em] text-signal">
        {label}
      </h2>
      <div>{children}</div>
    </Reveal>
  );
}

export default function HireCarCaseStudy() {
  const c = HIRECAR_CASE;
  // Dim only the domain tail, derived from the URL instead of a hard-coded TLD.
  const tld = c.url.toLowerCase().startsWith(c.title.toLowerCase())
    ? c.url.slice(c.title.length)
    : null;
  return (
    <>
      <section className="mx-auto max-w-narrative px-5 pt-[140px] md:px-8">
        <Reveal as="span" className="block font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
          ( Case study ) — Documentary
        </Reveal>
        <Reveal>
          <p className="mt-5 font-mono text-[12px] uppercase tracking-[0.14em] text-signal">
            {c.chapter}
          </p>
        </Reveal>
        <Reveal>
          <h1 className="mt-4 font-display text-[clamp(38px,6.5vw,76px)] font-semibold leading-[1.02] tracking-display text-ink">
            {c.title}
            {tld && <span className="text-faint">{tld}</span>}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-7 max-w-[640px] text-[18px] leading-relaxed text-mute md:text-[19px]">
            {c.intro}
          </p>
        </Reveal>
        {/* The live URL was in the data but never linked from anywhere. */}
        <Reveal delay={0.15} className="mt-8">
          <TextLink href={`https://${c.url}`}>Visit {c.url}</TextLink>
        </Reveal>
      </section>

      <section className="mx-auto max-w-narrative px-5 pt-14 md:px-8">
        <Reveal>
          <BrowserFrame url={c.url} tilt>
            <ImagePlaceholder label="homepage — production" className="aspect-[16/9] border-b-0" />
          </BrowserFrame>
        </Reveal>
      </section>

      <section className="mx-auto max-w-narrative px-5 pt-16 md:px-8">
        <Row label="Business context">
          <p className="text-[17px] leading-relaxed text-ink/90">{c.context}</p>
        </Row>
        <Row label="Constraints">
          <ul className="space-y-3">
            {c.constraints.map((item) => (
              <li key={item} className="flex gap-3 text-[16px] leading-relaxed text-mute">
                <span className="font-mono text-signal">→</span>
                {item}
              </li>
            ))}
          </ul>
        </Row>
        <Row label="Our thinking">
          <p className="text-[17px] leading-relaxed text-ink/90">{c.thinking}</p>
        </Row>
        <Row label="Architecture">
          <p className="text-[17px] leading-relaxed text-ink/90">{c.architecture}</p>
        </Row>
        <Row label="Execution">
          <p className="text-[17px] leading-relaxed text-ink/90">{c.execution}</p>
        </Row>
        <Row label="Technology">
          <div className="flex flex-wrap gap-2">
            {c.stack.map((t) => (
              <span key={t} className="border border-line px-3 py-1.5 font-mono text-xs text-mute">
                {t}
              </span>
            ))}
          </div>
        </Row>
        <Row label="Screens">
          <div className="flex flex-wrap gap-4">
            <div className="min-w-[220px] flex-1 border border-line">
              <ImagePlaceholder label="search + listings" className="aspect-[4/3] border-b-0" />
            </div>
            <div className="min-w-[220px] flex-1 border border-line">
              <ImagePlaceholder label="booking flow" className="aspect-[4/3] border-b-0" />
            </div>
          </div>
        </Row>
        <Row label="Results · ROI">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {c.results.map((r) => (
              <div
                key={r.label}
                className="border-t border-line py-6 md:border-l md:border-t-0 md:pl-7 md:first:border-l-0 md:first:pl-0"
              >
                <p className="font-display text-3xl font-semibold tracking-tight text-ink">{r.value}</p>
                <p className="mt-2 text-sm text-mute">{r.label}</p>
              </div>
            ))}
          </div>
        </Row>
        <Row label="Lessons">
          <p className="text-[17px] leading-relaxed text-ink/90">{c.lessons}</p>
        </Row>
        {/* Rendered only once a real quote is signed off — a bracketed
            placeholder was previously shipping to production. */}
        {!c.testimonial.pending && c.testimonial.quote && (
          <Row label="Client">
            <p className="font-display text-[22px] leading-snug tracking-tight text-ink">
              &ldquo;{c.testimonial.quote}&rdquo;
            </p>
            <p className="mt-5 font-mono text-[13px] text-faint">
              {c.testimonial.name} — {c.testimonial.role}
            </p>
          </Row>
        )}
      </section>

      <section className="mx-auto max-w-narrative px-5 py-20 md:px-8">
        <div className="rule" />
        <div className="flex flex-wrap items-center justify-between gap-6 pt-10">
          <h2 className="max-w-[440px] font-display text-[clamp(26px,3.5vw,40px)] font-semibold tracking-tight text-ink">
            Ready to redesign a similar operation?
          </h2>
          <MagneticButton href={FINAL_CTA.cta.href}>{FINAL_CTA.cta.label}</MagneticButton>
        </div>
      </section>
    </>
  );
}
