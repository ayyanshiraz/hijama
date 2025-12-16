import type { Metadata } from 'next';
import InternalHealthClient from './InternalHealthClient';

export const metadata: Metadata = {
  title: "Hijama for Internal Health: BP, Stomach & Detox Therapy in Lahore",
  description: "Control High blood pressure (BP), Acidity & Cholesterol naturally. Get Hijama for Internal Health in Bahria Town Lahore to clean the liver & kidneys.",
  alternates: {
    canonical: "https://www.almadinahijamacenter.com/services/hijama-for-internal-health",
  },
  openGraph: {
    title: "Hijama for Internal Health | Al Madina Hijama Center",
    description: "Natural therapy for High BP, Diabetes, Stomach issues, and Detox in Lahore.",
    url: "https://www.almadinahijamacenter.com/services/hijama-for-internal-health",
    siteName: 'Al Madina Hijama Center',
    locale: 'en_PK',
    type: 'website', // ✅ Fixed: Ye missing tha
    images: [
      {
        url: "https://www.almadinahijamacenter.com/services/s4.webp", // ✅ Fixed: Full URL for better social sharing
        width: 1200,
        height: 630,
        alt: "Hijama for Internal Health and Detox",
      },
    ],
  },
};

export default function InternalHealthPage() {
  return <InternalHealthClient />;
}