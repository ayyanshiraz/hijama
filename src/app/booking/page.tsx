import { Suspense } from 'react';
import type { Metadata } from 'next';
import BookingClient from './BookingClient';

// 👇 1. Ye raha SEO Metadata (Google Ranking ke liye)
export const metadata: Metadata = {
  title: "Book Hijama Appointment | Online Booking & Home Service Lahore",
  description: "Schedule your Hijama session online. Choose from Sunnah dates, Home Service, or Clinic Visit in Bahria Town Lahore. Certified Male & Female Staff available.",
  alternates: {
    canonical: 'https://almadinahijamacenter.com/booking',
  },
};

// 👇 2. Loading State (Build error bachane ke liye)
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

// 👇 3. Main Page Logic
export default function BookingPage() {
  return (
    <Suspense fallback={<BookingLoading />}>
      <BookingClient />
    </Suspense>
  );
}