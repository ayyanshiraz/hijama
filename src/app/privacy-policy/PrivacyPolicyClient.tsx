'use client';

import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Shield, Clock, FileText } from 'lucide-react';

const PrivacyPolicyClient = () => {
    const breadcrumbItems = [
        { name: 'Home', href: '/' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
    ];
    
    return (
        <main className="bg-gray-50 text-black-800">
            {/* --- Hero Section --- */}
            <section className="relative bg-gray-900 text-white py-32 sm:py-40 flex items-center justify-center">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/privacy-policy.webp')" }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="relative container mx-auto px-6 text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <div className="inline-flex items-center justify-center p-3 bg-teal-600 rounded-full mb-6">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                            Privacy Policy
                        </h1>
                        <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
                            Your privacy is important to us. Learn how we protect your personal and health information.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Breadcrumbs items={breadcrumbItems} />

            {/* --- Policy Content Section (Blog Style Card) --- */}
            <section className="py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
                    >
                        {/* Header of the Card */}
                        <div className="bg-teal-50 p-8 sm:p-10 border-b border-teal-100 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <div className="flex items-center text-teal-700 font-medium">
                                <Clock className="w-5 h-5 mr-2" />
                                <span>Last Updated: December 15, 2025</span>
                            </div>
                            <div className="flex items-center text-teal-700 font-medium">
                                <FileText className="w-5 h-5 mr-2" />
                                <span>Policy Version 1.2</span>
                            </div>
                        </div>

                        {/* Content Body */}
                        <div className="p-8 sm:p-12 lg:p-16 text-black-800">
                            <div className="prose prose-lg prose-teal max-w-none text-gray-600">
                                <p className="lead text-xl text-gray-800 font-medium">
                                    This Privacy Policy describes how <strong>Al Madina Hijama Center</strong> (referred to as "we", "us", or "our") collects, uses, and protects your personal information when you visit our website, <span className="text-teal-600">almadinahijamacenter.com</span> (the "Site"), and use our services.
                                </p>
                                <p>
                                    We are committed to protecting your privacy and ensuring the confidentiality of your personal and health information.
                                </p>
                                
                                <hr className="my-10 border-gray-200" />

                                <h2 className="text-3xl font-bold text-gray-900  mb-3">1. Information We Collect</h2>
                                <p>We may collect several types of information from and about users of our Site:</p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li><strong>Personal Information:</strong> This includes data you provide to us directly, such as your name, email address, and phone number, typically when you fill out a booking form, contact form, or subscribe to our newsletter.</li>
                                    <li><strong>Sensitive Health Information:</strong> As a medical clinic, we may collect information related to your health, medical history, and the conditions for which you seek treatment. This information is collected only with your explicit consent and is essential for providing you with safe and appropriate Hijama therapy.</li>
                                    <li><strong>Usage Data:</strong> This is information collected automatically as you navigate the Site. It may include your IP address, browser type, operating system, pages you viewed, and the dates and times of your visits.</li>
                                </ul>

                                <h2 className="text-3xl font-bold text-gray-900 mt-6 mb-3">2. How We Use Your Information</h2>
                                <p>We use the information we collect for several purposes:</p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li>To schedule, confirm, and manage your appointments.</li>
                                    <li>To provide you with our Hijama services safely and effectively.</li>
                                    <li>To communicate with you, such as sending appointment reminders, after-care instructions, or responding to your inquiries.</li>
                                    <li>To improve our website, services, and user experience by analyzing how the Site is used.</li>
                                    <li>To comply with legal and regulatory requirements.</li>
                                </ul>

                                <h2 className="text-3xl font-bold text-gray-900 mt-6 mb-3">3. How We Protect and Store Your Information</h2>
                                <p>We take the security of your data very seriously.</p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li><strong>Data Security:</strong> We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction. This includes using secure protocols (like SSL) for data transmission and restricting access to personal data to authorized personnel only.</li>
                                    <li><strong>Health Information:</strong> Your sensitive health information is treated with the highest level of confidentiality. It is stored securely and is only accessible by our qualified practitioners for the purpose of your treatment.</li>
                                    <li><strong>Disclaimer:</strong> While we strive to use commercially acceptable means to protect your information, no method of transmission over the Internet or electronic storage is 100 percent secure.</li>
                                </ul>

                                <h2 className="text-3xl font-bold text-gray-900 mt-6 mb-3">4. Sharing Your Information</h2>
                                <p className='mb-3'>We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following limited circumstances:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>With Your Consent:</strong> We may share information with other parties if you give us your explicit permission to do so.</li>
                                    <li><strong>Service Providers:</strong> We may use third-party companies to help us operate our business (such as booking software or website analytics). These providers are contractually obligated to protect your information and use it only for the services we request.</li>
                                    <li><strong>Legal Obligations:</strong> We may disclose your information if required to do so by law or in response to a valid legal request, such as a court order or government inquiry.</li>
                                </ul>

                                <h2 className="text-3xl font-bold text-gray-900 mt-6 mb-3">5. Cookies and Tracking Technologies</h2>
                                <p>Our Site may use cookies and similar tracking technologies to enhance your experience and help us analyze website traffic. Cookies are small data files stored on your device.</p>
                                <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.</p>

                                <h2 className="text-3xl font-bold text-gray-900 mt-6 mb-3">6. Your Data Rights</h2>
                                <p>You have certain rights regarding your personal information, subject to local law. These rights include:</p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li>The right to access the personal information we hold about you.</li>
                                    <li>The right to request that we correct any inaccurate information.</li>
                                    <li>The right to request that we delete your personal information.</li>
                                </ul>
                                <p>To exercise any of these rights, please contact us using the details provided below.</p>

                                <h2 className="text-3xl font-bold text-gray-900 mt-6 mb-3">7. Third-Party Links</h2>
                                <p>Our Site may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party’s site. We have no control over and assume no responsibility for the content or privacy practices of any third-party sites.</p>

                                <h2 className="text-3xl font-bold text-gray-900 mt-6 mb-3">8. Privacy for Children</h2>
                                <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child without parental consent, we will take steps to remove that information.</p>

                                <h2 className="text-3xl font-bold text-gray-900 mt-6 mb-3">9. Changes to This Privacy Policy</h2>
                                <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date at the top. We encourage you to review this policy periodically.</p>

                                

                                <div className="bg-gray-50 p-8 rounded-2xl mt-6 border border-gray-100">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
                                    <p className="mb-4">If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
                                    <ul className="space-y-2 text-gray-700 font-medium">
                                        <li><span className="text-teal-600">📧 By Email:</span> almadinahijamaclinic1400@gmail.com</li>
                                        <li><span className="text-teal-600">📞 By Phone:</span> +92 300 7598000</li>
                                        <li><span className="text-teal-600">📍 By Mail:</span> MashaAllah Center, 213-A, opp. Car Parking Grand Mosque, Commercial Sector C Bahria Town, Lahore, 53720</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default PrivacyPolicyClient;