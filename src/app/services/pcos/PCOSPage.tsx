'use client';

import { Phone, CheckCircle, Shield, Clock, Sun, Moon, Droplets, Plus, Minus, ChevronRight, AlertTriangle, ShieldAlert, Facebook, Instagram, Youtube, UserCheck, Activity, Heart, Sparkles } from 'lucide-react';
import { motion, AnimatePresence, Variants, Transition } from 'framer-motion';
import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs'; 
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTiktok, FaYoutube } from 'react-icons/fa6';

const processSteps = [
    { icon: UserCheck, title: 'Holistic Consultation', description: 'Every session begins with a private consultation with our female specialist. We discuss your specific PCOS symptoms, cycle history, and health goals to tailor the treatment to your needs.' },
    { icon: Sparkles, title: 'Sterile Preparation', description: 'Hygiene is paramount. We gently sterilize specific points on the back, abdomen, and lower body to prepare the skin for the procedure.' },
    { icon: Droplets, title: 'Targeted Cupping Application', description: 'We apply blood cupping to key meridian points that correspond to the endocrine glands and the reproductive system. This targeted approach ensures the therapy reaches the areas that need it most.' },
    { icon: Activity, title: 'Hormonal Rebalancing', description: 'The suction helps purify the blood and stimulate the nervous system. This dual action encourages the body to regulate its own hormonal output naturally.' },
    { icon: Heart, title: 'Wellness Guidance', description: 'The treatment does not end when you leave. You receive a wellness plan that includes after-care advice, along with dietary and lifestyle tips specifically designed to manage PCOS.' },
];

const indications = [
    'Those diagnosed with Polycystic Ovary Syndrome (PCOS)',
    'Women experiencing irregular or absent periods (Amenorrhea)',
    'Individuals suffering from general hormonal imbalances',
    'Managing associated symptoms like acne or hirsutism',
    'Support for fertility challenges and insulin resistance'
];

const contraindications = [
    'You are currently on your period.',
    'You are pregnant or actively trying to conceive post-ovulation.',
    'You have severe anemia or very low blood pressure.',
    'You are on blood-thinning medication or have a bleeding disorder.',
    'You are taking specific hormonal medications (consultation required).'
];

const preparation = [
    { icon: Sun, title: 'Before You Arrive', points: ['Discuss your cycle and any current medications with our specialist beforehand.', 'Hydration is key, so drink plenty of water.', 'Have a light, nutritious meal 2 to 3 hours before your session.', 'Wear loose, comfortable clothing.'] },
    { icon: Moon, title: 'After the Session', points: ['Rest and avoid strenuous activity for 24 to 48 hours.', 'Continue to drink plenty of water to aid the detoxification process.', 'Follow a clean, low-glycemic diet to support hormonal balance.', 'Keep the treated areas warm and covered to prevent cold or wind exposure.'] },
];

const faqs = [
    {
        question: "How does Hijama help with PCOS?",
        answer: "Hijama aids in removing stagnant blood and reducing systemic inflammation caused by pelvic congestion. It improves fresh blood flow to the reproductive organs and helps detoxify excess hormones that may be causing chaos in your cycle, encouraging the body to regulate its own hormonal output naturally."
    },
    {
        question: "Can I get Hijama done during my period?",
        answer: "No, Hijama cannot be performed while you are on your period. The best time is typically after your cycle ends. Please consult with our female specialist to schedule the optimal time based on your specific cycle history."
    },
    {
        question: "Is there a female specialist available?",
        answer: "Yes, absolutely. We have a dedicated ladies' staff for all our female clients to ensure complete privacy and comfort. Male staff is available for male clients seeking other services."
    },
    {
        question: "Will this cure my PCOS completely?",
        answer: "Hijama is a powerful holistic therapy that supports the body's natural regulatory processes. While it significantly helps manage symptoms, improve circulation, and restore hormonal rhythm, it works best as part of a comprehensive lifestyle approach including diet and exercise."
    }
];

