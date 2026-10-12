import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd, breadcrumbs } from "@/lib/jsonld";
import { services, processSteps, site } from "@/lib/site";
export const dynamicParams = false;
export const generateStaticParams = () => services.map(s => ({ slug: s.slug }));
type P = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find(x => x.slug === slug);
  if (!s) return {};
  const url = `/services/${s.slug}`;
  const title = `${s.title} in Thoothukudi (Tuticorin)`;
  const description = `${s.blurb} PIXELOG offers ${s.title.toLowerCase()} for businesses in Thoothukudi, Tirunelveli and across Tamil Nadu.`;
  return { title, description, alternates: { canonical: url }, openGraph: { title, description, url }, twitter: { title, description } };
}
export default async function ServicePage({ params }: P) {
  const { slug } = await params;
  const s = services.find(x => x.slug === slug);
  if (!s) notFound();
  return (
    <article className="mx-auto max-w-[1600px] px-5 py-16 md:px-10">
      <JsonLd data={breadcrumbs(site.url, [{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: s.title, path: `/services/${s.slug}` }])} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: s.title, description: s.blurb, provider: { "@id": `${site.url}/#business` }, areaServed: site.areaServed.map((n) => ({ "@type": "City", name: n })) }} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
      <nav aria-label="Breadcrumb" className="mb-10 text-sm text-muted"><Link href="/">Home</Link> / <Link href="/services">Services</Link> / <span aria-current="page">{s.title}</span></nav>
      <h1 className="display">{s.title}</h1>
      <p className="mt-8 max-w-xl text-lg text-body">{s.blurb}</p>
      <div className="mt-20 grid gap-16 md:grid-cols-2">
        <section><h2 className="h2 mb-6">Problems we solve</h2><ul className="space-y-3 border-t border-black pt-4 text-body">{s.problems.map(p => <li key={p}>{p}</li>)}</ul></section>
        <section><h2 className="h2 mb-6">What&apos;s included</h2><ul className="space-y-3 border-t border-black pt-4 text-body">{s.included.map(p => <li key={p}>{p}</li>)}</ul></section>
      </div>
      <section className="mt-20"><h2 className="h2 mb-6">Our process</h2><ol className="grid border-t border-black md:grid-cols-5">{processSteps.map((p, i) => <li key={p} className="border-b border-line p-5"><span className="text-muted">{i + 1}</span><p className="mt-4 font-bold">{p}</p></li>)}</ol></section>
      <section className="mt-20"><h2 className="h2 mb-6">FAQs</h2>{s.faqs.map(f => <details key={f.q} className="border-t border-line py-4"><summary className="cursor-pointer font-semibold">{f.q}</summary><p className="mt-2 text-body">{f.a}</p></details>)}</section>
      <Link href="/contact" className="btn btn-primary mt-16">START A PROJECT</Link>
    </article>
  );
}
