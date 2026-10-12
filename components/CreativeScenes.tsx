import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { TextReveal } from "@/components/TextReveal";
// Four small animated illustrations (original characters, drawn in the site's black-and-grey line style).
// Pure SVG + CSS keyframes (see "Scenes" in globals.css). They hold still for visitors who prefer reduced motion.
const svgProps = { viewBox: "0 0 320 240", fill: "none", stroke: "#000", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true, className: "h-full w-full" } as const;
const v = (o: Record<string, string>) => o as React.CSSProperties;

function WebScene() {
  return (
    <svg {...svgProps}>
      <g className="sc-float sc-o"><rect x="30" y="38" width="58" height="30" rx="10" fill="#fff" /><text x="59" y="58" textAnchor="middle" fontSize="15" fontWeight="700" fontFamily="monospace" fill="#000" stroke="none">{"</>"}</text></g>
      <g className="sc-float sc-o" style={v({ animationDelay: "-1.6s" })}><circle cx="272" cy="50" r="18" fill="#fff" /><path d="M264 50h16M272 42v16" /></g>
      <rect x="92" y="116" width="44" height="64" rx="16" fill="#000" />
      <g className="sc-bob">
        <circle cx="116" cy="90" r="22" fill="#fff" />
        <path d="M94 88c-2-18 12-28 28-24 12 2 20 12 18 24-8-6-18-10-26-10-8 0-14 4-20 10z" fill="#000" />
        <circle cx="128" cy="92" r="2.6" fill="#000" stroke="none" className="sc-blink sc-o" />
        <path d="M124 101q5 4 10 0" />
        <circle cx="122" cy="100" r="4" fill="#e5e5e5" stroke="none" />
      </g>
      <rect x="40" y="168" width="240" height="42" rx="6" fill="#f3f3f3" />
      <path d="M148 168h112" strokeWidth="6" />
      <rect x="166" y="84" width="84" height="80" rx="8" fill="#fff" />
      <path d="M166 99h84" />
      <circle cx="176" cy="91.500" r="2" fill="#000" stroke="none" /><circle cx="184" cy="91.500" r="2" fill="#000" stroke="none" /><circle cx="192" cy="91.500" r="2" fill="#000" stroke="none" />
      <rect className="sc-slide" x="176" y="108" width="64" height="20" rx="4" fill="#e5e5e5" stroke="none" />
      <rect className="sc-slide2" x="176" y="134" width="30" height="22" rx="4" fill="#cfcfcf" stroke="none" />
      <rect className="sc-slide" x="212" y="134" width="28" height="22" rx="4" fill="#000" stroke="none" style={v({ animationDelay: "-1.2s" })} />
      <path className="sc-cursor" d="M205 118l0 15 4.500-3.500 3 7 3.500-1.500-3-7 5.500-.5z" fill="#000" stroke="#fff" strokeWidth="1.500" />
      <g className="sc-tap"><path d="M128 136L158 161" stroke="#000" strokeWidth="11" /><circle cx="161" cy="162" r="6" fill="#fff" /></g>
      <g><rect x="52" y="150" width="18" height="18" rx="3" fill="#000" /><path d="M61 150c-9-10-9-19-2-25M61 150c9-8 11-17 6-24" /></g>
      <path d="M20 210h280" />
    </svg>
  );
}

