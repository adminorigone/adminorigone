import React from "react";
import ActSection from "@/components/ActSection";
import SectionHead from "@/components/SectionHead";
import TextReveal, { WordReveal } from "@/components/TextReveal";
import TiltCard from "@/components/TiltCard";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { METRICS, homeSection } from "@/constants/site";

export default function MetricsSection() {
  const sec = homeSection("proof");
  return (
    <ActSection scene="proof">
      <SectionHead no={sec.no} label={sec.label} />
      <TextReveal as="h2" className="max-w-[16ch] font-display text-[clamp(32px,5vw,64px)] font-semibold leading-[1.05] tracking-display text-ink">
        <WordReveal text="Numbers first. Everything else follows." />
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
  );
}
