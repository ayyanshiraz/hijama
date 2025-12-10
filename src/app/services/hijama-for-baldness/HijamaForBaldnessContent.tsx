'use client';

import { Phone, CheckCircle, Shield, Clock, Sun, Moon, Droplets, Plus, Minus, ChevronRight, AlertTriangle, Sunrise, Facebook, Instagram, Youtube, Video } from 'lucide-react';
import { motion, AnimatePresence, Variants, Transition } from 'framer-motion';
import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6';

// --- DATA ARRAYS ---
const benefits = [
    { icon: CheckCircle, text: '<strong>Stimulates Blood Flow</strong>: Drastically improves circulation to the scalp, waking up sleepy follicles.' },
    { icon: CheckCircle, text: '<strong>Nutrient Delivery</strong>: Delivers fresh oxygen and essential nutrients directly to the hair roots.' },
    { icon: CheckCircle, text: '<strong>Detoxifies the Scalp</strong>: Helps remove toxins and DHT buildup that cause follicles to shrink.' },
    { icon: CheckCircle, text: '<strong>Awakens Dormant Follicles</strong>: Can trigger regrowth in areas of thinning by stimulating the root.' },
    { icon: CheckCircle, text: '<strong>Strengthens Hair Roots</strong>: Significantly reduces hair fall by strengthening the anchor of the hair.' },
    { icon: CheckCircle, text: '<strong>100% Natural Approach</strong>: A non-surgical, drug-free therapy based on Sunnah and science.' },
];

const processSteps = [
    { icon: Droplets, title: 'Comprehensive Scalp Analysis', description: 'Before any equipment touches the skin, our specialist performs a detailed visual assessment. We identify the specific pattern of hair loss, check for inflammation, and determine the optimal points for cupping.' },
    { icon: Shield, title: 'Sterilization and Hygiene', description: 'Safety is our first priority. The scalp area undergoes a thorough cleaning and sterilization process to prevent any risk of infection.' },
    { icon: Sunrise, title: 'The Cupping Procedure', description: 'Small, specialized cups are placed on thinning areas. The therapist may use dry cupping to stimulate movement or wet cupping to extract toxins. The suction is gentle yet effective, drawing deep stagnation to the surface.' },
    { icon: Clock, title: 'Follicle Activation', description: 'As fresh blood rushes to the area, dormant follicles are stimulated. This rush of circulation acts as a wake-up call to the hair roots, encouraging them to shift into a growth phase.' },
    { icon: Shield, title: 'Post-Therapy Protection', description: 'Once the cups are removed, the scalp is cleaned once more. We apply soothing antiseptic measures to ensure the skin remains protected as it begins the healing process.' },
];

const indications = [
    'Men and women suffering from Androgenetic Alopecia (Pattern Baldness)',
    'Individuals notice general thinning or a widening part line',
    'Those experiencing excessive shedding due to stress or diet',
    'People with poor scalp circulation or tension headaches',
    'Anyone wanting to boost the effectiveness of topical hair oils'
];

const contraindications = [
    'In Periods hijama cannot be done.',
    'During pregnancy or breastfeeding.',
    'If you have a bleeding disorder or are on blood-thinning medication.',
    'Uncontrolled diabetes or hypertension.',
    'Severe anemia.',
    'Directly on open sores or wounds on the scalp.',
    'Hair loss due to active chemotherapy.'
];

const preparation = [
    { icon: Sun, title: 'Before Your Visit', points: ['Please wash your hair thoroughly on the day of your appointment. Arrive with a clean, dry scalp free of gels, sprays, or oils.', 'Hydrate well by drinking plenty of water and eat a light meal a few hours prior to prevent lightheadedness.'] },
    { icon: Moon, title: 'Recovery Phase', points: ['After the session, the scalp needs rest. Do not wash your hair or apply any chemical products for at least 24 hours.', 'Avoid activities that cause heavy sweating, such as saunas or intense gym workouts.', 'Keep your head covered if you go out in direct sunlight. Gentle massage of the surrounding areas can help, but avoid scratching the treated points.'] },
];

