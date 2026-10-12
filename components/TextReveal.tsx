// Headline lines render immediately; no slide-in animation.
export function TextReveal({ lines }: { lines: string[]; delay?: number }) {
  return <>{lines.map((l, i) => <span key={i} className="block pb-[0.1em]">{l}</span>)}</>;
}
