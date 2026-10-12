import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";
import { caseStudies } from "@/lib/caseStudies";
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const top: [string, number][] = [["", 1], ["/services", 0.9], ["/contact", 0.9], ["/results", 0.8], ["/about", 0.7], ["/clients", 0.6], ["/testimonials", 0.6]];
  return [
    ...top.map(([p, priority]) => ({ url: site.url + p, lastModified: now, changeFrequency: "weekly" as const, priority })),
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...caseStudies.map((c) => ({ url: `${site.url}/case-studies/${c.id}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
