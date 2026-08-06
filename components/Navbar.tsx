"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { NAV } from "@/constants/site";
import BrandMark from "@/components/BrandMark";
import { useSceneOptional } from "@/components/scene/SceneProvider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const scene = useSceneOptional();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 32, mass: 0.25 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/work" ? pathname.startsWith("/work") : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        animate={{
          backgroundColor: scrolled ? "rgba(8,8,8,0.78)" : "rgba(8,8,8,0)",
          borderColor: scrolled ? "rgba(243,241,236,0.1)" : "rgba(243,241,236,0)",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="border-b backdrop-blur-xl"
      >
        <nav className="mx-auto flex h-[64px] max-w-page items-center justify-between px-5 md:px-8">
          <Link
            href="/"
            onMouseEnter={() => scene?.setCursorBig(true)}
            onMouseLeave={() => scene?.setCursorBig(false)}
            className="transition-opacity hover:opacity-80"
          >
            <BrandMark size="nav" />
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => scene?.setCursorBig(true)}
                onMouseLeave={() => scene?.setCursorBig(false)}
                className={`relative px-3.5 py-2 text-[13px] transition-colors hover:text-ink ${
                  isActive(item.href) ? "text-ink" : "text-mute"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3.5 -bottom-0.5 h-px bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Link
              href="/discovery"
              onMouseEnter={() => scene?.setCursorBig(true)}
              onMouseLeave={() => scene?.setCursorBig(false)}
              className="ml-3 border border-line px-4 py-2 text-[13px] text-ink transition-all duration-300 hover:border-accent/50 hover:bg-accent/[0.06]"
            >
              Strategy session
            </Link>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-px w-5 bg-ink"
            />
            <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="block h-px w-5 bg-ink" />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-px w-5 bg-ink"
            />
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-b border-line bg-base/95 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col px-5 py-4">
                {NAV.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <Link href={item.href} className="block py-3.5 text-2xl font-display font-semibold text-ink">
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <Link href="/discovery" className="mt-2 py-3.5 text-lg text-signal">
                  Strategy session →
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.span
        aria-hidden
        style={{ scaleX }}
        className="absolute inset-x-0 bottom-0 h-[1.5px] origin-left bg-gradient-to-r from-accent via-signal to-accent/40"
      />
    </header>
  );
}
