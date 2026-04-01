import SportsRecoveryContent from './SportsRecoveryContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hijama for Sports Recovery & Cupping Therapy Lahore",
  description: "Looking for the best Hijama for sports recovery in Lahore? We provide expert cupping therapy near me to treat injuries, remove toxins, and boost performance.",
  alternates: {
    canonical: 'https://www.almadinahijamacenter.com/services/hijama-for-sports-recovery',
  },
  openGraph: {
    title: "Hijama for Sports Recovery & Cupping Therapy Lahore",
    description: "Accelerate your recovery with expert sports cupping therapy in Lahore. Treat injuries, remove lactic acid, and boost performance.",
    url: 'https://www.almadinahijamacenter.com/services/hijama-for-sports-recovery',
    siteName: 'Al Madina Hijama Center',
    locale: 'en_PK',
    type: 'website',
    images: [
      {
        url: 'https://www.almadinahijamacenter.com/services/s5.webp',
        width: 1200,
        height: 630,
        alt: 'Sports Recovery Hijama Therapy',
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <SportsRecoveryContent />
    </>
  );
}