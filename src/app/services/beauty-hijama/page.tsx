'use client';

import { Phone, CheckCircle, Shield, Clock, Sun, Moon, Droplets, Plus, Minus, ChevronRight, AlertTriangle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState } from 'react';
 import Breadcrumbs from '@/components/Breadcrumbs'; 
import Image from 'next/image';
import Link from 'next/link';


const benefits = [
    { icon: CheckCircle, text: 'Stimulates natural collagen and elastin production' },
    { icon: CheckCircle, text: 'Visibly enhances skin tone and texture for a smoother look' },
    { icon: CheckCircle, text: 'Reduces puffiness and fluid retention in the face' },
    { icon: CheckCircle, text: 'Promotes a healthy, radiant complexion from within' },
    { icon: CheckCircle, text: 'Can help reduce the appearance of fine lines' },
    { icon: CheckCircle, text: 'Aids in clearing blemishes and improving skin clarity' },
];

const processSteps = [
    { icon: Droplets, title: 'Skin Consultation', description: 'A gentle assessment of your skin type and beauty goals by our certified practitioner.' },
    { icon: Shield, title: 'Facial Cleansing', description: 'The face is thoroughly cleansed and prepared with a light facial oil for smooth gliding.' },
    { icon: Sparkles, title: 'Gentle Cupping', description: 'Small, soft silicone cups are used to create a gentle suction, then glided across the face in specific patterns.' },
    { icon: Clock, title: 'Lifting & Toning', description: 'The light suction lifts the facial tissue, promoting circulation and lymphatic drainage.' },
    { icon: Shield, title: 'Post-Therapy Care', description: 'The session concludes with a soothing facial massage and hydration advice.' },
];

const indications = [
    'Dull or tired-looking skin',
    'Facial puffiness or under-eye bags',
    'Loss of skin elasticity or firmness',
    'Fine lines and early signs of aging',
    'Uneven skin tone or texture',
    'Anyone seeking a natural, non-invasive facial'
];

const contraindications = [
    'In Periods hijama cannot be done.',
    'On areas with active acne, rosacea, or eczema flare-ups.',
    'On sunburned, broken, or inflamed skin.',
    'If you have very thin, sensitive skin (a patch test is advised).',
    'If you have had recent fillers or botox (wait at least 3 weeks).',
    'During pregnancy.',
    'If you are on blood-thinning medication (consultation required).'
];

const preparation = [
    { icon: Sun, title: 'Before the Session', points: ['Arrive with a clean, makeup-free face.', 'Inform your practitioner of any skin sensitivities or allergies.', 'Stay well-hydrated throughout the day.', 'Avoid exfoliating or harsh skin treatments for 2-3 days prior.'] },
    { icon: Moon, title: 'After the Session', points: ['Your skin may have a temporary rosy flush, which is normal.', 'Avoid makeup for at least 6-8 hours.', 'Avoid direct sun exposure and strenuous exercise for 24 hours.', 'Keep your skin hydrated and moisturized.'] },
];

const faqs = [
    {
        question: "Is Beauty Hijama the same as Blood Hijama (Blood Cupping)?",
        answer: "No, this is a completely different and non-invasive therapy. Beauty Hijama uses only Dry/Massage cupping. No incisions are made, and no blood is drawn. It is a gentle, relaxing facial treatment."
    },
    {
        question: "Will Beauty Hijama leave marks on my face?",
        answer: "No. Unlike body cupping, the cups used are soft and are kept in constant motion. This does not leave the typical circular cup kiss marks. You may experience a slight, temporary pinkness or flush immediately after, which indicates increased blood flow and fades quickly."
    },
    {
        question: "How does this help with fine lines and wrinkles?",
        answer: "The gentle suction helps to stimulate blood flow and promotes the production of collagen and elastin, which are the building blocks of plump, healthy skin. Over time, this can help soften the appearance of fine lines."
    },
    {
        question: "How many sessions do I need to see results?",
        answer: "Many clients notice a visible glow and reduced puffiness after just one session. For more lasting results, such as improved skin tone and firmness, a series of 4-6 sessions spaced a week apart is often recommended, followed by monthly maintenance."
    }
];

// JSON-LD Schema data
const schema = {
    "@context": "https://schema.org",
    "@type": "TherapeuticProcedure",
    "name": "Beauty Hijama (Facial Cupping)",
    "description": "Gentle, non-invasive facial cupping techniques for men and women to enhance skin tone, reduce puffiness, stimulate collagen, and achieve a radiant complexion.",
    "indication": [
        { "@type": "MedicalCondition", "name": "Skin Rejuvenation" },
        { "@type": "MedicalCondition", "name": "Fine Lines" },
        { "@type": "MedicalCondition", "name": "Dull Skin" },
        { "@type": "MedicalCondition", "name": "Facial Puffiness" }
    ],
    "bodyLocation": "Face and Neck",
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

const BeautyHijamaPage = () => {
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
        { name: 'Beauty Hijama', href: '/services/beauty-hijama' },
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
                    style={{ backgroundImage: "url('/services/s9.webp')" }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative container mx-auto px-6 text-center z-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight"
                    >
                        Beauty Hijama
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
                    >
                        A non-invasive facial therapy to stimulate collagen, reduce puffiness, and achieve a radiant complexion.
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
                                <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-gray-900">Your Natural Path to a Radiant Glow</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Beauty Hijama, also known as Facial Cupping, is a gentle, non-invasive treatment designed to rejuvenate your skin from the inside out. Unlike traditional hijama, this therapy does not involve any incisions or blood. Instead, it uses small, soft cups that are glided over the face to create a light suction.
                                </motion.p>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    This process stimulates blood circulation, encourages lymphatic drainage to reduce puffiness, and helps to tone facial muscles. It also promotes the natural production of collagen and elastin, leaving your skin looking firmer, smoother, and more radiant. This relaxing service is available for both men and women.
                                </motion.p>

                                {/* Benefits Section */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-gray-900">Key Benefits of Beauty Hijama</motion.h3>
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
                                            <p className="mt-2 text-gray-600">This gentle therapy is not suitable:</p>
                                            <ul className="mt-4 space-y-2 text-gray-700">
                                                {contraindications.map((item, index) => (
                                                    <li key={index} className="flex items-start"><ChevronRight className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" /><span>{item}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-sm text-gray-500 italic">A consultation with our practitioner will ensure this treatment is perfect for your skin type.</p>
                                </motion.div>


                                {/* Process Section */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-gray-900">The Beauty Hijama Process</motion.h3>
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
                                <p className="mt-2 text-gray-600">Experience a natural, non-invasive facelift and glow.</p>
                                
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
                            Follow these simple steps to get the most out of your facial cupping treatment.
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
                                Your questions about Beauty Hijama (Facial Cupping), answered.
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

export default BeautyHijamaPage;

