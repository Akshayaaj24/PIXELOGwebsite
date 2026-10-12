import Image from "next/image";
// Static light hero backdrop (no motion). The parent must be: relative isolate overflow-hidden.
export function HeroBackdrop() {
  return (
    <>
      <div aria-hidden className="absolute inset-0 -z-30 overflow-hidden bg-white"><Image src="/hero-bg-light.jpg" alt="" fill priority sizes="100vw" className="object-cover object-center" /></div>
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-white to-transparent" />
    </>
  );
}
