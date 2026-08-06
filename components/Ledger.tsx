"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export type LedgerItem = {
  tag: string;
  name: string;
  summary: string;
  meta: string;
  href: string;
  metaAccent?: boolean;
  arrow?: string;
};

/** Editorial ledger: a row list that replaces card grids. Rows slide + arrow tracks on hover. */
export default function Ledger({ items }: { items: LedgerItem[] }) {
  return (
    <div className="rule-top">
      {items.map((it, i) => (
        <Reveal key={it.name} delay={i * 0.05}>
          <Row item={it} />
        </Reveal>
      ))}
      <div className="rule" />
    </div>
  );
}

function Row({ item }: { item: LedgerItem }) {
  return (
    <Link href={item.href}>
      <motion.div
        initial="rest"
        whileHover="hover"
        className="grid grid-cols-[40px_1fr] items-center gap-x-4 gap-y-1 border-t border-line py-[30px] md:grid-cols-[56px_1.1fr_1.5fr_150px_60px] md:gap-5"
        style={{ transition: "padding-left .3s, background .3s" }}
      >
        <span className="font-mono text-[13px] text-zinc-600">{item.tag}</span>
        <motion.h3
          variants={{ rest: { color: "#ededed" }, hover: { color: "#3B82F6" } }}
          className="text-[21px] font-semibold tracking-tight"
        >
          {item.name}
        </motion.h3>
        <p className="col-start-2 text-[15px] leading-relaxed text-zinc-500 md:col-start-auto">
          {item.summary}
        </p>
        <span
          className={`hidden font-mono text-xs md:block ${item.metaAccent ? "text-accent" : "text-zinc-300"}`}
        >
          {item.meta}
        </span>
        <motion.span
          variants={{ rest: { x: 0, color: "#6b6b70" }, hover: { x: 5, color: "#3B82F6" } }}
          className="hidden text-right font-mono md:block"
        >
          {item.arrow ?? "→"}
        </motion.span>
      </motion.div>
    </Link>
  );
}
