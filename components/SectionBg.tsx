import Image from "next/image";
// Faint grayscale photo behind a section, blended into the page colour so text stays readable on phones.
// The parent section needs: relative isolate overflow-hidden
export function SectionBg({ src, tone = "white", position = "center" }: { src: string; tone?: "white" | "soft"; position?: string }) {
  const wash = tone === "soft" ? "from-soft via-soft/55 to-soft" : "from-white via-white/55 to-white";
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <Image src={src} alt="" fill sizes="100vw" className="object-cover opacity-35 grayscale" style={{ objectPosition: position }} />
      <div className={`absolute inset-0 bg-linear-to-b ${wash}`} />
    </div>
  );
}
