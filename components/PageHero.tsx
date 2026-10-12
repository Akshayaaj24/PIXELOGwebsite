import Link from "next/link";
import { JsonLd, breadcrumbs } from "@/lib/jsonld";
import { site } from "@/lib/site";
import { TextReveal } from "@/components/TextReveal";
type Crumb = { name: string; path: string };
export function PageHero({ title, intro, crumbs, small }: { title: string; intro?: string; crumbs: Crumb[]; small?: boolean }) {
  const all = [{ name: "Home", path: "/" }, ...crumbs];
  return (
    <header className="mx-auto max-w-[1600px] px-5 pb-12 pt-16 md:px-10">
      <JsonLd data={breadcrumbs(site.url, all)} />
      <nav aria-label="Breadcrumb" className="mb-10 text-sm text-muted">
        {all.map((c, i) => i < all.length - 1
          ? <span key={c.path}><Link href={c.path} className="hover:text-ink">{c.name}</Link> / </span>
          : <span key={c.path} aria-current="page">{c.name}</span>)}
      </nav>
      <h1 className={small ? "h2 max-w-4xl" : "display"}><TextReveal lines={[title]} /></h1>
      {intro && <p className="mt-8 max-w-xl text-lg text-body">{intro}</p>}
    </header>
  );
}
