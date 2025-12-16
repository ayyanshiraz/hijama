import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: "Contact Us | Best Hijama Center in Lahore (24/7)",
  description: "Book your Hijama appointment today. Call us at 0300-7598000 or visit our clinic in Bahria Town, Lahore. 24/7 Home Service available.",
  alternates: {
    canonical: 'https://www.almadinahijamacenter.com/contact',
  },
  openGraph: {
    title: "Contact Us | Best Hijama Center in Lahore (24/7)",
    description: "Book your Hijama appointment today. Call us at 0300-7598000 or visit our clinic in Bahria Town, Lahore. 24/7 Home Service available.",
    url: 'https://www.almadinahijamacenter.com/contact',
    siteName: 'Al Madina Hijama Center',
    locale: 'en_PK',
    type: 'website',
    images: [
      {
        url: 'https://www.almadinahijamacenter.com/contact.webp',
        width: 1200,
        height: 630,
        alt: 'Contact Al Madina Hijama Center',
      },
    ],
  },
};

export default function Page() {
  return <ContactClient />;
}