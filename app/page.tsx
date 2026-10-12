import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { services, site } from "@/lib/site";
import { ResultsSection, ClientsSection, TestimonialsSection } from "@/components/HomeSections";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import { AboutIntro } from "@/components/AboutIntro";
import { SectionBg } from "@/components/SectionBg";
import { ServiceStack } from "@/components/ServiceStack";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CountUp } from "@/components/CountUp";
import { ContactForm } from "@/components/ContactForm";
import { HowWeWork } from "@/components/HowWeWork";
import { TextReveal } from "@/components/TextReveal";
const stats = [{ value: 50, suffix: "+", label: "Projects delivered" }, { value: 42, suffix: "+", label: "Happy clients" }, { value: 100, suffix: "M+", label: "Reach generated" }, { value: 97, suffix: "%", label: "Client retention" }];
function Tile({ label, idx, className, style, children }: { label: string; idx: string; className: string; style?: React.CSSProperties; children: React.ReactNode }) {
  return (
    <div style={style} className={`relative overflow-hidden rounded-[1.25rem] border-[3px] border-white bg-white shadow-[0_12px_30px_-10px_rgba(0,0,0,.35)] ring-1 ring-black/10 ${className}`}>
      {children}
      <span className="pointer-events-none absolute left-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[9px] font-bold tabular-nums tracking-widest text-black">{idx}</span>
      <span className="pointer-events-none absolute bottom-2 left-2 rounded-full bg-black/80 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-white backdrop-blur sm:text-[10px]">{label}</span>
    </div>
  );
}
export default function Home() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-white text-black"><HeroBackdrop />
      <section className="mx-auto grid max-w-[1400px] items-center gap-8 px-5 py-8 md:px-10 lg:min-h-[calc(100svh-4.75rem)] lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:py-6">
        <div className="text-center">
          <p className="inline-block rounded-full border border-line bg-white/80 px-5 py-2 text-xs font-bold uppercase tracking-[.2em] text-body">Digital creative Agency</p>
          <h1 style={{ fontFamily: "var(--font-brand), var(--font-wordmark), system-ui, sans-serif" }} className="mt-6 select-none text-[clamp(2.4rem,13vw,5rem)] font-black uppercase leading-[.95] tracking-[-.05em] lg:text-[clamp(3rem,7.8vw,8rem)]">PIXELOG<span className="sr-only"> - Digital Marketing and IT Company in Thoothukudi (Tuticorin)</span></h1>
          <p className="mt-6 text-xl text-body md:text-2xl lg:text-3xl">We build <span className="font-bold text-black underline decoration-4 underline-offset-8">brands that people crave</span> !!</p>
          <div className="mt-7 flex flex-wrap justify-center gap-2.5">
            <Link href="/contact" className="btn btn-hero btn-primary rounded-full">Get a strategic call</Link>
            <Link href="/results" className="btn btn-hero btn-secondary rounded-full">See Our Work</Link>
          </div>
        </div>
        {/* 6 silent looping reels: equal-size cards in 3 staggered, floating columns; fits one desktop screen */}
        <div className="mx-auto w-full max-w-[26rem] lg:max-w-none lg:w-[min(39rem,74svh)]">
          <div className="grid grid-cols-3 items-start gap-2.5 lg:gap-3.5">
            <div className="float-b mt-[8%]" style={{ animationDelay: "0s" }}>
              <div className="flex flex-col gap-2.5 lg:gap-3.5">
              <Tile label="Reels" idx="01" className="aspect-[2/3] w-full transition-[scale] duration-300 hover:scale-105"><video src="/results/reel-1.mp4" poster="/results/reel-1.jpg" autoPlay muted loop playsInline preload="metadata" aria-hidden className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: "50% 40%" }} /></Tile>
              <Tile label="Reels" idx="04" className="aspect-[2/3] w-full transition-[scale] duration-300 hover:scale-105"><video src="/results/reel-2.mp4" poster="/results/reel-2.jpg" autoPlay muted loop playsInline preload="metadata" aria-hidden className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: "50% 50%" }} /></Tile>
              </div>
            </div>
            <div className="float " style={{ animationDelay: "1.2s" }}>
              <div className="flex flex-col gap-2.5 lg:gap-3.5">
              <Tile label="Reels" idx="02" className="aspect-[2/3] w-full transition-[scale] duration-300 hover:scale-105"><video src="/results/reel-10.mp4" poster="/results/reel-10.jpg" autoPlay muted loop playsInline preload="metadata" aria-hidden className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: "50% 25%" }} /></Tile>
              <Tile label="Reels" idx="05" className="aspect-[2/3] w-full transition-[scale] duration-300 hover:scale-105"><video src="/results/reel-5.mp4" poster="/results/reel-5.jpg" autoPlay muted loop playsInline preload="metadata" aria-hidden className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: "50% 50%" }} /></Tile>
              </div>
            </div>
            <div className="float-b mt-[8%]" style={{ animationDelay: "2.4s" }}>
              <div className="flex flex-col gap-2.5 lg:gap-3.5">
              <Tile label="Reels" idx="03" className="aspect-[2/3] w-full transition-[scale] duration-300 hover:scale-105"><video src="/results/reel-4.mp4" poster="/results/reel-4.jpg" autoPlay muted loop playsInline preload="metadata" aria-hidden className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: "50% 40%" }} /></Tile>
              <Tile label="Reels" idx="06" className="aspect-[2/3] w-full transition-[scale] duration-300 hover:scale-105"><video src="/results/reel-6.mp4" poster="/results/reel-6.jpg" autoPlay muted loop playsInline preload="metadata" aria-hidden className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: "50% 50%" }} /></Tile>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1600px] px-5 pb-16 md:px-10">
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {stats.map((s) => (<li key={s.label} className="rounded-2xl border border-line bg-white px-3 py-7 text-center"><p className="text-4xl font-bold tracking-tight md:text-5xl [font-family:var(--font-display)]"><CountUp value={s.value} suffix={s.suffix} /></p><p className="mt-2 text-body">{s.label}</p></li>))}
        </ul>
      </section></div>

      <AboutIntro />

      <section aria-labelledby="services" className="relative isolate overflow-clip py-24">
        <div className="mx-auto mb-12 max-w-[1600px] px-5 md:px-10"><h2 id="services" className="h2"><TextReveal lines={["Services"]} /></h2></div>
        <ServiceStack />
      </section>

      <ResultsSection />

      <HowWeWork />

      <ClientsSection />
      <TestimonialsSection />

      <WhyChooseUs />

      <section className="relative isolate overflow-hidden border-t border-black px-5 py-28 md:px-10"><SectionBg src="/services/video-production.jpg" position="center 40%" /><div className="mx-auto max-w-[1600px]">
        <h2 className="h2 max-w-4xl"><TextReveal lines={["READY TO BUILD SOMETHING PEOPLE REMEMBER?"]} /></h2>
        <Reveal delay={0.3}><Link href="/contact" className="btn btn-primary mt-10">START A PROJECT</Link></Reveal>
      </div></section>

      <section id="contact" aria-labelledby="contact-h" className="border-t border-line bg-soft">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-20 md:px-10 lg:grid-cols-2 lg:py-24">
          <Reveal>
            <p className="mb-4 text-sm font-bold uppercase tracking-[.14em]">Contact</p>
            <h2 id="contact-h" className="text-[clamp(3rem,9vw,7rem)] font-extrabold leading-none tracking-[-.04em] [font-family:var(--font-display)]">Let&apos;s Talk.</h2>
            <p className="mt-8 max-w-md text-xl text-body">Have an idea, a project, or just a question? We&apos;d love to hear from you.</p>
            <a href={`mailto:${site.email}`} className="mt-10 block max-w-full break-all text-base font-bold underline decoration-2 underline-offset-4 sm:text-lg md:text-xl">{site.email}</a>
            <address className="mt-8 not-italic text-body">{site.phones.map(([label, tel], i) => <span key={tel}>{i > 0 && " · "}<a href={`tel:${tel}`} className="hover:text-ink">{label}</a></span>)}<br />{site.location}</address>
          </Reveal>
          <Reveal delay={0.1}><div className="rounded-[2rem] border border-line bg-white p-6 md:p-10"><ContactForm /></div></Reveal>
        </div>
      </section>
    </>
  );
}
