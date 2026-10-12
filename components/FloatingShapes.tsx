// Decorative floating shapes for the hero (hidden on small screens, still when reduced motion is on).
export function FloatingShapes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
      <span className="float absolute left-[6%] top-28 h-28 w-28 rounded-full border-4 border-black/80" />
      <span className="float absolute bottom-24 left-[28%] flex h-9 w-9 items-center justify-center rounded-full border border-black/60" style={{ animationDelay: "1s" }}><span className="h-1.5 w-1.5 rounded-full bg-black" /></span>
      <span className="float absolute bottom-28 right-[5%] flex h-44 w-44 items-center justify-center rounded-[2.5rem] border border-line bg-white" style={{ animationDelay: "2s" }}><span className="h-14 w-14 rounded-full bg-black" /></span>
    </div>
  );
}
