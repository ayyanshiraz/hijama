import BeautyHijamaContent from './BeautyHijamaContent';
import { Metadata } from 'next';

// --- SEO METADATA ---
export const metadata: Metadata = {
    title: "Beauty Hijama (Facial Cupping) in Lahore | Collagen & Glow 24/7",
    description: "Get non-invasive Beauty Hijama in Lahore for a natural facelift, reduced puffiness, and glowing skin. Certified male/female staff available 24/7.",
    alternates: {
        canonical: 'https://www.almadinahijamacenter.com/services/beauty-hijama',
    },
    openGraph: {
        title: "Beauty Hijama (Facial Cupping) in Lahore | Collagen & Glow 24/7",
        description: "Get non-invasive Beauty Hijama in Lahore for a natural facelift, reduced puffiness, and glowing skin. Certified male/female staff available 24/7.",
        url: 'https://www.almadinahijamacenter.com/services/beauty-hijama',
        siteName: 'Al Madina Hijama Center',
        locale: 'en_PK',
        type: 'website',
        images: [
            {
                url: 'https://www.almadinahijamacenter.com/services/s9.webp',
                width: 1200,
                height: 630,
                alt: 'Beauty Hijama & Facial Cupping',
            },
        ],
    },
};

export default function Page() {
    return <BeautyHijamaContent />;
}