import type { Metadata } from 'next';
import PrivacyPolicyClient from './PrivacyPolicyClient';

export const metadata: Metadata = {
  title: "Privacy Policy | Al Madina Hijama center Lahore",
  description: "Your privacy is our priority. Learn how Al Madina Hijama Center Lahore protects patient data, medical history, and ensures complete confidentiality for male and female clients.",
  alternates: {
    canonical: 'https://almadinahijamacenter.com/privacy-policy',
  },
};

export default function Page() {
  return <PrivacyPolicyClient />;
}