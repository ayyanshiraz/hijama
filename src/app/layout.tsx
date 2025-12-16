import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Script from 'next/script';
// 👇 NEW: Import SchemaMarkup
import SchemaMarkup from '@/components/SchemaMarkup'; 

const GTM_ID = 'GTM-MP4L5KDH';
const GA4_MEASUREMENT_ID = 'G-CV880G5R1G';
const CLIENT_GA4_ID = 'G-Y0CHQLBF3P';
const GOOGLE_ADS_ID = 'AW-17679136193';
const CONTACT_CONVERSION_ID = 'AW-17679136193/M2glCPjItMUbEMHriO5B';
const PURCHASE_EVENT_NAME = 'ads_conversion_Purchase_1';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.almadinahijamacenter.com'),
  title: "Best Hijama Center Lahore | 24/7 Home Service & Lady Staff",
  description: "Looking for the Best Hijama Center in Lahore? Get 24/7 Home Service by certified Male & Female staff. Safe cupping for pain & detox.",
  alternates: {
    canonical: './',
  },
  verification: {
    google: 'l7_HgOjYrV0g16QKEpV7oTW4pam3hJL5R08NeeZqemg',
  },
  openGraph: {
    title: "Best Hijama Center Lahore | 24/7 Home Service & Lady Staff",
    description: "Looking for the Best Hijama Center in Lahore? Get 24/7 Home Service by certified Male & Female staff. Safe cupping for pain & detox. Book Appointment!",
    url: 'https://www.almadinahijamacenter.com/',
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
  // ❌ Removed manual jsonLd object from here to keep file clean
  
  return (
    <html lang="en">
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics-ads-config"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA4_MEASUREMENT_ID}');
          gtag('config', '${CLIENT_GA4_ID}');
          gtag('config', '${GOOGLE_ADS_ID}');
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
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        
        {/* 👇 NEW: Schema ab yahan load hoga */}
        <SchemaMarkup />

        <Navbar />
        {children}
        <FloatingWhatsApp />
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}