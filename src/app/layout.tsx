import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { homeData } from "@/lib/data/homeData";
import { ThemeProvider } from "@/lib/context/ThemeContext";
import TurnstileProvider from "@/components/TurnstileProvider";
import GoogleAnalyticsProvider from "@/components/analytics/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kyle Developer | Software Engineer & Community Leader",
  description:
    "Software engineer and community leader focused on building impactful solutions and empowering tech communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <TurnstileProvider />
          <GoogleAnalyticsProvider />
          <Header navLinks={homeData.navLinks} />
          <main className='flex-grow'>{children}</main>
          <Footer
            navLinks={homeData.navLinks}
            socialLinks={homeData.socialLinks}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
