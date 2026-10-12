"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
const links = [["Home", "/"], ["About", "/about"], ["Our Services", "/services"], ["Our Results", "/results"], ["Clients", "/clients"], ["Testimonials", "/testimonials"], ["Contact", "/contact"]];
export function Navbar() {
  const [open, setOpen] = useState(false);
  // Full-screen menu: lock the page behind it so only the menu itself can scroll; Escape closes it.
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    addEventListener("keydown", k);
    const html = document.documentElement, body = document.body, prev = [html.style.overflow, body.style.overflow];
    html.style.overflow = "hidden"; body.style.overflow = "hidden";
    return () => { removeEventListener("keydown", k); html.style.overflow = prev[0]; body.style.overflow = prev[1]; };
  }, [open]);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95">
      <nav aria-label="Main" className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-3 md:px-10">
        <Link href="/" className="flex items-center gap-2 text-[1rem] font-semibold uppercase md:text-[1.15rem] leading-none tracking-[-.02em] [font-family:var(--font-brand),var(--font-wordmark),system-ui,sans-serif]"><Image src="/logo.png" alt="" width={36} height={36} className="h-7 w-7 md:h-8 md:w-8" priority />{site.name.replace(/\.$/, "")}</Link>
        <ul className="hidden gap-7 text-[15px] font-semibold tracking-tight [font-family:var(--font-menu),system-ui,sans-serif] lg:flex">
          {links.map(([l, h]) => <li key={h}><Link href={h} className="underline-offset-4 hover:underline">{l}</Link></li>)}
        </ul>
        <Link href="/contact" className="btn btn-primary max-lg:hidden! rounded-full px-4! py-2! text-xs lg:px-[1.6rem]! lg:py-2.5! lg:text-base [font-family:var(--font-menu),system-ui,sans-serif] lg:inline-block">LET&apos;S TALK</Link>
        <button className="-mr-2 min-h-11 [font-family:var(--font-menu),system-ui,sans-serif] lg:hidden" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}><span className="flex h-11 w-11 items-center justify-center"><span className="sr-only">{open ? "Close menu" : "Open menu"}</span><svg aria-hidden width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg></span></button>
      </nav>
      {open && (
        <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-[60] lg:hidden">
          <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="menu-fade absolute inset-0 h-full w-full cursor-default bg-black/45" />
          <aside className="menu-drawer absolute right-0 top-0 flex h-full w-[82vw] max-w-[22rem] flex-col overflow-y-auto overscroll-contain rounded-l-3xl bg-white text-black shadow-2xl [font-family:var(--font-menu),system-ui,sans-serif]">
            <div className="flex justify-end px-5 py-4">
              <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-2xl leading-none">&times;</button>
            </div>
            <ul className="flex-1 px-5 pb-8 pt-2">
              {links.map(([l, h], i) => (
                <li key={h} className="border-b border-line">
                  <Link href={h} onClick={() => setOpen(false)} className="block py-3.5 text-xl font-semibold tracking-tight">{l}</Link>
                </li>
              ))}
            </ul>
            <div className="px-5 pb-8">
              <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-primary block w-full rounded-full text-center">LET&apos;S TALK</Link>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
