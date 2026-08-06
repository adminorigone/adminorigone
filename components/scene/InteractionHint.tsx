"use client";

import { useEffect, useState } from "react";
import { useScene } from "@/components/scene/SceneProvider";

export default function InteractionHint() {
  const { reduced, flashHint, engine } = useScene();
  const [flash, setFlash] = useState(false);
  const [holding, setHolding] = useState(false);

  useEffect(() => {
    if (!flashHint) return;
    setFlash(true);
    const t = setTimeout(() => setFlash(false), 800);
    return () => clearTimeout(t);
  }, [flashHint]);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setHolding(engine.current.gHold), 80);
    return () => clearInterval(id);
  }, [engine, reduced]);

  if (reduced) return null;

  return (
    <p
      className={`pointer-events-none fixed bottom-7 left-8 z-[55] hidden font-mono text-[10px] uppercase tracking-[0.14em] transition-colors duration-500 md:[@media(hover:hover)_and_(pointer:fine)]:block ${
        flash || holding ? "text-signal" : "text-[#6a6a72]"
      }`}
      aria-hidden
    >
      <b className={`font-normal ${holding ? "text-signal" : "text-ink/70"}`}>hold G</b> crystallize ·{" "}
      <b className="font-normal text-ink/70">double-click</b> pulse
    </p>
  );
}
