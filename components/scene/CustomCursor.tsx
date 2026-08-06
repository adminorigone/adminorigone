"use client";

import { useEffect, useRef, useState } from "react";
import { useScene } from "@/components/scene/SceneProvider";

/** Smooth custom cursor — reads pointer into engine ref every move. */
export default function CustomCursor() {
  const { engine, reduced, cursorLabel, cursorBig } = useScene();
  const curRef = useRef<HTMLDivElement>(null);
  const labRef = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const [press, setPress] = useState(false);
  const pos = useRef({ x: 0, y: 0, cx: 0, cy: 0 });

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (coarse || reduced) return;

    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: PointerEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      setVis(true);
    };

    const onLeave = () => {
      setVis(false);
    };

    const onDown = () => {
      setPress(true);
      engine.current.ripple = 1;
    };
    const onUp = () => setPress(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);

    let raf = 0;
    const follow = () => {
      const cur = curRef.current;
      const lab = labRef.current;
      const lerp = press ? 0.35 : 0.2;
      pos.current.cx += (pos.current.x - pos.current.cx) * lerp;
      pos.current.cy += (pos.current.y - pos.current.cy) * lerp;
      if (cur) {
        cur.style.transform = `translate3d(${pos.current.cx}px, ${pos.current.cy}px, 0) translate(-50%, -50%)`;
      }
      if (lab) {
        lab.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(follow);
    };
    raf = requestAnimationFrame(follow);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
    };
  }, [engine, reduced]);

  if (reduced) return null;

  return (
    <>
      <div
        ref={curRef}
        className={`curs ${vis ? "vis" : ""} ${cursorBig ? "big" : ""} ${cursorLabel ? "lab" : ""} ${
          press ? "press" : ""
        }`}
        aria-hidden
      />
      <div ref={labRef} className={`curslabel ${cursorLabel ? "on" : ""}`} aria-hidden>
        {cursorLabel}
      </div>
    </>
  );
}
