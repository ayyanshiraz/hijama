'use client';

import Script from 'next/script';

const SchemaMarkup = () => {
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
    "sameAs": [
      "https://www.facebook.com/BestHijamaLahore/",
      "https://www.instagram.com/almadinahijmacenter",
      "https://www.youtube.com/@almadinahijamacenter4985",
      "https://www.tiktok.com/@jameel.ur.rehman81"
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
  };

  return (
    <Script
      id="json-ld-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default SchemaMarkup;