import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/lib/testimonials";
import { TestimonialRail } from "@/components/TestimonialRail";
// Short quote cards, one per service. Replace the sample quotes in lib/testimonials.ts with real client words before launch. Unapproved quotes carry a visible "Draft" tag so they can never pass as real by accident.
export function TestimonialGrid({ cols = 4 }: { cols?: 3 | 4 }) {
  return (
    <TestimonialRail className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-pl-5 px-5 pb-2 [scrollbar-width:none] md:-mx-10 md:scroll-pl-10 md:px-10 [&::-webkit-scrollbar]:hidden">
      {testimonials.map((t, i) => (
        <li key={t.slug} className="w-[86%] shrink-0 snap-start sm:w-[22rem] [&>div]:h-full">
          <Reveal delay={(i % 4) * 0.08}>
            <figure className="flex h-full flex-col justify-between rounded-3xl border border-line bg-white/85 p-6 transition duration-500 hover:-translate-y-1 hover:border-black hover:bg-white">
              <div>
                <Link href={`/services/${t.slug}`} className="text-xs font-bold uppercase tracking-[.16em] text-muted hover:text-ink">{t.service}</Link>
                <blockquote className="mt-4 text-2xl font-semibold leading-snug tracking-tight">&ldquo;{t.quote}&rdquo;</blockquote>
              </div>
              <figcaption className="mt-6 border-t border-line pt-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-line bg-white p-2">
                    {t.logo ? <Image src={t.logo} alt="" width={128} height={128} className="max-h-full w-auto object-contain" /> : <span aria-hidden className="text-2xl font-extrabold text-muted">{t.client[0]}</span>}
                  </span>
                  <div className="min-w-0">
                    <p className="font-bold leading-tight">{t.client}</p>
                  </div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        </li>
      ))}
    </TestimonialRail>
  );
}
