'use client';

import { Phone, CheckCircle, Shield, Clock, Sun, Moon, Droplets, Plus, Minus, ChevronRight, AlertTriangle, Zap } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';

const benefits = [
    { icon: CheckCircle, text: 'Provides natural relief from chronic and acute pain' },
    { icon: CheckCircle, text: 'Reduces inflammation and swelling in affected areas' },
    { icon: CheckCircle, text: 'Releases muscle knots and deep tissue tension' },
    { icon: CheckCircle, text: 'Improves mobility and range of motion' },
    { icon: CheckCircle, text: 'Stimulates the release of natural painkillers (endorphins)' },
    { icon: CheckCircle, text: 'Offers a safe alternative to long-term pain medication' },
];

const processSteps = [
    { icon: Droplets, title: 'Pain Point Assessment', description: 'Our specialist identifies the precise locations and root cause of your pain.' },
    { icon: Shield, title: 'Sterilization', description: 'The targeted areas are carefully sterilized to ensure a hygienic procedure.' },
    { icon: Zap, title: 'Targeted Cupping', description: 'Cups are applied to specific meridians and trigger points related to your pain.' },
    { icon: Clock, title: 'Therapeutic Action', description: 'The therapy proceeds with either Wet or Dry cupping, depending on your condition, to release pressure and toxins.' },
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
    'Directly over open wounds, fractures, or inflamed skin.',
    'If you have a bleeding disorder or are on high doses of blood thinners.',
    'During pregnancy, especially on the abdomen and lower back.',
    'If you are extremely fatigued or have a high fever.',
    'On areas with deep vein thrombosis.',
    'Certain severe medical conditions require a doctor\'s clearance.'
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
    "name": "Hijama for Pain Relief",
    "description": "A targeted, natural therapy using Wet or Dry cupping to effectively manage chronic pain, reduce inflammation, and restore mobility. It addresses the root causes of discomfort without medication.",
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

const PainReliefPage = () => {
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
                    style={{ backgroundImage: "url('/services/s3.jpg')" }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative container mx-auto px-6 text-center z-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight"
                    >
                        Hijama for Pain Relief
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
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
                                <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-gray-900">A Natural Approach to Pain Management</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Hijama for Pain Relief is a specialized treatment designed to address the root causes of chronic pain. By applying cups to specific points along the bodys meridians and areas of tension, this therapy helps to release blockages, reduce inflammation, and stimulate the flow of oxygenated blood. It is a time-tested, safe, and effective alternative to long-term pain medication.
                                </motion.p>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Whether you suffer from back pain, migraines, or arthritis, our certified practitioners can tailor a session to your specific needs. We offer this specialized service for both men and women, with the option of a comfortable and convenient session at your home.
                                </motion.p>

                                {/* Benefits Section */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-gray-900">Key Benefits of Hijama for Pain Relief</motion.h3>
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
                                    <h3 className="text-3xl font-bold text-gray-900">Is This Treatment Right for Your Pain?</h3>
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
                                            <p className="mt-2 text-gray-600">Caution is advised. Please consult us if you have:</p>
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
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-gray-900">The Pain Relief Process</motion.h3>
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
                                <p className="mt-2 text-gray-600">Take the first step towards a pain-free life.</p>
                                
                                <div className="mt-6 space-y-2">
                                    <div>
                                        <p className="text-4xl font-extrabold text-teal-600">Rs. 3,000</p>
                                        <p className="text-sm text-gray-500">per session</p>
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-gray-800">Session Duration</p>
                                        <p className="text-gray-600">Approx. 30-40 minutes</p>
                                    </div>
                                </div>


                                <a
                                    href="tel:+923007598000"
                                    className="mt-6 inline-flex w-full items-center justify-center px-6 py-4 bg-[#FF6900] text-white font-bold text-lg rounded-lg shadow-md hover:brightness-90 transition-all duration-300 transform hover:scale-105"
                                >
                                    <Phone className="mr-3 h-5 w-5" />
                                    Book Now
                                </a>

                                <div className="mt-8 text-center">
                                    <h4 className="text-lg font-semibold text-gray-800">Your Specialist</h4>
                                    <img src="/ceo.jpg" alt="Mr. Jameel ur Rehman" className="w-24 h-24 rounded-full mx-auto mt-4 object-cover" />
                                    <p className="mt-2 font-bold">Mr. Jameel ur Rehman</p>
                                    <p className="text-sm text-gray-600">Certified Hijama Therapist</p>
                                    <a href="/about#therapist" className="text-teal-600 hover:underline mt-2 inline-block">View Profile</a>
                                </div>
                            </motion.div>
                        </aside>
                    </div>

                    {/* Preparation & After-care Section */}
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="mt-24">
                        <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-gray-900 text-center">Preparation & After-care</motion.h2>
                        <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
                            Following these guidelines is key to maximizing the pain-relieving effects of your treatment.
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
                                Your questions about using Hijama for pain relief, answered.
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

export default PainReliefPage;
