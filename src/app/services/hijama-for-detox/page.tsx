import DetoxWellnessContent from './DetoxWellnessContent';
import { Metadata } from 'next';

// --- SEO METADATA ---
export const metadata: Metadata = {
    title: "Hijama for Detox in Lahore | Natural Body Cleanse & Blood Purification",
    description: "Feel fresh & active! Get Hijama for Detox in Lahore to purify the blood naturally. Safe therapy at Al Madina Hijama Center. Book your session today.",
    alternates: {
        canonical: 'https://www.almadinahijamacenter.com/services/hijama-for-detox',
    },
    openGraph: {
        title: "Hijama for Detox in Lahore | Natural Body Cleanse & Blood Purification",
        description: "Feel fresh & active! Get Hijama for Detox in Lahore to purify the blood naturally. Safe therapy at Al Madina Hijama Center. Book your session today.",
        url: 'https://www.almadinahijamacenter.com/services/hijama-for-detox',
        siteName: 'Al Madina Hijama Center',
        locale: 'en_PK',
        type: 'website',
    },
};

export default function Page() {
    return <DetoxWellnessContent />;
}