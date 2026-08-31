import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kyle Simmons engineering leadership portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#17212b", color: "#fffefa", padding: "72px" }}>
        <div style={{ display: "flex", fontSize: 24, color: "#8edfe1", letterSpacing: 3 }}>KYLE SIMMONS</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>Engineering leadership that stays close to the systems.</div>
          <div style={{ display: "flex", fontSize: 28, color: "#c5c7c3" }}>Platform · reliability · backend · data integrations</div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#e49a70" }}>kylesimmons.tech</div>
      </div>
    ),
    size
  );
}
