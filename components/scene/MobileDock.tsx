"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HOME_ITEMS = [
  { label: "Home", scene: "hero" },
  { label: "Build", scene: "cap" },
  { label: "Work", scene: "work" },
  { label: "Talk", scene: "cta" },
];

const PAGE_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Build", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Talk", href: "/discovery" },
];

export default function MobileDock() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [activeScene, setActiveScene] = useState("hero");
  const onHome = pathname === "/";

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const sync = () => setShow(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!onHome || !show) return;
    const nodes = HOME_ITEMS.map((item) =>
      item.scene === "hero"
        ? document.getElementById("hero")
        : document.querySelector(`[data-scene="${item.scene}"]`)
    ).filter(Boolean) as Element[];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const scene =
            e.target.getAttribute("data-scene") || (e.target.id === "hero" ? "hero" : null);
          if (scene) setActiveScene(scene);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [onHome, show]);

  if (!show) return null;

  const goScene = (scene: string) => {
    const el =
      scene === "hero"
        ? document.getElementById("hero")
        : document.querySelector(`[data-scene="${scene}"]`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="fixed inset-x-0 bottom-0 z-[58] flex border-t border-line bg-base/90 backdrop-blur-xl md:hidden">
      {onHome
        ? HOME_ITEMS.map((item) => {
            const active = activeScene === item.scene;
            return (
              <button
                key={item.scene}
                type="button"
                onClick={() => goScene(item.scene)}
                className={`relative flex min-h-[52px] flex-1 items-center justify-center font-mono text-[11px] uppercase tracking-[0.08em] transition-colors ${
                  active ? "text-signal" : "text-mute"
                }`}
              >
                {active && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-signal/80"
                    style={{ boxShadow: "0 0 12px rgba(194,168,120,0.55)" }}
                  />
                )}
                {item.label}
              </button>
            );
          })
        : PAGE_ITEMS.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex min-h-[52px] flex-1 items-center justify-center font-mono text-[11px] uppercase tracking-[0.08em] transition-colors ${
                  active ? "text-signal" : "text-mute"
                }`}
              >
                {active && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-signal/80"
                    style={{ boxShadow: "0 0 12px rgba(194,168,120,0.55)" }}
                  />
                )}
                {item.label}
              </Link>
            );
          })}
    </nav>
  );
}
