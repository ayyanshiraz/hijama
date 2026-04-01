import type { Metadata } from 'next';
import ServicesContent from '../../components/ServicesContent';
import ServiceSchema from '../../components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Hijama Services in Lahore | 24/7 Home Service | Al Madina Center',
  description: 'Explore our certified Hijama services: Blood Cupping, Fire Cupping, Detox, and Pain Relief. We offer 24/7 Home Service with female staff available.',
  alternates: {
    canonical: 'https://www.almadinahijamacenter.com/services',
  },
  openGraph: {
    title: 'Best Hijama Services in Lahore - Al Madina Center',
    description: 'Pain relief, Detox, and Sunnah healing. 24/7 Home visits available.',
    url: 'https://www.almadinahijamacenter.com/services',
    siteName: 'Al Madina Hijama Center',
    // 👇 Consistency ke liye en_PK kar diya
    locale: 'en_PK',
    type: 'website',
    images: [
      {
        url: 'https://www.almadinahijamacenter.com/services/1.avif', 
        width: 1200,
        height: 630,
        alt: 'Hijama Services Overview',
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServiceSchema />
      <ServicesContent />
    </>
  );
}