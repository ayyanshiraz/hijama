import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Script from 'next/script';

// --- UPDATED IDs ---
const GA4_MEASUREMENT_ID = 'G-CV880G5R1G'; // Naya Analytics ID
const GOOGLE_ADS_ID = 'AW-17679136193';    // Purana Ads ID
const CONTACT_CONVERSION_ID = 'AW-17679136193/M2glCPjItMUbEMHriO5B';
const PURCHASE_EVENT_NAME = 'ads_conversion_Purchase_1';

export const metadata: Metadata = {
  title: "Best Hijama Center Lahore | 24/7 Home Service & Lady Staff",
  description: "Best Hijama Center Lahore offering 24/7 Home Service. Expert Male & Female staff. Treatments for pain relief, hair fall, fertility, beauty & detox. Bahria Town & Online Booking.",
  alternates: {
    canonical: 'https://www.almadinahijamacenter.com',
  },
  openGraph: {
    title: "Best Hijama Center Lahore | 24/7 Home Service & Lady Staff",
    description: "Best Hijama Center Lahore offering 24/7 Home Service. Expert Male & Female staff. Treatments for pain relief, hair fall, fertility, beauty & detox.",
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Al Madina Hijama Center",
    "image": "https://www.almadinahijamacenter.com/logo.png",
    "description": "Best Hijama Center Lahore providing 24/7 services. We offer Islamic Sunnah Cupping, Fire Cupping, and Leech Therapy with separate male and female staff.",
    "url": "https://www.almadinahijamacenter.com/",
    "telephone": "+923007598000",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "MashaAllah Center, 213-A, opp. Car Parking Grand Mosque, Commercial Sector C Bahria Town",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "postalCode": "53720",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 31.3668,
      "longitude": 74.1834
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Hijama Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Blood Cupping (Hijama)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dry & Massage Cupping" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fire Cupping Therapy" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Female Face Hijama (Jonk Therapy)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Beauty Hijama & Detox" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hijama for PCOS & Fertility" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hijama for Hair Fall & Baldness" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hijama for Migraine & Headaches" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hijama for Back & Joint Pain" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hijama for Sciatica & Leg Pain" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hijama for Breast Cysts" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hijama for Fistula" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sports Recovery Hijama" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "24/7 Home Service Hijama" } }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "250"
    }
  }

  return (
    <html lang="en">
      {/* --- Main Google Tag Manager Script (Loads GA4) --- */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />

      {/* --- Combined Config for Analytics & Ads --- */}
      <Script
        id="google-analytics-ads-config"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Config for GA4
            gtag('config', '${GA4_MEASUREMENT_ID}');
            
            // Config for Google Ads
            gtag('config', '${GOOGLE_ADS_ID}');
            
            // Conversion Tracking Function
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
            
            // Ads Purchase Event Function
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

      <Script
        id="json-ld-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased border-0`}
      >
        <noscript>
          <iframe 
            src={`https://www.googletagmanager.com/ns.html?id=${GA4_MEASUREMENT_ID}`}
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