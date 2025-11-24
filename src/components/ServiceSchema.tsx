export default function ServiceSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Hijama & Cupping Services',
    description: '24/7 Hijama services in Lahore with Home Visit facility. Certified female staff available for ladies. 100% Islamic Sunnah method.',
    provider: {
      '@type': 'MedicalClinic',
      name: 'Al Madina Hijama Center',
      image: 'https://www.almadinahijamacenter.com/services/s1.webp',
      telephone: '+923007598000',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'MashaAllah Center, 213-A, opp. Car Parking Grand Mosque, Commercial Sector C Bahria Town',
        addressLocality: 'Lahore',
        postalCode: '53720',
        addressCountry: 'PK',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
          ],
          opens: '00:00',
          closes: '23:59',
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}