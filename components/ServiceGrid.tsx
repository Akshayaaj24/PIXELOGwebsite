"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { services } from "@/lib/site";
import { serviceArt } from "@/lib/serviceArt";
// The service photo is always visible behind each card. Hover (desktop), keyboard focus, or the card crossing the middle
// of the screen while scrolling (phones) makes the photo clearer.
const hasPhoto = new Set(["branding", "social-media-marketing", "personal-branding", "influencer-marketing", "web-development", "video-production", "performance-marketing", "seo"]);
const tags: Record<string, string> = {
  branding: "Build a brand people remember.", "social-media-marketing": "Grow your presence.", "personal-branding": "Be known for something.",
  "influencer-marketing": "Connect with audiences.", "web-development": "Websites that perform.", "video-production": "Stories worth watching.",
  "performance-marketing": "Ads that pay back.", seo: "Rank higher.",
};
// scroll: cards glide sideways non-stop (off by default). tight: no bottom margin (used inside the home page section).
export function ServiceGrid({ tight, scroll }: { tight?: boolean; scroll?: boolean }) {
  useEffect(() => {
    if (!matchMedia("(hover: none)").matches) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => e.target.setAttribute("data-active", String(e.isIntersecting))), { rootMargin: "-42% 0px -42% 0px" });
    document.querySelectorAll("[data-svc]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  const card = (s: (typeof services)[number], i: number, dup?: boolean) => (
    <li key={`${dup ? "b" : "a"}-${s.slug}`} aria-hidden={dup || undefined} className={scroll ? "mr-5 w-[19rem] shrink-0 sm:w-[24rem]" : undefined}>
      <Link href={`/services/${s.slug}`} tabIndex={dup ? -1 : undefined} data-svc className={`group relative flex ${scroll ? "min-h-[500px]" : "min-h-[400px]"} flex-col justify-between overflow-hidden rounded-3xl border border-line bg-white/75 p-6 transition-colors duration-500 hover:border-black focus-visible:border-black data-[active=true]:border-black`}>
        <div aria-hidden className="absolute inset-0 z-0">
          {hasPhoto.has(s.slug) ? (
            <Image src={`/services/${s.slug}.jpg`} alt="" fill sizes="(min-width:1024px) 25vw, (min-width:768px) 50vw, 100vw" className="object-cover grayscale transition-transform duration-700 group-hover:scale-105 group-data-[active=true]:scale-105" />
          ) : (
            <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" fill="none" stroke="black" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="h-full w-full p-6" dangerouslySetInnerHTML={{ __html: serviceArt[s.slug] }} />
          )}
          <div className="absolute inset-0 bg-white/60 transition-opacity duration-500 group-hover:opacity-70 group-focus-visible:opacity-70 group-data-[active=true]:opacity-70" />
          <div className="absolute inset-x-0 bottom-0 h-[55%] bg-linear-to-t from-white/95 to-transparent" />
        </div>
        <span aria-hidden className="absolute right-6 top-6 z-10 -translate-x-3 text-3xl opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 group-data-[active=true]:translate-x-0 group-data-[active=true]:opacity-100">→</span>
        <div className="relative z-10">
          <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-black text-xl font-bold transition-colors duration-300 group-hover:bg-black group-hover:text-white group-data-[active=true]:bg-black group-data-[active=true]:text-white">{i + 1}</span>
          <h2 className={`mb-2 font-bold tracking-tight ${scroll ? "text-3xl" : "text-2xl"}`}>{s.title}</h2>
          <p className={`font-semibold text-ink ${scroll ? "text-base" : "text-sm"}`}>{tags[s.slug]}</p>
        </div>
        <p className={`relative z-10 mt-auto border-t border-line pt-8 ${scroll ? "text-base" : "text-sm"} leading-relaxed text-body transition-colors duration-300 group-hover:border-black/20 group-hover:text-ink group-data-[active=true]:text-ink`}>{s.blurb}</p>
      </Link>
    </li>
  );
  // scroll: cards glide sideways non-stop in a seamless loop; pauses on hover/focus.
  if (scroll)
    return (
      <div className="marquee motion-reduce:overflow-x-auto" aria-label="Our services">
        <ol className="marquee-track pl-5 md:pl-10" style={{ animationDuration: "55s" }}>
          {services.map((s, i) => card(s, i))}
          {services.map((s, i) => card(s, i, true))}
        </ol>
      </div>
    );
  return (
    <>
      {/* Sticky overlapping cards on every screen size. Each card sticks under the top bar and the next one slides over it. */}
      <ol aria-label="Our services" className={`mx-auto max-w-5xl px-4 ${tight ? "" : "mb-16"} md:px-10`}>
        {services.map((s, i) => {
          const dark = i % 2 === 0;
          return (
            <li key={s.slug} className="sticky mb-4" style={{ top: `calc(5rem + ${i * 0.55}rem)` }}>
              <Link href={`/services/${s.slug}`} className={`flex items-center gap-4 rounded-3xl border border-black p-4 shadow-[0_-12px_26px_-14px_rgba(0,0,0,.35)] md:gap-8 md:p-8 ${dark ? "bg-black text-white" : "bg-white text-black"}`}>
                <span aria-hidden className={`w-8 shrink-0 text-sm font-bold tabular-nums md:w-14 md:text-2xl ${dark ? "text-white/60" : "text-muted"}`}>{String(i + 1).padStart(2, "0")}</span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xl font-bold leading-tight tracking-tight md:text-4xl">{s.title}</span>
                  <span className={`mt-1 block text-sm leading-snug md:mt-2 md:text-lg ${dark ? "text-white/75" : "text-body"}`}>{tags[s.slug]}</span>
                </span>
                <span aria-hidden className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-white/20 bg-soft md:h-32 md:w-56">
                  {hasPhoto.has(s.slug) && <Image src={`/services/${s.slug}.jpg`} alt="" fill sizes="(min-width:768px) 224px, 80px" className="object-cover grayscale" />}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </>
  );
}
