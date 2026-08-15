"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { SceneProvider, useScene, SceneMode } from "@/components/scene/SceneProvider";
import CustomCursor from "@/components/scene/CustomCursor";

import InteractionHint from "@/components/scene/InteractionHint";
import MobileDock from "@/components/scene/MobileDock";
import { useEffect, useState } from "react";

const SceneCanvas = dynamic(() => import("@/components/scene/SceneCanvas"), {
  ssr: false,
  loading: () => null,
});

function RouteAnimator() {
  const pathname = usePathname();
  const { setMode } = useScene();

  useEffect(() => {
    let mode: SceneMode = null;
    if (pathname.startsWith("/careers")) mode = "saas";
    else if (pathname.startsWith("/about")) mode = "auto";
    else if (pathname.startsWith("/process")) mode = "ai";
    else if (pathname.startsWith("/services") || pathname.startsWith("/work")) mode = "market";
    else mode = null;
    
    setMode(mode);
  }, [pathname, setMode]);

  return null;
}

/** Full liveliness layer — particles, cursor, HUD, mobile dock. */
export default function LiveExperience({ children }: { children: React.ReactNode }) {
  return (
    <SceneProvider>
      <RouteAnimator />
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
      <InteractionHint />
      <MobileDock />
      <div className="relative z-[2]">{children}</div>
    </SceneProvider>
  );
}
