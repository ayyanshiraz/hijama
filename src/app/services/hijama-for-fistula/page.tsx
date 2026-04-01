import type { Metadata } from 'next';
import HijamaForFistulaPage from './HijamaForFistulaPage';

export const metadata: Metadata = {
  title: "Anal Fistula Supportive Care | Best Hijama Center in Lahore (24/7)",
  description: "Top Hijama Center in Lahore offers 24/7 care for Anal Fistula. Get sustained recovery and faster comfort with  a specialised, non-invasive Hijama approach.",
  keywords: [
    "Hijama for Anal Fistula",
    "Best Hijama Center Lahore",
    "Islamic Hijama Center Lahore",
    "Anal Fistula Support Lahore",
    "Cupping Therapy for Fistula",
    "Hijama Bahria Town Lahore"
  ],
  openGraph: {
    title: "Anal Fistula Supportive Care | Best Hijama Center in Lahore (24/7)",
    description: "The Top Islamic Hijama Center in Lahore offers 24/7 care for Anal Fistula. Get sustained recovery and faster comfort with our specialized, non-invasive Hijama approach.",
    url: "https://www.almadinahijamacenter.com/services/hijama-for-fistula",
    siteName: 'Al Madina Hijama Center',
    locale: 'en_PK',
    type: "website",
    images: [
      {
        url: 'https://www.almadinahijamacenter.com/services/s12.webp',
        width: 1200,
        height: 630,
        alt: 'Hijama for Anal Fistula Supportive Care',
      },
    ],
  },
};

export default function Page() {
    return <HijamaForFistulaPage />;
}