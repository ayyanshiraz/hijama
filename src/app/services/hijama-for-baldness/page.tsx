import HijamaForBaldnessContent from './HijamaForBaldnessContent';
import { Metadata } from 'next';

// --- SEO METADATA ---
export const metadata: Metadata = {
    title: "Hijama for Hair Fall & Baldness in Lahore | Scalp Cupping 24/7",
    description: "Get certified Scalp Hijama (Cupping) therapy in Lahore for hair fall, baldness, and root strengthening. Natural, pain-free treatment by male/lady staff 24/7.",
    alternates: {
        canonical: 'https://www.almadinahijamacenter.com/services/hijama-for-baldness',
    },
    openGraph: {
        title: "Hijama for Hair Fall & Baldness in Lahore | Scalp Cupping 24/7",
        description: "Get certified Scalp Hijama (Cupping) therapy in Lahore for hair fall, baldness, and root strengthening. Natural, pain-free treatment by male/lady staff 24/7.",
        url: 'https://www.almadinahijamacenter.com/services/hijama-for-baldness',
        siteName: 'Al Madina Hijama Center',
        locale: 'en_PK',
        type: 'website',
        images: [
            {
                url: 'https://www.almadinahijamacenter.com/services/s11.webp',
                width: 1200,
                height: 630,
                alt: 'Hijama for Hair Fall & Baldness',
            },
        ],
    },
};

export default function Page() {
    return <HijamaForBaldnessContent />;
}