"use client";

import Link from "next/link";
import { useSceneOptional } from "@/components/scene/SceneProvider";
import type { ReactNode } from "react";

/** Premium text link with draw-on underline + optional cursor grow. */
export default function TextLink({
  href,
  children,
  className = "",
  external,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const scene = useSceneOptional();
  const Comp = external || href.startsWith("http") || href.startsWith("mailto:") ? "a" : Link;
  const props =
    Comp === "a"
      ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: href.startsWith("http") ? "noopener noreferrer" : undefined }
      : { href };

  return (
    <Comp
      {...(props as { href: string })}
      onMouseEnter={() => {
        scene?.setCursorBig(true);
        scene?.setCursorLabel(null);
      }}
      onMouseLeave={() => scene?.setCursorBig(false)}
      // min-h keeps the touch target at the 44px minimum — the link text alone
      // was 23px tall.
      className={`group relative inline-flex min-h-[44px] items-center gap-2.5 text-[15px] text-ink ${className}`}
    >
      <span className="relative">
        {children}
        <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 ease-outExpo group-hover:scale-x-100" />
      </span>
      <span className="font-mono transition-transform duration-300 group-hover:translate-x-1.5">→</span>
    </Comp>
  );
}
