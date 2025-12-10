'use client';

import { CheckCircle, Shield, Clock, Sun, Moon, Droplets, Plus, Minus, ChevronRight, AlertTriangle, Facebook, Instagram, Youtube, Video } from 'lucide-react';
import { motion, AnimatePresence, Variants, Transition } from 'framer-motion';
import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs'; 
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6';

// Updated benefits list with Safe SEO terms
const benefits = [
    { icon: CheckCircle, text: 'Removes deep-seated toxins (Detox)' },
    { icon: CheckCircle, text: 'Boosts the body’s natural defense system' },
    { icon: CheckCircle, text: 'Relieves chronic muscle pain & stiffness' },
    { icon: CheckCircle, text: 'Promotes healthy blood circulation' },
    { icon: CheckCircle, text: 'Revitalizes organ function naturally' },
    { icon: CheckCircle, text: 'Induces deep relaxation & stress relief' },
];

const processSteps = [
    { icon: Droplets, title: 'Consultation', description: 'Our specialist discusses your health concerns to tailor the session to your needs.' },
    { icon: Shield, title: 'Sterilization', description: 'The treatment area is thoroughly cleaned and sterilized to ensure maximum safety.' },
    { icon: Clock, title: 'Cupping & Incision', description: 'Cups are applied to create suction, followed by tiny, superficial scratches on the skin.' },
    { icon: Droplets, title: 'Release', description: 'Cups are reapplied to gently draw out stagnation and impurities from the body.' },
    { icon: Shield, title: 'After-care', description: 'The area is cleaned again, and you receive guidance on post-treatment care.' },
];

const indications = [
    'Chronic Back, Neck, and Shoulder Pain',
    'Frequent Migraines and Tension Headaches',
    'Arthritis and Joint Pain',
    'High Blood Pressure (using specific cupping points)',
    'Anxiety, Stress, and Fatigue',
    'Skin Conditions (Acne, Eczema)',
    'Hormonal Imbalances (Handled discreetly by female specialist)'
];

const contraindications = [
    'During Menstrual Cycle (Periods).',
    'Are pregnant or breastfeeding.',
    'Are currently undergoing cancer treatment.',
    'Have a bleeding disorder like hemophilia.',
    'Are taking blood-thinning medication (e.g., Warfarin).',
    'Suffer from severe anemia or very low blood pressure.',
    'Have active skin infections or open wounds.'
];

const preparation = [
    { icon: Sun, title: 'Before the Session', points: ['Stay well-hydrated by drinking plenty of water.', 'Have a light meal 2-3 hours prior to your appointment.', 'Avoid vigorous exercise on the day of the therapy.', 'Wear loose and comfortable clothing.'] },
    { icon: Moon, title: 'After the Session', points: ['Avoid showering for 24 hours to allow skin healing.', 'Keep the treated areas covered and warm.', 'Refrain from strenuous activities for 24-48 hours.', 'Follow the dietary recommendations provided by your therapist.'] },
];

const faqs = [
    {
        question: "Does Wet Cupping (Hijama) hurt?",
        answer: "Most clients experience minimal discomfort. The incisions are very superficial, often described as light scratches or a pinch. Our practitioners are trained to be gentle and ensure your comfort throughout the session."
    },
    {
        question: "What is removed during the process?",
        answer: "A small amount of stagnant fluid and metabolic waste is removed. The goal is not to drain healthy blood, but to clear blockages and stimulate the body’s healing processes by removing impurities from beneath the skin."
    },
    {
        question: "Will there be marks or scars?",
        answer: "The circular marks from the cups are temporary and typically fade within 3-10 days, depending on your body's circulation. The scratches are superficial and do not leave permanent scars when proper after-care is followed."
    },
    {
        question: "Who should avoid Wet Cupping?",
        answer: "Individuals with certain medical conditions, such as bleeding disorders, severe anemia, or those on blood-thinning medication, should consult with our specialist first. It is also not recommended for pregnant women. Full disclosure of your medical history is essential for your safety."
    }
];

