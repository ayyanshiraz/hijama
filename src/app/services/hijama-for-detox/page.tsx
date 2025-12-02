import DetoxWellnessContent from './DetoxWellnessContent';
import { Metadata } from 'next';

// --- SEO METADATA ---
export const metadata: Metadata = {
    title: "Hijama for Detox in Lahore | Natural Body Cleanse & Blood Purification",
    description: "Feeling constantly tired due to pollution and diet? Remove harmful toxins and purify your blood with Hijama for Detox. Visit Al Madina Hijama Center in Lahore today.",
    alternates: {
        canonical: 'https://www.almadinahijamacenter.com/services/hijama-for-detox',
    },
    openGraph: {
        title: "Hijama for Detox in Lahore | Natural Body Cleanse & Blood Purification",
        description: "Feeling constantly tired due to pollution and diet? Remove harmful toxins and purify your blood with Hijama for Detox. Visit Al Madina Hijama Center in Lahore today.",
        url: 'https://www.almadinahijamacenter.com/services/hijama-for-detox',
        siteName: 'Al Madina Hijama Center',
        locale: 'en_PK',
        type: 'website',
    },
};

export default function Page() {
    return <DetoxWellnessContent />;
}