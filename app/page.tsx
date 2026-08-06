"use client";

import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import Counter from "@/components/Counter";
import TransformationLedger from "@/components/TransformationLedger";
import PossibilityExplorer from "@/components/PossibilityExplorer";
import MachineStages from "@/components/MachineStages";
import RegionsClock from "@/components/RegionsClock";
import FAQ from "@/components/FAQ";
import BrowserFrame from "@/components/BrowserFrame";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import MagneticButton from "@/components/MagneticButton";
import EchoLine from "@/components/EchoLine";
import EmailArchitectButton from "@/components/EmailArchitectButton";
import ActSection from "@/components/ActSection";
import SectionRail from "@/components/SectionRail";
import TextLink from "@/components/TextLink";
import TextReveal, { WordReveal } from "@/components/TextReveal";
import TiltCard from "@/components/TiltCard";
import ProcessSteps from "@/components/ProcessSteps";
import { CHAPTERS, METRICS, TRANSFORMATIONS, FINAL_CTA, CASE_STUDIES } from "@/constants/site";

export default function HomePage() {
  const featured = CASE_STUDIES.find((c) => c.featured)!;
  const chapter = (id: string) => CHAPTERS.find((c) => c.id === id)!;

  return (
    <>
      <SectionRail />
      <Hero />

      <ActSection scene="proof">
        <SectionHead no="01" label="Signal" />
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
                  <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} />
                </p>
                <p className="mt-4 max-w-[230px] text-sm leading-relaxed text-mute">{m.label}</p>
              </Reveal>
            </TiltCard>
          ))}
        </div>
      </ActSection>

      <ActSection scene="shift">
        <div className="mb-10 flex items-center gap-4">
          <span className="h-px w-12 bg-accent/70" aria-hidden />
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
            ( {chapter("shift").no} ) — {chapter("shift").label}
          </p>
        </div>
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
        <SectionHead no="02" label="Possibility" />
        <TextReveal as="h2" className="mb-2 max-w-[15ch] font-display text-[clamp(32px,5vw,64px)] font-semibold leading-[1.05] tracking-display text-ink">
          <WordReveal text="What could the signal become?" />
        </TextReveal>
        <PossibilityExplorer />
      </ActSection>

      <ActSection scene="infrastructure">
        <div className="mb-10 flex items-center gap-4">
          <span className="h-px w-12 bg-accent/70" aria-hidden />
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
            ( {chapter("infrastructure").no} ) — {chapter("infrastructure").label}
          </p>
        </div>
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
        <div className="mb-10 flex items-center gap-4">
          <span className="h-px w-12 bg-accent/70" aria-hidden />
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
            ( {chapter("entrance").no} ) — {chapter("entrance").label}
          </p>
        </div>
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
        <SectionHead no="04" label="Transformations" aside="Outcomes · Not seats" />
        <TextReveal as="h2" className="mb-10 max-w-[14ch] font-display text-[clamp(28px,3.8vw,48px)] font-semibold leading-[1.08] tracking-display text-ink">
          <WordReveal text="We don't sell software. We redesign how work moves." />
        </TextReveal>
        <TransformationLedger items={TRANSFORMATIONS.slice(0, 4)} />
        <Reveal className="mt-8">
          <TextLink href="/services">See all transformations</TextLink>
        </Reveal>
      </ActSection>

      <ActSection scene="machine">
        <SectionHead no="05" label="How we build" />
        <TextReveal as="h2" className="mb-2 max-w-[15ch] font-display text-[clamp(28px,3.8vw,48px)] font-semibold leading-[1.08] tracking-display text-ink">
          <WordReveal text="A product machine, not a proposal." />
        </TextReveal>
        <MachineStages />
      </ActSection>

      <ActSection scene="work">
        <SectionHead no="06" label="Shipped" />
        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
          <div>
            <TextReveal as="h2" className="font-display text-[clamp(26px,3.4vw,44px)] font-semibold tracking-tight text-ink">
              {featured.name}
              <span className="text-mute">.com.au</span>
            </TextReveal>
            <TextReveal>
              <p className="mt-5 max-w-[400px] text-[17px] leading-relaxed text-mute">{featured.summary}</p>
            </TextReveal>
            <Reveal delay={0.1}>
              <div className="mt-6 flex items-center gap-2">
                <span className="status-dot" />
                <span className="font-mono text-[13px] text-mute">{featured.result}</span>
              </div>
              <div className="mt-8">
                <TextLink href={`/work/${featured.slug}`}>Read the full story</TextLink>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <BrowserFrame url="hirecarmarketplace.com.au" tilt>
              <ImagePlaceholder label="marketplace — production" className="aspect-[16/10] border-b-0" />
            </BrowserFrame>
          </Reveal>
        </div>
        <ProcessSteps />
      </ActSection>

      <ActSection scene="ship" className="items-center text-center md:items-start md:text-left">
        <SectionHead no="07" label="How we work with you" />
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

      <ActSection>
        <div className="grid w-full items-start gap-10 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div>
            <SectionHead no="08" label="Clarity" />
            <TextReveal as="h2" className="font-display text-[clamp(28px,3.5vw,44px)] font-semibold leading-[1.08] tracking-display text-ink">
              <WordReveal text="Questions executives actually ask." />
            </TextReveal>
          </div>
          <FAQ />
        </div>
      </ActSection>

      <ActSection scene="cta" className="pb-36">
        <div className="rule" />
        <div className="pt-16 text-center md:pt-20 md:text-left">
          <Reveal as="span" className="block font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
            ( Next )
          </Reveal>
          <TextReveal as="h2" className="mt-6 font-display text-[clamp(44px,7vw,100px)] font-semibold leading-[0.94] tracking-display text-ink">
            <WordReveal text={FINAL_CTA.heading} />
          </TextReveal>
          <Reveal delay={0.08} className="mt-6 flex justify-center md:justify-start">
            <EchoLine />
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-10 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <p className="mx-auto max-w-[440px] text-[18px] leading-relaxed text-mute md:mx-0 md:text-[19px]">
                {FINAL_CTA.body}
              </p>
              <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                <MagneticButton href={FINAL_CTA.cta.href}>{FINAL_CTA.cta.label}</MagneticButton>
                <EmailArchitectButton />
              </div>
            </div>
          </Reveal>
        </div>
      </ActSection>
    </>
  );
}