// JSON-LD Schema data (Optimized for "Wet Cupping")
const schema = {
    "@context": "https://schema.org",
    "@type": "TherapeuticProcedure",
    "name": "Wet Cupping (Hijama) in Lahore",
    "description": "A traditional Prophetic method of healing that involves creating suction on the skin and making small, superficial incisions to draw out stagnant fluids and toxins. It is used to treat a variety of conditions by promoting detoxification, improving circulation, and boosting the immune system.",
    "indication": [
      { "@type": "MedicalCondition", "name": "Chronic Pain" },
      { "@type": "MedicalCondition", "name": "Inflammation" },
      { "@type": "MedicalCondition", "name": "Migraines" },
      { "@type": "MedicalCondition", "name": "Muscle Tension" },
      { "@type": "MedicalCondition", "name": "Poor Circulation" }
    ],
    "bodyLocation": "Applicable to various parts of the body, commonly the back, shoulders, and neck.",
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

const WetCuppingPage = () => {
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
        { name: 'Wet Cupping (Hijama)', href: '/services/wet-cupping' }, 
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
                    style={{ backgroundImage: "url('/services/s1.webp')" }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative container mx-auto px-6 text-center z-10">
                    <motion.h1 
                        {...heroAnimateProps}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight"
                    >
                        Wet Cupping (Hijama)
                    </motion.h1>
                    <motion.p 
                        initial={heroAnimateProps.initial}
                        animate={heroAnimateProps.animate}
                        transition={{ ...heroAnimateProps.transition, delay: 0.2 } as Transition}
                        className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
                    >
                        The authentic Sunnah method for deep detoxification and natural healing, performed by certified specialists.
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
                                
                                {/* -- NEW CONTENT START -- */}
                                <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-teal-600">
                                    Wet Cupping (Hijama) Therapy Specialist in Lahore
                                </motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    If you are looking for experienced and certified <strong>Wet Cupping (Hijama) Therapy</strong>, you have come to the <Link href="/" className="text-teal-600 hover:underline font-bold">Best Hijama Center in Lahore</Link>. We are available 24/7, and our goal is to deliver this ancient <Link href="/blog/hijama-sunnah-benefits-wellness-path" className="text-teal-600 hover:underline">Sunnah remedy</Link> with the highest standards of safety and professionalism. 
                                </motion.p>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Hijama is the most effective method for purifying the body, stimulating the immune system, and improving circulation by removing stagnant blood. Our services, performed by expert male and female specialists, are also available as a professional <Link href="/booking" className="text-teal-600 hover:text-teal-700 hover:underline font-medium">home service throughout Lahore</Link>.
                                </motion.p>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    On this page, we will detail the types of cupping therapy, its most significant benefits, and the essential safety guidelines you should follow.
                                </motion.p>

                                {/* Types of Cupping Section */}
                                <motion.div variants={itemVariants} className="mt-8">
                                    <h3 className="text-2xl font-bold text-teal-600">What is Wet Cupping (Hijama) and How Does it Work?</h3>
                                    <p className="mt-2 text-lg text-gray-600 leading-relaxed">
                                        Hijama is a therapeutic technique where localized suction is created on specific body points to draw out impurities collected in the tissues. This is a powerful, time-tested Islamic method sought after by those searching for natural healing.
                                    </p>

                                    <div className="mt-6 space-y-6">
                                        <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-teal-500">
                                            <h4 className="text-xl font-bold text-teal-700">1. Wet Cupping (Traditional Hijama)</h4>
                                            <p className="mt-2 text-gray-700">
                                                Wet Cupping is the authentic Hijama Therapy involving small, superficial scratches (micro-incisions). It is the fundamental method of Islamic healing and is most effective for <Link href="/blog/hijama-detoxification-benefits" className="text-teal-600 hover:underline">deep physical detoxification</Link>. The primary goal is the immediate and targeted removal of stagnant fluids and metabolic waste. It provides excellent results in managing <Link href="/blog/hijama-chronic-pain-relief" className="text-teal-600 hover:underline">chronic pain</Link> and improving skin conditions.
                                                <br /><br />
                                                <strong>Our certified specialists in Lahore are available 24/7 for this essential service.</strong>
                                            </p>
                                        </div>

                                        <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#FF6900]">
                                            <h4 className="text-xl font-bold text-[#FF6900]"> 2. Dry Cupping</h4>
                                            <p className="mt-2 text-gray-700">
                                                <Link href="/blog/dry-cupping-vs-wet-cupping-hijama-lahore" className="text-teal-600 hover:underline">Dry Cupping</Link> does not involve incisions. It uses suction to lift tissues for a massaging effect. It is highly beneficial for improving blood circulation and relaxing stiff, rigid muscles. Dry Cupping is often used to prepare muscles before a Wet Cupping session. This therapy helps manage general fatigue and muscle stiffness. Dry Cupping services are also available through our professional Home service in Lahore.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div variants={itemVariants} className="mt-12">
                                <img 
                                    src="/services/dry-wet.webp" 
                                    alt="Difference between Wet Cupping (Hijama) and Dry Cupping"
                                    className="w-full h-auto object-cover rounded-xl shadow-lg"
                                    style={{ maxHeight: '400px' }} 
                                    />
                                </motion.div>

                                {/* Benefits Section */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-600">Key Benefits of Wet Cupping</motion.h3>
                                <motion.p variants={itemVariants} className="mt-2 text-lg text-gray-600">
                                    The benefits of Wet Cupping are far-reaching and provide deep, long-lasting results for your health. The key results include:
                                </motion.p>
                                <motion.ul variants={staggerContainer} className="mt-6 space-y-4">
                                    {benefits.map((benefit, index) => (
                                        <motion.li key={index} variants={itemVariants} className="flex items-start">
                                            <benefit.icon className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                                            <span className="text-gray-700">{benefit.text}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                {/* Tools and Hygiene Section */}
                                <motion.div variants={itemVariants} className="mt-12">
                                    <h3 className="text-3xl font-bold text-teal-600 mb-4">Tools and Hygiene Policy (Trust Factor)</h3>
                                    <p className="text-lg text-gray-600 mb-6">
                                        We perform Hijama to the highest medical safety standards. We ensure client safety by strictly using fresh and new tools for every single patient:
                                    </p>
                                    <div className="overflow-hidden rounded-lg border border-gray-300">
                                        <table className="min-w-full border-collapse">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-6 py-3 text-left text-xs font-bold text-teal-600 uppercase tracking-wider border border-gray-300">Tool</th>
                                                    <th className="px-6 py-3 text-left text-xs font-bold text-teal-600 uppercase tracking-wider border border-gray-300">Safety Standard</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white">
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-teal-600 border border-gray-300">Cupping Cups</td>
                                                    <td className="px-6 py-4 text-gray-600 border border-gray-300">Disposable, Single-Use (Discarded after one patient use)</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-teal-600 border border-gray-300">Surgical Blades</td>
                                                    <td className="px-6 py-4 text-gray-600 border border-gray-300">Sterile and Brand New for every patient (Zero risk of infection)</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-teal-600 border border-gray-300">Wipes & Gloves</td>
                                                    <td className="px-6 py-4 text-gray-600 border border-gray-300">Medical Grade (Used by both Male and Female Specialists)</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </motion.div>
                                
                                {/* Side Effects & Conclusion Section */}
                                <motion.div variants={itemVariants} className="mt-12">
                                    <h3 className="text-2xl font-bold text-red-600 flex items-center">
                                        <AlertTriangle className="w-6 h-6 mr-2" />
                                        IMPORTANT: Side Effects of Non-Compliance
                                    </h3>
                                    <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                                        To guarantee a safe and effective session, it is vital to strictly follow all instructions provided by your Hijama specialist. Ignoring pre- or post-care advice, including not following hydration protocols, recommencing exercise too soon, or disturbing the treated area, might cause some minor complications that can lead to prolonged marking for extended periods, increased discomfort, or slight local swelling. Your specialist’s guidance is crucial for proper healing.
                                    </p>

                                    <h3 className="mt-8 text-2xl font-bold text-teal-600">Conclusion</h3>
                                    <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                                        Your comfort and well-being are our top priorities at <Link href="/" className="text-teal-600 font-bold hover:underline">Al Madina Hijama Center</Link>. 
                                        We provide committed services, with a male specialist for men and a female specialist for women, who are available around the clock. We are available to you whether you require our expert home service anywhere in Lahore or are at our clinic in Bahria Town.
                                    </p>
                                </motion.div>
                                {/* -- NEW CONTENT END -- */}

                                {/* Indications/Contraindications Section */}
                                <motion.div variants={itemVariants} className="mt-16 pt-8 border-t border-gray-200">
                                    <h3 className="text-3xl font-bold text-teal-600">Health Issues Where Wet Cupping Is Helpful</h3>
                                    <p className="mt-2 text-gray-600">Based on your unique needs, our licensed professionals will create a treatment plan that addresses:</p>
                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-800 flex items-center"><CheckCircle className="h-6 w-6 text-green-600 mr-2" />Indications</h4>
                                            <ul className="mt-4 space-y-2 text-gray-700">
                                                {indications.map((item, index) => (
                                                    <li key={index} className="flex items-start"><ChevronRight className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" /><span>{item}</span></li>
                                                ))}
                                                {/* Added manual link for Ladies Health */}
                                                <li className="flex items-start"><ChevronRight className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" />
                                                    <span>Hormonal Imbalances (<Link href="/blog/hijama-center-lahore-for-ladies-female-staff" className="text-teal-600 hover:underline">Read about Ladies Hijama</Link>)</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-800 flex items-center"><AlertTriangle className="h-6 w-6 text-red-600 mr-2" />Contraindications</h4>
                                            <ul className="mt-4 space-y-2 text-gray-700">
                                                {contraindications.map((item, index) => (
                                                    <li key={index} className="flex items-start"><ChevronRight className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" /><span>{item}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-sm text-gray-500 italic">Your safety is our priority. A thorough consultation is conducted before every session to ensure this treatment is appropriate for you.</p>
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
                                <h3 className="text-2xl font-bold text-teal-600">Book Your Session</h3>
                                <p className="mt-2 text-gray-600">Experience the benefits of Wet Cupping.</p>
                                
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
                                            <p className="text-sm text-gray-600">Certified Hijama Therapist</p>
                                        </div>
                                        <div>
                                            <img src="/female-specialist.webp" alt="Ms. Fatima Khan" className="w-24 h-24 rounded-full mx-auto object-cover" />
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
                            To maximize the benefits of your Hijama session, please follow these important guidelines before and after your treatment.
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
                    
                    <motion.div 
                        variants={itemVariants} 
                        className="mt-16 p-10 bg-teal-50 rounded-3xl border-t-4 border-teal-500 text-center mx-auto max-w-4xl shadow-sm"
                    >
                        <h3 className="text-3xl font-extrabold text-teal-500">Book Your Cupping Session Today</h3>
                        <p className="mt-4 text-xl text-gray-700 mb-8 leading-relaxed">
                            Do not wait for illness to strike. Take a proactive step towards better health.
                            Visit Al Madina Hijama Center to flush out toxins and revitalize your body naturally.
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
                                We have compiled answers to common questions about Wet Cupping (Hijama) to help you feel informed and confident.
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

export default WetCuppingPage;