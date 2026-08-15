"use client";

import dynamic from "next/dynamic";
import { SceneProvider } from "@/components/scene/SceneProvider";
import CustomCursor from "@/components/scene/CustomCursor";
import SystemStatus from "@/components/scene/SystemStatus";
import InteractionHint from "@/components/scene/InteractionHint";
import MobileDock from "@/components/scene/MobileDock";

const SceneCanvas = dynamic(() => import("@/components/scene/SceneCanvas"), {
  ssr: false,
  loading: () => null,
});

/** Full liveliness layer — particles, cursor, HUD, mobile dock. */
export default function LiveExperience({ children }: { children: React.ReactNode }) {
  return (
    <SceneProvider>
      <SceneCanvas />
      {/* Reading lane + vignette — keep copy legible over the particle field */}
      <div
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, rgba(5,5,5,0.7) 100%)`,
        }}
        aria-hidden
      />
      <CustomCursor />
      <SystemStatus />
      <InteractionHint />
      <MobileDock />
      <div className="relative z-[2]">{children}</div>
    </SceneProvider>
  );
}
