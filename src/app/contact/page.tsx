import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: "Contact Us | Best Hijama Center in Lahore (24/7)",
  description: "Book your Hijama appointment today. Call us at 0300-7598000 or visit our clinic in Bahria Town, Lahore. 24/7 Home Service available.",
  alternates: {
    canonical: 'https://almadinahijamacenter.com/contact',
  },
};

export default function Page() {
  return <ContactClient />;
}