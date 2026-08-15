import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // Dynamic params
    const title = searchParams.get("title") ?? "Enterprise AI Product Agency";
    const subline = searchParams.get("subline") ?? "Workflow Automation · Tech Audits · AI Engineering";

    // Standard high-fidelity Origo aesthetic
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            backgroundColor: "#0A0A0A", // Base dark theme
            backgroundImage: "radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)",
            backgroundSize: "100px 100px",
            padding: "80px",
            fontFamily: "sans-serif",
          }}
        >
          {/* Top Header / Branding */}
          <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #FFB000, #FF5E00)",
                  marginRight: "24px",
                  boxShadow: "0 0 30px rgba(255,176,0,0.5)",
                }}
              />
              <span style={{ fontSize: "42px", color: "#E8E2D6", fontWeight: 700, letterSpacing: "-1px" }}>
                Origo One
              </span>
            </div>
            <span style={{ color: "#E8E2D6", opacity: 0.5, fontSize: "28px", textTransform: "uppercase", letterSpacing: "2px", fontFamily: "monospace" }}>
              Global · Sydney
            </span>
          </div>

          {/* Main Typography */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "900px" }}>
            <h1
              style={{
                fontSize: "84px",
                fontWeight: 800,
                color: "#E8E2D6",
                lineHeight: 1.1,
                letterSpacing: "-2px",
                margin: 0,
                textWrap: "balance",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: "36px",
                color: "#E8E2D6",
                opacity: 0.7,
                margin: 0,
                letterSpacing: "-0.5px",
              }}
            >
              {subline}
            </p>
          </div>

          {/* Bottom Footer Area */}
          <div style={{ display: "flex", width: "100%", borderTop: "2px solid rgba(232,226,214,0.1)", paddingTop: "40px", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "#FFB000", fontSize: "32px", fontWeight: 600 }}>oorigone.com</span>
            <span style={{ color: "#E8E2D6", opacity: 0.5, fontSize: "24px" }}>USA · Europe · Australia · UAE</span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
