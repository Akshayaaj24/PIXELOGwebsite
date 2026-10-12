const words = ["Branding", "Social", "Video", "Web", "Performance", "SEO"];
export function WordBand() {
  const row = (h?: boolean) => words.map((w, i) => (
    <li key={`${h ? "b" : "a"}${i}`} className="flex items-center gap-5 px-5 text-xs font-semibold uppercase tracking-[.22em] sm:text-sm">{w}<span className="text-muted">·</span></li>
  ));
  return <div aria-hidden className="marquee border-y border-line py-3"><ul className="marquee-track" style={{ animationDuration: "40s" }}>{row()}{row(true)}</ul></div>;
}
