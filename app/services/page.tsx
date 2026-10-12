import Link from "next/link";
import { JsonLd, breadcrumbs } from "@/lib/jsonld";
import { site } from "@/lib/site";
import { ServiceStack } from "@/components/ServiceStack";
import { QuoteBar } from "@/components/QuoteBar";
import { meta } from "@/lib/page";
export const metadata = meta("Digital Marketing Services in Thoothukudi", "Branding, social media marketing, influencer marketing, website development, video production, Meta Ads and SEO services in Thoothukudi (Tuticorin) and across Tamil Nadu.", "/services");
export default function Services() {
  return (<>
    <JsonLd data={breadcrumbs(site.url, [{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
    <header className="mx-auto max-w-5xl px-5 pb-8 pt-10 text-center md:px-10 md:pb-12 md:pt-20 md:text-left">
      <p className="inline-block rounded-full border border-line bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[.2em] text-body">What we do</p>
      <h1 className="mt-5 text-[clamp(2.4rem,9vw,5rem)] font-extrabold leading-[1.02] tracking-[-.03em] [font-family:var(--font-wordmark),var(--font-display),system-ui,sans-serif]">Eight ways to grow your brand.</h1>
      <p className="mx-auto mt-4 max-w-xl text-base text-body md:mx-0 md:text-lg">One team, built around measurable growth. Scroll through and pick what fits.</p>
    </header>
    {/* Phones: the same compact stacking cards as the home page. Desktop: the full detail cards (checklist and quote button). */}
    <ServiceStack />
    <section id="services-end" className="mx-auto max-w-5xl px-5 pb-28 pt-10 text-center md:px-10 md:pb-24">
      <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl [font-family:var(--font-wordmark),var(--font-display),system-ui,sans-serif]">Not sure where to start?</h2>
      <p className="mx-auto mt-4 max-w-md text-body">Tell us your goal and we&apos;ll suggest the right mix.</p>
      <Link href="/contact" className="btn btn-primary mt-8 rounded-full">Talk to us</Link>
      <p className="mt-4"><a href={`mailto:${site.email}`} className="text-sm text-body underline underline-offset-4">{site.email}</a></p>
    </section>
    <QuoteBar />
  </>);
}
