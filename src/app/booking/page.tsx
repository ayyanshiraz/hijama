import { Suspense } from 'react';
import type { Metadata } from 'next';
import BookingClient from './BookingClient';

export const metadata: Metadata = {
  title: "Book Hijama Appointment | Online Booking & Home Service Lahore",
  description: "Schedule your Hijama session online. Choose from Sunnah dates, Home Service, or Clinic Visit in Bahria Town Lahore. Certified Male & Female Staff available.",
  alternates: {
    canonical: 'https://www.almadinahijamacenter.com/booking',
  },
  openGraph: {
    title: "Book Hijama Appointment | Online Booking & Home Service Lahore",
    description: "Schedule your Hijama session online. Choose from Sunnah dates, Home Service, or Clinic Visit in Bahria Town Lahore. Certified Male & Female Staff available.",
    url: 'https://www.almadinahijamacenter.com/booking',
    siteName: 'Al Madina Hijama Center',
    locale: 'en_PK',
    type: 'website',
    images: [
      {
        url: 'https://www.almadinahijamacenter.com/ceo.webp',
        width: 1200,
        height: 630,
        alt: 'Book Appointment at Al Madina Hijama Center',
      },
    ],
  },
};

function BookingLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Loading Booking Form...
        </h1>
        <p className="mt-2 text-gray-600">Please wait a moment.</p>
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<BookingLoading />}>
      <BookingClient />
    </Suspense>
  );
}