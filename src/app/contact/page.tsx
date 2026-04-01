import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Best Hijama Center in Lahore | Sunnah Hijama in Bahria Town',
  description: 'Looking for the best hijama center near me? Visit Al Madina Hijama Center in Bahria Town Lahore for Sunnah Hijama services. 24/7 Home Service available.',
  alternates: {
    canonical: 'https://www.almadinahijamacenter.com/contact',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    'name': 'Al Madina Hijama Center',
    'image': 'https://www.almadinahijamacenter.com/contact.webp',
    'telephone': '+923007598000',
    'url': 'https://www.almadinahijamacenter.com/contact',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'MashaAllah Center, 213-A, Commercial Sector C Bahria Town',
      'addressLocality': 'Lahore',
      'postalCode': '53720',
      'addressCountry': 'PK'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '31.3685',
      'longitude': '74.1865'
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      'opens': '00:00',
      'closes': '23:59'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}