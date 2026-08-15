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
    default: `${SITE.name} — Enterprise AI Product Agency`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Enterprise AI Consulting",
    "AI Product Agency Australia",
    "AI Product Agency Dubai",
    "Custom AI Workflows USA",
    "AI Automation Agency Middle East",
    "Technical AI Audits",
    "LLM Development Company",
    "Machine Learning Consulting",
  ],
  metadataBase: new URL(`https://${SITE.domain}`),
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE.name} — Redesign operations with AI in US, Europe, and Australia`,
    description: SITE.tagline,
    type: "website",
    siteName: SITE.name,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: `${SITE.name} — AI Product Engineering for Tier 1 Enterprises`,
    description: SITE.tagline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Organization"],
  name: SITE.name,
  description: SITE.description,
  url: `https://${SITE.domain}`,
  logo: `https://${SITE.domain}/icon.svg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sydney",
    addressCountry: "AU",
  },
  areaServed: ["US", "GB", "AU", "EU", "AE"],
  contactPoint: {
    "@type": "ContactPoint",
    email: SITE.email,
    contactType: "customer support",
  },
  sameAs: [SITE.linkedin],
  knowsAbout: [
    "Artificial Intelligence",
    "Workflow Automation",
    "Software Engineering",
    "Technical Audits",
    "Large Language Models",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="grain font-sans">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SmoothScroll />
        <LiveExperience>
          <Navbar />
          <main id="main" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </LiveExperience>
      </body>
    </html>
  );
}
