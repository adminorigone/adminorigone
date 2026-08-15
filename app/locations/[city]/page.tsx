import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import { SITE, FINAL_CTA, CITIES } from "@/constants/site";

export function generateStaticParams() {
  return CITIES.map((city) => ({
    city: city.slug,
  }));
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const city = CITIES.find((c) => c.slug === params.city);
  if (!city) return {};

  return {
    title: `Enterprise AI Consulting & Automation in ${city.name}`,
    description: `Origo One is an elite AI product agency serving ${city.name}. We untangle technical debt and automate high-value workflows.`,
    openGraph: {
      title: `Origo One — Enterprise AI Consulting in ${city.name}`,
      description: `Origo One is an elite AI product agency serving ${city.name}. We untangle technical debt and automate high-value workflows.`,
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(`Enterprise AI Consulting in ${city.name}`)}&subline=${encodeURIComponent("Workflow Automation · Tech Audits · AI Engineering")}`,
        },
      ],
    },
  };
}

export default function LocationPage({ params }: { params: { city: string } }) {
  const city = CITIES.find((c) => c.slug === params.city);

  if (!city) {
    notFound();
  }

  const locationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Enterprise AI Consulting in ${city.name}`,
    provider: {
      "@type": "Organization",
      name: SITE.name,
    },
    areaServed: {
      "@type": "City",
      name: city.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationJsonLd) }}
      />
      <section className="mx-auto max-w-page px-5 pt-[140px] md:px-8">
        <Reveal as="span" className="block font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
          ( Location ) — {city.name}, {city.region}
        </Reveal>
        <Reveal>
          <h1 className="mt-6 max-w-[16ch] font-display text-[clamp(40px,7vw,84px)] font-semibold leading-[1.02] tracking-display text-ink">
            Enterprise AI Engineering & Consulting in {city.name}.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-7 max-w-[560px] text-[18px] leading-relaxed text-mute md:text-[19px]">
            We are an elite AI product agency serving ambitious enterprises in {city.name}. We untangle technical debt, collapse manual workflows, and turn raw ideas into secure, production-ready AI software.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10">
            <MagneticButton href={FINAL_CTA.cta.href}>{FINAL_CTA.cta.label}</MagneticButton>
          </div>
        </Reveal>
      </section>

      {/* Simplified spacing for the pSEO page */}
      <div className="pb-32" />
    </>
  );
}
