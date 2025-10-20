'use client';

import { Phone, CheckCircle, Shield, Clock, Sun, Moon, Droplets, Plus, Minus, ChevronRight, AlertTriangle, Sparkles, Leaf } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';

const benefits = [
    { icon: CheckCircle, text: 'Effectively removes stagnant blood and metabolic waste' },
    { icon: CheckCircle, text: 'Reduces feelings of sluggishness and fatigue' },
    { icon: CheckCircle, text: 'Promotes clearer, healthier-looking skin' },
    { icon: CheckCircle, text: 'Supports the function of the liver and kidneys' },
    { icon: CheckCircle, text: 'Strengthens the bodys natural immune response' },
    { icon: CheckCircle, text: 'Leaves you feeling refreshed, lighter, and revitalized' },
];

const processSteps = [
    { icon: Droplets, title: 'Wellness Consultation', description: 'A discussion about your lifestyle and wellness goals to tailor the detox session.' },
    { icon: Shield, title: 'Area Sterilization', description: 'Key points on the back and shoulders, known for toxin accumulation, are sterilized.' },
    { icon: Sparkles, title: 'Purification Cupping', description: 'Wet cupping is applied to specific Sunnah points to draw out toxins and impurities from the body.' },
    { icon: Clock, title: 'Revitalization', description: 'The removal of stagnant blood stimulates fresh, oxygenated blood flow, revitalizing the entire body.' },
    { icon: Leaf, title: 'Post-Detox Guidance', description: 'You receive advice on diet and hydration to enhance and prolong the detoxifying effects.' },
];

const indications = [
    'General feelings of fatigue, lethargy, or heaviness',
    'Dull skin, acne, or other persistent skin issues',
    'A desire for a general systemic "cleanse" or reset',
    'As a preventative measure to maintain optimal health',
    'To support a healthy lifestyle or a new diet plan',
    'Exposure to environmental pollutants or toxins',
    'Recovering from a period of unhealthy eating'
];

const contraindications = [
    'During pregnancy or breastfeeding.',
    'If you have severe anemia or are feeling very weak.',
    'Active infections or fever.',
    'Certain skin conditions like widespread eczema or psoriasis on the back.',
    'If you are undergoing major medical treatments like chemotherapy.',
    'Uncontrolled diabetes or high blood pressure.'
];

const preparation = [
    { icon: Sun, title: 'Before the Session', points: ['Drink plenty of water for at least 24 hours prior to your session.', 'Eat a light and healthy meal 2-3 hours before.', 'Avoid consuming heavy, processed foods, dairy, and red meat for a day before.', 'Ensure you are well-rested.'] },
    { icon: Moon, title: 'After the Session', points: ['Continue to drink plenty of water to help flush the system.', 'Adhere to a simple, clean diet for 24-48 hours.', 'Avoid strenuous exercise and exposure to extreme temperatures.', 'Allow your body ample time to rest and rejuvenate.'] },
];

const faqs = [
    {
        question: "How will I feel after a detox session?",
        answer: "Most clients report feeling significantly lighter, more energetic, and mentally clearer after a detox session. Its a feeling of having reset your system. You might notice the cup marks, which are temporary and will fade."
    },
    {
        question: "Is this different from other types of detoxes, like juice cleanses?",
        answer: "Yes, it is very different. While dietary cleanses focus on the digestive system, Hijama works by physically removing toxins and metabolic waste directly from your bloodstream and tissues. Its a powerful method for deep, systemic detoxification that complements a healthy diet."
    },
    {
        question: "How often should I do a Hijama detox for general wellness?",
        answer: "Following the Sunnah, having Hijama done on the 17th, 19th, or 21st of the Islamic lunar month is highly recommended for maximum benefit. For general maintenance, a session every 3 to 6 months is an excellent way to keep your body functioning optimally."
    },
    {
        question: "Does Hijama for detox help with weight loss?",
        answer: "While not a direct weight loss treatment, Hijama can support weight loss efforts. By improving metabolism, supporting organ function, and helping to balance hormones, it creates a healthier internal environment that can make it easier for the body to shed excess weight."
    }
];

