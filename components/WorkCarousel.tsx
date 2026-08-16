"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { CASE_STUDIES } from "@/constants/site";
import TextLink from "@/components/TextLink";
import BrowserFrame from "@/components/BrowserFrame";
import { motion, useScroll, useTransform } from "framer-motion";

export default function WorkCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });

  return (
    <div className="relative w-full">
      {/* Scrollable Container */}
      <div
        ref={containerRef}
        className="flex w-full snap-x snap-mandatory gap-8 overflow-x-auto pb-10 pt-4 scrollbar-hide md:gap-16"
        style={{ scrollBehavior: "smooth" }}
      >
        {CASE_STUDIES.map((study, idx) => {
          const featuredHost = study.url?.replace(/^https?:\/\//, "").replace(/\/$/, "") ?? study.name;
          return (
            <div
              key={study.slug}
              className="relative flex w-[90vw] shrink-0 snap-center snap-always flex-col md:w-[75vw] lg:w-[65vw]"
            >
              <div className="mb-8 grid items-end gap-6 md:grid-cols-2 md:gap-12">
                <div>
                  <h3 className="font-display text-[clamp(24px,3vw,36px)] font-semibold tracking-tight text-ink">
                    {study.name}
                  </h3>
                  <p className="mt-4 max-w-[400px] text-[16px] leading-relaxed text-mute">
                    {study.summary}
                  </p>
                </div>
                <div className="flex flex-col items-start gap-4 md:items-end">
                  <div className="flex items-center gap-2">
                    <span className="status-dot" />
                    <span className="font-mono text-[13px] text-mute">{study.result}</span>
                  </div>
                  <div className="flex gap-6">
                    {study.hasStory && <TextLink href={`/work/${study.slug}`}>Read case study</TextLink>}
                    {study.url && <TextLink href={study.url}>Visit live site</TextLink>}
                  </div>
                </div>
              </div>

              {/* Mockup Frame */}
              <div className="group relative w-full overflow-hidden rounded-lg border border-line bg-[#080808]">
                <BrowserFrame url={featuredHost}>
                  <Image
                    src={`/${study.slug}_mockup.jpg`} // Assuming these images exist or we will create them
                    alt={`${study.name} Dashboard`}
                    width={1600}
                    height={900}
                    className="aspect-[16/10] h-auto w-full object-cover border-b-0"
                    sizes="(max-width: 1024px) 90vw, 65vw"
                  />
                </BrowserFrame>
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress Bar */}
      <div className="absolute -bottom-2 left-0 h-[2px] w-full bg-line/30">
        <motion.div
          className="h-full bg-accent"
          style={{ scaleX: scrollXProgress, transformOrigin: "0%" }}
        />
      </div>
    </div>
  );
}
