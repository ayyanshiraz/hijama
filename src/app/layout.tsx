import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Script from 'next/script';

const GTM_ID = 'GTM-MP4L5KDH';
const GA4_MEASUREMENT_ID = 'G-CV880G5R1G';
const CLIENT_GA4_ID = 'G-Y0CHQLBF3P';
const GOOGLE_ADS_ID = 'AW-17679136193';
const CONTACT_CONVERSION_ID = 'AW-17679136193/M2glCPjItMUbEMHriO5B';
const PURCHASE_EVENT_NAME = 'ads_conversion_Purchase_1';

export const metadata: Metadata = {
metadataBase: new URL('https://www.almadinahijamacenter.com'),
title: "Best Hijama Center Lahore | 24/7 Home Service & Lady Staff",
description: "Looking for the Best Hijama Center in Lahore? Get 24/7 Home Service by certified Male & Female staff. Safe cupping for pain & detox. Book Appointment!",
alternates: {
canonical: '/',
},
verification: {
google: 'l7_HgOjYrV0g16QKEpV7oTW4pam3hJL5R08NeeZqemg',
},
openGraph: {
title: "Best Hijama Center Lahore | 24/7 Home Service & Lady Staff",
description: "Looking for the Best Hijama Center in Lahore? Get 24/7 Home Service by certified Male & Female staff. Safe cupping for pain & detox. Book Appointment!",

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
{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wet Cupping (Hijama)" } },
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
src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
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