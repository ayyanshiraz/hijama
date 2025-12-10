'use client';

import { CheckCircle, Shield, Clock, Sun, Moon, Droplets, Plus, Minus, ChevronRight, AlertTriangle, Zap, Facebook, Instagram, Youtube, Video, Phone } from 'lucide-react';
import { motion, AnimatePresence, Variants, Transition } from 'framer-motion';
import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import Image from 'next/image'; 
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6';

// Benefits with HTML Formatting
const benefits = [
    { icon: CheckCircle, text: '<strong>Provides Natural Relief</strong> from chronic and acute pain without relying on medication.' },
    { icon: CheckCircle, text: '<strong>Reduces Inflammation</strong> and swelling in affected areas like knees and back.' },
    { icon: CheckCircle, text: '<strong>Releases Muscle Knots</strong> and deep tissue tension.' },
    { icon: CheckCircle, text: '<strong>Improves Mobility</strong> and range of motion in stiff joints.' },
    { icon: CheckCircle, text: '<strong>Stimulates Endorphins</strong>, triggering the body&apos;s natural painkillers.' },
    { icon: CheckCircle, text: '<strong>Safe Alternative</strong> to long-term drug use or surgery.' },
];

const processSteps = [
    { icon: Droplets, title: 'Pain Point Assessment', description: 'Our specialist identifies the precise locations and root cause of your pain.' },
    { icon: Shield, title: 'Sterilization', description: 'The targeted areas are carefully sterilized to ensure a hygienic procedure.' },
    { icon: Zap, title: 'Targeted Cupping', description: 'Cups are applied to specific meridians and trigger points related to your pain.' },
    { icon: Clock, title: 'Therapeutic Action', description: 'The therapy proceeds with either Blood or Dry cupping, depending on your condition, to release pressure and toxins.' },
    { icon: Shield, title: 'After-care', description: 'The area is cleaned, and you receive tailored advice for post-treatment care to maximize pain relief.' },
];

const indications = [
    'Lower back pain and sciatica',
    'Chronic neck and shoulder tension',
    'Migraines and recurring headaches',
    'Arthritic pain in joints like knees and hips',
    'Fibromyalgia and widespread muscle pain',
    'Pain from sports injuries or repetitive strain',
    'Plantar fasciitis and foot pain'
];

const contraindications = [
    'In Periods hijama cannot be done.',
    'Directly over open wounds, fractures, or inflamed skin.',
    'If you have a bleeding disorder or are on high doses of blood thinners.',
    'During pregnancy, especially on the abdomen and lower back.',
    'If you are extremely fatigued or have a high fever.',
    'On areas with deep vein thrombosis.',
    'Certain severe medical conditions require a doctor&apos;s clearance.'
];

const preparation = [
    { icon: Sun, title: 'Before the Session', points: ['Discuss your pain points in detail with the therapist.', 'Hydrate well by drinking water throughout the day.', 'Eat a light meal 2-3 hours before your session.', 'Avoid applying any oils or lotions to the areas that will be treated.'] },
    { icon: Moon, title: 'After the Session', points: ['Rest and avoid strenuous activity for at least 24 hours.', 'Keep the treated areas warm and protected from drafts.', 'Follow any specific stretching or movement advice given by your therapist.', 'Continue to stay hydrated to support the healing process.'] },
];

const faqs = [
    {
        question: "How quickly can I expect pain relief after the session?",
        answer: "Many clients report feeling immediate relief and a sense of lightness right after the session. For chronic conditions, the full benefits may become more apparent after a day or two, or may require a series of treatments for lasting results."
    },
    {
        question: "Is this treatment better than a regular massage for pain?",
        answer: "While massage compresses muscles, Hijama works by creating negative pressure, lifting tissue to release tension and improve blood flow in a way that massage cannot. It is particularly effective for deep-seated, chronic pain and inflammation."
    },
    {
        question: "Will the treatment be applied directly to the painful area?",
        answer: "Yes, in most cases, the cups are applied to the area of pain. However, based on Prophetic tradition and therapeutic principles, cups may also be placed on related meridian points to address the root cause of the pain, not just the symptom."
    },
    {
        question: "How many sessions will I need for my chronic pain?",
        answer: "The number of sessions depends on the severity and duration of your condition. Our specialist will assess your situation and recommend a personalized treatment plan during your initial consultation. Typically, a series of 3-5 sessions can produce significant, long-term relief."
    }
];

