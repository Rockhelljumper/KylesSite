import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/lib/context/ThemeContext";
import GoogleAnalyticsProvider from "@/components/analytics/GoogleAnalytics";
import { profile } from "@/lib/data/profile";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: "Kyle Simmons | Engineering Leadership & Platform Systems",
    template: "%s | Kyle Simmons",
  },
  description: profile.shortSummary,
  keywords: [
    "Engineering leadership",
    "Engineering Manager",
    "Platform Engineering",
    "Site Reliability Engineering",
    "SRE",
    "Software Architecture",
    "Backend Engineering",
    "Go",
    "C#",
    "SQL",
    "Azure",
    "Kubernetes",
    "Docker",
    "AI Engineering",
    "ETL",
    "Data Integration",
    "CI/CD",
    "DevSecOps",
    "PCI",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Kyle Simmons | Engineering Leadership & Platform Systems",
    description: profile.shortSummary,
    siteName: "Kyle Simmons",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Kyle Simmons engineering leadership portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyle Simmons | Engineering Leadership & Platform Systems",
    description: profile.shortSummary,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: profile.siteUrl,
  jobTitle: "Engineering leader and hands-on platform builder",
  address: { "@type": "PostalAddress", addressLocality: "Austin", addressRegion: "TX", addressCountry: "US" },
  sameAs: profile.socialLinks.map((link) => link.url),
  knowsAbout: ["Platform Engineering", "Site Reliability Engineering", "Software Architecture", "Backend Engineering", "Data Integration", "AI Engineering"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Kyle Simmons",
  url: profile.siteUrl,
  description: profile.shortSummary,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}>
        <ThemeProvider>
          <a href="#main-content" className="skip-link">Skip to content</a>
          <GoogleAnalyticsProvider />
          <Header />
          <main id="main-content" className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([personJsonLd, websiteJsonLd]) }} />
      </body>
    </html>
  );
}
