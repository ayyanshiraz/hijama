import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import FloatingWhatsApp from '@/components/FloatingWhatsApp'; // <-- 1. IMPORT IT

export const metadata: Metadata = {
  title: "Al Madina Hijama Center",
  description: "Al Madina Hijama Center",
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