// JSON-LD Schema data
const schema = {
    "@context": "https://schema.org",
    "@type": "TherapeuticProcedure",
    "name": "Hijama for Pain Relief in Lahore",
    "description": "A targeted, natural therapy using Blood or Dry cupping to effectively manage chronic pain, reduce inflammation, and restore mobility. It addresses the root causes of discomfort without medication.",
    "indication": [
        { "@type": "MedicalCondition", "name": "Back Pain" },
        { "@type": "MedicalCondition", "name": "Migraine" },
        { "@type": "MedicalCondition", "name": "Arthritis" },
        { "@type": "MedicalCondition", "name": "Sciatica" },
        { "@type": "MedicalCondition", "name": "Muscle Pain" }
    ],
    "bodyLocation": "Targeted application on specific pain points, commonly the back, neck, shoulders, and joints.",
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

export default function PainReliefClient() {
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
        { name: 'Hijama for Pain Relief', href: '/services/hijama-for-pain-relief' },
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
                    style={{ backgroundImage: "url('/services/s3.webp')" }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative container mx-auto px-6 text-center z-10">
                    <motion.h1 
                        {...heroAnimateProps}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight"
                    >
                        Hijama for Pain Relief
                    </motion.h1>
                    <motion.p 
                        initial={heroAnimateProps.initial}
                        animate={heroAnimateProps.animate}
                        transition={{ ...heroAnimateProps.transition, delay: 0.2 } as Transition}
                        className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
                    >
                        A targeted, natural therapy to effectively manage chronic pain, reduce inflammation, and restore mobility without medication.
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

                                {/* (H1) Page Heading & Intro */}
                                <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-teal-600">Natural Pain Relief with Hijama & Cupping Therapy in Lahore</motion.h2>
                                
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Are you tired of chronic pain dictating your life? Whether it&apos;s a persistent ache in your lower back, sharp sciatica pain, or debilitating neck stiffness, finding effective, natural relief can feel impossible. Many people rely on painkillers for a quick fix, but these only mask the symptoms; they don&apos;t solve the root cause.
                                </motion.p>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    If you are in Lahore and searching for a natural, lasting solution to pain, Hijama for Pain Relief is your answer. Our dedicated <Link href="/" className="text-teal-600 font-bold hover:underline">Hijama Center in Bahria Town, Lahore</Link>, specializes in this time-tested, prophetic healing method to help you live pain-free.
                                </motion.p>

                                {/* (H2) Specialized Treatments */}
                                <motion.h2 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-600">Our Specialized Hijama Treatments for Pain:</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    We don&apos;t believe in a one-size-fits-all approach. We design a specialized treatment plan based on your unique pain points. Our certified practitioners have extensive experience in treating:
                                </motion.p>
                                
                                {/* (H3) Back Pain */}
                                <motion.h3 variants={itemVariants} className="mt-8 text-2xl font-bold text-teal-600">Hijama for Back Pain and Lower Back Pain:</motion.h3>
                                <motion.p variants={itemVariants} className="mt-2 text-lg text-gray-600 leading-relaxed">
                                    This is our most in-demand service. Chronic discomfort, especially hijama for lower back pain, is often caused by poor posture, long sitting hours, or old injuries. We precisely target the correct hijama points for back pain to instantly release deep-seated tension.
                                </motion.p>
                                
                                {/* (H3) Sciatica Pain */}
                                <motion.h3 variants={itemVariants} className="mt-8 text-2xl font-bold text-teal-600">Hijama for Sciatica Pain Relief</motion.h3>
                                <motion.p variants={itemVariants} className="mt-2 text-lg text-gray-600 leading-relaxed">
                                    The sharp, shooting pain of sciatica that travels down the leg can be agonizing. Cupping therapy for sciatica pain is highly effective because it decompresses the sciatic nerve. Our therapists are expertly trained to identify the proper hijama points for sciatica pain.
                                </motion.p>
                                
                                {/* 🖼️ IMAGE 2: Sciatica Points */}
                                <motion.div variants={itemVariants} className="mt-8">
                                    <Image 
                                        src="/services/hijama-sciatica-points.webp" 
                                        alt="Hijama points for Sciatica and Leg Pain"
                                        width={800}
                                        height={450}
                                        className="w-full h-auto object-cover rounded-xl shadow-lg"
                                        style={{ maxHeight: '500px' }}
                                    />
                                    <p className="mt-2 text-sm text-gray-500 italic text-center">Targeted cupping points for Sciatica relief.</p>
                                </motion.div>

                                {/* (H2) Professional Center */}
                                <motion.h2 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-600">Your Professional Hijama Center in Lahore:</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    When you search for a &quot;hijama center near me,&quot; you deserve a clinic that is hygienic, safe, and professional. Our hijama center in Bahria Town, Lahore, is committed to providing the highest standard of care.
                                </motion.p>

                                {/* 🖼️ IMAGE 3: Clinic Room */}
                                <motion.div variants={itemVariants} className="mt-8">
                                    <Image 
                                        src="/services/clinic-room.webp" 
                                        alt="Sterile Hijama Clinic Room in Bahria Town Lahore"
                                        width={800}
                                        height={450}
                                        className="w-full h-auto object-cover rounded-xl shadow-lg"
                                        style={{ maxHeight: '500px' }}
                                    />
                                    <p className="mt-2 text-sm text-gray-500 italic text-center">We ensure a sterile and comfortable environment for your healing.</p>
                                </motion.div>

                                {/* Benefits Section */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-600">Key Benefits of Hijama for Pain Relief</motion.h3>
                                <motion.ul variants={staggerContainer} className="mt-6 space-y-4">
                                    {benefits.map((benefit, index) => (
                                        <motion.li key={index} variants={itemVariants} className="flex items-start">
                                            <benefit.icon className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                                            {/* HTML Rendering for Bold Text */}
                                            <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: benefit.text }} />
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                {/* Indications/Contraindications Section */}
                                <motion.div variants={itemVariants} className="mt-12">
                                    <h3 className="text-3xl font-bold text-teal-600">Is This Treatment Right for Your Pain?</h3>
                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-800 flex items-center"><CheckCircle className="h-6 w-6 text-green-600 mr-2" />Indications</h4>
                                            <p className="mt-2 text-gray-600">This therapy is highly effective for:</p>
                                            <ul className="mt-4 space-y-2 text-gray-700">
                                                {indications.map((item, index) => (
                                                    <li key={index} className="flex items-start"><ChevronRight className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" /><span>{item}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-800 flex items-center"><AlertTriangle className="h-6 w-6 text-red-600 mr-2" />Contraindications</h4>
                                            <p className="mt-2 text-gray-600">Caution is advised if you have:</p>
                                            <ul className="mt-4 space-y-2 text-gray-700">
                                                {contraindications.map((item, index) => (
                                                    <li key={index} className="flex items-start"><ChevronRight className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" /><span>{item}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-sm text-gray-500 italic">A pre-treatment consultation is essential to ensure this therapy is safe and suitable for your specific condition.</p>
                                </motion.div>

                                {/* Process Section */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-600">The Pain Relief Process</motion.h3>
                                <div className="mt-6 space-y-8">
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
                                <p className="mt-2 text-gray-600">Take the first step towards a pain-free life.</p>
                                
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
                                    <Link 
                                        href="/contact"
                                        className="mt-4 text-sm font-semibold text-teal-600 hover:text-teal-800 inline-flex items-center"
                                    >
                                        <Phone className="w-4 h-4 mr-1"/> Contact for Home Service
                                    </Link>
                                </div>

                                {/* Social Media Links Integration (Optimized Colors) */}
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <h4 className="text-lg font-semibold text-gray-800 text-center mb-4">Connect With Us</h4>
                                    <div className="flex justify-center gap-4">
                                        <a href="https://www.facebook.com/BestHijamaLahore/" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#1877F2] text-white rounded-full hover:opacity-80 transition-opacity" aria-label="Facebook">
                                            <FaFacebook className="w-5 h-5" />
                                        </a>
                                        <a href="https://www.instagram.com/almadinahijmacenter" target="_blank" rel="noopener noreferrer" className="p-2 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-full hover:opacity-80 transition-opacity" aria-label="Instagram">
                                            <FaInstagram className="w-5 h-5" />
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
                        <h3 className="text-3xl font-extrabold text-teal-500">Book Your Pain Relief Session</h3>
                        <p className="mt-4 text-xl text-gray-700 mb-8 leading-relaxed">
                            Do not wait for the pain to get worse. Take a proactive step towards a healthier life.
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
                                We have compiled answers to common questions about Hijama for Pain Relief.
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