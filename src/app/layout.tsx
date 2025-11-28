import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Script from "next/script";
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

                <Script
                    strategy="afterInteractive"
                    src="https://www.googletagmanager.com/gtag/js?id=AW-17679136193"
                />

                <Script id="google-ads-tag" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'AW-17679136193');
                    `}
                </Script>
                
                <Script id="google-ads-contact-conversion" strategy="afterInteractive">
                    {`
                        function gtag_report_conversion(url) {
                            var callback = function () {
                                if (typeof(url) != 'undefined') {
                                    window.location = url;
                                }
                            };
                            gtag('event', 'conversion', {
                                'send_to': 'AW-17679136193/M2glCPjItMUbEMHriO5B',
                                'event_callback': callback
                            });
                            return false;
                        }
                    `}
                </Script>
                
                <Script id="google-ads-purchase-function" strategy="afterInteractive">
                    {`
                        function gtagSendEvent(url) {
                            var callback = function () {
                                if (typeof url === 'string') {
                                    window.location = url;
                                }
                            };
                            gtag('event', 'conversion', {
                                'send_to': 'AW-17679136193/Iq_HCPiItMUbEMHriO5B',
                                'event_callback': callback,
                                'event_timeout': 2000,
                            });
                            return false;
                        }
                    `}
                </Script>

            </body>
        </html>
    );
}