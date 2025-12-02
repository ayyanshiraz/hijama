'use client';

import { Phone, CheckCircle, Shield, Clock, Sun, Moon, Droplets, Plus, Minus, ChevronRight, AlertTriangle, Activity } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import Image from 'next/image';
import Link from 'next/link';

// UPDATED DATA ARRAYS BASED ON NEW CONTENT
const benefits = [
    { icon: CheckCircle, text: 'Relieves pressure in the chest area, significantly reducing discomfort (especially before the monthly cycle)' },
    { icon: CheckCircle, text: 'Draws out heat and inflammation from the tissues, helping the breast tissue feel softer' },
    { icon: CheckCircle, text: 'Promotes Lymphatic Drainage by clearing blockages in the lymph vessels' },
    { icon: CheckCircle, text: 'Supports the body in naturally shrinking the size of the cysts over time' },
    { icon: CheckCircle, text: 'A non-invasive, natural, holistic approach to healing, unlike surgery' },
    { icon: CheckCircle, text: 'Improves blood circulation and brings fresh oxygen to the cells' },
];

const processSteps = [
    { icon: Droplets, title: 'Sensitive Consultation', description: 'A private and respectful consultation with our female specialist to discuss your concerns.' },
    { icon: Shield, title: 'Gentle Preparation', description: 'The area is assessed and gently sterilized, ensuring complete comfort and hygiene.' },
    { icon: Activity, title: 'Targeted Application', description: 'Small cups are carefully placed on specific points around the breast tissue (not directly on the cyst) to promote circulation.' },
    { icon: Clock, title: 'Therapeutic Session', description: 'A combination of gentle Dry and Blood cupping is used to draw out stagnation and inflammation from the surrounding area.' },
    { icon: Shield, title: 'Post-Therapy Care', description: 'The area is cleaned, and you receive guidance on after-care and breast health.' },
];

const indications = [
    'Women with diagnosed benign breast cysts or Gilti',
    'Those suffering from fibrocystic breast changes',
    'Ladies experiencing breast heaviness, swelling, or tenderness',
    'Anyone looking for lymphatic support'
];

const contraindications = [
    'During your menstrual period.',
    'Women who are pregnant or breastfeeding.',
    'On any undiagnosed or suspicious lump (a medical diagnosis is required).',
    'Individuals with bleeding disorders or on blood thinners.',
    'Patients with a history of breast cancer (requires oncologist clearance).'
];

const preparation = [
    { icon: Sun, title: 'Before the Session', points: ['It is crucial to have a medical diagnosis for your breast cysts before therapy.', 'Inform your specialist of your full medical history.', 'Wear a comfortable, loose-fitting top.', 'Stay well-hydrated before your appointment.'] },
    { icon: Moon, title: 'After the Session', points: ['Keep the area clean and covered as advised.', 'Avoid strenuous exercise, saunas, or hot tubs for 24-48 hours.', 'Drink plenty of water to support detoxification.', 'Wear a supportive, comfortable bra.'] },
];

const faqs = [
    {
        question: "Is Hijama for breast cysts safe?",
        answer: "Yes, when performed by a qualified and experienced female practitioner, it is a safe, non-invasive therapy. We never cup directly over the cyst itself but rather on surrounding points to improve flow and reduce stagnation. A prior medical diagnosis is essential for safety."
    },
    {
        question: "Does this therapy hurt?",
        answer: "This is a very gentle procedure. Our specialist is trained to be extremely careful and ensure you are comfortable. You may feel a slight pulling sensation, but it should not be painful."
    },
    {
        question: "How does Hijama help reduce cysts?",
        answer: "Hijama works by improving local blood and lymph circulation. This helps to reduce inflammation, clear metabolic waste, and promote lymphatic drainage, which can help the body naturally manage fluid-filled cysts and reduce their size and tenderness over time."
    },
    {
        question: "How many sessions will I need?",
        answer: "This depends on the individual case. Our specialist will recommend a personalized treatment plan during your consultation. Often, a series of sessions is required for optimal results."
    }
];

