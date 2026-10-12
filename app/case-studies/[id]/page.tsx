import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { JsonLd, breadcrumbs } from "@/lib/jsonld";
import { site } from "@/lib/site";
import { caseStudies } from "@/lib/caseStudies";
const h = "text-xs font-bold uppercase tracking-[.16em] text-muted";
export const dynamicParams = false;
export const generateStaticParams = () => caseStudies.map((c) => ({ id: c.id }));
type P = { params: Promise<{ id: string }> };
export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { id } = await params;
  const c = caseStudies.find((x) => x.id === id);
  if (!c) return {};
  const url = `/case-studies/${c.id}`;
  const title = `${c.client} Case Study: ${c.title}`;
  return { title, description: c.intro, alternates: { canonical: url }, openGraph: { title, description: c.intro, url }, twitter: { title, description: c.intro } };
}
export default async function CaseStudyPage({ params }: P) {
  const { id } = await params;
  const c = caseStudies.find((x) => x.id === id);
  if (!c) notFound();
  return (
    <article className="mx-auto max-w-5xl px-5 py-10 md:px-10 md:py-16">
      <JsonLd data={breadcrumbs(site.url, [{ name: "Home", path: "/" }, { name: "Results", path: "/results" }, { name: c.client, path: `/case-studies/${c.id}` }])} />
      <Link href="/results" className="inline-block rounded-full border border-line px-4 py-2 text-sm font-semibold">&larr; Back to results</Link>
      <div className="mt-8">
    <div className="flex items-center gap-3">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line bg-white p-1.5"><Image src={c.logo} alt="" width={96} height={96} className="max-h-full w-auto object-contain" /></span>
      <p className={h}>Case study · {c.client}</p>
    </div>
    <h1 id={`cs-${c.id}`} className="mt-5 text-3xl font-extrabold leading-tight tracking-tight md:text-5xl [font-family:var(--font-display)]">{c.title}</h1>
    <p className="mt-3 text-base text-body md:text-lg">{c.intro}</p>
    <ul aria-label="Project highlights" className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4">
      {c.highlights.map(([v, l]) => (
        <li key={l} className="rounded-2xl border border-line bg-soft px-4 py-5"><p className="text-3xl font-bold tracking-tight md:text-4xl [font-family:var(--font-display)]">{v}</p><p className="mt-1 text-sm text-body">{l}</p></li>
      ))}
    </ul>
    <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
      <div className="space-y-8">
        <section><h4 className={h}>The Challenge</h4>{c.challenge.map((p) => <p key={p} className="mt-3 text-body">{p}</p>)}</section>
        <section><h4 className={h}>The Strategy</h4><p className="mt-3 text-body">{c.strategy.intro}</p>
          <ul className="mt-4 space-y-3">{c.strategy.items.map(([t, d]) => <li key={t} className="text-body"><span className="font-bold text-black">{t}:</span> {d}</li>)}</ul></section>
      </div>
      <div className="space-y-8">
        <section><h4 className={h}>The Results</h4><p className="mt-3 text-body">{c.results.intro}</p>
          <ul className="mt-4 space-y-3">{c.results.items.map(([t, d]) => <li key={t} className="text-body"><span className="font-bold text-black">{t}:</span> {d}</li>)}</ul></section>
        <section><h4 className={h}>The Impact</h4>{c.impact.map((p) => <p key={p} className="mt-3 text-body">{p}</p>)}</section>
      </div>
    </div>
    <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 md:flex-row md:items-center md:justify-between">
      <p className="text-sm text-body"><span className="font-bold text-black">Services:</span> {c.services}</p>
      <a href={c.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full rounded-full text-center md:w-auto">Visit the website</a>
    </div>
      </div>
    </article>
  );
}
