"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { results, resultCategories } from "@/lib/results";
import { ResultMedia } from "@/components/ResultMedia";
// Filter pills + cards that glide sideways by themselves (right to the end, then back). Pauses on hover and focus;
// on touch screens and for reduced motion it stays still and is scrolled by hand.
export function ResultsGallery() {
  const [cat, setCat] = useState("All");
  const [playing, setPlaying] = useState(false);
  const rail = useRef<HTMLUListElement>(null);
  const holding = useRef(false);
  const cats = resultCategories.filter((c) => results.some((r) => r.category === c));
  const shown = cat === "All" ? results : results.filter((r) => r.category === cat);

  useEffect(() => {
    const el = rail.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0, last = 0, vis = true, dir = 1, wait = 0, pos = el.scrollLeft;
    const io = new IntersectionObserver(([e]) => { vis = e.isIntersecting; }); io.observe(el);
    const tick = (t: number) => {
      const dt = last ? Math.min(t - last, 50) : 16; last = t;
      if (Math.abs(el.scrollLeft - pos) > 1.5) pos = el.scrollLeft; // visitor scrolled by hand
      const max = el.scrollWidth - el.clientWidth;
      if (!playing && !holding.current && vis && max > 0) {
        if (wait > 0) wait -= dt;
        else {
          pos += dir * dt * 0.05; // about 50px per second
          if (pos >= max) { pos = max; dir = -1; wait = 1200; } else if (pos <= 0) { pos = 0; dir = 1; wait = 1200; }
          el.scrollLeft = pos;
        }
      } else pos = el.scrollLeft;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, [playing, cat]);

  return (
    <div>
      {cats.length > 1 && (
        <div role="group" aria-label="Filter results" className="flex flex-wrap gap-2 md:gap-2.5">
          {["All", ...cats].map((c) => (
            <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)}
              className={`grow rounded-full border px-3 py-2 text-[10px] font-bold uppercase tracking-[.08em] transition-colors md:grow-0 md:px-5 md:py-2.5 md:text-xs md:tracking-[.14em] ${cat === c ? "border-black bg-black text-white" : "border-line bg-white text-ink hover:border-black"}`}>{c}</button>
          ))}
        </div>
      )}
      <ul key={cat} ref={rail} tabIndex={0} aria-label="Project gallery"
        onTouchStart={() => { holding.current = true; }} onTouchEnd={() => { setTimeout(() => { holding.current = false; }, 3000); }} onMouseEnter={() => { holding.current = true; }} onMouseLeave={() => { holding.current = false; }}
        onFocusCapture={() => { holding.current = true; }} onBlurCapture={() => { holding.current = false; }}
        className="-mx-5 mt-4 flex gap-3 md:mt-6 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:-mx-10 md:px-10 [&::-webkit-scrollbar]:hidden">
        {shown.map((r, i) => (
          <li key={r.id} data-cat={r.category} style={{ animationDelay: `${i * 0.06}s` }} className={`${r.videoWide ? "w-80 md:w-[28rem]" : r.video ? "w-72 md:w-80" : "w-56"} shrink-0 snap-start`}>
            <div className={`relative ${r.videoWide ? "aspect-video" : r.video ? "aspect-[4/5]" : "aspect-[9/16]"} overflow-hidden rounded-2xl border border-line`}><ResultMedia r={r} onPlaying={setPlaying} /></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
