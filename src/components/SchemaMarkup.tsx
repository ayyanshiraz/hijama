// SchemaMarkup.tsx
import React from 'react';

const LocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Al-Madina Hijama Center",
    "image": "https://www.almadinahijamacenter.com/ceo.webp",
    "url": "https://www.almadinahijamacenter.com",
    "telephone": "+92 300 7598000",
    "priceRange": "$$",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "MashaAllah Center, 213-A, opp. Car Parking Grand Mosque, Commercial Sector C Bahria Town",
        "addressLocality": "Lahore",
        "postalCode": "53720",
        "addressCountry": "PK"
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
    },
    "slogan": "One Of The Most Credible Hijama Centers In Lahore With 15 years of Experience in Hijama and Alternative medicine.",
    "specialty": "Traditional Hijama and Fire Cupping Therapy"
};

const ServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Fire Cupping",
    "name": "Fire Cupping Therapy and Specialized Hijama Services",
    "description": "We offer a wide range of specialized traditional cupping therapies including Blood Cupping (Hijama), Dry & Massage Cupping, Fire Cupping, and targeted Hijama for conditions like Pain Relief, Sports Recovery, Detox & Wellness, Fertility, PCOS, Beauty Hijama, and specific issues like Breast Cysts, Baldness, and Fistula. We provide 24/7 service with gender-specific staff (Male for Male, Female for Ladies) and convenient home service, backed by 15 years of expertise.",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Al-Madina Hijama Center",
        "image": "https://www.almadinahijamacenter.com/ceo.webp",
        "telephone": "+92 300 7598000"
    },
    "url": "https://www.almadinahijamacenter.com/services/fire-cupping"
};

const combinedJsonLd = [
    LocalBusinessSchema,
    ServiceSchema
];

export default function SchemaMarkup() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedJsonLd) }}
        />
    );
}