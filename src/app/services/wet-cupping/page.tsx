import WetCuppingContent from './WetCuppingContent'; 
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hijama & Wet Cupping Therapy in Lahore | Best Detox Center",
  description: "Looking for the best Hijama in Lahore? We offer certified Wet Cupping (Hijama) for detox and pain relief. Sterile, safe & Sunnah-compliant therapy.",
  alternates: {
    canonical: 'https://www.almadinahijamacenter.com/services/wet-cupping',
  },
  openGraph: {
    title: "Hijama & Wet Cupping Therapy in Lahore | Best Detox Center",
    description: "Looking for the best Hijama in Lahore? We offer certified Wet Cupping (Hijama) for detox and pain relief. Sterile, safe & Sunnah-compliant therapy.",
    url: 'https://www.almadinahijamacenter.com/services/wet-cupping',
    siteName: 'Al Madina Hijama Center',
    locale: 'en_PK',
    type: 'website',
    images: [
      {
        url: 'https://www.almadinahijamacenter.com/services/s1.webp',
        width: 1200,
        height: 630,
        alt: 'Wet Cupping Hijama Therapy',
      },
    ],
  },
};

export default function Page() {
  return <WetCuppingContent />;
}