import DryCuppingContent from './DryCuppingContent'; // Ensure this matches your filename
import { Metadata } from 'next';

export const metadata: Metadata = {
  
  title: "Dry Cupping & Massage Hijama in Lahore | Muscle Relief Therapy",
  
  
  description: "Relieve muscle tension with expert Dry Cupping & Massage Cupping in Lahore. Non-invasive therapy for back pain, stiffness & relaxation. 24/7 Home Service available.",
  
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
  },
};

export default function Page() {
  return <DryCuppingContent />;
}