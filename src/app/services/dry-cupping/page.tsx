'use client';

import { Phone, CheckCircle, Shield, Clock, Sun, Moon, Droplets, Plus, Minus, ChevronRight, AlertTriangle, Wind } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import Image from 'next/image';
import Link from 'next/link';

// 🛑 Benefits list (as previously set)
const benefits = [
    { icon: CheckCircle, text: '<strong>Muscle Tension & Knot Release</strong>: The lifting action softens tight muscles and releases painful knots that restrict movement.' },
    { icon: CheckCircle, text: '<strong>Enhanced Blood Circulation</strong>: Suction promotes better blood flow, supplying muscles with fresh oxygen and nutrients.' },
    { icon: CheckCircle, text: '<strong>Relief from Chronic Stiffness</strong>: Excellent for chronic neck stiffness, shoulder pain, and tension headaches caused by tight muscles.' },
    { icon: CheckCircle, text: '<strong>Lactic Acid Flush</strong>: Aids in removing metabolic waste and lactic acid from the tissues, reducing pain and soreness.' },
    { icon: CheckCircle, text: '<strong>Reduced Pain and Inflammation</strong>: By supporting lymphatic drainage, this therapy naturally reduces localized inflammation.' },
    { icon: CheckCircle, text: '<strong>Promotes Deep Relaxation</strong>: The deep, localized massage effect helps calm the nervous system and significantly reduces overall stress.' },
];

const processSteps = [
    { icon: Droplets, title: 'Consultation', description: 'We assess your condition to determine if Dry or Massage cupping is best for you.' },
    { icon: Shield, title: 'Preparation', description: 'The treatment area is cleaned. For massage cupping, a light oil is applied for smooth gliding.' },
    { icon: Wind, title: 'Cup Application', description: 'Cups are placed on the skin to create suction. They may be left stationary (Dry) or moved gently across the skin (Massage).' },
    { icon: Clock, title: 'Treatment Duration', description: 'The cups remain in place for 5-15 minutes, depending on your needs and skin sensitivity.' },
    { icon: Shield, title: 'After-care', description: 'Cups are gently removed, and you receive guidance on how to care for the treated area.' },
];

const indications = [
    'General muscle soreness and back pain',
    'Neck and shoulder tension',
    'Fibromyalgia and chronic fatigue',
    'IT band syndrome and sciatica',
    'Improving flexibility and range of motion',
    'Cellulite reduction and skin toning',
    'Stress and anxiety relief'
];

const contraindications = [
    'In Periods hijama cannot be done.',
    'On areas with broken skin, rashes, or sunburn.',
    'Over varicose veins, arteries, or lymph nodes.',
    'If you have a history of blood clots.',
    'If you have very sensitive or thin skin.',
    'During pregnancy (especially on the abdomen and lower back).',
    'If you have a high fever or convulsions.'
];

const preparation = [
    { icon: Sun, title: 'Before the Session', points: ['Ensure the skin in the treatment area is clean and free of lotions.', 'Drink water to stay hydrated.', 'Inform your therapist about any areas of particular sensitivity or concern.', 'Wear comfortable clothing that allows easy access to the treatment area.'] },
    { icon: Moon, title: 'After the Session', points: ['Keep the area warm and covered after treatment.', 'Continue to drink water to help flush out toxins.', 'Avoid cold showers or exposure to cold drafts for a few hours.', 'Moisturize the area if it feels dry.'] },
];

const faqs = [
    {
        question: "Is Dry or Massage Cupping painful?",
        answer: "No, it is a non-invasive and generally painless therapy. You will feel a pulling sensation as the cups create suction, which most people find relaxing, similar to a deep-tissue massage."
    },
    {
        question: "How is this different from Blood Hijama?",
        answer: "The main difference is that Dry and Massage Cupping do not involve any incisions or blood removal. It is a non-invasive technique focused on lifting tissue, improving circulation, and relieving muscle tension."
    },
    {
        question: "Will Dry Cupping leave marks?",
        answer: "Yes, it is common to have circular marks, ranging from light pink to dark purple, depending on the level of stagnation in the area. These are a normal part of the process and typically fade within a week. They are not bruises and should not be painful to the touch."
    },
    {
        question: "Which one is better for me, Dry or Massage cupping?",
        answer: "This depends on your specific condition. Dry cupping is excellent for targeting specific points of pain or tension, while massage cupping is better for treating larger areas of muscle stiffness and promoting overall relaxation. Our specialist will recommend the best approach for you during your consultation."
    }
];

