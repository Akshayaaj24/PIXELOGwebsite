"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";
import type { Result } from "@/lib/results";
// Instagram reels load straight into the card using Instagram's own player (original quality).
// Self-hosted videos play silently on a loop. Anything else shows a placeholder.
export function ResultMedia({ r, onPlaying }: { r: Result; onPlaying?: (v: boolean) => void }) {
  const [zoom, setZoom] = useState(false);
  useEffect(() => {
    if (!zoom) return;
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setZoom(false); };
    addEventListener("keydown", k); const o = document.body.style.overflow; document.body.style.overflow = "hidden";
    return () => { removeEventListener("keydown", k); document.body.style.overflow = o; };
  }, [zoom]);
  if (r.image && r.siteUrl)
    return (
      <div className="absolute inset-0 bg-white">
        <Image src={r.image} alt={`${r.client}: website`} fill sizes="(min-width: 768px) 448px, 320px" className="object-cover object-top" />
        <div className="absolute inset-x-0 bottom-0 flex gap-2 bg-gradient-to-t from-black/80 to-transparent p-3 pt-10">
          <Link href={`/case-studies/${r.caseId}`} className="flex-1 rounded-full bg-white px-3 py-2 text-center text-[11px] font-bold uppercase tracking-wider text-black">View case study</Link>
          <a href={r.siteUrl} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-full border border-white px-3 py-2 text-center text-[11px] font-bold uppercase tracking-wider text-white">View website</a>
        </div>
      </div>
    );
  if (r.image)
    return (
      <>
        <button type="button" data-zoom onClick={() => setZoom(true)} aria-label={`Open full image: ${r.client}, ${r.result}`} className={r.imageWide ? "absolute inset-0 flex h-full w-full cursor-zoom-in flex-col items-center justify-center gap-5 bg-white p-3" : "absolute inset-0 block h-full w-full cursor-zoom-in bg-white"}>
          {r.imageWide ? (
            <>
              <p className="text-[10px] font-bold uppercase tracking-[.18em] text-muted">Meta Ads Manager</p>
              <Image src={r.image} alt={`${r.client}: ${r.result}`} width={1756} height={174} sizes="224px" className="h-auto w-full rounded border border-line" />
              <span aria-hidden className="rounded-full bg-black px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white">Tap to view results</span>
            </>
          ) : (
            <>
              <Image src={r.image} alt={`${r.client}: ${r.result}`} fill sizes="(min-width: 768px) 448px, 320px" className="object-cover" style={{ objectPosition: r.imagePos }} />
              <span aria-hidden className="absolute bottom-3 right-3 rounded-full bg-black px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white">Tap to view</span>
            </>
          )}
        </button>
        {zoom && createPortal(
          <div role="dialog" aria-modal="true" aria-label={`${r.client}: ${r.result}`} onClick={() => setZoom(false)} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 p-3">
            <div className="max-h-[85vh] w-full overflow-auto text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={r.image} alt={`${r.client}: ${r.result}`} className={r.imageWide ? "mx-auto my-auto min-w-[900px] bg-white" : "mx-auto max-h-[85vh] max-w-full object-contain"} />
            </div>
            <button type="button" onClick={() => setZoom(false)} className="mt-4 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-black">Close</button>
          </div>,
          document.body
        )}
      </>
    );
  if (r.metrics) {
    const m = r.metrics;
    return (
      <div className="flex h-full w-full flex-col justify-between bg-white p-5">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[.18em] text-muted">Meta Ads</p>
          <p className="mt-1 text-sm font-bold leading-tight">{r.client}</p>
        </div>
        <div>
          <p className="text-6xl font-extrabold leading-none tracking-tight [font-family:var(--font-display)]">{m.headline}</p>
          <p className="mt-2 text-xs font-semibold text-body">{m.headlineLabel}</p>
        </div>
        <dl className="space-y-2 border-t border-line pt-3 text-xs">
          {m.rows.map(([k, v]) => (<div key={k} className="flex items-baseline justify-between gap-2"><dt className="text-body">{k}</dt><dd className="font-bold tabular-nums">{v}</dd></div>))}
        </dl>
        {m.note && <p className="mt-3 text-[10px] text-muted">{m.note}</p>}
      </div>
    );
  }
  if (r.instagram && !r.video)
    return <iframe src={`${r.instagram.split("?")[0].replace(/\/$/, "")}/embed`} title={`${r.category} reel by ${r.client}`} loading="lazy" scrolling="no" allow="autoplay; encrypted-media; fullscreen" className="absolute left-0 top-0 h-[580px] w-[326px] origin-top-left scale-[.687] border-0 bg-white" />;
  return (
    <div className="relative h-full w-full bg-soft">
      {r.video ? (
        // Silent, looping, always-visible clip (no sound, no controls).
        <video src={r.video} poster={r.poster} autoPlay muted loop playsInline preload="metadata" aria-label={`${r.category} video: ${r.client}`} className="pointer-events-none h-full w-full object-cover" />
      ) : (
        <div className="flex h-full items-center justify-center text-muted">{({ Websites: "[WEBSITE SCREENSHOT]", "Meta Ads": "[AD CREATIVE]", "Google Ads": "[AD CREATIVE]" } as Record<string, string>)[r.category] ?? "[PROJECT VIDEO]"}</div>
      )}
    </div>
  );
}
