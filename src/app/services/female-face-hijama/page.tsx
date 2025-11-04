'use client';

import { Phone, CheckCircle, Shield, Clock, Sun, Moon, Droplets, Plus, Minus, ChevronRight, AlertTriangle, Smile } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
    { icon: CheckCircle, text: 'Promotes a natural, radiant glow and improves skin tone' },
    { icon: CheckCircle, text: 'Helps reduce the appearance of fine lines and wrinkles' },
    { icon: CheckCircle, text: 'Stimulates natural collagen and elastin production' },
    { icon: CheckCircle, text: 'Improves blood circulation and detoxification of facial skin' },
    { icon: CheckCircle, text: 'Can help reduce puffiness and under-eye dark circles' },
    { icon: CheckCircle, text: 'Aids in clearing blemishes and acne scars' },
];

const processSteps = [
    { icon: Droplets, title: 'Skin Consultation', description: 'Our female specialist conducts a thorough skin assessment and discusses your aesthetic goals.' },
    { icon: Shield, title: 'Facial Cleansing', description: 'The face is gently and thoroughly cleansed to prepare the skin for the therapy.' },
    { icon: Smile, title: 'Leech Application', description: 'Small, sterile, medicinal-grade leeches are carefully applied to specific points on the face.' },
    { icon: Clock, title: 'Therapy Session', description: 'The leeches remain in place for a short duration, releasing beneficial enzymes as they work.' },
    { icon: Shield, title: 'Post-Therapy Care', description: 'Leeches are gently removed, the area is cleaned, and a soothing, natural product is applied.' },
];

const indications = [
    'Dull, tired, or lackluster skin',
    'Early signs of aging, including fine lines',
    'Puffiness and dark circles under the eyes',
    'Stubborn acne scars, blemishes, or pigmentation',
    'Uneven skin tone or texture',
    'A desire for a natural alternative to chemical facial treatments'
];

const contraindications = [
    'In Periods hijama cannot be done.', // <-- This is now included
    'Active skin infections (e.g., active acne, herpes, or fungal infections).',
    'If you have a known bleeding disorder like hemophilia.',
    'If you are currently taking blood-thinning medication (e.g., Warfarin).',
    'During pregnancy.',
    'If you have severe anemia or very low blood pressure.',
    'Known allergy to leech saliva (hirudin).'
];

const preparation = [
    { icon: Sun, title: 'Before the Session', points: ['Arrive at your appointment with a clean, makeup-free face.', 'Inform your practitioner of all skincare products and medications you use.', 'Stay well-hydrated by drinking water.', 'Avoid harsh facial treatments (e.g., chemical peels, microdermabrasion) for 3-5 days prior.'] },
    { icon: Moon, title: 'After the Session', points: ['Avoid touching the face unnecessarily for the rest of the day.', 'Do not apply any makeup for at least 24 hours.', 'Avoid direct sun exposure; use a gentle, natural sunscreen if you must be outside.', 'Keep the skin hydrated with a simple, non-irritating moisturizer.'] },
];

const faqs = [
    {
        question: "What is Jonk Therapy (Leech Therapy)?",
        answer: "Jonk is the Urdu/Hindi name for leech. Leech Therapy (also known as Hirudotherapy) is a traditional practice where medicinal leeches are applied to the skin. Their saliva contains over 100 bioactive enzymes, like Hirudin, which act as anticoagulants, improve blood flow, and have anti-inflammatory effects."
    },
    {
        question: "Does Leech Therapy on the face hurt?",
        answer: "The leech bite is very minimal, often described as a small pinprick or mosquito bite. Once the leech is attached, the process is painless because its saliva contains a natural anesthetic, ensuring your comfort."
    },
    {
        question: "Is this therapy safe?",
        answer: "Yes, it is extremely safe when performed by a trained specialist. We use only sterile, medicinal-grade leeches from a certified bio-pharmaceutical source. Each leech is used only once and is safely disposed of after the treatment."
    },
    {
        question: "How will my face look immediately after the session?",
        answer: "There may be some temporary redness and small bite marks, which are normal and typically fade within a day or two. Most clients immediately feel their skin is tighter and refreshed. The full benefits, like a visible glow, often appear over the next few days as circulation improves."
    }
];

// JSON-LD Schema data
const schema = {
    "@context": "https://schema.org",
    "@type": "TherapeuticProcedure",
    "name": "Female Face Hijama (Jonk Therapy)",
    "description": "A specialized medicinal leech therapy (Jonk) treatment for women, focusing on facial rejuvenation, reducing fine lines, and promoting a natural, radiant glow by improving blood circulation and stimulating collagen.",
    "indication": [
        { "@type": "MedicalCondition", "name": "Fine Lines and Wrinkles" },
        { "@type": "MedicalCondition", "name": "Dull Skin" },
        { "@type": "MedicalCondition", "name": "Acne Scars" },
        { "@type": "MedicalCondition", "name": "Skin Rejuvenation" }
    ],
    "bodyLocation": "Face",
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

const FemaleFaceHijamaPage = () => {
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
        { name: 'Female Face Hijama (Jonk)', href: '/services/female-face-hijama' },
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
                        Female Face Hijama (Jonk)
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
                    >
                        A specialized Leech Therapy for women, focusing on facial rejuvenation and promoting a natural glow.
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
                                <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-gray-900">A Natural Path to Facial Rejuvenation</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    This specialized therapy, designed for women, harnesses the power of medicinal leeches (Jonk) for natural facial rejuvenation. Leech saliva is a complex substance containing powerful enzymes, like Hirudin, which act as natural blood thinners. This process dramatically improves micro-circulation, bringing fresh, oxygenated blood to the facial tissues.
                                </motion.p>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    The therapy helps to gently break down toxins, reduce inflammation, and stimulate your skin’s natural collagen production. It is a powerful, all-natural alternative to chemical peels and invasive procedures, aimed at reducing fine lines and restoring a radiant, healthy glow. This service is performed with complete privacy and care by our certified female practitioners.
                                </motion.p>

                                {/* Benefits Section */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-gray-900">Key Benefits of Facial Leech Therapy</motion.h3>
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
                                    <h3 className="text-3xl font-bold text-gray-900">Is This Facial Therapy for You?</h3>
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
                                            <p className="mt-2 text-gray-600">This therapy is not suitable for individuals who:</p>
                                            <ul className="mt-4 space-y-2 text-gray-700">
                                                {contraindications.map((item, index) => (
                                                    <li key={index} className="flex items-start"><ChevronRight className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" /><span>{item}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-sm text-gray-500 italic">Your safety is our priority. A full skin and medical history consultation is conducted by our female specialist before treatment.</p>
                                </motion.div>


                                {/* Process Section */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-gray-900">The Rejuvenation Process</motion.h3>
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
                                <p className="mt-2 text-gray-600">Reveal your natural radiance. This specialized service is performed by our certified female practitioners.</p>
                                
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
                                Your questions about Facial Leech (Jonk) Therapy, answered.
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

export default FemaleFaceHijamaPage;