// JSON-LD Schema data
const schema = {
    "@context": "https://schema.org",
    "@type": "TherapeuticProcedure",
    "name": "Hijama for Breast Cysts (Gilti) | 24/7 Female Cupping Lahore",
    "description": "Get specialized Breast Cysts Hijama at Al Madina Islamic Hijama Center, Lahore. Certified Female Staff ensures complete privacy. Call for 24/7 booking in Bahria Town Lahore.",
    "indication": [
        { "@type": "MedicalCondition", "name": "Breast Cyst" },
        { "@type": "MedicalCondition", "name": "Fibrocystic Breast Disease" },
        { "@type": "MedicalCondition", "name": "Mastalgia" }
    ],
    "bodyLocation": "Breast (surrounding tissue)",
    "provider": {
        "@type": "MedicalBusiness",
        "name": "Al Madina Hijama Center",
        "url": "https://www.almadinahijamacenter.com",
        "logo": "https://www.almadinahijamacenter.com/logo.png",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Lahore",
            "addressRegion": "Punjab",
            "streetAddress": "Bahria Town, Lahore"
        },
        "areaServed": {
            "@type": "City",
            "name": "Lahore"
        }
    }
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
};

const BreastCystsContent = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
          },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    const breadcrumbItems = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Hijama for Breast Cysts', href: '/services/breast-cysts' },
    ];
    
    return (
        <main className="bg-white text-gray-800">
            {/* Injecting JSON-LD Schemas */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* --- Hero Section (SEO Title: Hijama for Females Lahore: Breast Cysts Treatment | 24/7 Bahria Town) --- */}
            <section className="relative bg-gray-800 text-white py-32 sm:py-48 flex items-center justify-center">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/services/s10.webp')" }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative container mx-auto px-6 text-center z-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight"
                    >
                        Hijama for Breast Cysts in Lahore
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
                    >
                        A focused, non-invasive therapy to help manage breast cysts (Gilti) and promote lymphatic drainage.
                    </motion.p>
                </div>
            </section>

            <Breadcrumbs items={breadcrumbItems} />

            {/* --- Main Content Section --- */}
            <section className="py-24">
                <div className="container mx-auto px-8 sm:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        
                        {/* Left Column (Main Content) - UPDATED CONTENT HERE */}
                        <div className="lg:col-span-2">
                            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                                
                                {/* H1: A Gentle Natural Approach to Breast Health with Breast Cysts Hijama for Females in Lahore */}
                                <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-gray-900">A Gentle, Natural Approach to Breast Health with Hijama for Females</motion.h2>
                                
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Breast health is a sensitive topic for women. Feeling lumps or pain in the breast can be very distressing. While medical treatment is vital, many women seek natural, supportive therapies to manage benign conditions.
                                </motion.p>
                                
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    At our specialized <Link href="/services" className="text-blue-600 hover:text-teal-700 font-semibold underline">Islamic Hijama Center for Females</Link>, Al Madina Hijama Center in Bahria Town Lahore, we offer a specialized service called Breast Cysts Hijama.
                                </motion.p>
                                
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    This female hijama therapy is strictly for benign or non-cancerous lumps, which are locally known as Gilti. It is a safe and non-invasive way to reduce discomfort and improve the overall health of the breast tissue.
                                </motion.p>
                                
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    We understand the need for privacy. Therefore, this service is performed exclusively by our certified female hijama practitioners in a completely private room, ensuring the highest level of confidentiality with a complete privacy guarantee.
                                </motion.p>

                                {/* H2: Is Hijama Suitable for Females? How Does It Work: */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-gray-900">Is Hijama Suitable for Females? How Does It Work:</motion.h3>
                                
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Many ask, &quot;Is hijama suitable for females?&quot; The answer is yes. Hijama for females works by focusing on blood flow and the lymphatic system. Cysts or lumps often form when fluids or toxins become trapped in tissues, and this stagnation causes swelling or pain.
                                </motion.p>
                                
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Our therapy targets specific hijama points for females around the breast. We do not place the cups directly on the cysts but rather around them using precise female hijama points. The gentle suction helps to pull the stagnant fluid away from the breast and towards the lymph nodes, where the body can naturally flush it out. This process improves circulation and brings fresh oxygen to the cells, helping to soften the tissue.
                                </motion.p>

                                {/* H3: Key Benefits of This Therapy for Women's Health: */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-gray-900">Key Benefits of This Therapy for Womens Health</motion.h3>
                                <motion.ul variants={staggerContainer} className="mt-6 space-y-4">
                                    {benefits.map((benefit, index) => (
                                        <motion.li key={index} variants={itemVariants} className="flex items-start">
                                            <benefit.icon className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                                            <span className="text-gray-700">{benefit.text}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                                
                                {/* Other Important Women's Health Services: */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-gray-900">Other Important Womens Health Services</motion.h3>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    While our primary focus here is breast cysts, our Islamic Hijama Center offers comprehensive care. We clarify that this treatment is for health and not hijama for breast enlargement. We also treat conditions such as skin issues with <Link href="/services/beauty-hijama" className="text-blue-600 hover:text-teal-700 font-semibold underline">hijama for female pimples</Link> and offer support for conception using hijama points for female infertility. This therapy is suitable for adult women of all ages, provided they meet the health criteria.
                                </motion.p>

                                {/* H3: Staff, Privacy, and Availability: Why Choose Our Center in Bahria Town? */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-gray-900">Staff, Privacy, and Availability: Why Choose Our Center in Bahria Town?</motion.h3>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Because this is a sensitive medical issue, we adhere to strict safety guidelines and client-focused service standards:
                                    <ul className="mt-4 space-y-2 list-disc list-inside">
                                        <li><strong>Gender-Specific Staff:</strong> Only certified female staff are available for female clients, and male staff are available for male clients.</li>
                                        <li><strong>Privacy Guaranteed:</strong> We ensure your complete comfort, dignity, and privacy at every step.</li>
                                        <li><strong>24/7 Service:</strong> We offer 24/7 Hijama Service. You can <Link href="/booking" className="text-teal-600 hover:text-teal-700 font-semibold underline">call to book your appointment</Link> at your convenience.</li>
                                    </ul>
                                </motion.p>
                                
                                
                                {/* Indications/Contraindications Section */}
                                <motion.div variants={itemVariants} className="mt-12">
                                    <h3 className="text-3xl font-bold text-gray-900">Is This Focused Therapy Right for You?</h3>
                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-800 flex items-center"><CheckCircle className="h-6 w-6 text-green-600 mr-2" />This Therapy Is Recommended For:</h4>
                                            <ul className="mt-4 space-y-2 text-gray-700">
                                                {indications.map((item, index) => (
                                                    <li key={index} className="flex items-start"><ChevronRight className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" /><span>{item}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-800 flex items-center"><AlertTriangle className="h-6 w-6 text-red-600 mr-2" />This Therapy Is NOT Suitable For:</h4>
                                            <ul className="mt-4 space-y-2 text-gray-700">
                                                {contraindications.map((item, index) => (
                                                    <li key={index} className="flex items-start"><ChevronRight className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" /><span>{item}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-sm text-gray-500 italic">It is essential to have a proper medical diagnosis from your doctor before seeking this therapy.</p>
                                </motion.div>


                                {/* Process Section */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-gray-900">The Treatment Process</motion.h3>
                                <div className="mt-6 space-y-8">
                                    {processSteps.map((step, index) => (
                                        <motion.div key={index} variants={itemVariants} className="flex items-start">
                                            <div className="flex-shrink-0 mr-4">
                                                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                                                    <step.icon className="w-6 h-6 text-teal-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-semibold text-gray-800">{step.title}</h4>
                                                <p className="text-gray-600 mt-1">{step.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Conclusion: Book Your Appointment Now */}
                                <motion.div variants={itemVariants} className="mt-16 p-8 bg-teal-50 rounded-lg shadow-inner">
                                    <h3 className="text-2xl font-bold text-teal-800">Conclusion: Book Your Appointment Now</h3>
                                    <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                                        You do not have to live with the discomfort of benign breast cysts. Our natural and Islamic cupping approach helps your body heal itself by improving flow and reducing inflammation.
                                    </p>
                                    <p className="mt-2 text-lg text-gray-700 leading-relaxed">
                                        If you have a diagnosis of benign cysts and are seeking Hijama for Females in Bahria Town, Lahore, or a 24/7 Female Hijama Center near you, visit Al Madina Hijama Center. Trust our expert female staff to care for your health with the utmost respect and a complete privacy guarantee.
                                    </p>
                                    <p className="mt-4 text-lg text-gray-700 font-semibold">
                                        To book your Hijama Appointment, you can call us anytime! Our 24/7 Hijama Service is always available.
                                    </p>
                                    <Link
                                        href="/booking"
                                        className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-[#FF6900] text-white font-bold text-lg rounded-lg shadow-md hover:brightness-90 transition-all duration-300"
                                    >
                                        <Phone className="w-5 h-5 mr-2" /> Call to Book Your 24/7 Session
                                    </Link>
                                </motion.div>


                            </motion.div>
                        </div>

                        {/* Right Column (Sidebar) - UNCHANGED */}
                        <aside className="lg:col-span-1">
                            <motion.div 
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, ease: 'easeOut' }}
                                className="sticky top-24 bg-gray-50 p-8 rounded-2xl shadow-lg"
                            >
                                <h3 className="text-2xl font-bold text-gray-900">Book Your Session</h3>
                                <p className="mt-2 text-gray-600">A confidential, specialized service for women by our female practitioners.</p>
                                
                                <div className="mt-6 space-y-2">
                                    <div>
                                        <p className="text-4xl font-extrabold text-teal-600">Rs. 300</p>
                                        <p className="text-sm text-gray-500">per cup</p>
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-gray-800">Session Duration</p>
                                        <p className="text-gray-600">Approx. 30-45 minutes</p>
                                    </div>
                                </div>


                                <Link
                                    href="/booking"
                                    className="mt-6 inline-flex w-full items-center justify-center px-6 py-4 bg-[#FF6900] text-white font-bold text-lg rounded-lg shadow-md hover:brightness-90 transition-all duration-300 transform hover:scale-105"
                                >
                                    
                                    Book Now
                                </Link>


                                <div className="mt-8 text-center">
                                    <h4 className="text-lg font-semibold text-gray-800">Your Specialist</h4>
                                    <div className="flex justify-center items-center gap-8 mt-4">
                                        <div>
                                            {/* Assuming you have an image for the female specialist at /female-specialist.webp */}
                                            <img src="/female-specialist.webp" alt="Ms. Fatima Khan" className="w-24 h-24 rounded-full mx-auto object-cover" />
                                            <p className="mt-2 font-bold">Ms. Fatima Khan</p>
                                            <p className="text-sm text-gray-600">Certified Hijama Therapist</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </aside>
                    </div>

                    {/* Preparation & After-care Section - UNCHANGED */}
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="mt-24">
                        <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-gray-900 text-center">Preparation & After-care</motion.h2>
                        <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
                            Please follow these guidelines for this sensitive therapy.
                        </motion.p>

                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                            {preparation.map((item, index) => (
                                <motion.div key={index} variants={itemVariants} className="bg-gray-50 p-8 rounded-2xl">
                                    <div className="flex items-center">
                                        <item.icon className="w-10 h-10 text-teal-600 mr-4" />
                                        <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
                                    </div>
                                    <ul className="mt-6 space-y-3 text-gray-700">
                                        {item.points.map((point, i) => (
                                            <li key={i} className="flex items-start">
                                                <ChevronRight className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                      {/* --- FAQ Section - UNCHANGED --- */}
                    <section className="mt-24">
                        <motion.div 
                            className="text-center mb-16"
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-gray-800">
                                Frequently Asked Questions
                            </motion.h2>
                            <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                                Your questions about Hijama for Breast Cysts, answered with care.
                            </motion.p>
                        </motion.div>
                        
                        <div className="max-w-4xl mx-auto flex flex-col gap-y-4">
                            {faqs.map((faq, index) => {
                                const isOpen = openFaqIndex === index;
                                return (
                                    <div key={index}>
                                        <button
                                            onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                                            className={`w-full flex justify-between items-center text-left gap-4 bg-[#1E4137] p-6 text-white transition-all duration-300 hover:bg-opacity-90 ${isOpen ? 'rounded-t-lg' : 'rounded-lg'}`}
                                        >
                                            <span className="text-lg font-semibold">{faq.question}</span>
                                            {isOpen ? <Minus className="w-5 h-5 text-white flex-shrink-0" /> : <Plus className="w-5 h-5 text-white flex-shrink-0" />}
                                        </button>
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                    className="overflow-hidden bg-white rounded-b-lg border border-t-0 border-gray-200"
                                                >
                                                    <div className="p-6">
                                                        <p className="text-gray-700 leading-relaxed">
                                                            {faq.answer}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </div>
            </section>
        </main>
    );
};

export default BreastCystsContent;