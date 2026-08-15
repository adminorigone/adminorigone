import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import TextLink from "@/components/TextLink";
import { NAV } from "@/constants/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[100svh] max-w-narrative flex-col justify-center px-5 pb-32 pt-[140px] md:px-8">
      <Reveal as="span" className="block font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
        ( 404 ) — Off the map
      </Reveal>
      <Reveal>
        <h1 className="mt-6 font-display text-[clamp(40px,7vw,84px)] font-semibold leading-[0.98] tracking-display text-ink">
          This page doesn&apos;t exist.
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-7 max-w-[480px] text-[18px] leading-relaxed text-mute">
          The link is broken or the page moved. Everything that does exist is one step away.
        </p>
      </Reveal>

      <Reveal delay={0.15} className="mt-12 flex flex-col gap-4 border-t border-line pt-8">
        {NAV.map((item) => (
          <TextLink key={item.href} href={item.href}>
            {item.label}
          </TextLink>
        ))}
      </Reveal>

      <Reveal delay={0.2} className="mt-12">
        <MagneticButton href="/">Back to the homepage</MagneticButton>
      </Reveal>
    </section>
  );
}
