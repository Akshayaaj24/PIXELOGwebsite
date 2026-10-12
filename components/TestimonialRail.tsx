"use client";
import { useEffect, useRef } from "react";
// Testimonials slide by themselves, one card at a time, on every screen size (pauses while touched or hovered; swipe or scroll by hand any time).
export function TestimonialRail({ className, children }: { className: string; children: React.ReactNode }) {
  const ref = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const calm = matchMedia("(prefers-reduced-motion: reduce)").matches; // no smooth glide, just a plain switch to the next card
    let paused = false, resume = 0, vis = true;
    const io = new IntersectionObserver(([e]) => { vis = e.isIntersecting; }); io.observe(el);
    const hold = () => { paused = true; clearTimeout(resume); resume = window.setTimeout(() => { paused = false; }, 7000); };
    el.addEventListener("pointerdown", hold); el.addEventListener("touchstart", hold, { passive: true }); el.addEventListener("wheel", hold, { passive: true });
    const over = () => { paused = true; clearTimeout(resume); }, out = () => { clearTimeout(resume); resume = window.setTimeout(() => { paused = false; }, 1500); };
    el.addEventListener("mouseenter", over); el.addEventListener("mouseleave", out);
    const id = window.setInterval(() => {
      if (paused || !vis) return;
      const step = (el.firstElementChild as HTMLElement | null)?.offsetWidth ?? 0;
      if (!step) return;
      const max = el.scrollWidth - el.clientWidth;
      el.scrollTo({ left: el.scrollLeft >= max - 4 ? 0 : el.scrollLeft + step + 16, behavior: calm ? "auto" : "smooth" });
    }, 4000);
    return () => { clearInterval(id); clearTimeout(resume); io.disconnect(); el.removeEventListener("pointerdown", hold); el.removeEventListener("touchstart", hold); el.removeEventListener("wheel", hold); el.removeEventListener("mouseenter", over); el.removeEventListener("mouseleave", out); };
  }, []);
  return <ul ref={ref} aria-label="Client testimonials" className={className}>{children}</ul>;
}
