'use client';

import { Phone, CheckCircle, Shield, Clock, Sun, Moon, Droplets, Plus, Minus, ChevronRight, AlertTriangle, Smile, Zap, Heart, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import Image from 'next/image';
import Link from 'next/link';

// --- UPDATED DATA ARRAYS BASED ON NEW CONTENT ---

const benefits = [
    { icon: Zap, text: 'Natural Anti-Aging and Wrinkle Reduction: Stimulates collagen and elastin for firmer, more youthful skin.' },
    { icon: Droplets, text: 'Clears Acne and Scars: Detoxifies the skin and aids in the removal of stagnant blood, fading old marks faster.' },
    { icon: Minus, text: 'Reduces Facial Puffiness: Encourages lymphatic drainage to remove excess fluids and achieve a contoured look.' },
    { icon: RefreshCw, text: 'Radiant and Detoxified Complexion: Instantly brightens dull skin and gives a lasting, healthy, rosy glow.' },
];

const processSteps = [
    { icon: Phone, title: 'Detailed Consultation', description: 'Our female specialist will discuss your skin history, check your facial structure, and clearly define your beauty goals.' },
    { icon: Shield, title: 'Gentle Cleansing', description: 'We thoroughly cleanse your face to remove all traces of makeup, oil, and dirt, ensuring a sterile and clean foundation.' },
    { icon: Droplets, title: 'Warm Oil Application', description: 'A high-quality, organic facial oil is gently applied to the skin to facilitate smooth movement and maximize the therapeutic benefit of the cups.' },
    { icon: Smile, title: 'Application of Suction', description: 'Small, specialized facial cups are applied to specific points. The gentle suction is used to lift facial tissue, encourage lymphatic drainage, and stimulate circulation.' },
    { icon: Clock, title: 'Therapy Phase (Moving Cupping)', description: 'The cups are typically moved across the skin following muscle lines and energy pathways, detoxifying the tissue and promoting collagen production.' },
    { icon: Heart, title: 'Post Care', description: 'The skin is wiped clean, and a soothing organic product is applied to reduce any temporary redness and calm the treated area, aiding immediate recovery.' },
];

const indications = [
    'Your facial skin looks dull, tired, or lacks luster.',
    'You are aiming to treat fine lines without using harsh chemicals.',
    'You want to address issues like stubborn acne marks or uneven pigmentation.',
    'You are seeking a natural method to reduce facial puffiness and drain toxins.'
];

const contraindications = [
    'You are currently pregnant.',
    'You have severe active skin conditions like herpes, eczema, or fungus.',
    'You have an ongoing fever or active cold/flu symptoms.',
    'You have open wounds, active sunburn, or extremely sensitive skin on the face.',
    'You have a severe bleeding disorder.'
];

const preparation = [
    { icon: Sun, title: 'Before the Session', points: ['Arrive at your appointment with a clean, makeup-free face.', 'Inform your practitioner of all skincare products and medications you use.', 'Stay well-hydrated by drinking water.', 'Avoid harsh facial treatments (e.g., chemical peels, microdermabrasion) for 3-5 days prior.'] },
    { icon: Moon, title: 'After the Session', points: ['Avoid touching the face unnecessarily for the rest of the day.', 'Do not apply any makeup for at least 24 hours.', 'Avoid direct sun exposure; use a gentle, natural sunscreen if you must be outside.', 'Keep the skin hydrated with a simple, non-irritating moisturizer.'] },
];

const faqs = [
    {
        question: "What is Female Face Hijama (Facial Cupping)?",
        answer: "Facial Cupping is a non-invasive traditional technique where specialized small cups create gentle suction on the face. This lifting action dramatically increases blood flow and lymphatic drainage, promoting collagen production for a natural lifting and anti-aging effect."
    },
    {
        question: "Does Facial Cupping hurt or leave marks?",
        answer: "No, Facial Cupping uses very light, gentle suction and is typically pain-free. Unlike body cupping, it is a moving technique, so it does not leave traditional bruise marks, though you may experience temporary redness which fades quickly."
    },
    {
        question: "How long does it take to see results?",
        answer: "Many clients notice an immediate, radiant glow and reduced puffiness after just one session. Long-term benefits, such as reduced fine lines and scar fading, are achieved through regular, consistent treatments."
    },
    {
        question: "Is this therapy performed by female specialists only in Lahore?",
        answer: "Yes, at Al Madinah Hijama Center in Bahria Town, Lahore, all Female Face Hijama services are performed exclusively by certified female practitioners in a completely private setting with a full parda guarantee."
    }
];

// JSON-LD Schema data (UPDATED with location and new service name)
const schema = {
    "@context": "https://schema.org",
    "@type": "TherapeuticProcedure",
    "name": "Female Face Hijama (Facial Cupping) in Bahria Town, Lahore",
    "description": "A specialized Facial Cupping treatment for women in Bahria Town, Lahore, focusing on natural anti-aging, tightening skin, reducing fine lines, and clearing acne scars by improving blood circulation and lymphatic drainage. Performed by certified female practitioners with a parda guarantee.",
    "indication": [
        { "@type": "MedicalCondition", "name": "Fine Lines and Wrinkles" },
        { "@type": "MedicalCondition", "name": "Acne Scars" },
        { "@type": "MedicalCondition", "name": "Facial Puffiness" },
        { "@type": "MedicalCondition", "name": "Skin Detoxification" }
    ],
    "bodyLocation": "Face",
    "provider": {
        "@type": "MedicalBusiness",
        "name": "Al Madinah Hijama Center",
        "url": "https://almadinahijamacenter.com",
        "logo": "https://almadinahijamacenter.com/logo.png"
    },
    "areaServed": {
        "@type": "City",
        "name": "Lahore"
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

const FemaleFaceHijamaPage = () => {
    // English comment for code: State management for FAQ section
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    // English comment for code: Framer Motion variants for staggered animation
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

    // English comment for code: Framer Motion variants for individual items
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    // English comment for code: Breadcrumbs navigation items
    const breadcrumbItems = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Female Face Hijama', href: '/services/female-face-hijama' },
    ];
    
    return (
        <main className="bg-white text-gray-800">
            {/* English comment for code: Injecting JSON-LD Schemas for SEO */}
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
                    style={{ backgroundImage: "url('/services/s8.webp')" }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative container mx-auto px-6 text-center z-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight"
                    >
                        Female Face Hijama (Facial Cupping) in Bahria Town, Lahore
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
                    >
                        A Natural Path to Youthful Skin: The Al Madinah Hijama Center Difference
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
                                <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-gray-900">A Natural Path to Youthful Skin: The Al Madinah Hijama Center Difference</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Many women seeking beauty solutions are tired of using harsh chemical creams or painful laser procedures. They are looking for something natural and safe. This is where Female Face Hijama, or Facial Cupping, comes in. This ancient treatment is experiencing a major comeback because of its ability to tighten and brighten the skin. It is often called a natural facelift.
                                </motion.p>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    At <Link href='/' className='text-blue-500 hover:underline'>Al Madinah Hijama </Link>Center in Bahria Town, Lahore, we bring you this therapy backed by 15 years of experience. This treatment revitalizes the skin using gentle suction to purify the blood and dramatically improve circulation. When blood flow improves, your skin receives more oxygen and nutrients, resulting in a lasting, healthy, rosy glow.
                                </motion.p>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed font-semibold text-teal-700">
                                    We ensure that certified female practitioners for our female clients perform this service exclusively. We strictly maintain privacy and hygiene and provide a complete privacy guarantee so you can relax entirely.
                                </motion.p>

                                {/* Benefits Section */}
                                <motion.h2 variants={itemVariants} className="mt-12 text-3xl font-bold text-gray-900">✨ Unlocking Youthful Skin: The Proven Benefits of Facial Cupping</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    This treatment is not just about looking good; it is about the long-term health of your skin. Here are the main benefits you will notice:
                                </motion.p>

                                {/* Individual Benefits (Includes H3 context from source material) */}
                                <motion.ul variants={staggerContainer} className="mt-6 space-y-4">
                                    {benefits.map((benefit, index) => (
                                        <motion.li key={index} variants={itemVariants} className="flex items-start bg-gray-100 p-4 rounded-lg">
                                            <benefit.icon className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                                            <span className="text-gray-700 font-medium">{benefit.text}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                {/* Process Section - New H2 */}
                                <motion.h2 variants={itemVariants} className="mt-12 text-3xl font-bold text-gray-900">🩺 The Al Madinah Female Face Hijama Protocol</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    We follow a specialized, step-by-step protocol to ensure the best, safest results, prioritizing sterility and your absolute privacy. Our certified female practitioners guide you through this gentle therapy.
                                </motion.p>
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


                                {/* Indications/Contraindications Section - New H2 */}
                                <motion.div variants={itemVariants} className="mt-12">
                                    <h2 className="text-3xl font-bold text-gray-900">✅ Consultation and Safety: Is Female Face Hijama Right for You?</h2>
                                    <p className="mt-4 text-lg text-gray-600">Always prioritize your safety and comfort. A brief consultation ensures this rejuvenating treatment is perfect for your current health profile.</p>
                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-800 flex items-center"><CheckCircle className="h-6 w-6 text-green-600 mr-2" />You Should Consider This Treatment If:</h4>
                                            <ul className="mt-4 space-y-2 text-gray-700">
                                                {indications.map((item, index) => (
                                                    <li key={index} className="flex items-start"><ChevronRight className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" /><span>{item}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-800 flex items-center"><AlertTriangle className="h-6 w-6 text-red-600 mr-2" />You Must Avoid This Treatment If:</h4>
                                            <ul className="mt-4 space-y-2 text-gray-700">
                                                {contraindications.map((item, index) => (
                                                    <li key={index} className="flex items-start"><ChevronRight className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" /><span>{item}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-sm text-gray-500 italic">Your safety is our priority. A full skin and medical history consultation is conducted by our female specialist before treatment.</p>
                                </motion.div>
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
                                <h3 className="text-2xl font-bold text-gray-900">📞 Book Your Natural Face Lift Today</h3>
                                <p className="mt-2 text-gray-600">Your face deserves better natural care. Female Face Hijama is a safe and powerful method to restore your beauty naturally.</p>
                                
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
                                            {/* English comment for code: Consider replacing with <Image> for Next.js optimization */}
                                            <img src="/female-specialist.webp" alt="Ms. Fatima Khan" className="w-24 h-24 rounded-full mx-auto object-cover" />
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
                            To ensure the best results for your facial therapy, please follow these delicate care instructions.
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
                    
                    {/* --- FIXED CTA SECTION (Below Preparation, Above FAQ) --- */}
                    <section className="mt-24 bg-teal-50 p-12 rounded-2xl shadow-xl border-t-4 border-teal-600">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-center"
                        >
                            <h2 className="text-4xl font-extrabold text-teal-800">
                                Book Your Natural Face Lift Today
                            </h2>
                            <p className="mt-4 text-xl text-gray-700 max-w-4xl mx-auto">
                                Your face deserves better natural care. Female Hijama (Facial Cupping) is a safe and powerful method to restore your beauty naturally. It cleanses, detoxifies, and rejuvenates without harsh side effects.
                            </p>
                            <p className="mt-2 text-xl text-gray-700 max-w-4xl mx-auto font-semibold">
                                Visit Al Madinah Hijama Center in Bahria Town, Lahore, today and experience this natural miracle. Our female staff is dedicated to helping you achieve the clear, glowing skin you have always dreamed of, ensuring complete privacy and comfort throughout your session.
                            </p>

                            <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                                {/* Only the single primary button remains */}
                                <Link
                                    href="/booking"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-[#FF6900] text-white font-bold text-lg rounded-lg shadow-md hover:brightness-90 transition-all duration-300 transform hover:scale-105"
                                >
                                    Book Your Consultation
                                </Link>
                            </div>
                        </motion.div>
                    </section>
                    
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
                                Your questions about Female Face Hijama (Facial Cupping), answered.
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
            
            {/* New Call to Action/Footer Section based on H2 */}
            <section className="bg-teal-700 text-white py-16 mt-16">
                <div className="container mx-auto px-8 text-center">
                    <h2 className="text-4xl font-extrabold">📞 Book Your Natural Face Lift Today</h2>
                    <p className="mt-4 text-xl max-w-4xl mx-auto">
                        Visit Al Madinah Hijama Center in Bahria Town, Lahore, today and experience this natural miracle. Our female staff is dedicated to helping you achieve the clear, glowing skin you have always dreamed of, ensuring complete privacy and comfort throughout your session.
                    </p>
                    <Link
                        href="/booking"
                        className="mt-8 inline-flex items-center justify-center px-10 py-4 bg-[#FF6900] text-white font-bold text-xl rounded-lg shadow-xl hover:brightness-90 transition-all duration-300 transform hover:scale-105"
                    >
                        Schedule Your Session
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default FemaleFaceHijamaPage;