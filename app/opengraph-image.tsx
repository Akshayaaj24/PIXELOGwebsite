import { ImageResponse } from "next/og";
export const alt = "PIXELOG | Digital Marketing Agency in Thoothukudi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#000", color: "#fff" }}>
        <div style={{ fontSize: 150, fontWeight: 900, letterSpacing: -6 }}>PIXELOG</div>
        <div style={{ fontSize: 44, marginTop: 24, color: "#ddd" }}>Digital marketing and IT agency in Thoothukudi</div>
        <div style={{ fontSize: 30, marginTop: 36, color: "#999" }}>Branding · Video · Websites · Meta Ads · SEO</div>
      </div>
    ),
    size
  );
}
