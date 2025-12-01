import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
// import Script from 'next/script'; // Removed as Google tracking is removed

export const metadata: Metadata = {
    title: "Best Hijama Center Lahore | Home Service & Lady Staff",
    description: "Best Hijama & Cupping therapy in Lahore. Get expert 24/7 Home Service with professional male/lady staff. 15 years experience in Sunnah healing.",
    alternates: {
        canonical: 'https://www.almadinahijamacenter.com',
    },
    openGraph: {
        title: "Best Hijama Center Lahore | Home Service & Lady Staff",
        description: "Best Hijama & Cupping therapy in Lahore. Get expert 24/7 Home Service with professional male/lady staff. 15 years experience in Sunnah healing.",
        url: 'https://www.almadinahijamacenter.com',
        siteName: 'Al Madina Hijama Center',
        images: [
            {
                url: 'https://www.almadinahijamacenter.com/ceo.webp',
                width: 400,
                height: 450,
                alt: 'Mr Jameel ur Rehman, Expert Hijama Therapist',
            },
        ],
        locale: 'en_PK',
        type: 'website',
    },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        {/* Google tracking tags were removed from here */}
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased border-0`}
      >
        <Navbar />
        {children}
        <FloatingWhatsApp />
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}