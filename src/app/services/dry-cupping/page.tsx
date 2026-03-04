import DryCuppingContent from './DryCuppingContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dry Cupping & Massage Hijama in Lahore | Muscle Relief Therapy",
  description: "Relieve muscle tension with expert Dry Cupping & Massage Cupping in Lahore. Non-invasive therapy for back pain, stiffness & relaxation. 24/7 available.",
  alternates: {
    canonical: 'https://www.almadinahijamacenter.com/services/dry-cupping',
  },
  openGraph: {
    title: "Dry Cupping & Massage Hijama in Lahore | Al Madina Hijama Center",
    description: "Best Dry Cupping and Massage therapy in Lahore for chronic pain and muscle knots. Certified Male & Female specialists available for Clinic and Home visits.",
    url: 'https://www.almadinahijamacenter.com/services/dry-cupping',
    siteName: 'Al Madina Hijama Center',
    locale: 'en_PK',
    type: 'website',
    images: [
      {
        url: 'https://www.almadinahijamacenter.com/services/s2.webp',
        width: 1200,
        height: 630,
        alt: 'Dry Cupping & Massage Hijama Service',
      },
    ],
  },
};

export default function Page() {
  return <DryCuppingContent />;
}