'use client';

import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/Breadcrumbs';

const PrivacyPolicyPage = () => {
    const breadcrumbItems = [
        { name: 'Home', href: '/' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
    ];
    
    return (
        <main className="bg-white text-gray-800">
            {/* --- Hero Section --- */}
            <section className="relative bg-gray-800 text-white py-32 sm:py-40 flex items-center justify-center">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/privacy-policy.jpg')" }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative container mx-auto px-6 text-center z-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight"
                    >
                        Privacy Policy
                    </motion.h1>
                </div>
            </section>

            <Breadcrumbs items={breadcrumbItems} />

            {/* --- Policy Content Section --- */}
            <section className="py-16 sm:py-24">
                <div className="container mx-auto px-8 sm:px-16 max-w-4xl">
                    <div className="prose lg:prose-lg max-w-none text-black">
                        <p className="lead">Last Updated: October 20, 2025</p>
                        <p>This Privacy Policy describes how Al Madina Hijama Center (referred to as we, us, or our) collects, uses, and protects your personal information when you visit our website, almadinahijamacenter.com (the Site), and use our services.</p>
                        <p>We are committed to protecting your privacy and ensuring the confidentiality of your personal and health information.</p>
                        
                        <h2 className="mt-12 font-bold text-3xl">1. Information We Collect</h2>
                        <p>We may collect several types of information from and about users of our Site:</p>
                        <ul>
                            <li><strong>Personal Information:</strong> This includes data you provide to us directly, such as your name, email address, and phone number, typically when you fill out a booking form, contact form, or subscribe to our newsletter.</li>
                            <li><strong>Sensitive Health Information:</strong> As a medical clinic, we may collect information related to your health, medical history, and the conditions for which you seek treatment. This information is collected only with your explicit consent and is essential for providing you with safe and appropriate Hijama therapy.</li>
                            <li><strong>Usage Data:</strong> This is information collected automatically as you navigate the Site. It may include your IP address, browser type, operating system, pages you viewed, and the dates and times of your visits.</li>
                        </ul>

                        <h2 className="mt-12 font-bold text-3xl">2. How We Use Your Information</h2>
                        <p>We use the information we collect for several purposes:</p>
                        <ul>
                            <li>To schedule, confirm, and manage your appointments.</li>
                            <li>To provide you with our Hijama services safely and effectively.</li>
                            <li>To communicate with you, such as sending appointment reminders, after-care instructions, or responding to your inquiries.</li>
                            <li>To improve our website, services, and user experience by analyzing how the Site is used.</li>
                            <li>To comply with legal and regulatory requirements.</li>
                        </ul>

                        <h2 className="mt-12 font-bold text-3xl">3. How We Protect and Store Your Information</h2>
                        <p>We take the security of your data very seriously.</p>
                        <ul>
                            <li><strong>Data Security:</strong> We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction. This includes using secure protocols (like SSL) for data transmission and restricting access to personal data to authorized personnel only.</li>
                            <li><strong>Health Information:</strong> Your sensitive health information is treated with the highest level of confidentiality. It is stored securely and is only accessible by our qualified practitioners for the purpose of your treatment.</li>
                            <li><strong>Disclaimer:</strong> While we strive to use commercially acceptable means to protect your information, no method of transmission over the Internet or electronic storage is 100 percent secure.</li>
                        </ul>

                        <h2 className="mt-12 font-bold text-3xl">4. Sharing Your Information</h2>
                        <p>We do not sell, rent, or trade your personal information to third parties.</p>
                        <p>We may share your information only in the following limited circumstances:</p>
                        <ul>
                            <li><strong>With Your Consent:</strong> We may share information with other parties if you give us your explicit permission to do so.</li>
                            <li><strong>Service Providers:</strong> We may use third-party companies to help us operate our business (such as booking software or website analytics). These providers are contractually obligated to protect your information and use it only for the services we request.</li>
                            <li><strong>Legal Obligations:</strong> We may disclose your information if required to do so by law or in response to a valid legal request, such as a court order or government inquiry.</li>
                        </ul>

                        <h2 className="mt-12 font-bold text-3xl">5. Cookies and Tracking Technologies</h2>
                        <p>Our Site may use cookies and similar tracking technologies to enhance your experience and help us analyze website traffic. Cookies are small data files stored on your device.</p>
                        <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.</p>

                        <h2 className="mt-12 font-bold text-3xl">6. Your Data Rights</h2>
                        <p>You have certain rights regarding your personal information, subject to local law. These rights include:</p>
                        <ul>
                            <li>The right to access the personal information we hold about you.</li>
                            <li>The right to request that we correct any inaccurate information.</li>
                            <li>The right to request that we delete your personal information.</li>
                        </ul>
                        <p>To exercise any of these rights, please contact us using the details provided below.</p>

                        <h2 className="mt-12 font-bold text-3xl">7. Third-Party Links</h2>
                        <p>Our Site may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party’s site. We have no control over and assume no responsibility for the content or privacy practices of any third-party sites.</p>

                        <h2 className="mt-12 font-bold text-3xl">8. Privacy for Children</h2>
                        <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child without parental consent, we will take steps to remove that information.</p>

                        <h2 className="mt-12 font-bold text-3xl">9. Changes to This Privacy Policy</h2>
                        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the Last Updated date at the top. We encourage you to review this policy periodically.</p>

                        <h2 className="mt-12 font-bold text-3xl">10. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
                        <ul>
                            <li><strong>By Email:</strong> almadinahijamaclinic1400@gmail.com</li>
                            <li><strong>By Phone:</strong> +92 300 7598000</li>
                            <li><strong>By Mail:</strong> MashaAllah Center, 213-A, opp. Car Parking Grand Mosque, Commercial Sector C Bahria Town, Lahore, 53720</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PrivacyPolicyPage;

