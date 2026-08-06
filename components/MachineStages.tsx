"use client";

import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { useScene } from "@/components/scene/SceneProvider";

const STAGES = [
  {
    k: "01",
    name: "Discovery",
    body: "A paid one-week sprint. We map the real problem, the users, and the smallest thing worth shipping first — and hand you a fixed quote. The fee is credited to your build.",
  },
  {
    k: "02",
    name: "Design",
    body: "Flows and interface. You approve every screen before we write a line of production code.",
  },
  {
    k: "03",
    name: "Engineer",
    body: "A senior team builds on a live staging URL. Typed, reviewed, tested — no mystery box.",
  },
  {
    k: "04",
    name: "AI layer",
    body: "RAG, agents, personalization or prediction — added where it earns its place, never as decoration.",
  },
  {
    k: "05",
    name: "Infra",
    body: "CI/CD, auth, payments, observability. Deployed on cloud infrastructure that you own from day one.",
  },
  {
    k: "06",
    name: "Ship",
    body: "Launch, full IP transfer, and two weeks of fixes included. After that, the system is entirely yours.",
  },
];

export default function MachineStages() {
  const { machineStage, setMachineStage, setCursorLabel, setCursorBig, reduced } = useScene();
  const detail = STAGES[machineStage] ?? STAGES[0];
  const pct = ((machineStage + 1) / STAGES.length) * 100;

  return (
    <Reveal>
      <p className="mb-10 max-w-[540px] text-[18px] leading-relaxed text-mute">
        Six stages, one continuous flow. Move through them — the system reassembles around each one.
      </p>

      <div className="overflow-hidden border border-line bg-raised/40 backdrop-blur-md">
        <div className="grid grid-cols-2 gap-px bg-line/80 sm:grid-cols-3 md:grid-cols-6">
          {STAGES.map((st, i) => (
            <button
              key={st.k}
              type="button"
              onClick={() => setMachineStage(i)}
              onMouseEnter={() => {
                if (!reduced) {
                  setMachineStage(i);
                  setCursorLabel("OPEN");
                  setCursorBig(true);
                }
              }}
              onMouseLeave={() => {
                setCursorLabel(null);
                setCursorBig(false);
              }}
              className={`relative p-5 text-left transition-all duration-400 ${
                i === machineStage
                  ? "bg-accent/[0.1]"
                  : "bg-base/40 hover:bg-white/[0.03] hover:-translate-y-px"
              }`}
            >
              <span
                className={`absolute inset-x-0 top-0 h-0.5 bg-accent transition-[width] duration-500 ease-outExpo ${
                  i === machineStage ? "w-full" : "w-0"
                }`}
              />
              <span className={`font-mono text-[12px] ${i === machineStage ? "text-signal" : "text-faint"}`}>
                {st.k}
              </span>
              <p
                className={`mt-3 font-display text-[15px] font-semibold tracking-tight text-ink transition-transform duration-300 md:text-[16px] ${
                  i === machineStage ? "-translate-y-px" : ""
                }`}
              >
                {st.name}
              </p>
            </button>
          ))}
        </div>

        <div className="relative h-px bg-line">
          <motion.span
            className="absolute left-0 top-[-1px] h-[3px] bg-accent"
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div className="px-6 py-9 md:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={detail.k}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-mono text-[13px] text-signal">STAGE {detail.k}</span>
              <h3 className="mt-3.5 font-display text-[clamp(26px,3vw,38px)] font-semibold tracking-tight text-ink">
                {detail.name}
              </h3>
              <p className="mt-4 max-w-[520px] text-[16px] leading-relaxed text-mute">{detail.body}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Reveal>
  );
}
