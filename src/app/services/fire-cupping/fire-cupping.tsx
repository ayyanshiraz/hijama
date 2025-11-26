'use client';

// Import Variants type for correct typing
import { Phone, CheckCircle, Shield, Clock, Sun, Moon, Droplets, Plus, Minus, ChevronRight, AlertTriangle, Flame } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import Image from 'next/image';
import Link from 'next/link';

// --- START: DATA STRUCTURES (Retained from previous update) ---

const benefits = [
    { icon: CheckCircle, text: 'Profound Pain and Stiffness Relief, unwinding chronic muscular knots' },
    { icon: CheckCircle, text: 'Improved Blood Circulation to clear stagnation and oxygenate tissues' },
    { icon: CheckCircle, text: 'Expulsion of Coldness and Dampness, effective for joint pain and stiffness' },
    { icon: CheckCircle, text: 'Targeted Detoxification, drawing metabolic waste and toxins to the surface' },
    { icon: CheckCircle, text: 'High-Intensity Sports Recovery and alleviation of post-exercise soreness' },
    { icon: CheckCircle, text: 'Stress and Anxiety Reduction, contributing to mental relaxation and better sleep' },
];

const processSteps = [
    { icon: Shield, title: 'Preparation', description: 'The designated treatment area is thoroughly cleaned and sterilized.' },
    { icon: Flame, title: 'Flame Application', description: 'A cotton ball with a flame is quickly inserted into the cup and immediately removed, creating a vacuum.' },
    { icon: Droplets, title: 'Suction', description: 'The cup is swiftly placed on the skin. As the hot air cools, it creates a powerful suction, drawing the skin and underlying muscle deep into the cup.' },
    { icon: Clock, title: 'Cupping Time', description: 'The cups are left on the skin for a short duration, typically 5 to 10 minutes.' },
    { icon: Shield, title: 'After-Care', description: 'Cups are gently removed. Dark red temporary marks may appear, a sign of stagnation being drawn to the surface.' },
];

const indications = [
    'Deep muscle pain and chronic stiffness',
    'Stubborn muscular knots and tightness',
    'General body coldness and fatigue',
    'Joint pain and poor circulation',
    'Post-exercise muscle soreness (Sports Recovery)',
    'Stress and anxiety leading to poor sleep quality'
];

const contraindications = [
    'On sunburned, broken, or actively inflamed skin.',
    'If you have a high fever or active infection.',
    'On areas with very thin skin or over major arteries.',
    'If you have a bleeding disorder or are on blood-thinning medication.',
    'During pregnancy (especially on the abdomen and lower back).',
    'Individuals with severe heart conditions or uncontrolled hypertension.'
];

const preparation = [
    { icon: Sun, title: 'Before the Session', points: ['Stay well-hydrated by drinking water.', 'Have a light meal 2-3 hours prior to your appointment.', 'Inform your therapist about any skin sensitivities or health concerns.', 'Wear loose, comfortable clothing.'] },
    { icon: Moon, title: 'After the Session', points: ['Keep the treated area warm and covered, avoiding wind and cold drafts.', 'Avoid showering or swimming for at least 24 hours.', 'Drink plenty of warm water or herbal tea.', 'Rest and avoid strenuous exercise for 24 hours.'] },
];

const faqs = [
    {
        question: "Is Fire Cupping dangerous? Will it burn me?",
        answer: "When performed by a trained and certified practitioner, Fire Cupping is very safe. The flame never touches your skin. It is used only to create a vacuum inside the cup. Our specialists are highly experienced in this traditional method."
    },
    {
        question: "How does Fire Cupping feel?",
        answer: "You will feel a strong pulling sensation as the cup draws the skin and muscle up. This is combined with a pleasant, deep warmth. Most clients find the sensation deeply relaxing, similar to a reverse deep-tissue massage."
    },
    {
        question: "What is the difference between Fire Cupping and Dry Cupping?",
        answer: "Fire cupping is the traditional method of creating suction using heat. This often results in a stronger, deeper pull and a warming sensation. Modern dry cupping uses a plastic pump to create suction, which is more controlled but may not provide the same warming therapeutic effect."
    },
    {
        question: "Will I have marks after Fire Cupping?",
        answer: "Yes, it is normal to have circular marks, similar to those from dry cupping. These marks can range from light red to dark purple, indicating the level of stagnation. They are temporary and will fade in a few days to a week."
    }
];

