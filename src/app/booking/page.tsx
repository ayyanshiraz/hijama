// src/app/booking/page.tsx
import { Suspense } from 'react';
import BookingClient from './BookingClient'; // <-- Import your renamed component

// This is a simple loading component
function BookingLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Loading Booking Form...
        </h1>
        <p className="mt-2 text-gray-600">Please wait a moment.</p>
        {/* You could add a spinner here */}
      </div>
    </div>
  );
}

// This is now your main page component
export default function BookingPage() {
  return (
    <Suspense fallback={<BookingLoading />}>
      <BookingClient />
    </Suspense>
  );
}