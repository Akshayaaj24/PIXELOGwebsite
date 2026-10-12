// Content shows immediately and scrolls normally; no entrance animation.
export function Reveal({ children }: { children: React.ReactNode; delay?: number; from?: "up" | "left" | "right" }) {
  return <div>{children}</div>;
}
