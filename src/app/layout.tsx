import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import FloatingWhatsApp from '@/components/FloatingWhatsApp'; // <-- 1. IMPORT IT

export const metadata: Metadata = {
  title: "Best Hijama Center Lahore | Home Service & Lady Staff",
  description: "Best Hijama & Cupping therapy in Lahore. Get expert 24/7 Home Service with professional male/lady staff. 15 years experience in Sunnah healing.",
  alternates: {
        canonical: 'https://www.almadinahijamacenter.com',
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      // ===== ADD border-0 HERE =====
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased border-0`}
        // ============================
      >
        <Navbar />
        {children}
        <FloatingWhatsApp /> {/* <-- 2. ADD IT HERE */}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

