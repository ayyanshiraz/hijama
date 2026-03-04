import type { Metadata } from 'next';
import PCOSPage from './PCOSPage';

export const metadata: Metadata = {
  title: "PCOS Management with Hijama | Female Specialist Lahore (24/7)",
  description: "Manage PCOS holistically with specialized Hijama therapy in Bahria Town Lahore. We offer 24/7 confidential care by female staff & home service. Book today!.",
  keywords: [
    "Hijama for PCOS",
    "PCOS Treatment Lahore",
    "Hormonal Imbalance Hijama",
    "Female Specialist Hijama Lahore",
    "24/7 Hijama Service",
    "Hijama Bahria Town Lahore"
  ],
  alternates: {
    canonical: 'https://www.almadinahijamacenter.com/services/pcos',
  },
  openGraph: {
    title: "PCOS Management with Hijama | Female Specialist Lahore (24/7)",
    description: "Manage PCOS holistically with specialized Hijama therapy in Bahria Town Lahore. We offer 24/7 confidential care by female staff & home service. Book today!.",
    url: "https://www.almadinahijamacenter.com/services/pcos",
    siteName: 'Al Madina Hijama Center',
    locale: 'en_PK',
    type: "website",
    images: [
      {
        url: 'https://www.almadinahijamacenter.com/services/s13.webp',
        width: 1200,
        height: 630,
        alt: 'PCOS Hijama Therapy Lahore',
      },
    ],
  },
};

export default function Page() {
    return <PCOSPage />;
}