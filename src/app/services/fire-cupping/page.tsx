// The file should be saved as page.tsx (Server Component)

import { Metadata } from 'next';
import FireCuppingPage from './fire-cupping'; // Import your client component

// SEO METADATA SETUP (Meta Title and Meta Description are here)
export const metadata: Metadata = {
  title: 'Fire Cupping Therapy in Lahore for Pain Relief | Ladies Home Service 24/7',
  description: 'Find certified Fire Cupping (Chinese Cupping) specialists in Lahore for deep pain relief. Female staff, 24/7 home service, complete privacy/parda, and healing guaranteed via the Islamic way. Book now!',
  // You can add more SEO fields here:
  keywords: ['Fire Cupping Lahore', 'Chinese Cupping Home Service', 'Deep Muscle Pain Treatment', 'Hijama Center Lahore'],
  openGraph: {
    title: 'Fire Cupping Therapy in Lahore for Pain Relief | Ladies Home Service 24/7',
    description: 'Find certified Fire Cupping (Chinese Cupping) specialists in Lahore for deep pain relief. Female staff, 24/7 home service, complete privacy/parda, and healing guaranteed via the Islamic way. Book now!',
    url: 'https://www.almadinahijamacenter.com/services/fire-cupping',
    siteName: 'Al Madina Hijama Center',
  },
};

// This server component imports and renders your client component
export default function FireCuppingWrapper() {
  return <FireCuppingPage />;
}