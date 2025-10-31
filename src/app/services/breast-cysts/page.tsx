'use client';

import { Phone, CheckCircle, Shield, Clock, Sun, Moon, Droplets, Plus, Minus, ChevronRight, AlertTriangle, Activity } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import Image from 'next/image';
import Link from 'next/link';




const benefits = [
    { icon: CheckCircle, text: 'Helps improve blood circulation to the breast tissue' },
    { icon: CheckCircle, text: 'Promotes lymphatic drainage to reduce fluid buildup' },
    { icon: CheckCircle, text: 'Aids in reducing localized inflammation and tenderness' },
    { icon: CheckCircle, text: 'Supports the body in softening and reducing cyst size' },
    { icon: CheckCircle, text: 'A non-invasive, natural approach to breast health' },
    { icon: CheckCircle, text: 'Can help alleviate discomfort and pain associated with cysts' },
];

const processSteps = [
    { icon: Droplets, title: 'Sensitive Consultation', description: 'A private and respectful consultation with our female specialist to discuss your concerns.' },
    { icon: Shield, title: 'Gentle Preparation', description: 'The area is assessed and gently sterilized, ensuring complete comfort and hygiene.' },
    { icon: Activity, title: 'Targeted Application', description: 'Small cups are carefully placed on specific points around the breast tissue (not directly on the cyst) to promote circulation.' },
    { icon: Clock, title: 'Therapeutic Session', description: 'A combination of gentle Dry and Blood cupping is used to draw out stagnation and inflammation from the surrounding area.' },
    { icon: Shield, title: 'Post-Therapy Care', description: 'The area is cleaned, and you receive guidance on after-care and breast health.' },
];

const indications = [
    'Benign breast cysts (Gilti)',
    'Fibrocystic breast changes',
    'Breast pain, tenderness, or swelling (Mastalgia)',
    'Lumpy breast tissue',
    'As a supportive therapy for lymphatic drainage'
];

const contraindications = [
    'In Periods hijama cannot be done.',
    'During pregnancy or while breastfeeding.',
    'Directly on open wounds, infections, or skin rashes.',
    'On any undiagnosed or suspicious lump (requires doctor clearance).',
    'Individuals with bleeding disorders or on blood thinners.',
    'History of breast cancer (requires oncologist clearance).'
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
    "name": "Hijama for Breast Cysts (Gilti)",
    "description": "A focused, non-invasive Hijama therapy for women to help manage and reduce breast cysts (Gilti) by improving local circulation, reducing inflammation, and promoting lymphatic drainage.",
    "indication": [
        { "@type": "MedicalCondition", "name": "Breast Cyst" },
        { "@type": "MedicalCondition", "name": "Fibrocystic Breast Disease" },
        { "@type": "MedicalCondition", "name": "Mastalgia" }
    ],
    "bodyLocation": "Breast (surrounding tissue)",
    "provider": {
        "@type": "MedicalBusiness",
        "name": "Al Madina Hijama Center",
        "url": "https://almadinahijamacenter.com",
        "logo": "https://almadinahijamacenter.com/logo.png"
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

const BreastCystsPage = () => {
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

            {/* --- Hero Section --- */}
            <section className="relative bg-gray-800 text-white py-32 sm:py-48 flex items-center justify-center">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/services/s10.jpg')" }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative container mx-auto px-6 text-center z-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight"
                    >
                        Hijama for Breast Cysts
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
                        
                        {/* Left Column (Main Content) */}
                        <div className="lg:col-span-2">
                            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                                <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-gray-900">A Gentle, Natural Approach to Breast Health</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Hijama for Breast Cysts is a specialized, non-invasive treatment designed to support female breast health. This therapy focuses on improving blood flow and lymphatic drainage in the chest area. By targeting specific points, it helps to reduce the buildup of fluids and toxins, which can contribute to the formation and tenderness of benign breast cysts (Gilti).
                                </motion.p>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    This is a supportive therapy aimed at reducing discomfort, inflammation, and tenderness associated with fibrocystic breast changes. This confidential service is performed only by our certified female practitioners, ensuring a safe, respectful, and comfortable environment for all clients.
                                </motion.p>

                                {/* Benefits Section */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-gray-900">Key Benefits of This Therapy</motion.h3>
                                <motion.ul variants={staggerContainer} className="mt-6 space-y-4">
                                    {benefits.map((benefit, index) => (
                                        <motion.li key={index} variants={itemVariants} className="flex items-start">
                                            <benefit.icon className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                                            <span className="text-gray-700">{benefit.text}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                {/* Indications/Contraindications Section */}
                                <motion.div variants={itemVariants} className="mt-12">
                                    <h3 className="text-3xl font-bold text-gray-900">Is This Focused Therapy for You?</h3>
                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-800 flex items-center"><CheckCircle className="h-6 w-6 text-green-600 mr-2" />Indications</h4>
                                            <p className="mt-2 text-gray-600">This therapy is recommended for managing:</p>
                                            <ul className="mt-4 space-y-2 text-gray-700">
                                                {indications.map((item, index) => (
                                                    <li key={index} className="flex items-start"><ChevronRight className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" /><span>{item}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-800 flex items-center"><AlertTriangle className="h-6 w-6 text-red-600 mr-2" />Contraindications</h4>
                                            <p className="mt-2 text-gray-600">This therapy is not suitable for:</p>
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
                            </motion.div>
                        </div>

                        {/* Right Column (Sidebar) */}
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
                                    <h4 className="text-lg font-semibold text-gray-800">Your Specialists</h4>
                                    <div className="flex justify-center items-center gap-8 mt-4">
                                        <div>
                                            {/* Assuming you have an image for the female specialist at /female-specialist.jpg */}
                                            <img src="/female-specialist.jpg" alt="Ms. Fatima Khan" className="w-24 h-24 rounded-full mx-auto object-cover" />
                                            <p className="mt-2 font-bold">Ms. Fatima Khan</p>
                                            <p className="text-sm text-gray-600">Certified Hijama Therapist</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </aside>
                    </div>

                    {/* Preparation & After-care Section */}
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

                     {/* --- FAQ Section --- */}
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

export default BreastCystsPage;