import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  // 👇 Optimized Title: Main Keywords + Location + Trust Signal
  title: "About Us | Best Hijama Center in Lahore | Certified Male & Female Staff",
  
  // 👇 Optimized Description: Includes Services, Location (Bahria Town), and USP (Sunnah/Certified)
  description: "Get to know Al Madina Hijama Center Lahore. Our certified Male & Female therapists provide authentic Sunnah Cupping Therapy in Bahria Town for pain relief, detox & wellness.",
  
  alternates: {
    canonical: 'https://almadinahijamacenter.com/about',
  },
};

export default function Page() {
  return <AboutClient />;
}