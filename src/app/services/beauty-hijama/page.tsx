import BeautyHijamaContent from './BeautyHijamaContent';
import { Metadata } from 'next';

// --- SEO METADATA ---
export const metadata: Metadata = {
  metadataBase: new URL('https://www.almadinahijamacenter.com'),
  title: "Beauty Hijama Home Service Lahore | Female Staff Facial Cupping",
  description: "Book the best Beauty Hijama and facial cupping home service in Lahore. Certified female staff for glowing skin, anti aging, and natural facelift. 24/7 available.",
  alternates: {
    canonical: '/services/beauty-hijama',
  },
  openGraph: {
    title: "Beauty Hijama Home Service Lahore | Female Staff Facial Cupping",
    description: "Book the best Beauty Hijama and facial cupping home service in Lahore. Certified female staff for glowing skin, anti aging, and natural facelift. 24/7 available.",
    url: 'https://www.almadinahijamacenter.com/services/beauty-hijama',
    siteName: 'Al Madina Hijama Center',
    locale: 'en_PK',
    type: 'website',
    images: [
      {
        url: 'https://www.almadinahijamacenter.com/services/s9.webp',
        width: 1200,
        height: 630,
        alt: 'Beauty Hijama Facial Cupping Home Service Lahore',
      },
    ],
  },
};

export default function Page() {
  return <BeautyHijamaContent />;
}