function PhotoScene() {
  const photo = (x: number, y: number, r: string, d: string) => (
    <g key={d} className="sc-photo sc-o" style={v({ "--r": r, animationDelay: d })}><rect x={x} y={y} width="34" height="40" rx="3" fill="#fff" /><rect x={x + 5} y={y + 5} width="24" height="24" fill="#d4d4d4" stroke="none" /></g>
  );
  return (
    <svg {...svgProps}>
      <path className="sc-twinkle sc-o" d="M62 58l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#000" stroke="none" />
      <path className="sc-twinkle sc-o" style={v({ animationDelay: "-1s" })} d="M262 50l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" fill="#000" stroke="none" />
      <rect x="124" y="160" width="14" height="50" rx="7" fill="#000" /><rect x="146" y="160" width="14" height="50" rx="7" fill="#000" />
      <rect x="116" y="104" width="52" height="64" rx="18" fill="#e5e5e5" />
      <g className="sc-bob">
        <circle cx="142" cy="80" r="22" fill="#fff" />
        <path d="M120 78c-2-18 12-28 28-24 12 2 20 12 18 24-8-6-18-10-28-10-6 0-12 4-18 10z" fill="#000" />
        <circle cx="136" cy="80" r="2.600" fill="#000" stroke="none" />
      </g>
      <path d="M150 120L166 100M160 126L178 102" stroke="#000" strokeWidth="10" />
      <rect x="150" y="70" width="48" height="32" rx="6" fill="#000" />
      <rect x="160" y="63" width="14" height="9" rx="2" fill="#000" />
      <circle cx="186" cy="86" r="11" fill="#fff" /><circle cx="186" cy="86" r="5" fill="#000" />
      <g className="sc-flash sc-o"><circle cx="216" cy="84" r="9" fill="#fff" /><path d="M230 84h10M226 94l7 7M216 98v10M216 70v-10M226 74l7-7" /></g>
      {photo(236, 122, "-8deg", "0s")}{photo(262, 146, "7deg", "-1.3s")}{photo(238, 164, "-3deg", "-2.6s")}
      <path d="M20 210h280" />
    </svg>
  );
}

function BrandScene() {
  return (
    <svg {...svgProps}>
      <path d="M200 154l-10 56M276 154l10 56M238 154v56" />
      <rect x="186" y="46" width="104" height="108" rx="8" fill="#fff" />
      <circle className="sc-pop sc-o" cx="206" cy="62" r="6" fill="#000" /><circle className="sc-pop sc-o" style={v({ animationDelay: ".4s" })} cx="224" cy="62" r="6" fill="#8a8a8a" /><circle className="sc-pop sc-o" style={v({ animationDelay: ".8s" })} cx="242" cy="62" r="6" fill="#d4d4d4" />
      <path className="sc-draw" d="M210 118L238 90L266 118" strokeWidth="9" />
      <path className="sc-draw" style={v({ animationDelay: ".5s" })} d="M210 140L238 112L266 140" strokeWidth="9" />
      <rect x="76" y="162" width="13" height="48" rx="6.500" fill="#000" /><rect x="97" y="162" width="13" height="48" rx="6.500" fill="#000" />
      <rect x="68" y="106" width="50" height="64" rx="18" fill="#000" />
      <g className="sc-bob">
        <circle cx="93" cy="82" r="22" fill="#fff" />
        <path d="M71 80c-2-18 12-28 28-24 12 2 18 12 16 24-8-6-18-10-26-10-6 0-12 4-18 10z" fill="#000" />
        <circle cx="93" cy="56" r="8" fill="#000" />
        <circle cx="104" cy="84" r="2.600" fill="#000" stroke="none" className="sc-blink sc-o" />
        <path d="M99 92q5 4 10 0" /><circle cx="100" cy="91" r="4" fill="#e5e5e5" stroke="none" />
      </g>
      <path d="M78 122L62 148" stroke="#000" strokeWidth="10" />
      <ellipse cx="58" cy="158" rx="17" ry="11" fill="#fff" /><circle cx="52" cy="155" r="3" fill="#000" stroke="none" /><circle cx="60" cy="151" r="3" fill="#8a8a8a" stroke="none" /><circle cx="67" cy="160" r="3" fill="#d4d4d4" stroke="none" />
      <g className="sc-paint" style={v({ transformOrigin: "108px 120px" })}><path d="M108 120L160 98" stroke="#000" strokeWidth="10" /><path d="M160 98L178 88" strokeWidth="4" /><circle cx="180" cy="87" r="4" fill="#000" /></g>
      <path className="sc-twinkle sc-o" d="M150 40l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" fill="#000" stroke="none" />
      <path d="M20 210h280" />
    </svg>
  );
}

