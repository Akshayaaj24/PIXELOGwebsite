import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const d = await req.json().catch(() => null);
  if (!d?.name?.trim() || !/^\S+@\S+\.\S+$/.test(d.email ?? "") || (d.message ?? "").trim().length < 10)
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  const url = process.env.CONTACT_FORM_ENDPOINT; // server-only, never exposed to the browser
  if (!url) return NextResponse.json({ error: "Contact service not configured" }, { status: 503 });
  const r = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) });
  return NextResponse.json({ ok: r.ok }, { status: r.ok ? 200 : 502 });
}
