"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useScene } from "@/components/scene/SceneProvider";

const BONE = { r: 0.91, g: 0.89, b: 0.85 };
const SIGNAL = { r: 0.76, g: 0.66, b: 0.47 };

function fib(N: number, R: number, buf: Float32Array) {
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / Math.max(N - 1, 1)) * 2;
    const rad = Math.sqrt(Math.max(1 - y * y, 0));
    const th = i * 2.399963;
    buf[i * 3] = Math.cos(th) * rad * R;
    buf[i * 3 + 1] = y * R;
    buf[i * 3 + 2] = Math.sin(th) * rad * R;
  }
}

/**
 * High-feel particle morph engine (Claude Design v7+, upgraded).
 * Reads engine ref every frame — zero React lag on scroll/pointer.
 */
export default function SceneCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { engine, reduced, tier } = useScene();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const N = tier === "high" ? 4200 : 1600;
    const R = 3.55;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: tier === "high",
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, tier === "high" ? 2 : 1.25));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const threeScene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(52, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 8.4;

    const chaos = new Float32Array(N * 3);
    const ring = new Float32Array(N * 3);
    const lattice = new Float32Array(N * 3);
    const machine = new Float32Array(N * 3);
    const globe = new Float32Array(N * 3);
    const machTier = new Uint8Array(N);
    const sizes = new Float32Array(N);
    const accent = new Uint8Array(N);

    fib(N, R, globe);
    const side = Math.ceil(Math.cbrt(N));

    for (let i = 0; i < N; i++) {
      const j = i * 3;
      const rr = 4.2 + Math.random() * 4.6;
      const a = Math.random() * Math.PI * 2;
      const b = Math.acos(2 * Math.random() - 1);
      chaos[j] = Math.sin(b) * Math.cos(a) * rr;
      chaos[j + 1] = Math.sin(b) * Math.sin(a) * rr;
      chaos[j + 2] = Math.cos(b) * rr;

      const ta = i * 2.399963;
      const tt = i * 0.55;
      const R1 = 3.45;
      const tube = 1.12;
      ring[j] = (R1 + tube * Math.cos(tt)) * Math.cos(ta);
      ring[j + 1] = tube * Math.sin(tt);
      ring[j + 2] = (R1 + tube * Math.cos(tt)) * Math.sin(ta);

      const gx = i % side;
      const gy = Math.floor(i / side) % side;
      const gz = Math.floor(i / (side * side)) % side;
      const sc = 6 / Math.max(side - 1, 1);
      lattice[j] = gx * sc - 3;
      lattice[j + 1] = gy * sc - 3;
      lattice[j + 2] = gz * sc - 3;

      const tIdx = i % 6;
      machTier[i] = tIdx;
      const it = Math.floor(i / 6);
      const ang = it * 0.62;
      const mr = 2.2;
      machine[j] = Math.cos(ang) * mr;
      machine[j + 1] = (tIdx - 2.5) * 1.05;
      machine[j + 2] = Math.sin(ang) * mr;

      sizes[i] = 0.55 + Math.random() * 0.9;
      accent[i] = Math.random() < 0.14 ? 1 : 0;
    }

    const KF = [chaos, ring, lattice, machine, globe];
    const ANCH = [0.0, 0.12, 0.36, 0.58, 0.8];

    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(chaos);
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));

    const col = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      if (accent[i]) {
        col[i * 3] = SIGNAL.r;
        col[i * 3 + 1] = SIGNAL.g;
        col[i * 3 + 2] = SIGNAL.b;
      } else {
        const g = 0.62 + Math.random() * 0.38;
        col[i * 3] = BONE.r * g;
        col[i * 3 + 1] = BONE.g * g;
        col[i * 3 + 2] = BONE.b * g;
      }
    }
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));

    // Soft circular particle sprite
    const sprite = document.createElement("canvas");
    sprite.width = 64;
    sprite.height = 64;
    const ctx = sprite.getContext("2d")!;
    const grd = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grd.addColorStop(0, "rgba(255,255,255,1)");
    grd.addColorStop(0.35, "rgba(255,255,255,0.55)");
    grd.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(sprite);

    const mat = new THREE.PointsMaterial({
      size: 0.085,
      map: tex,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geo, mat);
    threeScene.add(points);
    const baseX = 2.05;

    const onResize = () => {
      const W = window.innerWidth;
      const H = window.innerHeight;
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
      renderer.setSize(W, H);
    };
    window.addEventListener("resize", onResize);

    if (reduced) {
      for (let k = 0; k < N * 3; k++) pos[k] = globe[k];
      geo.attributes.position.needsUpdate = true;
      points.rotation.set(-0.12, 0.55, 0);
      points.position.x = 0.15;
      camera.position.z = 6.2;
      mat.opacity = 0.85;
      renderer.render(threeScene, camera);
      return () => {
        window.removeEventListener("resize", onResize);
        tex.dispose();
        renderer.dispose();
        geo.dispose();
        mat.dispose();
      };
    }

    const ease = (t: number) => t * t * (3 - 2 * t);
    const t0 = performance.now();
    let formT = 0;
    let actEase = 0;
    let modeAmt = 0;
    let lastModeCode = 0;
    let gridAmt = 0;
    let raf = 0;
    const MMAP: Record<string, number> = { ai: 1, saas: 2, market: 3, auto: 4 };

    const loop = () => {
      const st = engine.current;
      const time = (performance.now() - t0) / 1000;

      // Soft-follow scroll progress
      formT += (st.progress - formT) * 0.055;

      const last = KF.length - 1;
      let s = 0;
      while (s < last - 1 && formT > ANCH[s + 1]) s++;
      let frac = (formT - ANCH[s]) / (ANCH[s + 1] - ANCH[s] || 1);
      if (formT >= ANCH[last]) {
        s = last - 1;
        frac = 1;
      }
      frac = Math.max(0, Math.min(1, frac));
      const fe = ease(frac);
      const bufA = KF[s];
      const bufB = KF[s + 1];
      const formed = (s + fe) / last;
      const globeAmt = s === last - 1 ? fe : 0;
      const machineAmt = s === 2 ? fe : s === 3 ? 1 - fe : 0;

      gridAmt += ((st.gHold ? 1 : 0) - gridAmt) * 0.085;
      st.impulse *= 0.925;
      if (st.impulse < 0.001) st.impulse = 0;
      st.ripple *= 0.88;
      if (st.ripple < 0.002) st.ripple = 0;

      const p = st.pointer;
      const ry = time * 0.065 + p.tx * 0.55 * (1 - globeAmt * 0.55);
      const groupX = baseX * (1 - formed * 1.0) * (window.innerWidth < 900 ? 0.85 : 1);
      actEase += ((p.inside ? 1 : 0) - actEase) * 0.07;
      const reach = actEase * (1 - formed * 0.65);
      const pwx = p.tx * 6.4 - groupX;
      const pwy = -p.ty * 3.5;
      const pwz = 3.1;
      const cs = Math.cos(ry);
      const sn = Math.sin(ry);
      const lpx = pwx * cs - pwz * sn;
      const lpz = pwx * sn + pwz * cs;
      const lpy = pwy;
      const RAD = 2.45;
      const RAD2 = RAD * RAD;

      const modeNow = st.mode ? MMAP[st.mode] || 0 : 0;
      if (modeNow) lastModeCode = modeNow;
      modeAmt += ((modeNow ? 1 : 0) - modeAmt) * 0.08;
      const mCode = lastModeCode;
      const mAmt = modeAmt;
      const mstage = st.machineStage;
      const imp = st.impulse;
      const rip = st.ripple;
      const ripR2 = 10;

      for (let i = 0; i < N; i++) {
        const j = i * 3;
        const swirl = (1 - formed) * Math.sin(time * 0.48 + i * 0.33) * 0.28;
        let x = bufA[j] + (bufB[j] - bufA[j]) * fe + swirl;
        let y = bufA[j + 1] + (bufB[j + 1] - bufA[j + 1]) * fe + swirl * 0.55;
        let z = bufA[j + 2] + (bufB[j + 2] - bufA[j + 2]) * fe;

        if (gridAmt > 0.01) {
          x += (lattice[j] - x) * gridAmt;
          y += (lattice[j + 1] - y) * gridAmt;
          z += (lattice[j + 2] - z) * gridAmt;
        }

        if (reach > 0.01) {
          const dx = x - lpx;
          const dy = y - lpy;
          const dz = z - lpz;
          const d2 = dx * dx + dy * dy + dz * dz;
          if (d2 < RAD2) {
            const prox = 1 - Math.sqrt(d2) / RAD;
            const g = prox * reach * 0.52;
            x -= dx * g;
            y -= dy * g;
            z -= dz * g;
          }
        }

        if (rip > 0.002) {
          const dx = x - lpx;
          const dy = y - lpy;
          const dz = z - lpz;
          const d2 = dx * dx + dy * dy + dz * dz;
          if (d2 < ripR2) {
            const d = Math.sqrt(d2) || 0.001;
            const g = (1 - d / 3.2) * rip * 1.55;
            x += (dx / d) * g;
            y += (dy / d) * g;
            z += (dz / d) * g;
          }
        }

        if (mAmt > 0.01 && mCode) {
          const k = mAmt * (1 - formed * 0.5);
          if (mCode === 1) {
            // Torus Knot (Process Page / "ai")
            const t = (i / N) * Math.PI * 2 * 3; 
            const p = 3, q = 2; 
            const rad = 2.5 + Math.cos(q * t) * 0.5;
            const targetX = rad * Math.cos(p * t);
            const targetY = rad * Math.sin(p * t);
            const targetZ = Math.sin(q * t) * 1.5;
            x += (targetX - x) * k;
            y += (targetY - y) * k;
            z += (targetZ - z) * k;
          } else if (mCode === 2) {
            // Quantum Wave Field (Careers Page / "saas")
            const gridSide = Math.ceil(Math.sqrt(N));
            const col = i % gridSide;
            const row = Math.floor(i / gridSide);
            const nx = (col / gridSide - 0.5) * 10;
            const nz = (row / gridSide - 0.5) * 10;
            const ny = Math.sin(nx * 1.5 + time * 2) * 0.6 + Math.cos(nz * 1.5 + time * 1.8) * 0.6;
            x += (nx - x) * k;
            y += (ny - y) * k;
            z += (nz - z) * k;
          } else if (mCode === 3) {
            // Double Helix (Services Page / "market")
            const strand = i % 2;
            const t = (i / N) * Math.PI * 12 + time * 0.5;
            const radius = 1.8;
            const targetX = Math.cos(t + strand * Math.PI) * radius;
            const targetZ = Math.sin(t + strand * Math.PI) * radius;
            const targetY = (i / N - 0.5) * 12;
            x += (targetX - x) * k;
            y += (targetY - y) * k;
            z += (targetZ - z) * k;
          } else {
            // Swirling Galaxy (About Page / "auto")
            const angle = (i / N) * Math.PI * 25 + time * 0.8;
            const rad = (i / N) * 6;
            const targetX = Math.cos(angle) * rad;
            const targetZ = Math.sin(angle) * rad;
            const targetY = (Math.random() - 0.5) * Math.max(0, (1 - rad / 6)) * 2.5; 
            x += (targetX - x) * k;
            y += (targetY - y) * k;
            z += (targetZ - z) * k;
          }
        }

        if (machineAmt > 0.05 && machTier[i] === mstage) {
          const pulse = machineAmt * (0.32 + Math.sin(time * 3.2) * 0.14);
          const rxz = Math.hypot(x, z) || 1;
          x += (x / rxz) * pulse;
          z += (z / rxz) * pulse;
        }

        if (imp > 0.001) {
          const f2 = 1 + imp * 0.6;
          x *= f2;
          y *= f2;
          z *= f2;
        }

        pos[j] = x;
        pos[j + 1] = y;
        pos[j + 2] = z;
      }

      geo.attributes.position.needsUpdate = true;
      points.rotation.y = ry;
      points.rotation.x = -0.1 + p.ty * 0.42 * (1 - globeAmt * 0.55);
      points.position.x = groupX;
      points.position.y = (1 - formed) * 2.5; // Descend from above as it forms
      const breathe = 1 + Math.sin(time * 0.85) * 0.014;
      points.scale.setScalar(breathe);
      camera.position.z = 8.4 - globeAmt * 2.5 - p.ty * 0.35;
      mat.opacity = 0.48 + formed * 0.38;
      mat.size = 0.075 + gridAmt * 0.055 + (1 - formed) * 0.02;
      renderer.render(threeScene, camera);
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      tex.dispose();
      renderer.dispose();
      geo.dispose();
      mat.dispose();
    };
  }, [engine, reduced, tier]);

  return (
    <canvas
      ref={canvasRef}
      id="scene"
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}
