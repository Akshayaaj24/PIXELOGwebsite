import { Reveal } from "@/components/Reveal";
import { SectionBg } from "@/components/SectionBg";
const items = [
  ["Creative Thinking", "We blend imagination with real-world strategy to give your brand the edge it deserves."],
  ["Tailored Solutions", "No templates, no shortcuts — everything we deliver is crafted around your goals."],
  ["Startup-Friendly", "We understand growing businesses, and we build solutions that fit your budget, speed, and vision."],
  ["Clear Communication", "We keep things clear, transparent, and collaborative from start to finish."],
  ["Quality Trusted", "Every project goes through a careful process to ensure clean designs and results."],
  ["Future Ready", "We adapt quickly, work efficiently, and deliver solutions built for long-term growth."],
];
export function WhyChooseUs() {
  return (
    <section aria-labelledby="why" className="relative isolate overflow-hidden">
      <SectionBg src="/services/branding.jpg" />
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10">
        <h2 id="why" className="h2 mb-12">Why Choose Us.</h2>
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map(([t, d], i) => (
            <li key={t} className="[&>div]:h-full">
              <Reveal delay={(i % 3) * 0.08}>
                <div className="h-full rounded-[2rem] border border-line bg-white/80 p-8 transition duration-500 hover:-translate-y-1 hover:border-black hover:bg-white active:border-black active:bg-white">
                  <span className="block text-5xl font-extrabold tracking-tight [font-family:var(--font-display)]">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mb-3 mt-7 text-2xl font-bold tracking-tight">{t}</h3>
                  <p className="text-body">{d}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
