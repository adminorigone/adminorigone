"use client";

import { useEffect, useRef } from "react";
import Reveal from "@/components/Reveal";
import { useScene, type SceneMode } from "@/components/scene/SceneProvider";

const NODES: { id: NonNullable<SceneMode>; label: string; desc: string }[] = [
  { id: "ai", label: "AI Product", desc: "Probabilistic systems, RAG, prediction paths." },
  { id: "saas", label: "SaaS Platform", desc: "Modular architecture, multi-tenant, billing." },
  { id: "market", label: "Marketplace", desc: "Two-sided networks, payments, payouts." },
  { id: "auto", label: "Automation", desc: "Workflows collapsed into one clean flow." },
];

export default function PossibilityExplorer() {
  const { mode, setMode, explored, setCursorLabel, setCursorBig, reduced } = useScene();
  const clearRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // The pending timeout would otherwise fire setMode after unmount (navigating
  // away mid-hover).
  useEffect(
    () => () => {
      if (clearRef.current) clearTimeout(clearRef.current);
    },
    []
  );

  const enter = (id: NonNullable<SceneMode>) => {
    if (clearRef.current) clearTimeout(clearRef.current);
    setMode(id);
    setCursorLabel("SHAPE");
    setCursorBig(true);
  };

  const leave = () => {
    setCursorLabel(null);
    setCursorBig(false);
    clearRef.current = setTimeout(() => setMode(null), 450);
  };

  const click = (id: NonNullable<SceneMode>) => {
    setMode(id);
    if (clearRef.current) clearTimeout(clearRef.current);
    // Persist longer on tap so mobile users see the particle morph
    clearRef.current = setTimeout(() => setMode(null), 2200);
  };

  return (
    <Reveal>
      <p className="mb-10 max-w-[540px] text-[17px] leading-relaxed text-mute md:text-[18px]">
        Hover a direction — watch the system reorganize. This is how we think before a line of code
        is written.
      </p>
      <div className="grid grid-cols-2 gap-px border border-line bg-line/70 md:grid-cols-4">
        {NODES.map((n, i) => {
          const on = mode === n.id;
          const was = !!explored[n.id];
          return (
            <button
              key={n.id}
              type="button"
              onMouseEnter={() => !reduced && enter(n.id)}
              onMouseLeave={() => !reduced && leave()}
              onFocus={() => !reduced && enter(n.id)}
              onBlur={() => !reduced && leave()}
              onClick={() => click(n.id)}
              className={`group relative flex min-h-[160px] flex-col p-6 text-left transition-colors duration-400 md:min-h-[220px] md:p-7 ${
                on ? "bg-accent/[0.1]" : "bg-raised/60 backdrop-blur-sm hover:bg-accent/[0.05]"
              }`}
            >
              <span
                className={`absolute inset-x-0 top-0 h-0.5 bg-accent transition-[width] duration-500 ease-outExpo ${
                  on || was ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
              <div className="flex w-full items-start justify-between gap-2">
                <span
                  className={`font-mono text-[12px] transition-colors duration-300 ${
                    on || was ? "text-signal" : "text-faint group-hover:text-signal"
                  }`}
                >
                  0{i + 1}
                </span>
                <span
                  className={`font-mono text-[9px] uppercase tracking-[0.14em] text-signal transition-opacity duration-400 ${
                    was ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {was ? "Explored" : ""}
                </span>
              </div>
              <p
                className={`mt-4 font-display text-[18px] font-semibold tracking-tight text-ink transition-transform duration-400 ease-outExpo md:text-[21px] ${
                  on ? "-translate-y-0.5" : "group-hover:-translate-y-0.5"
                }`}
              >
                {n.label}
              </p>
              <p className="mt-auto pt-6 text-[13px] leading-relaxed text-mute md:text-[14px]">{n.desc}</p>
            </button>
          );
        })}
      </div>
    </Reveal>
  );
}
