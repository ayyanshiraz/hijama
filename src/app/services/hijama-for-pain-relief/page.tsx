import type { Metadata } from 'next';
import  PainReliefClient  from './PainReliefClient'; // YEH LINE FIX HO GAYI HAI

// This is the metadata for the page
export const metadata: Metadata = {
  title: "Hijama for Pain Relief in Lahore | Al Madina Hijama Center",
  description: "Find natural, lasting relief from back pain, sciatica, neck pain, and joint pain with expert Hijama cupping therapy at our Bahria Town, Lahore clinic.",
  alternates: {
    canonical: "/services/hijama-for-pain-relief", // This tells Google the main URL
  },
  openGraph: {
    title: "Hijama for Pain Relief in Lahore | Al Madina Hijama Center",
    description: "Tired of chronic pain? Discover natural relief with Hijama therapy for sciatica, back, and neck pain in Lahore.",
    url: "https://almadinahijamacenter.com/services/hijama-for-pain-relief",
    images: [
      {
        url: "/services/s3.webp", // This is your hero image
        width: 1200,
        height: 630,
        alt: "Hijama Cupping Therapy for Pain Relief",
      },
    ],
  },
};

// Yeh Server Component ab sirf Client Component ko render karega
export default function PainReliefPage() {
  return <PainReliefClient />;
}