import BreastCystsContent from './BreastCystsContent';
import { Metadata } from 'next';

// SEO Title: Hijama for Females Lahore: Breast Cysts Treatment | 24/7 Bahria Town
// Meta Description: Get specialized Breast Cysts Hijama at Al Madina Islamic Hijama Center, Lahore. Certified Female Staff ensures complete privacy. Call for 24/7 booking in Bahria Town Lahore.

export const metadata: Metadata = {
    title: "Hijama for Females Lahore: Breast Cysts Treatment | 24/7 Bahria Town",
    description: "Get specialized Breast Cysts Hijama at Al Madina Islamic Hijama Center, Lahore. Certified Female Staff ensures complete privacy. Call for 24/7 booking in Bahria Town Lahore.",
    alternates: {
        canonical: 'https://www.almadinahijamacenter.com/services/breast-cysts',
    },
    openGraph: {
        title: "Hijama for Females Lahore: Breast Cysts Treatment | 24/7 Bahria Town",
        description: "Get specialized Breast Cysts Hijama at Al Madina Islamic Hijama Center, Lahore. Certified Female Staff ensures complete privacy. Call for 24/7 booking in Bahria Town Lahore.",
        url: 'https://www.almadinahijamacenter.com/services/breast-cysts',
        siteName: 'Al Madina Hijama Center',
        locale: 'en_PK',
        type: 'website',
    },
};

export default function Page() {
    return <BreastCystsContent />;
}