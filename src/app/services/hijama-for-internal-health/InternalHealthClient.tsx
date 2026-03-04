'use client';

import { Phone, CheckCircle, Shield, Clock, Sun, Moon, Droplets, Plus, Minus, ChevronRight, AlertTriangle, Heart, Activity, Utensils, Zap, Filter, Facebook, Instagram, Youtube, Video } from 'lucide-react';
import { motion, AnimatePresence, Variants, Transition } from 'framer-motion';
import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import Image from 'next/image';
import Link from 'next/link';

// --- DATA ARRAYS WITH HTML FORMATTING ---
const benefits = [
    { icon: Activity, text: '<strong>Regulates Blood Pressure</strong>: Helps lower high blood pressure by reducing vascular resistance and promoting flow.' },
    { icon: Filter, text: '<strong>Detoxifies Vital Organs</strong>: Clears stagnant blood from the liver and kidneys, improving their filtration capacity.' },
    { icon: Utensils, text: '<strong>Improves Digestion</strong>: Stimulates the stomach and intestines to relieve bloating, acidity, and constipation.' },
    { icon: Heart, text: '<strong>Supports Heart Health</strong>: Helps manage cholesterol levels and reduces the workload on the cardiovascular system.' },
    { icon: Zap, text: '<strong>Boosts Immunity & Metabolism</strong>: Activates the body’s defense mechanisms and improves metabolic rate.' },
    { icon: CheckCircle, text: '<strong>Diabetes Support</strong>: Enhances circulation to extremities, helping to manage diabetic complications.' },
];

const processSteps = [
    { icon: Activity, title: 'Vital Check & History', description: 'We check your blood pressure and discuss your medical history (sugar, BP, etc.) to ensure safety.' },
    { icon: Shield, title: 'Point Selection', description: 'Specific Sunnah points are selected on the back corresponding to organs like the liver, heart, or stomach.' },
    { icon: Droplets, title: 'Sterilization', description: 'The area is thoroughly cleaned and sterilized to ensure a safe and hygienic environment.' },
    { icon: Clock, title: 'Cupping Therapy', description: 'Cups are applied to draw out toxins and stimulate organ function using controlled, gentle pressure.' },
    { icon: Zap, title: 'Revitalization', description: 'The site is cleaned and dressed. You will likely feel a sense of internal lightness and improved flow.' },
];

const indications = [
    'High Blood Pressure (Hypertension)',
    'Stomach acidity, gas, bloating, and IBS',
    'High Cholesterol levels',
    'Fatty Liver and sluggish liver function',
    'Diabetes support (improving poor circulation)',
    'Weak immune system and frequent fatigue',
    'Kidney detox and urinary health'
];

const contraindications = [
    'In Periods hijama cannot be done.', 
    'Severe organ disease (e.g., kidney failure, liver cirrhosis) without a doctor\'s consent.',
    'Individuals with pacemakers or severe heart conditions.',
    'During pregnancy.',
    'If you are on heavy medication (blood thinners), a consultation is essential.',
    'Extreme weakness or severe anemia.',
    'Immediately after a heavy meal or during fasting.'
];

const preparation = [
    { icon: Sun, title: 'Before the Session', points: ['Inform the therapist about all your health conditions and medications.', 'Stay well-hydrated for 24 hours leading up to the session.', 'Have a light, nutritious meal 2-3 hours beforehand.', 'Avoid caffeine and stimulants on the day of your therapy.'] },
    { icon: Moon, title: 'After the Session', points: ['Follow a simple, clean diet for 24-48 hours (e.g., avoid dairy, red meat, and processed foods).', 'Drink plenty of water to aid the detoxification process.', 'Allow your body to rest and avoid stressful situations.', 'Take note of any positive changes in your digestion, sleep, or energy levels.'] },
];

const faqs = [
    {
        question: "How does Hijama help with digestive issues?",
        answer: "By applying cups to specific points on the abdomen and back, Hijama can stimulate the digestive organs, improve peristalsis (gut movement), reduce inflammation, and relieve issues like bloating, gas, and constipation."
    },
    {
        question: "Can this therapy really help balance hormones?",
        answer: "Hijama helps improve blood flow to endocrine glands and supports the detoxification of excess hormones from the body. This can be particularly beneficial for managing symptoms related to conditions like PCOS and thyroid imbalances, as part of a holistic treatment plan."
    },
    {
        question: "Is this a 'detox' in the medical sense?",
        answer: "Hijama is a powerful detoxification method that has been used for centuries. It works by removing stagnant blood and metabolic waste products from just beneath the skin. This process helps to lighten the load on your body's primary detox organs, like the liver and kidneys, allowing them to function more efficiently."
    },
    {
        question: "How often should I have this therapy for general wellness?",
        answer: "For general health maintenance and detoxification, a session every 3 to 6 months is often recommended. If you are addressing a specific internal health issue, our specialist may suggest a more frequent, tailored schedule to begin with."
    }
];

