"use client";
import { useEffect, useRef, useState } from "react";
import { site, services } from "@/lib/site";
type Errors = Record<string, string>;
// EmailJS IDs and the Public Key are meant to be public (they run in the browser), so they are kept here as defaults.
// That way the form still works on hosts (Netlify, Vercel) where the environment variables were not added.
const DEFAULT_EMAILJS = { service: "Pixelog.123", template: "Pixelog@2026", publicKey: "7FWPJrC4CgXjp1Qdu" };
const turnovers = ["Less than 50,00,000 INR", "50,00,000 INR - 1,00,00,000 INR", "1,00,00,000 INR - 5,00,00,000 INR", "5,00,00,000 INR - 10,00,00,000 INR", "Above 10,00,00,000 INR"];
const input = "w-full rounded-2xl border border-line bg-white px-5 py-4 text-ink placeholder:text-muted focus:border-black";
function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (<div><label htmlFor={id} className="mb-2 block text-xs font-bold uppercase tracking-[.1em] text-ink">{label}</label>{children}
    {error && <p id={`${id}-err`} role="alert" className="mt-1 text-sm text-ink underline">{error}</p>}</div>);
}
export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [picked, setPicked] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDetailsElement>(null);
  const close = () => { if (box.current) box.current.open = false; setOpen(false); };
  useEffect(() => {
    if (!open) return;
    const down = (e: MouseEvent) => { if (box.current && !box.current.contains(e.target as Node)) close(); };
    const key = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    addEventListener("mousedown", down); addEventListener("keydown", key);
    return () => { removeEventListener("mousedown", down); removeEventListener("keydown", key); };
  }, [open]);
  const names = services.map((x) => x.title);
  const all = names.length > 0 && names.every((n) => picked.includes(n));
  const toggle = (n: string) => setPicked((p) => (p.includes(n) ? p.filter((x) => x !== n) : [...p, n]));
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [why, setWhy] = useState("");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const er: Errors = {};
    if (!d.name?.trim()) er.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(d.email ?? "")) er.email = "Enter a valid email address.";
    if ((d.phone ?? "").replace(/\D/g, "").length < 10) er.phone = "Enter a valid phone number.";
    if ((d.message ?? "").trim().length < 10) er.message = "Tell us a little more about the project (10+ characters).";
    setErrors(er);
    if (Object.keys(er).length) return;
    setStatus("sending");
    try {
      // Option 1 (preferred): EmailJS. Set the three NEXT_PUBLIC_EMAILJS_* values in .env.local (see .env.example).
      // Option 2 (fallback, used when EmailJS is not set up): FormSubmit. The first message triggers a one-time
      // activation email to site.email: open it and click "Activate" once.
      const sid = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || DEFAULT_EMAILJS.service, tid = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || DEFAULT_EMAILJS.template, key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || DEFAULT_EMAILJS.publicKey;
      const chosen = all ? "All services" : picked.join(", ");
      const subject = `Enquiry: ${chosen || "General"}`;
      const details = `Name: ${d.name}\nEmail: ${d.email}\nPhone: ${d.phone}\nBusiness type: ${d.business || "-"}\nCurrent annual turnover: ${d.turnover || "-"}\nServices: ${chosen || "-"}\n\nMessage:\n${d.message}`;
      if (sid && tid && key) {
        const r = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ service_id: sid, template_id: tid, user_id: key, template_params: { name: d.name, email: d.email, reply_to: d.email, subject, query: `Subject: ${subject}\n\n${details}`, message: d.message, phone: d.phone, business: d.business, turnover: d.turnover, services: chosen, from_name: d.name, from_email: d.email, to_email: site.email } }),
        });
        if (!r.ok) setWhy(`${r.status} ${(await r.text().catch(() => "")).slice(0, 140)}`);
        setStatus(r.ok ? "sent" : "error");
        return;
      }
      const r = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: d.name, email: d.email, phone: d.phone, business: d.business, annual_turnover: d.turnover, services: chosen, subject, message: d.message, _subject: `New enquiry from ${d.name}: ${subject}`, _replyto: d.email, _template: "table", _captcha: "false" }),
      });
      const j = await r.json().catch(() => ({}));
      if (!(r.ok && j.success !== "false" && j.success !== false)) setWhy(`${r.status} ${String(j.message ?? "").slice(0, 140)}`);
      setStatus(r.ok && j.success !== "false" && j.success !== false ? "sent" : "error");
    } catch (err) { setWhy(String(err).slice(0, 140)); setStatus("error"); }
  }
  if (status === "sent") return <p role="status" className="py-10 text-2xl font-bold">Thanks. We&apos;ll reply soon.</p>;
  const a = (id: string, placeholder: string) => ({ id, name: id, placeholder, "aria-invalid": !!errors[id], "aria-describedby": errors[id] ? `${id}-err` : undefined, className: input });
  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
      <Field id="name" label="Name" error={errors.name}><input {...a("name", "John Doe")} autoComplete="name" required /></Field>
      <Field id="email" label="Email" error={errors.email}><input {...a("email", "john@example.com")} type="email" autoComplete="email" required /></Field>
      <Field id="phone" label="Phone number" error={errors.phone}><input {...a("phone", "+91 98765 43210")} type="tel" autoComplete="tel" required /></Field>
      <Field id="business" label="What type of business do you currently have?"><input {...a("business", "e.g. Jewellery shop, restaurant, clothing store")} autoComplete="organization" /></Field>
      <div className="sm:col-span-2"><Field id="turnover" label="Current annual turnover">
        <div className="relative">
          <select id="turnover" name="turnover" defaultValue="" className={`${input} cursor-pointer appearance-none pr-12`}>
            <option value="" disabled>Select your annual turnover</option>
            {turnovers.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2"><path d="m6 9 6 6 6-6" /></svg>
        </div>
      </Field></div>
      <details className="group relative sm:col-span-2" ref={box} onToggle={(e) => setOpen(e.currentTarget.open)}>
        <summary className="list-none text-left [&::-webkit-details-marker]:hidden">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[.1em] text-ink">Services you need</span>
          <span className={`${input} flex cursor-pointer items-center justify-between gap-3`}>
            <span className={`min-w-0 truncate ${picked.length ? "text-ink" : "text-muted"}`}>{all ? "All services" : picked.length ? picked.join(", ") : "Select services"}</span>
            <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg>
          </span>
        </summary>
        <div role="group" aria-label="Services" className="absolute left-0 right-0 z-20 mt-2 rounded-2xl border border-black bg-white p-2 shadow-xl">
          <ul className="max-h-72 overflow-y-auto">
            {names.map((n) => (
              <li key={n}><label className="flex min-h-11 cursor-pointer items-center gap-3 rounded-xl px-3 py-2 hover:bg-soft"><input type="checkbox" checked={picked.includes(n)} onChange={() => toggle(n)} className="h-5 w-5 accent-black" /><span>{n}</span></label></li>
            ))}
            <li className="mt-1 border-t border-line pt-1"><label className="flex min-h-11 cursor-pointer items-center gap-3 rounded-xl px-3 py-2 font-bold hover:bg-soft"><input type="checkbox" checked={all} onChange={() => setPicked(all ? [] : names)} className="h-5 w-5 accent-black" /><span>All services</span></label></li>
          </ul>
          <button type="button" onClick={close} className="btn btn-primary mt-2 w-full rounded-full! py-2.5! text-center text-sm">Done</button>
        </div>
      </details>
      <div className="sm:col-span-2"><Field id="message" label="Message" error={errors.message}><textarea {...a("message", "Tell us about your project…")} rows={6} required /></Field></div>
      <div className="sm:col-span-2">
        <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full rounded-full text-center">{status === "sending" ? "SENDING…" : "SEND MESSAGE ➤"}</button>
        {status === "error" && <p role="alert" className="mt-3 text-ink underline">We couldn&apos;t send your message. Please email us directly.</p>}
        {status === "error" && why && <p className="mt-1 text-xs text-muted">Error: {why}</p>}
      </div>
    </form>
  );
}
