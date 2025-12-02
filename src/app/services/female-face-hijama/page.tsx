import FemaleFaceHijamaContent from './FemaleFaceHijamaContent';
import { Metadata } from 'next';

// --- SEO METADATA ---
export const metadata: Metadata = {
    title: "Female Face Hijama | Natural Facelift & Glow in Bahria Town, Lahore",
    description: "Get a natural face lift with Female Face Hijama (Facial Cupping) in Bahria Town, Lahore. 15 years of experience, certified female staff, Parda guarantee.",
    alternates: {
        canonical: 'https://www.almadinahijamacenter.com/services/female-face-hijama',
    },
    openGraph: {
        title: "Female Face Hijama | Natural Facelift & Glow in Bahria Town, Lahore",
        description: "Get a natural face lift with Female Face Hijama (Facial Cupping) in Bahria Town, Lahore. 15 years of experience, certified female staff, Parda guarantee.",
        url: 'https://www.almadinahijamacenter.com/services/female-face-hijama',
        siteName: 'Al Madinah Hijama Center',
        locale: 'en_PK',
        type: 'website',
    },
};

export default function Page() {
    return <FemaleFaceHijamaContent />;
}