"use client";

import { useScene } from "@/components/scene/SceneProvider";

/** Always visible on fine pointers — was hidden below Tailwind md (768). */
export default function SystemStatus() {
  const { active, mode } = useScene();
  const label = mode ? `${mode.toUpperCase()}_MODE` : "ACTIVE";

  return (
    <div
      className={`sysstat pointer-events-none fixed right-5 top-[72px] z-[55] hidden items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#8a8a90] [@media(hover:hover)_and_(pointer:fine)]:flex ${
        active ? "on text-mute" : ""
      }`}
      aria-hidden
    >
      <span className="sysdot" />
      <span>System</span>
      <span className="relative inline-block h-3 min-w-[78px]">
        <span
          className={`absolute left-0 top-0 transition-all duration-500 ${
            active ? "-translate-y-1 opacity-0" : "opacity-100"
          }`}
        >
          Dormant
        </span>
        <span
          className={`absolute left-0 top-0 text-signal transition-all duration-500 ${
            active ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
          }`}
        >
          {label}
        </span>
      </span>
    </div>
  );
}
