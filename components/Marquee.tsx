import Image from "next/image";
import type { Client } from "@/lib/clients";
// CSS-only logo marquee: original colours, gentle zoom on hover. The second copy is hidden from screen readers.
export function Marquee({ items, reverse }: { items: Client[]; reverse?: boolean }) {
  const reps = Math.max(1, Math.ceil(8 / items.length));
  const set = (hidden?: boolean) => Array.from({ length: reps }).flatMap((_, r) => items.map((c, i) => (
    <li key={`${hidden ? "b" : "a"}${r}-${i}`} aria-hidden={hidden || r > 0 || undefined} className="flex h-24 w-56 shrink-0 items-center justify-center border-r border-line px-8">
      <Image src={c.src} alt={hidden || r > 0 ? "" : c.name} width={c.w} height={c.h} className="max-h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" />
    </li>)));
  return (
    <div className={`marquee border-y border-line ${reverse ? "marquee-rev" : ""}`}>
      <ul className="marquee-track">{set()}{set(true)}</ul>
    </div>
  );
}
