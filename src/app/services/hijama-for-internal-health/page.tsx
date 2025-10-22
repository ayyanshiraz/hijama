'use client';

import { Phone, CheckCircle, Shield, Clock, Sun, Moon, Droplets, Plus, Minus, ChevronRight, AlertTriangle, Heart } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
    { icon: CheckCircle, text: 'Supports detoxification of the liver and kidneys' },
    { icon: CheckCircle, text: 'Helps regulate digestive function and reduce bloating' },
    { icon: CheckCircle, text: 'Aids in balancing hormones and managing related symptoms' },
    { icon: CheckCircle, text: 'Improves circulation and helps manage blood pressure' },
    { icon: CheckCircle, text: 'Calms the nervous system, reducing stress and anxiety' },
    { icon: CheckCircle, text: 'Boosts overall energy levels and vitality' },
];

const processSteps = [
    { icon: Droplets, title: 'Holistic Consultation', description: 'We discuss your internal health concerns, from digestion to stress, to create a targeted plan.' },
    { icon: Shield, title: 'Sterilization', description: 'The specific points on the body related to organ function are carefully sterilized.' },
    { icon: Heart, title: 'Strategic Cupping', description: 'Cups are placed on key points (often on the back) corresponding to different organs to stimulate their function.' },
    { icon: Clock, title: 'Purification', description: 'Wet cupping is typically used to draw out metabolic waste and toxins, purifying the blood and supporting organ health.' },
    { icon: Shield, title: 'After-care Plan', description: 'You receive dietary and lifestyle advice to support the long-term benefits of the therapy.' },
];

const indications = [
    'Digestive problems like bloating, IBS, and constipation',
    'High blood pressure and cholesterol levels',
    'Hormonal imbalances such as PCOS and thyroid issues',
    'Chronic fatigue, lethargy, and brain fog',
    'Stress, anxiety, and sleep disturbances',
    'Weak immune system and frequent illnesses',
    'General detoxification and wellness maintenance'
];

const contraindications = [
    'Severe organ disease (e.g., kidney failure, liver cirrhosis) without a doctor\'s consent.',
    'Individuals with pacemakers or severe heart conditions.',
    'During pregnancy.',
    'If you are on heavy medication, a consultation is essential.',
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
        answer: "Hijama is a powerful detoxification method that has been used for centuries. It works by removing stagnant blood and metabolic waste products from just beneath the skin. This process helps to lighten the load on your bodys primary detox organs, like the liver and kidneys, allowing them to function more efficiently."
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
    "name": "Hijama for Internal Health",
    "description": "A holistic Hijama therapy focused on improving organ function, balancing hormones, and promoting overall internal wellness. This treatment supports the body's natural detoxification processes and helps manage systemic issues like digestive disorders and hormonal imbalances.",
    "indication": [
      { "@type": "MedicalCondition", "name": "Digestive Disorders" },
      { "@type": "MedicalCondition", "name": "Hormonal Imbalance" },
      { "@type": "MedicalCondition", "name": "Hypertension" },
      { "@type": "MedicalCondition", "name": "Chronic Fatigue Syndrome" },
      { "@type": "MedicalCondition", "name": "Stress" }
    ],
    "bodyLocation": "Applied to specific points on the back, abdomen, and other areas corresponding to internal organs and endocrine glands.",
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

const InternalHealthPage = () => {
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
                    style={{ backgroundImage: "url('/services/s4.png')" }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative container mx-auto px-6 text-center z-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight"
                    >
                        Hijama for Internal Health
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
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
                                <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-gray-900">Restore Your Inner Balance</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Hijama for Internal Health is a holistic treatment that focuses on optimizing the function of your bodys vital systems. By applying cups to specific points related to the organs and endocrine glands, this therapy helps to purify the bloodstream, support natural detoxification, and regulate bodily functions.
                                </motion.p>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    This is an ideal therapy for those dealing with systemic issues like digestive problems, hormonal imbalances, high blood pressure, or chronic fatigue. Our certified practitioners for men and women provide this service with expert care, also available through our convenient home service.
                                </motion.p>

                                {/* Benefits Section */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-gray-900">Key Benefits for Your Internal Health</motion.h3>
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
                                    <h3 className="text-3xl font-bold text-gray-900">Is This Holistic Therapy for You?</h3>
                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-800 flex items-center"><CheckCircle className="h-6 w-6 text-green-600 mr-2" />Indications</h4>
                                            <p className="mt-2 text-gray-600">This therapy can provide significant relief for:</p>
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
                                    <p className="mt-6 text-sm text-gray-500 italic">Full disclosure of your medical history is crucial to ensure a safe and beneficial treatment tailored to your needs.</p>
                                </motion.div>

                                {/* Process Section */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-gray-900">The Internal Health Treatment Process</motion.h3>
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
                                <p className="mt-2 text-gray-600">Invest in your long-term health and well-being.</p>
                                
                                <div className="mt-6 space-y-2">
                                    <div>
                                        <p className="text-4xl font-extrabold text-teal-600">Rs. 2,800</p>
                                        <p className="text-sm text-gray-500">per session</p>
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
                                    <img src="/ceo.jpg" alt="Mr. Jameel ur Rehman" className="w-24 h-24 rounded-full mx-auto mt-4 object-cover" />
                                    <p className="mt-2 font-bold">Mr. Jameel ur Rehman</p>
                                    <p className="text-sm text-gray-600">Certified Hijama Therapist</p>
                                    <a href="/about" className="text-teal-600 hover:underline mt-2 inline-block">View Profile</a>
                                </div>
                            </motion.div>
                        </aside>
                    </div>

                    {/* Preparation & After-care Section */}
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="mt-24">
                        <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-gray-900 text-center">Preparation & After-care</motion.h2>
                        <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
                            Proper preparation and after-care are vital for supporting your bodys detoxification and healing process.
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
                                Answering your questions on using Hijama for internal wellness.
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

export default InternalHealthPage;