const faqs = [
    {
        question: "Does Hijama for baldness actually work?",
        answer: "Hijama is a traditional therapy that works by drastically increasing blood flow to the treated area. This brings vital nutrients and oxygen to dormant hair follicles, which can stimulate them and promote regrowth. While results vary, many clients see a reduction in hair fall and an increase in hair thickness."
    },
    {
        question: "Is the treatment painful?",
        answer: "The scalp is a sensitive area, but the procedure is generally well-tolerated. We use very small cups and make tiny, superficial scratches (in blood cupping) that most clients describe as minimally uncomfortable, not painful."
    },
    {
        question: "How many sessions are needed to see results?",
        answer: "Hair growth is a slow process. This is not an instant fix. A consistent treatment plan is required. We typically recommend a series of sessions (e.g., 6-10 sessions) spaced 2-4 weeks apart to achieve noticeable results."
    },
    {
        question: "Will I have to shave my head for this treatment?",
        answer: "No, you do not need to shave your head. The therapy can be performed effectively on areas with existing hair. We only ask that you come with clean, product-free hair."
    }
];

// JSON-LD Schema data
const schema = {
    "@context": "https://schema.org",
    "@type": "TherapeuticProcedure",
    "name": "Hijama for Hair Fall & Baldness (Scalp Cupping) in Lahore",
    "description": "A natural therapy for hair loss that uses cupping to stimulate blood flow to the scalp, nourish dormant hair follicles, and promote natural hair regrowth in Lahore.",
    "indication": [
        { "@type": "MedicalCondition", "name": "Alopecia" },
        { "@type": "MedicalCondition", "name": "Hair Loss" }
    ],
    "bodyLocation": "Scalp",
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

const HijamaForBaldnessContent = () => {
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
        { name: 'Hijama for Hair Loss', href: '/services/hijama-for-baldness' },
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
                    style={{ backgroundImage: "url('/services/s11.webp')" }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative container mx-auto px-6 text-center z-10">
                    <motion.h1 
                        {...heroAnimateProps}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight"
                    >
                        Scalp Hijama for Hair Fall & Baldness
                    </motion.h1>
                    <motion.p 
                        initial={heroAnimateProps.initial}
                        animate={heroAnimateProps.animate}
                        transition={{ ...heroAnimateProps.transition, delay: 0.2 } as Transition}
                        className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
                    >
                        A natural therapy to stimulate scalp circulation, nourish dormant follicles, and promote strong hair regrowth.
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
                                <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-teal-600">Scalp Hijama Therapy in Lahore: The Natural Solution for Hair Fall</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Hair loss isn&apos;t just a cosmetic concern; it has deep impacts on confidence and self-image. While many modern treatments rely on harsh chemicals or invasive surgeries, Scalp Hijama Therapy offers a powerful and natural alternative.
                                </motion.p>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    At <Link href="/" className="text-teal-600 hover:underline font-bold">Al Madina Islamic Hijama Center in Lahore</Link>, we utilize this time-honored Sunnah technique to focus on the biological root of the problem: improving the internal environment of the scalp. By utilizing controlled suction, this therapy helps revitalize the scalp ecosystem. It&apos;s not just a surface treatment, but it&apos;s crucial to ensuring that hair roots receive the essential life and support they need for strong hair growth.
                                </motion.p>
                                
                                {/* 2. How It Works Section */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-600">The Biological Science: How Scalp Hijama Stops Hair Fall</motion.h3>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Hair weakening and loss are often caused by poor blood circulation. When blood flow to the scalp decreases, hair follicles starve, lacking the oxygen and nutrients necessary to strengthen the hair. Over time, this starvation causes the follicles to shrink and eventually go dormant.
                                </motion.p>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Scalp Hijama directly solves this issue. Due to suction, fresh, oxygenated blood flows to the targeted areas. This process achieves two critical goals: <strong>Nutrition Delivery</strong> (delivering a potent dose of nutrition to the hair roots) and <strong>Detoxification</strong>. This helps to extract stagnant blood, toxins, and pathogenic heat that may be clogging the follicles. This <Link href="/services/hijama-for-detox" className="text-teal-600 hover:underline">detoxification process</Link> is vital for removing the buildup of DHT, a hormone frequently linked to pattern baldness.
                                </motion.p>

                                {/* 3. Key Benefits Section */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-600">Key Benefits for Hair & Scalp</motion.h3>
                                <motion.ul variants={staggerContainer} className="mt-6 space-y-4">
                                    {benefits.map((benefit, index) => (
                                        <motion.li key={index} variants={itemVariants} className="flex items-start">
                                            <benefit.icon className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                                            {/* HTML Rendering for Bold Text */}
                                            <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: benefit.text }} />
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                {/* 4. Treatment Process */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-600">The Structured Treatment Experience</motion.h3>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed font-semibold">
                                    We believe in a structured and hygienic approach to ensure patient safety and maximum results. To learn more about how we help regrow hair naturally, check our <Link href="/blog/hijama-for-hair-growth-lahore" className="text-teal-600 hover:underline">Hair Regrowth Guide</Link>.
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
                                
                                {/* 5. Indications/Contraindications Section */}
                                <motion.div variants={itemVariants} className="mt-12">
                                    <h3 className="text-3xl font-bold text-teal-600">Is This Hair Restoration Therapy Right for You?</h3>
                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-xl font-semibold text-teal-600 flex items-center"><CheckCircle className="h-6 w-6 text-green-600 mr-2" />Highly Recommended For:</h4>
                                            <ul className="mt-4 space-y-2 text-gray-700">
                                                {indications.map((item, index) => (
                                                    <li key={index} className="flex items-start"><ChevronRight className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" /><span>{item}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-teal-600 flex items-center"><AlertTriangle className="h-6 w-6 text-red-600 mr-2" />Important Contraindications:</h4>
                                            <ul className="mt-4 space-y-2 text-gray-700">
                                                {contraindications.map((item, index) => (
                                                    <li key={index} className="flex items-start"><ChevronRight className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" /><span>{item}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-sm text-gray-500 italic">A consultation is necessary to assess your type of hair loss and determine if this treatment is right for you.</p>
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
                                <p className="mt-2 text-gray-600">Start your journey to healthier, fuller hair.</p>
                                
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
                                            <Image src="/ceo.webp" alt="Mr. Jameel ur Rehman" width={96} height={96} className="w-24 h-24 rounded-full mx-auto object-cover" />
                                            <p className="mt-2 font-bold">Mr. Jameel ur Rehman</p>
                                            <p className="text-sm text-gray-600">Certified Hijama Therapist</p>
                                        </div>
                                        <div>
                                            <Image src="/female-specialist.webp" alt="Ms. Fatima Khan" width={96} height={96} className="w-24 h-24 rounded-full mx-auto object-cover" />
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

                    {/* Preparation & After-care Section (Moved Outside Grid) */}
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="mt-24">
                        <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-teal-600 text-center">Preparation & After-care</motion.h2>
                        <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
                            To get the most out of your scalp hijama session, adherence to care guidelines is essential.
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
                    
                    {/* Final Call to Action (Moved Outside Grid) */}
                    <motion.div 
                        variants={itemVariants} 
                        initial="hidden" 
                        animate="visible" 
                        className="mt-16 p-10 bg-teal-50 rounded-3xl border-t-4 border-teal-500 text-center mx-auto max-w-4xl shadow-sm"
                    >
                        <h3 className="text-3xl font-extrabold text-teal-500">Ready to Stop Hair Loss?</h3>
                        <p className="mt-4 text-xl text-gray-700 mb-8 leading-relaxed">
                            By following this natural protocol, you allow your body to heal itself. If you are ready to explore Scalp Hijama as your natural solution for hair fall in Lahore, visit our center or book a consultation.
                        </p>
                        
                        <Link
                            href="/booking"
                            className="inline-flex items-center justify-center px-10 py-4 bg-[#FF6900] text-white font-bold text-xl rounded-xl shadow-lg hover:brightness-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                        >
                            Book Your 24/7 Scalp Hijama Session
                        </Link>
                    </motion.div>

                    {/* --- FAQ Section (Moved Outside Grid) --- */}
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
                                We have compiled answers to common questions about Scalp Hijama to help you feel informed and confident.
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

export default HijamaForBaldnessContent;