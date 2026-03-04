import BreastCystsContent from './BreastCystsContent';
import { Metadata } from 'next';

// SEO Title: Hijama for Females Lahore: Breast Cysts Treatment | 24/7 Bahria Town
// Meta Description: Get specialized Breast Cysts Hijama at Al Madina Islamic Hijama Center, Lahore. Certified Female Staff ensures complete privacy. Call for 24/7 booking in Bahria Town Lahore.

export const metadata: Metadata = {
    title: "Hijama for Breast Cysts Lahore | Female Staff | Bahria Town",
    description: "Get specialized Breast Cysts Hijama in Bahria Town Lahore. Certified female staff ensures privacy at Al Madina Center. 24/7 Booking available.",
    alternates: {
        canonical: 'https://www.almadinahijamacenter.com/services/breast-cysts',
    },
    openGraph: {
        title: "Hijama for Females Lahore: Breast Cysts Treatment | 24/7 Bahria Town",
        description: "Get specialized Breast Cysts Hijama in Bahria Town Lahore. Certified female staff ensures privacy at Al Madina Center. 24/7 Booking available.",
        url: 'https://www.almadinahijamacenter.com/services/breast-cysts',
        siteName: 'Al Madina Hijama Center',
        locale: 'en_PK',
        type: 'website',
        images: [
            {
                url: 'https://www.almadinahijamacenter.com/services/s10.webp',
                width: 1200,
                height: 630,
                alt: 'Hijama for Breast Cysts Treatment',
            },
        ],
    },
};

export default function Page() {
    return <BreastCystsContent />;
}