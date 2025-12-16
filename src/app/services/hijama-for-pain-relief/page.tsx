import type { Metadata } from 'next';
import PainReliefClient from './PainReliefClient';

// This is the metadata for the page
export const metadata: Metadata = {
  title: "Hijama for Pain Relief in Lahore | Expert Cupping Therapy",
  description: "Find natural, lasting relief from back pain, sciatica, neck pain, and joint pain with expert Hijama cupping therapy at our Bahria Town, Lahore clinic.",
  alternates: {
    canonical: "https://www.almadinahijamacenter.com/services/hijama-for-pain-relief",
  },
  openGraph: {
    title: "Hijama for Pain Relief in Lahore | Al Madina Hijama Center",
    description: "Tired of chronic pain? Discover natural relief with Hijama therapy for sciatica, back, and neck pain in Lahore.",
    url: "https://www.almadinahijamacenter.com/services/hijama-for-pain-relief",
    siteName: 'Al Madina Hijama Center',
    locale: 'en_PK',
    // 👇👇👇 FIX: Added Type 👇👇👇
    type: 'website',
    images: [
      {
        url: "https://www.almadinahijamacenter.com/services/s3.webp",
        width: 1200,
        height: 630,
        alt: "Hijama Cupping Therapy for Pain Relief",
      },
    ],
  },
};

export default function PainReliefPage() {
  return <PainReliefClient />;
}