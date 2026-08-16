import React from "react";
import ActSection from "@/components/ActSection";
import SectionHead from "@/components/SectionHead";
import TextReveal, { WordReveal } from "@/components/TextReveal";
import PremiumVideo from "@/components/PremiumVideo";
import { homeSection } from "@/constants/site";
import Reveal from "@/components/Reveal";

export default function ShowreelSection() {
  const sec = homeSection("shift");
  return (
    <ActSection scene="shift">
      <SectionHead no={sec.no} label={sec.label} />
      <TextReveal as="h2" className="max-w-[16ch] font-display text-[clamp(32px,5.2vw,64px)] font-semibold leading-[1.05] tracking-display text-ink">
        <WordReveal text="We do not build minimum viable products." />
      </TextReveal>
      <TextReveal delay={0.05}>
        <p className="mt-7 max-w-[540px] text-[18px] leading-relaxed text-mute md:text-[19px]">
          We architect and ship production systems for founders who want to dominate their category. Watch the showreel to see the velocity we operate at.
        </p>
      </TextReveal>
      <Reveal delay={0.15} className="mt-12 w-full">
        <PremiumVideo 
          videoId="dQw4w9WgXcQ" // Placeholder for an actual showreel ID
          thumbnailUrl="/showreel-thumb.jpg"
          title="Origo One Showreel 2026"
        />
      </Reveal>
    </ActSection>
  );
}
