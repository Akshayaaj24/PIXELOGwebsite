import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { clients } from "@/lib/clients";
import { SectionBg } from "@/components/SectionBg";
import { ResultsGallery } from "@/components/ResultsGallery";
import { TestimonialGrid } from "@/components/TestimonialGrid";
import { TextReveal } from "@/components/TextReveal";
// These sections are shared: the home page and its own page (Results, Clients, Testimonials) show exactly the same content.
export function ResultsSection({ page }: { page?: boolean }) {
  return (
    <section aria-labelledby="results" className="border-t border-line bg-soft"><div className="mx-auto max-w-[1600px] px-5 py-12 md:px-10 md:py-24">
      {page && <h1 className="sr-only">Our results</h1>}
      <h2 id="results" className="h2 mb-6 md:mb-10"><TextReveal lines={["Our results"]} /></h2>
      <Reveal delay={0.1}><ResultsGallery /></Reveal>
    </div></section>
  );
}
export function ClientsSection({ page }: { page?: boolean }) {
  return (
    <section aria-labelledby="clients" className="py-24">
      {page && <h1 className="sr-only">Clients</h1>}
      <div className="mx-auto mb-10 max-w-[1600px] px-5 md:px-10"><h2 id="clients" className="h2"><TextReveal lines={["Clients"]} /></h2></div>
      <Reveal><div className="space-y-4"><Marquee items={clients} /><Marquee items={clients} reverse /></div></Reveal>
    </section>
  );
}
export function TestimonialsSection({ page }: { page?: boolean }) {
  return (
    <section aria-labelledby="voices" className="relative isolate overflow-hidden border-t border-line bg-soft"><SectionBg src="/services/performance-marketing.jpg" tone="soft" />
      <div className="mx-auto max-w-[1600px] px-5 py-12 md:px-10 md:py-24">
        {page && <h1 className="sr-only">Testimonials</h1>}
        <h2 id="voices" className="h2 mb-6 md:mb-10"><TextReveal lines={["Testimonials"]} /></h2>
        <TestimonialGrid />
        {!page && <Link href="/testimonials" className="btn btn-secondary mt-10 rounded-full">See all testimonials</Link>}
      </div>
    </section>
  );
}