function SocialScene() {
  const heart = (dx: string, d: string) => (
    <g key={d} transform="translate(208 62)"><g className="sc-heart sc-o" style={v({ "--dx": dx, animationDelay: d })}><path d="M0 7C-14 -4 -6 -15 0 -8C6 -15 14 -4 0 7z" fill="#000" stroke="none" /></g></g>
  );
  return (
    <svg {...svgProps}>
      <circle className="sc-spin sc-o" cx="136" cy="94" r="62" stroke="#000" strokeOpacity=".3" strokeDasharray="6 9" />
      <g className="sc-float sc-o"><rect x="22" y="56" width="54" height="30" rx="12" fill="#fff" /><circle cx="38" cy="71" r="3" fill="#000" stroke="none" /><circle cx="49" cy="71" r="3" fill="#000" stroke="none" /><circle cx="60" cy="71" r="3" fill="#000" stroke="none" /></g>
      <rect x="112" y="162" width="14" height="48" rx="7" fill="#000" /><rect x="136" y="162" width="14" height="48" rx="7" fill="#000" />
      <rect x="104" y="108" width="54" height="64" rx="18" fill="#e5e5e5" />
      <g className="sc-bob">
        <circle cx="131" cy="84" r="22" fill="#fff" />
        <path d="M109 82c-2-18 12-28 28-24 12 2 20 12 18 24-8-6-18-10-28-10-6 0-12 4-18 10z" fill="#000" />
        <path d="M107 84a24 24 0 0 1 48 0" strokeWidth="5" /><rect x="103" y="80" width="9" height="16" rx="4" fill="#000" /><rect x="150" y="80" width="9" height="16" rx="4" fill="#000" />
        <circle cx="123" cy="88" r="2.500" fill="#000" stroke="none" /><circle cx="140" cy="88" r="2.500" fill="#000" stroke="none" />
        <path d="M124 96q7 7 14 0" />
      </g>
      <path d="M150 124L190 108" stroke="#000" strokeWidth="10" />
      <rect x="186" y="70" width="38" height="64" rx="8" fill="#000" />
      <rect x="191" y="77" width="28" height="50" rx="3" fill="#fff" stroke="none" />
      <path d="M200 94l12 8-12 8z" fill="#000" stroke="none" />
      <circle className="sc-rec" cx="215" cy="82" r="2.500" fill="#000" stroke="none" />
      {heart("-22px", "0s")}{heart("2px", "-1.1s")}{heart("24px", "-2.2s")}
      <path d="M20 210h280" />
    </svg>
  );
}

const scenes = [
  { slug: "web-development", title: "Building websites", blurb: "Design, code and launch, all under one roof.", art: <WebScene /> },
  { slug: "video-production", title: "Shooting content", blurb: "Photos and videos that stop the scroll.", art: <PhotoScene /> },
  { slug: "branding", title: "Crafting brands", blurb: "Logos and identities people remember.", art: <BrandScene /> },
  { slug: "social-media-marketing", title: "Growing your reach", blurb: "Content and community that keep growing.", art: <SocialScene /> },
];

export function CreativeScenes() {
  return (
    <section aria-labelledby="craft" className="border-t border-line bg-white py-24">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <h2 id="craft" className="h2"><TextReveal lines={["Creating, every day."]} /></h2>
        <p className="mt-4 max-w-xl text-body">A peek at what our team is busy doing for your brand.</p>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {scenes.map((s, i) => (
            <li key={s.slug} className="[&>div]:h-full">
              <Reveal delay={i * 0.1}>
                <Link href={`/services/${s.slug}`} className="group block h-full rounded-3xl border border-line bg-soft p-4 transition duration-500 hover:-translate-y-1 hover:border-black">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-white transition-transform duration-500 group-hover:scale-[1.02]">{s.art}</div>
                  <p className="mt-5 px-2 text-xl font-bold tracking-tight">{s.title}</p>
                  <p className="px-2 pb-2 pt-1 text-sm text-body">{s.blurb}</p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
