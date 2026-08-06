"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MutableRefObject,
  type ReactNode,
} from "react";

export type SceneMode = "ai" | "saas" | "market" | "auto" | null;

export type SceneEngine = {
  progress: number;
  pointer: { x: number; y: number; tx: number; ty: number; inside: boolean };
  gHold: boolean;
  impulse: number;
  ripple: number;
  mode: SceneMode;
  machineStage: number;
  reduced: boolean;
  tier: "high" | "low";
};

type SceneInteraction = {
  engine: MutableRefObject<SceneEngine>;
  mode: SceneMode;
  setMode: (m: SceneMode) => void;
  markExplored: (m: NonNullable<SceneMode>) => void;
  explored: Record<string, boolean>;
  lastExplored: SceneMode;
  machineStage: number;
  setMachineStage: (i: number) => void;
  cursorLabel: string | null;
  setCursorLabel: (l: string | null) => void;
  cursorBig: boolean;
  setCursorBig: (v: boolean) => void;
  lastService: { tag: string; name: string } | null;
  setLastService: (s: { tag: string; name: string } | null) => void;
  echo: string;
  reduced: boolean;
  tier: "high" | "low";
  active: boolean;
  setActive: (v: boolean) => void;
  flashHint: number;
};

const Ctx = createContext<SceneInteraction | null>(null);

const LABEL: Record<string, string> = {
  ai: "AI products",
  saas: "SaaS platforms",
  market: "marketplaces",
  auto: "automation",
};

export function SceneProvider({ children }: { children: ReactNode }) {
  const engine = useRef<SceneEngine>({
    progress: 0,
    pointer: { x: 0, y: 0, tx: 0, ty: 0, inside: false },
    gHold: false,
    impulse: 0,
    ripple: 0,
    mode: null,
    machineStage: 0,
    reduced: false,
    tier: "high",
  });

  const [mode, setModeState] = useState<SceneMode>(null);
  const [explored, setExplored] = useState<Record<string, boolean>>({});
  const [lastExplored, setLastExplored] = useState<SceneMode>(null);
  const [machineStage, setMachineStageState] = useState(0);
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);
  const [cursorBig, setCursorBig] = useState(false);
  const [lastService, setLastService] = useState<{ tag: string; name: string } | null>(null);
  const [reduced, setReduced] = useState(false);
  const [tier, setTier] = useState<"high" | "low">("high");
  const [active, setActive] = useState(false);
  const [flashHint, setFlashHint] = useState(0);

  useEffect(() => {
    const r = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const cores = navigator.hardwareConcurrency || 8;
    const t: "high" | "low" = coarse || cores <= 4 || window.innerWidth < 700 ? "low" : "high";
    setReduced(r);
    setTier(t);
    engine.current.reduced = r;
    engine.current.tier = t;

    try {
      const saved = localStorage.getItem("origo_explored");
      if (saved) {
        setExplored({ [saved]: true });
        setLastExplored(saved as SceneMode);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight || 1;
      engine.current.progress = Math.min(window.scrollY / max, 1);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Always track pointer into the engine — even without custom cursor (mobile / coarse).
    const onMove = (e: PointerEvent) => {
      const eng = engine.current;
      eng.pointer.x = e.clientX;
      eng.pointer.y = e.clientY;
      eng.pointer.tx = e.clientX / window.innerWidth - 0.5;
      eng.pointer.ty = e.clientY / window.innerHeight - 0.5;
      eng.pointer.inside = true;
      setActive(true);
    };
    const onLeave = () => {
      engine.current.pointer.inside = false;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    if (reduced) {
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("pointermove", onMove);
        document.removeEventListener("pointerleave", onLeave);
      };
    }

    const bumpHint = () => setFlashHint((n) => n + 1);

    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.key === "g" || e.key === "G") && !e.repeat) {
        engine.current.gHold = true;
        bumpHint();
      }
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === "g" || e.key === "G") engine.current.gHold = false;
    };
    const onDbl = () => {
      engine.current.impulse = 1;
      bumpHint();
    };
    const onDown = () => {
      engine.current.ripple = 1;
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("dblclick", onDbl);
    window.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("dblclick", onDbl);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [reduced]);

  const markExplored = useCallback((m: NonNullable<SceneMode>) => {
    setExplored((prev) => ({ ...prev, [m]: true }));
    setLastExplored(m);
    try {
      localStorage.setItem("origo_explored", m);
    } catch {
      /* ignore */
    }
  }, []);

  const setMode = useCallback(
    (m: SceneMode) => {
      engine.current.mode = m;
      setModeState(m);
      if (m) markExplored(m);
    },
    [markExplored]
  );

  const setMachineStage = useCallback((i: number) => {
    engine.current.machineStage = i;
    setMachineStageState(i);
  }, []);

  const echo = useMemo(() => {
    if (lastService) return `You looked at ${lastService.name} — tell us more on the call.`;
    if (lastExplored) {
      return `You lingered on ${LABEL[lastExplored] || "building"} — good. Let's start there.`;
    }
    return "";
  }, [lastService, lastExplored]);

  const value: SceneInteraction = {
    engine,
    mode,
    setMode,
    markExplored,
    explored,
    lastExplored,
    machineStage,
    setMachineStage,
    cursorLabel,
    setCursorLabel,
    cursorBig,
    setCursorBig,
    lastService,
    setLastService,
    echo,
    reduced,
    tier,
    active,
    setActive,
    flashHint,
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useScene() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useScene must be used within SceneProvider");
  return ctx;
}

export function useSceneOptional() {
  return useContext(Ctx);
}