// JSON-LD Schema data
const schema = {
    "@context": "https://schema.org",
    "@type": "TherapeuticProcedure",
    "name": "Hijama for Detox & Wellness",
    "description": "A comprehensive Hijama therapy focused on purifying the body, removing toxins, and boosting overall vitality. This treatment is ideal for general health maintenance, enhancing energy levels, and promoting a feeling of rejuvenation.",
    "indication": [
      { "@type": "MedicalCondition", "name": "Fatigue" },
      { "@type": "MedicalCondition", "name": "General Well-being" },
      { "@type": "MedicalCondition", "name": "Detoxification" }
    ],
    "bodyLocation": "Primarily applied to Sunnah points on the back and shoulders, which are key areas for systemic detoxification.",
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

const DetoxWellnessPage = () => {
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
        { name: 'Hijama for Detox & Wellness', href: '/services/hijama-for-detox' },
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
                    style={{ backgroundImage: "url('/services/s6.jpg')" }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative container mx-auto px-6 text-center z-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight"
                    >
                        Hijama for Detox & Wellness
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
                    >
                        Cleanse your body from the inside out to restore energy, vitality, and a profound sense of well-being.
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
                                <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-gray-900">Purify, Refresh, and Rejuvenate</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Hijama for Detox & Wellness is a foundational therapy for maintaining optimal health in a world full of environmental and dietary toxins. This treatment focuses on full-body purification by applying Wet Cupping to key Sunnah points, which are traditionally known as the most effective sites for clearing stagnant blood and metabolic waste.
                                </motion.p>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    This therapy is perfect for anyone looking to feel more energetic, improve their skin clarity, and support their bodys natural cleansing processes. We provide a clean, safe, and comfortable experience with dedicated practitioners for both men and women, with the added convenience of home service.
                                </motion.p>

                                {/* Benefits Section */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-gray-900">Key Benefits of a Hijama Detox</motion.h3>
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
                                    <h3 className="text-3xl font-bold text-gray-900">Is a Wellness Session for You?</h3>
                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-800 flex items-center"><CheckCircle className="h-6 w-6 text-green-600 mr-2" />Indications</h4>
                                            <p className="mt-2 text-gray-600">This therapy is highly recommended if you experience:</p>
                                            <ul className="mt-4 space-y-2 text-gray-700">
                                                {indications.map((item, index) => (
                                                    <li key={index} className="flex items-start"><ChevronRight className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" /><span>{item}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-800 flex items-center"><AlertTriangle className="h-6 w-6 text-red-600 mr-2" />Contraindications</h4>
                                            <p className="mt-2 text-gray-600">Please seek advice from our specialist if you are:</p>
                                            <ul className="mt-4 space-y-2 text-gray-700">
                                                {contraindications.map((item, index) => (
                                                    <li key={index} className="flex items-start"><ChevronRight className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" /><span>{item}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-sm text-gray-500 italic">A brief consultation is always conducted to ensure the treatment is perfectly suited to your current state of health.</p>
                                </motion.div>

                                {/* Process Section */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-gray-900">The Detox & Wellness Process</motion.h3>
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
                                <p className="mt-2 text-gray-600">Kickstart your journey to a cleaner, healthier you.</p>
                                
                                <div className="mt-6 space-y-2">
                                    <div>
                                        <p className="text-4xl font-extrabold text-teal-600">Rs. 2,500</p>
                                        <p className="text-sm text-gray-500">per session</p>
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-gray-800">Session Duration</p>
                                        <p className="text-gray-600">Approx. 30-45 minutes</p>
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
                                Everything you need to know about our Detox & Wellness therapy.
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

export default DetoxWellnessPage;
