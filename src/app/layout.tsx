import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import FloatingWhatsApp from '@/components/FloatingWhatsApp'; // <-- 1. IMPORT IT

export const metadata: Metadata = {
    title: "Al Madina Hijama Center | Expert Cupping Therapy in Bahria Town, Lahore", // Title mein bhi Bahria Town add kiya
    description: "Experience holistic healing at Al Madina Hijama Center, Bahria Town, Lahore. Our certified specialist, Mr. Jameel Ur Rehman, offers expert cupping therapy for pain relief, detox, and wellness. Book your appointment today.", // Description mein Bahria Town add kiya
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased border-0`}
        
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