const schema = {
    "@context": "https://schema.org",
    "@type": "TherapeuticProcedure",
    "name": "Hijama for PCOS in Lahore",
    "description": "Manage PCOS holistically with specialized Hijama therapy in Lahore. We offer 24/7 service, confidential care by dedicated female staff, and convenient home service.",
    "indication": [
        { "@type": "MedicalCondition", "name": "Polycystic Ovary Syndrome (PCOS)" },
        { "@type": "MedicalCondition", "name": "Hormonal Imbalance" },
        { "@type": "MedicalCondition", "name": "Infertility" }
    ],
    "bodyLocation": "Back, abdomen, and lower body (endocrine points)",
    "provider": {
        "@type": "MedicalBusiness",
        "name": "Al Madina Islamic Hijama Center",
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

const PCOSPage = () => {
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
        { name: 'Hijama for PCOS', href: '/services/pcos' },
    ];
    
    return (
        <main className="bg-white text-gray-800">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <section className="relative bg-gray-800 text-white py-32 sm:py-48 flex items-center justify-center">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/services/s9.webp')" }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative container mx-auto px-6 text-center z-10">
                    <motion.h1 
                        {...heroAnimateProps}
                        className="text-4xl md:text-6xl font-extrabold tracking-tight"
                    >
                        Hijama for PCOS in Lahore
                    </motion.h1>
                    <motion.p 
                        initial={heroAnimateProps.initial}
                        animate={heroAnimateProps.animate}
                        transition={{ ...heroAnimateProps.transition, delay: 0.2 } as Transition}
                        className="mt-4 text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto"
                    >
                        Restoring rhythm and balance with specialized, holistic care.
                    </motion.p>
                </div>
            </section>

            <Breadcrumbs items={breadcrumbItems} />

            <section className="py-24">
                <div className="container mx-auto px-8 sm:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        
                        <div className="lg:col-span-2">
                            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                                
                                <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-teal-600">Restoring Rhythm and Balance with Hijama for PCOS</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Polycystic Ovary Syndrome, commonly known as PCOS, is a complex condition that disrupts the body&apos;s delicate hormonal rhythm. It is frequently characterized by inflammation, poor circulation, and stubborn hormonal imbalances. While conventional medicine often focuses on symptom masking, our specialized Hijama therapy for PCOS offers a holistic alternative. We focus on the <Link href="/services/hijama-for-detox" className="text-teal-600 hover:underline font-semibold">root causes</Link> by targeting the endocrine system directly to support the body&apos;s natural regulatory processes.
                                </motion.p>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    This therapy is not just about physical relief; it is about restoring internal harmony. As the <b>Best Hijama Center in Lahore</b>, we ensure complete privacy with a dedicated ladies&apos; staff for female clients, whether you visit our Bahria Town clinic or choose our discreet <Link href="/contact" className="text-teal-600 hover:underline font-semibold">home service option</Link>. We aim to revitalize the system from within.
                                </motion.p>
                                
                                <motion.div variants={itemVariants} className="mt-12 p-6 bg-teal-50 rounded-lg border-l-4 border-teal-600">
                                    <h3 className="text-2xl font-bold text-teal-700">How It Supports Hormonal Health</h3>
                                    <p className="mt-4 text-gray-700 leading-relaxed">
                                        The science behind this therapy lies in its ability to manipulate blood flow and detoxification. Pelvic congestion can lead to poor ovarian function. Hijama aids in removing this stagnant blood and reducing systemic inflammation. Crucially, this process helps in the detoxification of excess hormones that may be causing chaos in your cycle. The therapy improves fresh blood flow to the reproductive organs, ensuring they receive the oxygen and nutrients needed for optimal function. Our 24/7 Hijama service ensures you can schedule your treatment when it best suits your cycle and needs.
                                    </p>
                                </motion.div>

                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-600">Your Treatment Journey</motion.h3>
                                <motion.p variants={itemVariants} className="mt-2 text-gray-600">
                                    We ensure a comfortable, private, and professional environment for all our clients. We have male staff for male clients seeking other services and the dedicated ladies staff for female clients seeking this specialized Hijama for PCOS treatment.
                                </motion.p>

                                <div className="mt-8 space-y-8">
                                    {processSteps.map((step, index) => (
                                        <motion.div key={index} variants={itemVariants} className="flex items-start">
                                            <div className="flex-shrink-0 mr-4">
                                                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                                                    <step.icon className="w-6 h-6 text-teal-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-semibold text-teal-600">{step.title}</h4>
                                                <p className="text-gray-600 mt-1">{step.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div variants={itemVariants} className="mt-12">
                                    <h3 className="text-3xl font-bold text-teal-600">Is This Therapy Suitable for You?</h3>
                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-800 flex items-center"><CheckCircle className="h-6 w-6 text-green-600 mr-2" />Indications</h4>
                                            <p className="mt-2 text-gray-600">This holistic approach is highly recommended for:</p>
                                            <ul className="mt-4 space-y-2 text-gray-700">
                                                {indications.map((item, index) => (
                                                    <li key={index} className="flex items-start"><ChevronRight className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" /><span>{item}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-800 flex items-center"><AlertTriangle className="h-6 w-6 text-red-600 mr-2" />Contraindications</h4>
                                            <p className="mt-2 text-gray-600">It is not suitable if:</p>
                                            <ul className="mt-4 space-y-2 text-gray-700">
                                                {contraindications.map((item, index) => (
                                                    <li key={index} className="flex items-start"><ChevronRight className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" /><span>{item}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>

                            </motion.div>
                        </div>

                        <aside className="lg:col-span-1">
                            <motion.div 
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, ease: 'easeOut' }}
                                className="sticky top-24 bg-gray-50 p-8 rounded-2xl shadow-lg"
                            >
                                <h3 className="text-2xl font-bold text-teal-600">Book Your Session</h3>
                                <p className="mt-2 text-gray-600">Confidential, professional care by Female Specialists.</p>
                                
                                <div className="mt-6 space-y-2">
                                    <div>
                                        <p className="text-4xl font-extrabold text-teal-600">Rs. 300</p>
                                        <p className="text-sm text-gray-500">per cup</p>
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-gray-800">Clinic Location</p>
                                        <p className="text-gray-600">Bahria Town, Lahore (Home Service available)</p>
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-gray-800">Session Duration</p>
                                        <p className="text-gray-600">Approx. 45-60 minutes</p>
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
                                            <Image src="/female-specialist.webp" alt="Ms. Fatima Khan" width={96} height={96} className="w-24 h-24 rounded-full mx-auto object-cover" />
                                            <p className="mt-2 font-bold">Ms. Fatima Khan</p>
                                            <p className="text-sm text-gray-600">Certified Hijama Therapist</p>
                                        </div>
                                    </div>
                                    <Link 
                                        href="/contact"
                                        className="mt-4 text-sm font-semibold text-teal-600 hover:text-teal-800 inline-flex items-center"
                                    >
                                        <Phone className="w-4 h-4 mr-1"/> Contact for Home Service
                                    </Link>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <h4 className="text-lg font-semibold text-gray-800 text-center mb-4">Connect With Us</h4>
                                    <div className="flex justify-center gap-4">
                                        <a href="https://www.facebook.com/BestHijamaLahore/" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#1877F2] text-white rounded-full hover:opacity-80 transition-opacity" aria-label="Facebook">
                                            <FaFacebook className="w-5 h-5" />
                                        </a>
                                        <a href="https://www.instagram.com/almadinahijmacenter" target="_blank" rel="noopener noreferrer" className="p-2 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-full hover:opacity-80 transition-opacity" aria-label="Instagram">
                                            <Instagram className="w-5 h-5" />
                                        </a>
                                        <a href="https://www.tiktok.com/@jameel.ur.rehman81" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#000000] text-white rounded-full hover:opacity-80 transition-opacity" aria-label="TikTok">
                                            <FaTiktok className="w-5 h-5" />
                                        </a>
                                        <a href="https://www.youtube.com/@almadinahijamacenter4985" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#FF0000] text-white rounded-full hover:opacity-80 transition-opacity" aria-label="YouTube">
                                            <FaYoutube className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                            </motion.div>
                        </aside>
                    </div>

                    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="mt-24">
                        <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-teal-600 text-center">Optimizing Your Results</motion.h2>
                        <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
                            Preparation and after-care are vital for the success of the treatment.
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
                    
                    <motion.section 
                        className="mt-20 bg-teal-600 text-white py-10 rounded-3xl shadow-2xl" 
                            initial="hidden" 
                            animate="visible" 
                            variants={itemVariants}
                    >
                        <div className="container mx-auto px-4 sm:px-8 text-center"> 
    
                            <h2 className="text-3xl md:text-4xl font-extrabold">
                                📞 Book Your Appointment at the Best Hijama Center in Lahore
                            </h2>
                                     <p className="mt-3 text-lg font-light max-w-3xl mx-auto">
                                        Ready to find a supportive path to recovery? We provide confidential, professional care.
                                     </p>
        
                        <div className="mt-6 space-y-3 md:space-y-0 md:flex md:justify-center md:gap-6 text-base font-semibold">
                            <p>✅ Clinic Location: Bahria Town, Lahore.</p>
                            <p>⏰ Availability: 24/7 service.</p>
                            <p>👩‍⚕️ Staff: Dedicated Ladies Staff for Female clients.</p>
                        </div>

                             <Link
                                href="/booking"
                                className="mt-8 inline-flex items-center justify-center px-8 py-3 bg-[#FF6900] text-white font-bold text-lg rounded-lg shadow-xl hover:brightness-90 transition-all duration-300 transform hover:scale-105"
                             >
                                <Phone className="w-5 h-5 mr-2"/>
                                Call Us Today to Book 
                                </Link>
                            </div>
                    </motion.section>

                    <section className="mt-24">
                        <motion.div 
                            className="text-center mb-16"
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-teal-600">
                                Frequently Asked Questions
                            </motion.h2>
                            <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                                Common questions about Hijama for hormonal balance and PCOS.
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

export default PCOSPage;