// JSON-LD Schema data
const schema = {
    "@context": "https://schema.org",
    "@type": "TherapeuticProcedure",
    "name": "Hijama for Internal Health (BP, Sugar, Stomach) in Lahore",
    "description": "A restorative Hijama therapy focused on managing internal health issues like High Blood Pressure, Diabetes, and Digestive problems. Located in Bahria Town, Lahore.",
    "indication": [
        { "@type": "MedicalCondition", "name": "Hypertension" },
        { "@type": "MedicalCondition", "name": "Diabetes Mellitus" },
        { "@type": "MedicalCondition", "name": "Digestive System Diseases" },
        { "@type": "MedicalCondition", "name": "Hypercholesterolemia" }
    ],
    "bodyLocation": "Back, Neck, and Abdomen (Specific Organ Points)",
    "provider": {
        "@type": "MedicalBusiness",
        "name": "Al Madina Hijama Center",
        "url": "https://www.almadinahijamacenter.com",
        "logo": "https://www.almadinahijamacenter.com/logo.png",
        "sameAs": [
            "https://www.facebook.com/BestHijamaLahore/",
            "https://www.instagram.com/almadinahijmacenter",
            "https://www.tiktok.com/@jameel.ur.rehman81",
            "https://www.youtube.com/@almadinahijamacenter4985"
        ]
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

const InternalHealthContent = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            } as Transition,
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } as Transition },
    };

    const heroAnimateProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" } as Transition, 
    };

    const breadcrumbItems = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Hijama for Internal Health', href: '/services/hijama-for-internal-health' },
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
                    style={{ backgroundImage: "url('/services/s4.webp')" }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative container mx-auto px-6 text-center z-10">
                    <motion.h1 
                        {...heroAnimateProps}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight"
                    >
                        Hijama for Internal Health
                    </motion.h1>
                    <motion.p 
                        initial={heroAnimateProps.initial}
                        animate={heroAnimateProps.animate}
                        transition={{ ...heroAnimateProps.transition, delay: 0.2 } as Transition}
                        className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
                    >
                        A restorative therapy to detoxify organs, balance hormones, and enhance your overall vitality from within.
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

                                {/* 1. Introduction & Overview */}
                                <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-teal-600">Hijama for Internal Health: More Than Just Pain Relief</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Do you feel constantly sluggish, or are you managing chronic conditions like hypertension or digestive discomfort? Often, we focus on external pain, but true wellness starts deep inside. 
                                </motion.p>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    At <Link href="/" className="text-teal-600 font-bold hover:underline">Al Madina Hijama Center</Link> in Bahria Town, Lahore, we specialize in internal healing. We don&apos;t just treat symptoms; we use targeted Cupping Therapy to optimize the function of your vital organs.
                                </motion.p>

                                {/* 2. High BP Section */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-600">Managing High Blood Pressure Naturally</motion.h3>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Hypertension is a silent issue affecting many in Pakistan. If you are looking for a natural way to manage your levels, <strong>hijama for high blood pressure</strong> is a powerful, time-tested therapy.
                                </motion.p>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    High blood pressure often results from increased resistance in your blood vessels. Cupping therapy works by drawing stagnant blood out of the system and encouraging fresh, oxygenated blood to circulate freely. This process helps to dilate blood vessels and reduce the pressure on arterial walls.
                                </motion.p>

                                {/* 3. Stomach & Digestion Section */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-600">Digestive Relief: Hijama for Stomach Problems</motion.h3>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    In Lahore, our rich diet often leads to digestive struggles. Whether you are dealing with chronic acidity, bloating, or constipation, <strong>hijama for stomach</strong> issues can provide surprising relief. We utilize specific points on the navel and abdomen to stimulate digestive organs.
                                </motion.p>

                                {/* 4. Diabetes Support Section */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-600">Support for Diabetes and Metabolic Health</motion.h3>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Living with diabetes requires constant care. While Hijama is not a replacement for insulin, <strong>hijama for diabetes</strong> (sugar patients) is widely used to improve circulation, especially to the extremities (hands and feet), which is crucial for preventing neuropathy.
                                </motion.p>

                                {/* 5. Benefits Section */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-600">Key Benefits for Your Internal Health</motion.h3>
                                <motion.ul variants={staggerContainer} className="mt-6 space-y-4">
                                    {benefits.map((benefit, index) => (
                                        <motion.li key={index} variants={itemVariants} className="flex items-start">
                                            <benefit.icon className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                                            {/* HTML Rendering for Bold Text */}
                                            <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: benefit.text }} />
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                {/* 6. Process Section */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-600">The Internal Health Treatment Process</motion.h3>
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

                                {/* 7. Indications/Contraindications Section */}
                                <motion.div variants={itemVariants} className="mt-12">
                                    <h3 className="text-3xl font-bold text-teal-600">Is This Holistic Therapy for You?</h3>
                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-800 flex items-center"><CheckCircle className="h-6 w-6 text-green-600 mr-2" />Indications</h4>
                                            <p className="mt-2 text-gray-600">This therapy is highly recommended for:</p>
                                            <ul className="mt-4 space-y-2 text-gray-700">
                                                {indications.map((item, index) => (
                                                    <li key={index} className="flex items-start"><ChevronRight className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" /><span>{item}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-800 flex items-center"><AlertTriangle className="h-6 w-6 text-red-600 mr-2" />Contraindications</h4>
                                            <p className="mt-2 text-gray-600">Please consult our specialist before booking if you have:</p>
                                            <ul className="mt-4 space-y-2 text-gray-700">
                                                {contraindications.map((item, index) => (
                                                    <li key={index} className="flex items-start"><ChevronRight className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" /><span>{item}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-sm text-gray-500 italic">A thorough consultation is conducted to ensure the treatment is perfectly suited to your current state of health.</p>
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
                                <h3 className="text-2xl font-bold text-teal-600">Book Your Session</h3>
                                <p className="mt-2 text-gray-600">Invest in your long-term health and well-being.</p>
                                
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
                                            <Image src="/ceo.webp" alt="Mr. Jameel ur Rehman" className="w-24 h-24 rounded-full mx-auto object-cover" width={96} height={96} />
                                            <p className="mt-2 font-bold">Mr. Jameel ur Rehman</p>
                                            <p className="text-sm text-gray-600">Certified Hijama Therapist</p>
                                        </div>
                                        <div>
                                            <Image src="/female-specialist.webp" alt="Ms. Fatima Khan" className="w-24 h-24 rounded-full mx-auto object-cover" width={96} height={96} />
                                            <p className="mt-2 font-bold">Ms. Fatima Khan</p>
                                            <p className="text-sm text-gray-600">Certified Hijama Therapist</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Media Links Integration (Optimized Colors) */}
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <h4 className="text-lg font-semibold text-gray-800 text-center mb-4">Connect With Us</h4>
                                    <div className="flex justify-center gap-4">
                                        <a href="https://www.facebook.com/BestHijamaLahore/" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#1877F2] text-white rounded-full hover:opacity-80 transition-opacity" aria-label="Facebook">
                                            <Facebook className="w-5 h-5" />
                                        </a>
                                        <a href="https://www.instagram.com/almadinahijmacenter" target="_blank" rel="noopener noreferrer" className="p-2 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-full hover:opacity-80 transition-opacity" aria-label="Instagram">
                                            <Instagram className="w-5 h-5" />
                                        </a>
                                        <a href="https://www.tiktok.com/@jameel.ur.rehman81" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#000000] text-white rounded-full hover:opacity-80 transition-opacity" aria-label="TikTok">
                                            <Video className="w-5 h-5" />
                                        </a>
                                        <a href="https://www.youtube.com/@almadinahijamacenter4985" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#FF0000] text-white rounded-full hover:opacity-80 transition-opacity" aria-label="YouTube">
                                            <Youtube className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                            </motion.div>
                        </aside>
                    </div>

                    {/* Preparation & After-care Section */}
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="mt-24">
                        <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-teal-600 text-center">Preparation & After-care</motion.h2>
                        <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
                            To achieve the best results, please follow these simple but important guidelines before and after your session.
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
                    
                    {/* CTA Section */}
                    <motion.div 
                        variants={itemVariants} 
                        className="mt-16 p-10 bg-teal-50 rounded-3xl border-t-4 border-teal-500 text-center mx-auto max-w-4xl shadow-sm"
                    >
                        <h3 className="text-3xl font-extrabold text-teal-500">Book Your Wellness Session Today</h3>
                        <p className="mt-4 text-xl text-gray-700 mb-8 leading-relaxed">
                            Do not wait for health issues to escalate. Take a proactive step towards a healthier life.
                            Visit Al Madina Hijama Center to revitalize your body naturally.
                        </p>
                        
                        <Link
                            href="/booking"
                            className="inline-flex items-center justify-center px-10 py-4 bg-[#FF6900] text-white font-bold text-xl rounded-xl shadow-lg hover:brightness-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                        >
                            Book Your Consultation Today
                        </Link>
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
                                We have compiled answers to common questions about Hijama for Internal Health.
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

export default InternalHealthContent;