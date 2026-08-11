"use client";

import MagneticButton from "@/components/MagneticButton";
import { SITE } from "@/constants/site";
import { useScene } from "@/components/scene/SceneProvider";

const LABEL: Record<string, string> = {
  ai: "AI products",
  saas: "SaaS platforms",
  market: "marketplaces",
  auto: "automation",
};

/** Mailto that carries explored interest into the email subject. */
export default function EmailArchitectButton() {
  const { lastService, lastExplored } = useScene();

  const interest = lastService?.name
    ? lastService.name
    : lastExplored
      ? LABEL[lastExplored] || "AI systems"
      : null;

  const subject = interest
    ? `Strategy session — ${interest}`
    : `Strategy session with ${SITE.name}`;

  const body = interest
    ? `Hi — I explored ${interest} on your site and would like to talk.`
    : "Hi — I'd like to book a strategy session.";

  const href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <MagneticButton href={href} variant="outline">
      Email an architect
    </MagneticButton>
  );
}
