"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { SceneProvider } from "@/components/scene/SceneProvider";
import CustomCursor from "@/components/scene/CustomCursor";

import InteractionHint from "@/components/scene/InteractionHint";
import MobileDock from "@/components/scene/MobileDock";
import { useEffect, useState } from "react";

const SceneCanvas = dynamic(() => import("@/components/scene/SceneCanvas"), {
  ssr: false,
  loading: () => null,
});

/** Full liveliness layer — particles, cursor, HUD, mobile dock. */
export default function LiveExperience({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getAmbientClass = () => {
    if (!mounted || isHome) return "";
    if (pathname.startsWith("/careers")) return "ambient-careers";
    if (pathname.startsWith("/about")) return "ambient-about";
    if (pathname.startsWith("/process")) return "ambient-process";
    if (pathname.startsWith("/services") || pathname.startsWith("/work")) return "ambient-services";
    return "ambient-default";
  };

  return (
    <SceneProvider>
      {isHome && <SceneCanvas />}
      
      {!isHome && mounted && (
        <div className={`pointer-events-none fixed inset-0 z-0 ${getAmbientClass()}`} aria-hidden />
      )}

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