// JSON-LD Schema data
const schema = {
    "@context": "https://schema.org",
    "@type": "TherapeuticProcedure",
    "name": "Fire Cupping Therapy in Lahore for Pain Relief", 
    "description": "Find certified Fire Cupping (Chinese Cupping) specialists in Lahore for deep pain relief. Female staff, 24/7 home service, complete privacy/parda, and healing guaranteed via the Islamic way. Book now!", 
    "indication": [
        { "@type": "MedicalCondition", "name": "Chronic Pain" },
        { "@type": "MedicalCondition", "name": "Muscle Tension" },
        { "@type": "MedicalCondition", "name": "Respiratory Issues" },
        { "@type": "MedicalCondition", "name": "Stress" }
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

// --- END: DATA STRUCTURES ---


const FireCuppingPage = () => {
    // FIX 1: Explicitly set the type for useState to 'number | null'
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    // FIX 2: Corrected Framer Motion Variants definition for easing strings.
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
        // Using a cubic-bezier array instead of the string "easeOut" to resolve TypeScript error 2322
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }, 
    };

    const breadcrumbItems = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Fire Cupping', href: '/services/fire-cupping' },
    ];
    
    // Function to render the main descriptive content
    const renderNewContent = () => (
        <>
            {/* Title corresponding to "Fire Cupping Specialist in Lahore: The Deepest Natural Pain Relief" */}
            <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-gray-900">
                Fire Cupping Specialist in Lahore: The Deepest Natural Pain Relief
            </motion.h2>

            {/* Paragraph 1 */}
            <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                If you are in Lahore and suffering from deep muscle pain, chronic stiffness, muscle knots, or general body coldness and fatigue, Al Madina Hijama Center offers certified and safe Fire Cupping Therapy services tailored for you.
            </motion.p>

            {/* Paragraph 2 - Description of Fire Cupping */}
            <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                Fire Cupping, also widely known as Chinese Fire Cupping or Hot Cupping, is an advanced form of <a href='/services/dry-cupping' className='text-blue-500'>Dry Cupping</a>. This technique utilizes a flame (fire) to rapidly heat and remove oxygen from the cup, which creates a strong, deep suction when applied to the skin. This powerful suction penetrates deeper into the muscles and tissues than conventional massage or standard Dry Cupping, effectively releasing old tension, eliminating coldness, and promoting deep, immediate relief.
            </motion.p>
            
            {/* Paragraph 3 - Expertise and Safety */}
            <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                Our certified specialists are highly experienced, adhering to strict international and Islamic standards to ensure your health and comfort are the top priority throughout the session.
            </motion.p>
        </>
    );

    // Function to render the "Exclusive Ladies Home Service" content (Plain coded)
    const renderLadiesServiceContent = () => (
        <motion.div variants={itemVariants} className="mt-12 p-8 bg-teal-50 rounded-xl border-l-4 border-teal-600">
            <h3 className="text-3xl font-bold text-gray-900 flex items-center">
                <Shield className="h-7 w-7 text-teal-600 mr-3" /> Exclusive Ladies Home Service with Complete Parda
            </h3>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                Understanding the need for privacy and safety among the ladies in Lahore, we have customized our service delivery to ensure maximum comfort and adherence to your needs:
            </p>
            <ul className="mt-4 space-y-3 text-gray-800 font-medium">
                {/* Certified Female Specialist: formatted without extra markdown */}
                <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" /> 
                    <span className="font-bold">Certified Female Specialist:</span> Services for women are exclusively performed by our expert and certified female specialist, ensuring comfort and appropriate care.
                </li>
                {/* 24/7 Home Service: formatted without extra markdown */}
                <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" /> 
                    <span className="font-bold">24/7 Home Service:</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Whether you need a session early in the morning or late at night, our 24/7 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;home service is available at your convenience across all areas of Lahore.
                </li>
                {/* Parda and Privacy Guarantee: formatted without extra markdown */}
                <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" /> 
                    <span className="font-bold">Parda and Privacy Guarantee:</span> We ensure complete privacy and Parda throughout the treatment session, treating your personal space and modesty with the utmost respect.
                </li>
            </ul>
        </motion.div>
    );

    // Function to render the "Islamic Way of Healing" content
    const renderIslamicHealingContent = () => (
        <motion.div variants={itemVariants} className="mt-12">
            <h3 className="text-3xl font-bold text-gray-900">The Islamic Way of Healing and Our Benefit Guarantee</h3>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Our center views cupping, including Fire Cupping, not just as a medical treatment but as a method rooted in traditional and Islamic healing principles. While Wet Hijama (Blood Cupping) is directly linked to the Sunnah, Fire Cupping shares the foundational goal of stimulating the body and removing harmful stagnation. We perform your treatment in the light of the Sunnah, emphasizing hygiene, ethical practice, and sincerity in the intention of healing.
            </p>
            <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-gray-700">
                <p className="font-bold">Benefit Guarantee:</p> We stand by the efficacy of our treatment. We assure you that you will experience tangible relief and improvement after your session. Our goal is not just temporary relief but complete client healing (shifa).
            </div>
        </motion.div>
    );

    // Function to render the final call to action content
    const renderCallToAction = () => (
        <motion.div variants={itemVariants} className="mt-12 p-6 bg-green-50 rounded-lg text-center">
            <h3 className="text-3xl font-bold text-teal-600">Book Now: End Your Pain Today</h3>
           <p className="mt-3 text-lg text-gray-700">
    Don&apos;t search for Chinese fire cupping near me and settle for uncertified practitioners. Contact 
    <Link href="/" className="text-blue-500">
        Al Madina Hijama Center
    </Link> 
    today to book your session. Our certified experts, high standards of sterilization, and commitment to your privacy guarantee you the best healing experience in Lahore.
</p>
            <p className="mt-2 text-md text-gray-600">
                Reach out to us 24/7 to take the powerful step towards natural pain relief.
            </p><br></br>
            <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-[#FF6900] text-white font-bold text-xl rounded-xl shadow-lg hover:brightness-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
                Book Your Consultation Today
            </Link>
        </motion.div>
    );


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
                    style={{ backgroundImage: "url('/services/s7.webp')" }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative container mx-auto px-6 text-center z-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight"
                    >
                        Fire Cupping Therapy
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                        className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
                    >
                        Find certified Fire Cupping (Chinese Cupping) specialists in Lahore for deep pain relief. Female staff, 24/7 home service, complete privacy/parda, and healing guaranteed via the Islamic way.
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
                                
                                {/* 1. The main description content */}
                                {renderNewContent()}

                                {/* 2. Exclusive Ladies Home Service Content */}
                                {renderLadiesServiceContent()}

                                {/* 3. Benefits Section - Title updated, list items are now more specific */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-gray-900">
                                    Key Fire Cupping Benefits for Your Health
                                </motion.h3>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    The Fire Cupping benefits are vast and long-lasting. It is often considered more effective than deep tissue massage for certain conditions:
                                </motion.p>
                                <motion.ul variants={staggerContainer} className="mt-6 space-y-4">
                                    {benefits.map((benefit, index) => (
                                        <motion.li key={index} variants={itemVariants} className="flex items-start">
                                            <benefit.icon className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                                            <span className="text-gray-700">{benefit.text}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                {/* 4. Islamic Healing Content */}
                                {renderIslamicHealingContent()}

                                {/* 5. Indications/Contraindications Section - Keeping structure but ensuring indications match new copy */}
                                <motion.div variants={itemVariants} className="mt-12">
                                    <h3 className="text-3xl font-bold text-gray-900">Is Fire Cupping Right for You?</h3>
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
                                            <p className="mt-2 text-gray-600">Please consult our specialist before booking if you have:</p>
                                            <ul className="mt-4 space-y-2 text-gray-700">
                                                {contraindications.map((item, index) => (
                                                    <li key={index} className="flex items-start"><ChevronRight className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" /><span>{item}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-sm text-gray-500 italic">Your safety is our priority. A thorough consultation is conducted before every session.</p>
                                </motion.div>


                                {/* 6. Process Section - Title updated, steps updated */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-gray-900">Fire Cupping Procedure: How the Magic Happens</motion.h3>
                                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    The Fire Cupping Therapy process is quick, safe, and highly effective:
                                </p>
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

                        {/* Right Column (Sidebar) - No changes requested here */}
                        <aside className="lg:col-span-1">
                            <motion.div 
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                                className="sticky top-24 bg-gray-50 p-8 rounded-2xl shadow-lg"
                            >
                                <h3 className="text-2xl font-bold text-gray-900">Book Your Session</h3>
                                <p className="mt-2 text-gray-600">Experience the traditional benefits of Fire Cupping.</p>
                                
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
                                            {/* Alt Text for this image: Certified specialist performing professional Fire Cupping Therapy in Lahore for deep muscle pain relief. */}
                                            <img src="/female-specialist.webp" alt="Ms. Fatima Khan" className="w-24 h-24 rounded-full mx-auto object-cover" />
                                            <p className="mt-2 font-bold">Ms. Fatima Khan</p>
                                            <p className="text-sm text-gray-600">Certified Hijama Therapist</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </aside>
                    </div>
                    {/* Preparation & After-care Section - No changes requested here */}
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="mt-24">
                        <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-gray-900 text-center">Preparation & After-care</motion.h2>
                        <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
                            To maximize the benefits, please follow these important guidelines before and after your treatment.
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
                    {renderCallToAction()}

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
                                We have compiled answers to common questions about Fire Cupping.
                            </motion.p>
                        </motion.div>
                        
                        <div className="max-w-4xl mx-auto flex flex-col gap-y-4">
                            {faqs.map((faq, index) => {
                                const isOpen = openFaqIndex === index;
                                return (
                                    <div key={index}>
                                        <button
                                            // FIX 3: Removed explicit type casting in the setter, letting TypeScript infer the correct type (number | null)
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

// Export the component for use in page.tsx
export default FireCuppingPage;