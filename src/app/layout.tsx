import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Script from 'next/script';

const GA_TRACKING_ID = 'AW-17679136193';
const CONTACT_CONVERSION_ID = 'AW-17679136193/M2glCPjItMUbEMHriO5B';
const PURCHASE_EVENT_NAME = 'ads_conversion_Purchase_1';


export const metadata: Metadata = {
    title: "Best Hijama Center Lahore | Home Service & Lady Staff",
    description: "Best Hijama & Cupping therapy in Lahore. Get expert 24/7 Home Service with professional male/lady staff. 15 years experience in Sunnah healing.",
    alternates: {
        canonical: 'https://www.almadinahijamacenter.com',
    },
    openGraph: {
        title: "Best Hijama Center Lahore | Home Service & Lady Staff",
        description: "Best Hijama & Cupping therapy in Lahore. Get expert 24/7 Home Service with professional male/lady staff. 15 years experience in Sunnah healing.",
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
            
            <Script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                strategy="afterInteractive"
            />

            <Script
                id="google-ads-config-and-events"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', '${GA_TRACKING_ID}');
                        
                        function gtag_report_conversion(url) {
                          var callback = function () {
                            if (typeof(url) != 'undefined') {
                              window.location = url;
                            }
                          };
                          gtag('event', 'conversion', {
                              'send_to': '${CONTACT_CONVERSION_ID}',
                              'event_callback': callback
                          });
                          return false;
                        }
                        
                        function gtagSendEvent(url) {
                          var callback = function () {
                            if (typeof url === 'string') {
                              window.location = url;
                            }
                          };
                          gtag('event', '${PURCHASE_EVENT_NAME}', {
                            'event_callback': callback,
                            'event_timeout': 2000,
                          });
                          return false;
                        }
                    `,
                }}
                strategy="afterInteractive"
            />
            
            <body
                className={`${GeistSans.variable} ${GeistMono.variable} antialiased border-0`}
            >
                <noscript>
                  <iframe 
                    src={`https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}`}
                    height="0" 
                    width="0" 
                    style={{ display: 'none', visibility: 'hidden' }}
                  ></iframe>
                </noscript>

                <Navbar />
                {children}
                <FloatingWhatsApp />
                <Footer />
                <CookieBanner />
            </body>
        </html>
    );
}