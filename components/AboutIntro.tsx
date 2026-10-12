import { Reveal } from "@/components/Reveal";
import { SectionBg } from "@/components/SectionBg";
import { Underline } from "@/components/Underline";
export function AboutIntro() {
  return (
    <section aria-labelledby="about-intro" className="relative isolate overflow-hidden border-t border-line bg-soft">
      <SectionBg src="/services/influencer-marketing.jpg" tone="soft" position="center 25%" />
      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-24 md:px-10 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="mb-4 text-sm font-bold uppercase tracking-[.14em]">About PIXELOG</p>
            <h2 id="about-intro" className="h2">We build for <Underline>startups</Underline> and growing brands.</h2>
          </Reveal>
          <Reveal delay={0.1}><p className="mt-8 max-w-xl text-lg text-body">We blend design, development, and marketing to help businesses stand out online with clarity and confidence. From branding to web development, everything we create is crafted with purpose.</p></Reveal>
        </div>
        <div className="space-y-6">
          <Reveal from="right" delay={0.1}><div className="rounded-3xl border border-line bg-white p-8"><h3 className="text-2xl font-bold tracking-tight">Mission</h3><p className="mt-3 text-body">To help startups and growing businesses build a strong digital identity through creative design and reliable technology.</p></div></Reveal>
          <Reveal from="right" delay={0.25}><div className="rounded-3xl bg-black p-8 text-white"><h3 className="text-2xl font-bold tracking-tight">Vision</h3><p className="mt-3 text-white/85">To become a trusted digital partner for businesses worldwide by delivering meaningful and growth-focused digital experiences.</p></div></Reveal>
        </div>
      </div>
    </section>
  );
}
