import { Metadata } from 'next';
import FireCuppingPage from './fire-cupping';

export const metadata: Metadata = {
  title: 'Fire Cupping Lahore | Pain Relief & Ladies Home Service',
  description: 'Find certified Fire Cupping (Chinese Cupping) specialists in Lahore for-pain relief: female staff,  home service, complete privacy, and healing guaranteed.',
  keywords: ['Fire Cupping Lahore', 'Chinese Cupping Home Service', 'Deep Muscle Pain Treatment', 'Hijama Center Lahore'],
  openGraph: {
    title: 'Fire Cupping Lahore | Pain Relief & Ladies Home Service',
    description: 'Find certified Fire Cupping (Chinese Cupping) specialists in Lahore for-pain relief: female staff,  home service, complete privacy, and healing guaranteed.',
    url: 'https://www.almadinahijamacenter.com/services/fire-cupping',
    siteName: 'Al Madina Hijama Center',
    type: 'website',
    images: [
      {
        url: 'https://www.almadinahijamacenter.com/services/s7.webp',
        width: 1200,
        height: 630,
        alt: 'Fire Cupping Therapy Service in Lahore',
      },
    ],
  },
};

export default function FireCuppingWrapper() {
  return <FireCuppingPage />;
}