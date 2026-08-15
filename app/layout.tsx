import type { Metadata } from "next";
import { Syne, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { SITE } from "@/constants/site";
import LiveExperience from "@/components/scene/LiveExperience";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — AI Consultancy`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  metadataBase: new URL(`https://${SITE.domain}`),
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE.name} — Redesign operations with AI`,
    description: SITE.tagline,
    type: "website",
    siteName: SITE.name,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    // `summary_large_image` promises a wide image; there is no OG asset yet, so
    // the large card would render broken. Switch back once one exists.
    card: "summary",
    title: `${SITE.name} — Redesign operations with AI`,
    description: SITE.tagline,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="grain font-sans">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SmoothScroll />
        <LiveExperience>
          <Navbar />
          {/* tabIndex -1 so the skip link can actually move focus here. Without
              it the browser scrolls but leaves focus on <body>, and the next Tab
              restarts from the top of the page. */}
          <main id="main" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </LiveExperience>
      </body>
    </html>
  );
}
