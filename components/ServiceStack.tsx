import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site";
import { serviceTags } from "@/lib/serviceTags";
// Stacking cards on every screen size: each service is a card that sticks under the top bar; the next one slides up and covers it.
// Alternating black and white cards. Pure CSS (position: sticky), no JS. Two columns inside each card from md up.
const font = "[font-family:var(--font-wordmark),var(--font-display),system-ui,sans-serif]";
export function ServiceStack() {
  const total = String(services.length).padStart(2, "0");
  return (
    <ol aria-label="Our services" className="mx-auto max-w-5xl px-4 pb-10 md:px-10">
      {services.map((s, i) => {
        const dark = i % 2 === 0;
        const n = String(i + 1).padStart(2, "0");
        return (
          <li key={s.slug} className="sticky mb-5 md:mb-8" style={{ top: `calc(5rem + ${i * 0.55}rem)` }}>
            <article className={`overflow-hidden rounded-[1.75rem] border border-black p-4 shadow-[0_-14px_30px_-14px_rgba(0,0,0,.35)] md:rounded-[2.25rem] md:p-10 ${dark ? "bg-black text-white" : "bg-white text-black"}`}>
              <div className="flex items-start justify-between gap-4">
                <p aria-hidden className={`text-5xl font-extrabold leading-none tracking-tight text-transparent md:text-8xl ${font} ${dark ? "[-webkit-text-stroke:1.5px_#fff]" : "[-webkit-text-stroke:1.5px_#000]"}`}>{n}</p>
                <p className={`pt-1 text-xs font-semibold tracking-widest ${dark ? "text-white/60" : "text-muted"}`}>{n} / {total}</p>
              </div>
              <h2 className={`mt-3 text-[1.9rem] font-extrabold leading-[1.05] tracking-tight md:text-5xl ${font}`}>{s.title}</h2>
              <p className={`mt-2 text-base font-semibold md:text-lg ${dark ? "text-white/80" : "text-ink"}`}>{serviceTags[s.slug]}</p>
              <div className="mt-4 grid gap-4 md:mt-8 md:grid-cols-2 md:gap-8">
                <div className="relative aspect-[2/1] overflow-hidden md:aspect-[16/10] rounded-2xl border border-white/20 bg-soft">
                  <Image src={`/services/${s.slug}.jpg`} alt="" fill sizes="(min-width:768px) 480px, 90vw" className="object-cover grayscale" />
                </div>
                <div>
                  <p className={`hidden text-sm leading-relaxed md:block md:text-base ${dark ? "text-white/70" : "text-body"}`}>{s.blurb}</p>
                  <ul className="space-y-2.5 md:mt-4">
                    {s.included.slice(0, 3).map((x) => (
                      <li key={x} className="flex items-center gap-3 text-[15px] font-semibold">
                        <span aria-hidden className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] ${dark ? "bg-white text-black" : "bg-black text-white"}`}>&#10003;</span>{x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 md:mt-8">
                <Link href="/contact" className={`btn rounded-full px-6! py-3! text-sm ${dark ? "btn-light" : "btn-primary"}`}>Get a free quote</Link>
              </div>
            </article>
          </li>
        );
      })}
    </ol>
  );
}
