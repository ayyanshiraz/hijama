import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Script from "next/script"; // Already imported, good!
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
    title: "Best Hijama Center in Lahore - Al Madina Cupping Therapy",
    description: "Experience holistic healing at Al Madina Hijama Center, Bahria Town, Lahore. Our certified specialist, Mr. Jameel Ur Rehman, offers expert cupping therapy for pain relief, detox, and wellness. Book your appointment today.",
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
            <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased border-0`}>
                
                <Navbar />
                
                {children}
                
                <FloatingWhatsApp />
                <Footer />
                <CookieBanner />

                {/* --- GOOGLE ADS TRACKING CODE START --- */}
                {/* 1. External Script Load karein */}
                <Script
                    strategy="afterInteractive"
                    src="https://www.googletagmanager.com/gtag/js?id=AW-17679136193"
                />

                {/* 2. Config Script Run karein */}
                <Script id="google-ads-tag" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'AW-17679136193');
                    `}
                </Script>
                {/* --- GOOGLE ADS TRACKING CODE END --- */}

            </body>
        </html>
    );
}