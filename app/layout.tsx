import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope, Syne, Sora, Unbounded } from "next/font/google";
import { ScrollProgress } from "@/components/ScrollProgress";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { JsonLd } from "@/lib/jsonld";
import { site, services } from "@/lib/site";
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const wordmark = Syne({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-wordmark", display: "swap" });
const brand = Unbounded({ subsets: ["latin"], weight: ["600", "900"], variable: "--font-brand", display: "swap" });
const menu = Sora({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-menu", display: "swap" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Digital Marketing Agency in Thoothukudi (Tuticorin)`, template: `%s | ${site.name}` },
  description: site.description,
  keywords: site.keywords,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.legalName,
  category: "Digital marketing and IT services",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "website", siteName: site.name, locale: "en_IN", url: "/", title: `${site.name} | Digital Marketing Agency in Thoothukudi`, description: site.description },
  twitter: { card: "summary_large_image", title: `${site.name} | Digital Marketing Agency in Thoothukudi`, description: site.description },
  formatDetection: { telephone: true, address: true, email: true },
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined },
  other: { "geo.region": "IN-TN", "geo.placename": "Thoothukudi", "geo.position": `${site.geo.lat};${site.geo.lng}`, ICBM: `${site.geo.lat}, ${site.geo.lng}` },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${wordmark.variable} ${menu.variable} ${brand.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-3">Skip to content</a>
        <JsonLd data={{
          "@context": "https://schema.org", "@type": ["ProfessionalService", "LocalBusiness"], "@id": `${site.url}/#business`, sameAs: [site.instagram],
          name: site.name, alternateName: site.legalName, url: site.url, logo: `${site.url}/logo.png`, image: `${site.url}/opengraph-image`,
          description: site.description, email: site.email, telephone: site.phones.map(([, t]) => t),
          address: { "@type": "PostalAddress", streetAddress: site.street, addressLocality: site.city, addressRegion: site.region, addressCountry: site.country },
          geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
          areaServed: site.areaServed.map((n) => ({ "@type": n === site.region ? "State" : "City", name: n })),
          knowsAbout: services.map((x) => x.title),
          hasOfferCatalog: { "@type": "OfferCatalog", name: "Digital marketing and IT services", itemListElement: services.map((x) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: x.title, description: x.blurb, areaServed: site.city } })) },
        }} />
        <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.name, inLanguage: "en-IN", publisher: { "@id": `${site.url}/#business` } }} />
        <ScrollProgress /><Navbar /><main id="main">{children}</main><Footer /><WhatsAppButton />
      </body>
    </html>
  );
}
