import Link from "next/link";
import Image from "next/image";
import { site, services } from "@/lib/site";
// Placeholder values in lib/site.ts start with "[" and stay hidden until you replace them with real details.
const real = (v: string) => !v.startsWith("[");
const company: [string, string][] = [["Home", "/"], ["About", "/about"], ["Our Services", "/services"], ["Our Results", "/results"], ["Clients", "/clients"], ["Testimonials", "/testimonials"], ["Contact", "/contact"]];
const head = "text-xs font-bold uppercase tracking-[.18em] text-white/50";
const link = "text-[15px] text-white/80 transition-colors hover:text-white";
export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-x-6 gap-y-12 px-5 py-16 md:px-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="col-span-2 lg:col-span-1">
          <Link href="/" aria-label="PIXELOG home" className="inline-flex items-center gap-2.5 text-lg leading-none font-semibold uppercase tracking-[-.02em] [font-family:var(--font-brand),var(--font-wordmark),system-ui,sans-serif]">
            <Image src="/logo.png" alt="" width={32} height={32} className="h-9 w-9 invert" />PIXELOG
          </Link>
          <p className="mt-0.5 max-w-xs text-[15px] leading-relaxed text-white/70">Digital creative agency and IT solutions.</p>
        </div>
        <nav aria-label="Services">
          <p className={head}>Services</p>
          <ul className="mt-5 space-y-3">{services.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`} className={link}>{s.title}</Link></li>)}</ul>
        </nav>
        <nav aria-label="Company">
          <p className={head}>Company</p>
          <ul className="mt-5 space-y-3">{company.map(([l, h]) => <li key={h}><Link href={h} className={link}>{l}</Link></li>)}</ul>
        </nav>
        <div className="col-span-2 lg:col-span-1">
          <p className={head}>Contact</p>
          <address className="mt-5 space-y-3 not-italic">
            <p><a href={`mailto:${site.email}`} className={link}>{site.email}</a></p>
            {site.phones.map(([label, tel]) => <p key={tel}><a href={`tel:${tel}`} className={link}>{label}</a></p>)}
            {real(site.location) && <p className="max-w-[16rem] text-[15px] leading-relaxed text-white/80">{site.location}</p>}
          </address>
          <Link href="/contact" className="mt-7 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition-opacity hover:opacity-85">Let&apos;s talk</Link>
        </div>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-[1600px] px-5 py-6 text-sm text-white/50 md:px-10">&copy; {new Date().getFullYear()} PIXELOG. All rights reserved.</p>
      </div>
    </footer>
  );
}
