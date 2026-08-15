"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import Counter from "@/components/Counter";
import TransformationLedger from "@/components/TransformationLedger";

const PossibilityExplorer = dynamic(() => import("@/components/PossibilityExplorer"), { ssr: false });
const MachineStages = dynamic(() => import("@/components/MachineStages"), { ssr: false });

import RegionsClock from "@/components/RegionsClock";
import FAQ from "@/components/FAQ";
import BrowserFrame from "@/components/BrowserFrame";
import MagneticButton from "@/components/MagneticButton";
import EchoLine from "@/components/EchoLine";
import EmailArchitectButton from "@/components/EmailArchitectButton";
import ActSection from "@/components/ActSection";
import SectionRail from "@/components/SectionRail";
import TextLink from "@/components/TextLink";
import TextReveal, { WordReveal } from "@/components/TextReveal";
import TiltCard from "@/components/TiltCard";
import ProcessSteps from "@/components/ProcessSteps";
import {
  CHAPTERS,
  METRICS,
  TRANSFORMATIONS,
  FINAL_CTA,
  CASE_STUDIES,
  FAQS,
  homeSection,
  type HomeSectionId,
} from "@/constants/site";

export default function HomePage() {
  const featured = CASE_STUDIES.find((c) => c.featured)!;
  // Derived from the data rather than hard-coding ".com.au" next to the name.
  const featuredHost = featured.url?.replace(/^https?:\/\//, "").replace(/\/$/, "") ?? null;
  // Only the TLD tail is dimmed, and only when the host really starts with the name.
  const featuredTail =
    featuredHost && featuredHost.toLowerCase().startsWith(featured.name.toLowerCase())
      ? featuredHost.slice(featured.name.length)
      : null;
  const chapter = (id: string) => CHAPTERS.find((c) => c.id === id)!;
  // Numbering comes from HOME_SECTIONS so the on-page labels, the chapter rail
  // and the mobile dock can't drift out of sync.
  const sec = (id: HomeSectionId) => homeSection(id);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SectionRail />
      <Hero />

      <ActSection scene="proof">
        <SectionHead no={sec("proof").no} label={sec("proof").label} />
        <TextReveal as="h2" className="max-w-[16ch] font-display text-[clamp(32px,5vw,64px)] font-semibold leading-[1.05] tracking-display text-ink">
          <WordReveal text="Every claim on this page is tied to a number." />
        </TextReveal>
        <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line/70 md:grid-cols-3">
          {METRICS.map((m, i) => (
            <TiltCard
              key={m.label}
              className="bg-raised/55 p-10 backdrop-blur-md hover:bg-accent/[0.06] md:p-11"
            >
              <Reveal delay={i * 0.08}>
                <p className="font-display text-[clamp(40px,5.4vw,68px)] font-semibold leading-none tracking-tight text-ink tabular-nums">
                  <Counter value={m.value} from={m.from} prefix={m.prefix} suffix={m.suffix} />
                </p>
                <p className="mt-4 max-w-[230px] text-sm leading-relaxed text-mute">{m.label}</p>
              </Reveal>
            </TiltCard>
          ))}
        </div>
      </ActSection>

      <ActSection scene="shift">
        <SectionHead no={sec("shift").no} label={sec("shift").label} />
        <TextReveal as="h2" className="max-w-[16ch] font-display text-[clamp(32px,5.2vw,64px)] font-semibold leading-[1.05] tracking-display text-ink">
          <WordReveal text={chapter("shift").headline.replace("\n", " ")} />
        </TextReveal>
        <TextReveal delay={0.05}>
          <p className="mt-7 max-w-[540px] text-[18px] leading-relaxed text-mute md:text-[19px]">
            {chapter("shift").body}
          </p>
        </TextReveal>
      </ActSection>

      <ActSection scene="poss">
        <SectionHead no={sec("poss").no} label={sec("poss").label} />
        <TextReveal as="h2" className="mb-2 max-w-[15ch] font-display text-[clamp(32px,5vw,64px)] font-semibold leading-[1.05] tracking-display text-ink">
          <WordReveal text="What could the signal become?" />
        </TextReveal>
        <PossibilityExplorer />
      </ActSection>

      <ActSection scene="infrastructure">
        <SectionHead no={sec("infrastructure").no} label={sec("infrastructure").label} />
        <TextReveal as="h2" className="max-w-[16ch] font-display text-[clamp(32px,5.2vw,64px)] font-semibold leading-[1.05] tracking-display text-ink">
          <WordReveal text={chapter("infrastructure").headline} />
        </TextReveal>
        <TextReveal>
          <p className="mt-7 max-w-[540px] text-[18px] leading-relaxed text-mute md:text-[19px]">
            {chapter("infrastructure").body}
          </p>
        </TextReveal>
      </ActSection>

      <ActSection scene="entrance">
        <SectionHead no={sec("entrance").no} label={sec("entrance").label} />
        <TextReveal as="h2" className="max-w-[16ch] font-display text-[clamp(32px,5.2vw,64px)] font-semibold leading-[1.05] tracking-display text-ink">
          <WordReveal text={chapter("entrance").headline} />
        </TextReveal>
        <TextReveal>
          <p className="mt-7 max-w-[540px] text-[18px] leading-relaxed text-mute md:text-[19px]">
            {chapter("entrance").body}
          </p>
        </TextReveal>
      </ActSection>

      <ActSection scene="cap">
        <SectionHead no={sec("cap").no} label={sec("cap").label} aside="Outcomes · Not seats" />
        <TextReveal as="h2" className="mb-10 max-w-[14ch] font-display text-[clamp(28px,3.8vw,48px)] font-semibold leading-[1.08] tracking-display text-ink">
          <WordReveal text="We don't sell software. We redesign how work moves." />
        </TextReveal>
        <TransformationLedger items={TRANSFORMATIONS.slice(0, 4)} />
        <Reveal className="mt-8">
          <TextLink href="/services">See all transformations</TextLink>
        </Reveal>
      </ActSection>

      <ActSection scene="machine">
        <SectionHead no={sec("machine").no} label={sec("machine").label} />
        <TextReveal as="h2" className="mb-2 max-w-[15ch] font-display text-[clamp(28px,3.8vw,48px)] font-semibold leading-[1.08] tracking-display text-ink">
          <WordReveal text="A product machine, not a proposal." />
        </TextReveal>
        <MachineStages />
      </ActSection>

      <ActSection scene="work">
        <SectionHead no={sec("work").no} label={sec("work").label} />
        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
          <div>
            <TextReveal as="h2" className="font-display text-[clamp(26px,3.4vw,44px)] font-semibold tracking-tight text-ink">
              {featured.name}
              {featuredTail && <span className="text-mute">{featuredTail}</span>}
            </TextReveal>
            <TextReveal>
              <p className="mt-5 max-w-[400px] text-[17px] leading-relaxed text-mute">{featured.summary}</p>
            </TextReveal>
            <Reveal delay={0.1}>
              <div className="mt-6 flex items-center gap-2">
                <span className="status-dot" />
                <span className="font-mono text-[13px] text-mute">{featured.result}</span>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <TextLink href={`/work/${featured.slug}`}>Read the full story</TextLink>
                {featured.url && <TextLink href={featured.url}>Visit the live site</TextLink>}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <BrowserFrame url={featuredHost ?? featured.name} tilt>
              <Image 
                src="/hirecar_mockup.jpg" 
                alt="HireCarMarketplace Production Dashboard" 
                width={1600} 
                height={900} 
                className="w-full h-auto object-cover border-b-0 aspect-[16/10]" 
                priority 
              />
            </BrowserFrame>
          </Reveal>
        </div>
        <ProcessSteps />
      </ActSection>

      <ActSection scene="ship" className="items-center text-center md:items-start md:text-left">
        <SectionHead no={sec("ship").no} label={sec("ship").label} />
        <TextReveal as="h2" className="font-display text-[clamp(36px,6vw,88px)] font-semibold leading-[0.98] tracking-display text-ink">
          <WordReveal text="Distributed studio." />
          <br />
          <WordReveal text="Your working hours." delay={0.15} />
        </TextReveal>
        <TextReveal>
          <p className="mx-auto mt-8 max-w-[520px] text-[18px] leading-relaxed text-mute md:mx-0 md:text-[19px]">
            Senior-only, aligned to your clock. Daily written updates. Weekly live demos. You always
            know exactly where the system stands.
          </p>
        </TextReveal>
        <div className="mt-10">
          <RegionsClock />
        </div>
      </ActSection>

      <ActSection scene="clarity">
        <div className="grid w-full items-start gap-10 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div>
            <SectionHead no={sec("clarity").no} label={sec("clarity").label} />
            <TextReveal as="h2" className="font-display text-[clamp(28px,3.5vw,44px)] font-semibold leading-[1.08] tracking-display text-ink">
              <WordReveal text="Questions executives actually ask." />
            </TextReveal>
          </div>
          <FAQ />
        </div>
      </ActSection>

      <ActSection scene="cta" className="relative flex min-h-[100svh] flex-col items-center justify-center pb-20 pt-32">
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.75)_100%)]" aria-hidden />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="relative z-10 flex flex-col items-center text-center px-4"
        >
          <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-faint mb-8">
            ( {sec("cta").no} ) — {sec("cta").label}
          </span>
          <h2 className="font-display text-[clamp(44px,7vw,110px)] font-semibold leading-[0.94] tracking-display text-ink mix-blend-plus-lighter drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]">
            Come build a <br className="hidden md:block" /> product with us.
          </h2>
          <div className="mt-12 flex justify-center">
            <MagneticButton href="/contact">Start the conversation</MagneticButton>
          </div>
        </motion.div>
      </ActSection>
    </>
  );
}
