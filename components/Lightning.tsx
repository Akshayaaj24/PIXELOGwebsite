// Slow-motion electric bolt for the hero: a glowing blue lightning-bolt outline that draws itself, crackles, flickers and fades out.
// Pure SVG + CSS (SMIL for the crackle). Invisible for reduced-motion visitors (globals.css). Parent must be: relative isolate overflow-hidden.
const BOLT = "M38 0 L0 82 H33 L12 160 L88 58 H52 L76 0 Z";
const items = [
  { id: "a", cls: "left-[52%] w-[42%] md:left-[35%] md:w-[21%]", d: "11s", delay: "-3s", seed: 3 },
  { id: "b", cls: "left-[1%] hidden w-[16%] md:block", d: "14s", delay: "-10s", seed: 8 },
  { id: "c", cls: "left-[63%] hidden w-[11%] md:block", d: "17s", delay: "-6s", seed: 5 },
];
export function Lightning() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      {items.map((b) => (
        <div key={b.id} className={`absolute top-[3%] h-[27%] md:top-[6%] md:h-[72%] ${b.cls}`}>
          <div className="bolt-flash absolute -inset-x-[40%] inset-y-0" style={{ animationDuration: b.d, animationDelay: b.delay }} />
          <svg viewBox="-10 -10 120 180" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 h-full w-full overflow-visible">
            <defs>
              <filter id={`crackle-${b.id}`} x="-30%" y="-30%" width="160%" height="160%">
                <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed={b.seed} result="n">
                  <animate attributeName="baseFrequency" dur="1.6s" values="0.045;0.075;0.045" repeatCount="indefinite" />
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic" in2="n" scale="3.2" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </defs>
            <path d={BOLT} pathLength={1} className="bolt-draw bolt-glow" style={{ animationDuration: b.d, animationDelay: b.delay }} />
            <g filter={`url(#crackle-${b.id})`}>
              <path d={BOLT} pathLength={1} className="bolt-draw bolt-mid" style={{ animationDuration: b.d, animationDelay: b.delay }} />
              <path d={BOLT} pathLength={1} className="bolt-draw bolt-core" style={{ animationDuration: b.d, animationDelay: b.delay }} />
            </g>
          </svg>
        </div>
      ))}
    </div>
  );
}
