import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  // 👇 Optimized Title: Main Keywords + Location + Trust Signal
  title: "About Us | Best Hijama Center in Lahore | Certified Male & Female Staff",
  
  // 👇 Optimized Description: Includes Services, Location (Bahria Town), and USP (Sunnah/Certified)
  description: "Get to know Al Madina Hijama Center Lahore. Our certified Male & Female therapists provide authentic Sunnah Cupping Therapy in Bahria Town for pain relief, detox & wellness.",
  
  alternates: {
    canonical: 'https://www.almadinahijamacenter.com/about',
  },
  
  // 👇👇👇 FIX: Ye Pura Section Missing Tha 👇👇👇
  openGraph: {
    title: "About Us | Best Hijama Center in Lahore | Certified Male & Female Staff",
    description: "Get to know Al Madina Hijama Center Lahore. Our certified Male & Female therapists provide authentic Sunnah Cupping Therapy in Bahria Town for pain relief, detox & wellness.",
    url: 'https://www.almadinahijamacenter.com/about',
    siteName: 'Al Madina Hijama Center',
    locale: 'en_PK',
    type: 'website',
    images: [
      {
        url: 'https://www.almadinahijamacenter.com/ceo.webp', // About page ke liye CEO ki image best hai
        width: 1200,
        height: 630,
        alt: 'Al Madina Hijama Center - Jameel ur Rehman',
      },
    ],
  },
};

export default function Page() {
  return <AboutClient />;
}