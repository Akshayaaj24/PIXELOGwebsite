"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
// Phone-only bar pinned to the bottom of the Services page. Hides itself when the closing call-to-action (#services-end) is on screen.
export function QuoteBar() {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const end = document.getElementById("services-end");
    if (!end) return;
    const io = new IntersectionObserver(([e]) => setHide(e.isIntersecting));
    io.observe(end);
    return () => io.disconnect();
  }, []);
  return (
    <div data-quotebar className={`fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t border-line bg-white/95 px-4 pt-3 pb-[calc(.75rem+env(safe-area-inset-bottom))] backdrop-blur transition-transform duration-300 md:hidden ${hide ? "translate-y-full" : ""}`}>
      <p className="text-sm font-semibold leading-tight">Not sure what you need?<span className="block font-normal text-body">Tell us your goal.</span></p>
      <Link href="/contact" className="btn btn-primary shrink-0 rounded-full px-5! py-2.5! text-sm">Get a free quote</Link>
    </div>
  );
}
