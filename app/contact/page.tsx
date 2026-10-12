import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { JsonLd, breadcrumbs } from "@/lib/jsonld";
import { meta } from "@/lib/page";
import { site } from "@/lib/site";
export const metadata = meta("Contact Digital Marketing Agency in Thoothukudi", "Call, WhatsApp or email PIXELOG, 11/2A Toovipuram 2nd Street, Thoothukudi. Tell us about your project and we will reply with next steps.", "/contact");
export default function Contact() {
  return (
    <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-16 md:px-10 lg:grid-cols-2 lg:py-24">
      <JsonLd data={breadcrumbs(site.url, [{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <Reveal>
        <p className="mb-4 text-sm font-bold uppercase tracking-[.14em]">Contact</p>
        <h1 className="text-[clamp(3rem,9vw,7rem)] font-extrabold leading-none tracking-[-.04em] [font-family:var(--font-display)]">Let&apos;s Talk.</h1>
        <p className="mt-8 max-w-md text-xl text-body">Have an idea, a project, or just a question? We&apos;d love to hear from you.</p>
        <a href={`mailto:${site.email}`} className="mt-10 block max-w-full break-all text-base font-bold underline decoration-2 underline-offset-4 sm:text-lg md:text-xl">{site.email}</a>
        <address className="mt-8 not-italic text-body">{site.phones.map(([label, tel], i) => <span key={tel}>{i > 0 && " · "}<a href={`tel:${tel}`} className="hover:text-ink">{label}</a></span>)}<br />{site.location}</address>
      </Reveal>
      <Reveal delay={0.1}><div className="rounded-[2rem] border border-line bg-soft p-6 md:p-10"><ContactForm /></div></Reveal>
    </div>
  );
}
