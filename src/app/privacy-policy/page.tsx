import type { Metadata } from 'next';
import PrivacyPolicyClient from './PrivacyPolicyClient';

export const metadata: Metadata = {
  title: "Privacy Policy | Al Madina Hijama center Lahore",
  description: "Your privacy is our priority. Learn how Al Madina Hijama Center Lahore protects patient data, medical history, and ensures complete confidentiality for male and female clients.",
  alternates: {
    canonical: 'https://www.almadinahijamacenter.com/privacy-policy',
  },
  openGraph: {
    title: "Privacy Policy | Al Madina Hijama center Lahore",
    description: "Your privacy is our priority. Learn how Al Madina Hijama Center Lahore protects patient data, medical history, and ensures complete confidentiality for male and female clients.",
    url: 'https://www.almadinahijamacenter.com/privacy-policy',
    siteName: 'Al Madina Hijama Center',
    locale: 'en_PK',
    type: 'website',
    images: [
      {
        url: 'https://www.almadinahijamacenter.com/privacy-policy.webp',
        width: 1200,
        height: 630,
        alt: 'Privacy Policy - Al Madina Hijama Center',
      },
    ],
  },
};

export default function Page() {
  return <PrivacyPolicyClient />;
}