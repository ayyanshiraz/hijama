import type { Metadata } from 'next';
import PCOSPage from './PCOSPage';

export const metadata: Metadata = {
  title: "PCOS Management with Hijama | Female Specialist Lahore (24/7)",
  description: "Manage PCOS holistically with specialized Hijama therapy in Lahore. We offer 24/7 service, confidential care by dedicated female staff, and convenient home service in Bahria Town and across Lahore.",
  keywords: [
    "Hijama for PCOS",
    "PCOS Treatment Lahore",
    "Hormonal Imbalance Hijama",
    "Female Specialist Hijama Lahore",
    "24/7 Hijama Service",
    "Hijama Bahria Town Lahore"
  ],
  // 👇 Canonical URL fix (Best Practice)
  alternates: {
    canonical: 'https://almadinahijamacenter.com/services/pcos',
  },
  openGraph: {
    title: "PCOS Management with Hijama | Female Specialist Lahore (24/7)",
    description: "Manage PCOS holistically with specialized Hijama therapy in Lahore. We offer 24/7 service, confidential care by dedicated female staff, and convenient home service in Bahria Town and across Lahore.",
    url: "https://almadinahijamacenter.com/services/pcos",
    type: "website",
    images: [
      {
        url: '/images/pcos-hijama.jpg', 
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