import BloodCuppingContent from './BloodCuppingContent'; // Make sure path matches your filename
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hijama & Wet Cupping Therapy in Lahore | Best Detox Center",
  description: "Looking for the best Hijama in Lahore? We offer certified Blood Cupping (Wet Hijama) for detox and pain relief. Sterile, safe & Sunnah-compliant therapy.",
  alternates: {
    canonical: 'https://www.almadinahijamacenter.com/services/blood-cupping',
  },
  openGraph: {
    title: "Hijama & Wet Cupping Therapy in Lahore | Best Detox Center",
    description: "Looking for the best Hijama in Lahore? We offer certified Blood Cupping (Wet Hijama) for detox and pain relief. Sterile, safe & Sunnah-compliant therapy.",
    url: 'https://www.almadinahijamacenter.com/services/blood-cupping',
    siteName: 'Al Madina Hijama Center',
    locale: 'en_PK',
    type: 'website',
  },
};

export default function Page() {
  return <BloodCuppingContent />;
}