"use client";
import { useEffect, useRef } from "react";
// Animated node network behind the hero: drifting points, linking lines, pulsing hubs, reacts to the pointer.
// Pauses off-screen; draws a single static frame when reduced motion is on.
type P = { x: number; y: number; vx: number; vy: number; r: number; hub: boolean; ph: number };
export function NetworkBackground({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const c = tone === "light" ? "255,255,255" : "0,0,0";
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current!, ctx = cv.getContext("2d")!, host = cv.parentElement!;
    const rm = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0, vis = true, pts: P[] = [];
    const m = { x: -999, y: -999 };
    const init = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      w = cv.clientWidth; h = cv.clientHeight; cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(90, Math.round((w * h) / 14000));
      pts = Array.from({ length: n }, (_, i) => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35, r: Math.random() * 1.5 + 1, hub: i % 9 === 0, ph: Math.random() }));
    };
    const frame = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      if (!rm) for (const a of pts) {
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1; if (a.y < 0 || a.y > h) a.vy *= -1;
        const dx = m.x - a.x, dy = m.y - a.y, d = Math.hypot(dx, dy);
        if (d < 160 && d > 1) { a.x += (dx / d) * 0.4; a.y += (dy / d) * 0.4; }
      }
      ctx.lineWidth = 1;
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) { ctx.strokeStyle = `rgba(${c},${(1 - d / 130) * 0.18})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
        }
        const dm = Math.hypot(a.x - m.x, a.y - m.y);
        if (dm < 170) { ctx.strokeStyle = `rgba(${c},${(1 - dm / 170) * 0.4})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(m.x, m.y); ctx.stroke(); }
        ctx.fillStyle = `rgb(${c})`; ctx.beginPath(); ctx.arc(a.x, a.y, a.hub ? a.r + 1.5 : a.r * 0.8, 0, 6.283); ctx.fill();
        if (a.hub && !rm) { const k = (t / 1800 + a.ph) % 1; ctx.strokeStyle = `rgba(${c},${(1 - k) * 0.35})`; ctx.beginPath(); ctx.arc(a.x, a.y, 6 + k * 26, 0, 6.283); ctx.stroke(); }
      }
      raf = 0;
      if (!rm && vis) raf = requestAnimationFrame(frame);
    };
    const start = () => { if (!raf && !rm && vis) raf = requestAnimationFrame(frame); };
    init(); rm ? frame(0) : start();
    const ro = new ResizeObserver(() => { init(); if (rm) frame(0); }); ro.observe(cv);
    const io = new IntersectionObserver(([e]) => { vis = e.isIntersecting; if (vis) start(); }); io.observe(cv);
    const move = (e: PointerEvent) => { const r = cv.getBoundingClientRect(); m.x = e.clientX - r.left; m.y = e.clientY - r.top; };
    const leave = () => { m.x = m.y = -999; };
    host.addEventListener("pointermove", move); host.addEventListener("pointerleave", leave);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); host.removeEventListener("pointermove", move); host.removeEventListener("pointerleave", leave); };
  }, [c]);
  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 h-full w-full [mask-image:linear-gradient(#000_65%,transparent)]" />;
}