// JSON-LD Schema data
const schema = {
    "@context": "https://schema.org",
    "@type": "TherapeuticProcedure",
    "name": "Dry & Massage Cupping",
    "description": "A non-invasive therapy where suction cups are applied to the skin to release muscle tension, reduce inflammation, and improve circulation without any incisions. Massage cupping involves gliding the cups over the skin for a deep-tissue effect.",
    "indication": [
      { "@type": "MedicalCondition", "name": "Muscle Pain" },
      { "@type": "MedicalCondition", "name": "Inflammation" },
      { "@type": "MedicalCondition", "name": "Stress" },
      { "@type": "MedicalCondition", "name": "Poor Circulation" },
      { "@type": "MedicalCondition", "name": "Fibromyalgia" }
    ],
    "bodyLocation": "Commonly applied to the back, neck, shoulders, and legs.",
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

const DryCuppingPage = () => {
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
        { name: 'Dry & Massage Cupping', href: '/services/dry-and-massage-cupping' },
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
                    style={{ backgroundImage: "url('/services/s2.webp')" }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative container mx-auto px-6 text-center z-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight"
                    >
                         {/* H1 Title Fix */}
                        Dry & Massage Cupping
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
                    >
                        A non-invasive therapy to release muscle tension, reduce inflammation, and improve circulation without incisions.
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
                                
                                {/* 🛑 H2: Introduction and Expertise (NEW Content Start) */}
                                <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-teal-600">Expert Dry Cupping & Therapeutic Massage Cupping in Lahore</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
                                    Welcome to the expert dry cupping therapy facility in Lahore. Using localized suction, dry cupping is a mild, non-invasive method that effectively mobilizes deep tissue. This therapy is highly effective for relieving chronic muscle knots, stiffness and promoting superior blood circulation without any incisions. We offer specialized Massage Cupping services across Lahore, designed to target chronic muscle tension and enhance athletic recovery. Our clinic in Bahria Town is available 24/7, with dedicated male and female specialists ready to serve you.
                                </motion.p>

                                {/* 🛑 H3: Dry Cupping vs Massage Cupping Definition */}
                                <motion.h3 variants={itemVariants} className="mt-8 text-3xl font-bold text-teal-600">What is Dry Cupping and Massage Cupping?</motion.h3>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
                                    <strong>Dry Cupping Therapy</strong> involves placing smooth, specialized cups on the skin and using a vacuum effect. This suction gently pulls the skin, underlying fascia, and muscle tissue into the cup. When the cups are left stationary, they provide focused static tension release.
                                </motion.p>
                                
                                <motion.h3 variants={itemVariants} className="mt-6 text-3xl font-bold text-teal-600">What is Therapeutic Massage Cupping?</motion.h3>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
                                    Therapeutic <strong>Massage Cupping</strong>, often referred to as gliding cupping, utilizes the same suction cups but applies a lubricant (like massage oil) to the skin. Instead of leaving the cups fixed, the certified specialist slowly moves the suctioned cups across large areas of the muscle tissue. This technique acts like a <strong>reverse deep tissue massage</strong>, pulling the muscle up and separating tissue layers. This lifting action is uniquely effective at breaking up deep-seated fascial restrictions and muscle knots that cause chronic pain.
                                </motion.p>

                                {/* Purpose List */}
                                <motion.h4 variants={itemVariants} className="mt-6 text-xl font-semibold text-teal-600">The main purpose of both Dry and Massage Cupping is:</motion.h4>
                                <motion.ul variants={staggerContainer} className="mt-4 space-y-2 list-disc list-inside ml-5">
                                    <motion.li variants={itemVariants} className="text-gray-700">To release tension and tightness in muscles.</motion.li>
                                    <motion.li variants={itemVariants} className="text-gray-700">Promote blood flow to stagnant areas.</motion.li>
                                    <motion.li variants={itemVariants} className="text-gray-700">To aid lymphatic drainage, reduce inflammation.</motion.li>
                                </motion.ul>


                                {/* Dry vs Wet Cupping Table - FIXED WIDTH/BORDER */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-600">Dry Cupping vs. Wet Cupping: Which is Right for You?</motion.h3>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
                                    The difference between dry and wet cupping is critical. Dry Cupping is purely mechanical and relaxing, while Wet Cupping (Hijama) is for deep detoxification.
                                </motion.p>
                                
                                {/* TABLE 1: Dry vs Wet Cupping - FIXED WIDTH/BORDER */}
                                <motion.table variants={itemVariants} className="min-w-full w-full border-collapse border border-black-400 mt-6 divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-teal-600 uppercase tracking-wider border border-black-400">Feature</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-teal-600 uppercase tracking-wider border border-black-400">Dry Cupping / Massage Cupping</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-teal-600 uppercase tracking-wider border border-black-400">Wet Cupping (Hijama)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-600 border border-black-400">Method</td>
                                            <td className="px-6 py-4 text-sm text-gray-600 border border-black-400">Suction only; no skin puncture.</td>
                                            <td className="px-6 py-4 text-sm text-gray-600 border border-black-400">Suction followed by tiny, superficial incisions.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-600 border border-black-400">Primary Goal</td>
                                            <td className="px-6 py-4 text-sm text-gray-600 border border-black-400">Muscle relaxation, tension relief, circulation boost, pain management.</td>
                                            <td className="px-6 py-4 text-sm text-gray-600 border border-black-400">Deep detoxification and removal of stagnant blood.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-600 border border-black-400">Best For</td>
                                            <td className="px-6 py-4 text-sm text-gray-600 border border-black-400">Muscle knots, stiffness, back/neck tension, sports recovery.</td>
                                            <td className="px-6 py-4 text-sm text-gray-600 border border-black-400">Systemic detoxification, internal health issues.</td>
                                        </tr>
                                    </tbody>
                                </motion.table>

                                {/* Service Commitment Table - FIXED WIDTH/BORDER */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-600">Our Expert Service Commitment in Lahore</motion.h3>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
                                    We ensure our <strong>Dry Cupping Therapy</strong> is delivered safely and conveniently across <strong>Lahore</strong>.
                                </motion.p>
                                
                                {/* TABLE 2: Service Commitment - FIXED WIDTH/BORDER */}
                                <motion.table variants={itemVariants} className="min-w-full w-full border-collapse border border-black-400 mt-6 divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-teal-600 uppercase tracking-wider border border-black-400">Service Aspect</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-teal-600 uppercase tracking-wider border border-black-400">Our Standard</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600 border border-black-400">Availability</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 border border-black-400">Open 24/7 for flexible appointment booking.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600 border border-black-400">Specialists</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 border border-black-400">Certified Male and Female Specialists available (strict gender privacy maintained).</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600 border border-black-400">Home Service</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 border border-black-400">Professional and discreet Home Service available throughout Lahore.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600 border border-black-400">Location</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 border border-black-400">Easily accessible clinic located in Bahria Town, Lahore.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600 border border-black-400">Hygiene</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 border border-black-400">All cups and equipment are thoroughly sterilized before every session.</td>
                                        </tr>
                                    </tbody>
                                </motion.table>

                                {/* Conclusion */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-600">Conclusion: Book Your Tension-Free Session Today</motion.h3>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
                                    If you are experiencing chronic muscle stiffness or searching for a superior alternative to traditional deep tissue massage, our <strong>Dry Cupping</strong> and <strong>Massage Cupping</strong> service in <strong>Lahore</strong> is the perfect solution. This therapy helps you quickly return to an active, pain-free life.
                                </motion.p>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
                                    Do not let muscle tension slow you down. Contact us today to book your session with a certified specialist at our 24/7 clinic or schedule a convenient <strong className=" text-blue-600"><a href="https://www.almadinahijamacenter.com/booking">Home Service</a></strong> appointment in Lahore.
                                </motion.p>
                                
                                {/* Benefits Section (using updated array) */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-600">Key Benefits of Dry & Massage Cupping</motion.h3>
                                <motion.ul variants={staggerContainer} className="mt-6 space-y-4">
                                    {benefits.map((benefit, index) => (
                                        <motion.li key={index} variants={itemVariants} className="flex items-start">
                                            <benefit.icon className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                                            {/* 🛑 FIX: Rendering HTML content (strong tags) using dangerouslySetInnerHTML */}
                                            <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: benefit.text }} />
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                {/* Indications/Contraindications Section */}
                                <motion.div variants={itemVariants} className="mt-12">
                                    <h3 className="text-3xl font-bold text-teal-600">Is This Therapy Right for You?</h3>
                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-xl font-semibold text-teal-600 flex items-center"><CheckCircle className="h-6 w-6 text-green-600 mr-2" />Indications</h4>
                                            <p className="mt-2 text-gray-600">This therapy is highly recommended for:</p>
                                            <ul className="mt-4 space-y-2 text-gray-700">
                                                {indications.map((item, index) => (
                                                    <li key={index} className="flex items-start"><ChevronRight className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" /><span>{item}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-teal-600 flex items-center"><AlertTriangle className="h-6 w-6 text-red-600 mr-2" />Contraindications</h4>
                                            <p className="mt-2 text-gray-600">This therapy may not be suitable if you have:</p>
                                            <ul className="mt-4 space-y-2 text-gray-700">
                                                {contraindications.map((item, index) => (
                                                    <li key={index} className="flex items-start"><ChevronRight className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" /><span>{item}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-sm text-teal-600 italic">Please disclose your full medical history during the consultation to ensure a safe and effective treatment.</p>
                                </motion.div>

                                {/* Process Section */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-600">The Treatment Process</motion.h3>
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

                        {/* Right Column (Sidebar) - Kept as provided */}
                        <aside className="lg:col-span-1">
                            <motion.div 
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, ease: 'easeOut' }}
                                className="sticky top-24 bg-gray-50 p-8 rounded-2xl shadow-lg"
                            >
                                <h3 className="text-2xl font-bold text-teal-600">Book Your Session</h3>
                                <p className="mt-2 text-gray-600">Find relief with Dry & Massage Cupping.</p>
                                
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
                                            <img src="/ceo.webp" alt="Mr. Jameel ur Rehman" className="w-24 h-24 rounded-full mx-auto object-cover" />
                                            <p className="mt-2 font-bold">Mr. Jameel ur Rehman</p>
                                            <p className="text-sm text-teal-600">Certified Hijama Therapist</p>
                                        </div>
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
                        <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-teal-600 text-center">Preparation & After-care</motion.h2>
                        <motion.p variants={itemVariants} className="mt-4 text-lg text-teal-600 text-center max-w-3xl mx-auto">
                            To get the most out of your session, please follow these simple guidelines.
                        </motion.p>

                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                            {preparation.map((item, index) => (
                                <motion.div key={index} variants={itemVariants} className="bg-gray-50 p-8 rounded-2xl">
                                    <div className="flex items-center">
                                        <item.icon className="w-10 h-10 text-teal-600 mr-4" />
                                        <h3 className="text-2xl font-bold text-teal-600">{item.title}</h3>
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
                            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-teal-600">
                                Frequently Asked Questions
                            </motion.h2>
                            <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                                Find answers to common questions about Dry & Massage Cupping therapy.
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

export default DryCuppingPage;