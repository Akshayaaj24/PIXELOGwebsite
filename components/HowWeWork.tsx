import { Reveal } from "@/components/Reveal";
import { TextReveal } from "@/components/TextReveal";
import { DrawLine } from "@/components/DrawLine";
const values = [
  ["Strategy first", "We start with your goals, audience and numbers before we design or post anything."],
  ["Creative with a job", "Every idea has to earn attention and move someone to act."],
  ["Built to perform", "Fast, accessible, search-friendly websites and campaigns that can be measured."],
  ["Honest reporting", "We show what worked, what didn't and what we'll change next."],
];
export function HowWeWork() {
  return (
    <section aria-labelledby="values" className="border-t border-line bg-soft">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10">
        <h2 id="values" className="h2 mb-12"><TextReveal lines={["How we work"]} /></h2>
        <ol className="grid md:grid-cols-2">
          {values.map(([t, d], i) => (
            <li key={t} className="group relative py-8 md:pr-10">
              <DrawLine delay={i * 0.12} className="absolute inset-x-0 top-0 h-px bg-black md:right-10" />
              <Reveal delay={0.1 + i * 0.12}>
                <div className="flex gap-5">
                  <span className="text-sm font-bold text-muted transition-colors group-hover:text-ink">{String(i + 1).padStart(2, "0")}</span>
                  <div className="transition-transform duration-300 group-hover:translate-x-2"><h3 className="text-2xl font-bold tracking-tight">{t}</h3><p className="mt-2 max-w-md text-body">{d}</p></div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
