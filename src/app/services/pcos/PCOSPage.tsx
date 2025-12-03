'use client';

import { Phone, CheckCircle, Shield, Clock, Sun, Moon, Droplets, Plus, Minus, ChevronRight, AlertTriangle, Target } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs'; 
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
    { icon: CheckCircle, text: 'Helps in regulating irregular menstrual cycles' },
    { icon: CheckCircle, text: 'Supports the bodys natural hormonal balance' },
    { icon: CheckCircle, text: 'Improves blood flow to the reproductive organs' },
    { icon: CheckCircle, text: 'Aids in detoxification of excess hormones' },
    { icon: CheckCircle, text: 'Can help reduce symptoms like insulin resistance' },
    { icon: CheckCircle, text: 'A natural, holistic therapy to support fertility and wellness' },
];

const processSteps = [
    { icon: Droplets, title: 'Holistic Consultation', description: 'Every session begins with a private consultation with our female specialist to tailor the treatment to your specific PCOS symptoms, cycle history, and health goals.' },
    { icon: Shield, title: 'Sterile Preparation', description: 'Hygiene is paramount. We gently sterilize specific points on the back, abdomen, and lower body to prepare the skin for the procedure.' },
    { icon: Target, title: 'Targeted Cupping Application', description: 'We apply blood cupping to key meridian points that correspond to the endocrine glands and the reproductive system. This targeted approach ensures the therapy reaches the areas that need it most.' },
    { icon: Clock, title: 'Hormonal Rebalancing', description: 'The suction helps purify the blood and stimulate the nervous system. This dual action encourages the body to regulate its own hormonal output naturally.' },
    { icon: Shield, title: 'Wellness Guidance', description: 'The treatment does not end when you leave. You receive a wellness plan that includes after-care advice, along with dietary and lifestyle tips specifically designed to manage PCOS.' },
];

const indications = [
    'Those diagnosed with Polycystic Ovary Syndrome (PCOS).',
    'Women experiencing irregular or absent periods (Amenorrhea).',
    'Individuals suffering from general hormonal imbalances.',
    'Managing associated symptoms like acne or hirsutism.',
    'Support fertility challenges and insulin resistance.'
];

const contraindications = [
    'You are currently on your period (Hijama cannot be done).',
    'You are pregnant or actively trying to conceive post-ovulation.',
    'You have severe anemia or very low blood pressure.',
    'You are on blood-thinning medication or have a bleeding disorder.',
    'You are taking specific hormonal medications (consultation required).',
];

const preparation = [
    { icon: Sun, title: 'Before You Arrive', points: ['Discuss your cycle and any current medications with our specialist beforehand.', 'Hydration is key, so drink plenty of water.', 'Have a light, nutritious meal 2 to 3 hours before your session and wear loose, comfortable clothing.'] },
    { icon: Moon, title: 'After the Session', points: ['Rest and avoid strenuous activity for 24 to 48 hours.', 'Continue to drink plenty of water to aid the detoxification process.', 'We advise following a clean, low-glycemic diet to support hormonal balance.', 'Keep the treated areas warm and covered to prevent cold or wind exposure.'] },
];

const faqs = [
    {
        question: "How does Hijama help with PCOS?",
        answer: "Hijama is a holistic therapy that helps by improving blood flow to the ovaries, reducing inflammation, and aiding the body in detoxifying excess hormones that contribute to PCOS symptoms. By stimulating key points, it helps to regulate the endocrine system, which can lead to more regular menstrual cycles."
    },
    {
        question: "Can Hijama cure PCOS?",
        answer: "PCOS is a complex metabolic and hormonal condition. While Hijama is not a cure it is a highly effective natural therapy for managing the symptoms. When combined with diet, exercise, and a healthy lifestyle, many women experience significant improvements in their cycles and overall well-being."
    },
    {
        question: "When is the best time in my cycle to get Hijama for PCOS?",
        answer: "It is best to have Hijama done *after* your period has finished. It should not be performed while you are menstruating. Our specialist can advise on the optimal timing for your specific cycle."
    },
    {
        question: "How many sessions will I need?",
        answer: "Regulating hormones takes time. This is not a one-time fix. Our specialist will recommend a personalized treatment plan, which usually involves a series of sessions over several months to achieve the best results."
    }
];

const schema = {
    "@context": "https://schema.org",
    "@type": "TherapeuticProcedure",
    "name": "Hijama for PCOS in Lahore (24/7) | Female Specialist & Home Service",
    "description": "Manage PCOS holistically with specialized Hijama therapy in Lahore. We offer 24/7 service, confidential care by dedicated female staff, and convenient home service in Bahria Town and across Lahore.",
    "indication": [
        { "@type": "MedicalCondition", "name": "Polycystic Ovary Syndrome (PCOS)" },
        { "@type": "MedicalCondition", "name": "Irregular Menstrual Cycle" },
        { "@type": "MedicalCondition", "name": "Hormonal Imbalance" }
    ],
    "bodyLocation": "Back, Abdomen, and other points related to the endocrine system",
    "provider": {
        "@type": "MedicalBusiness",
        "name": "Al Madina Islamic Hijama Center (Best Hijama Center in Lahore)",
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

const PCOSPage = () => {
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
        { name: 'Hijama for PCOS', href: '/services/pcos' },
    ];
    
    const fireCuppingUrl = "https://www.almadinahijamacenter.com/services/fire-cupping";
    
    return (
        <main className="bg-white text-gray-800">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <section className="relative bg-gray-800 text-white py-32 sm:py-48 flex items-center justify-center">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/services/s13.webp')" }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative container mx-auto px-6 text-center z-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight"
                    >
                        Hijama for PCOS in Lahore (24/7) | Female Specialist & Home Service
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        className="mt-4 text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto"
                    >
                        Manage PCOS holistically with specialized Hijama therapy in Lahore. We offer 24/7 service, confidential care by dedicated female staff, and convenient home service in Bahria Town and across Lahore.
                    </motion.p>
                </div>
            </section>

            <Breadcrumbs items={breadcrumbItems} />

            <section className="py-24">
                <div className="container mx-auto px-8 sm:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        
                        <div className="lg:col-span-2">
                            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                                <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-gray-900">Restoring Rhythm and Balance with Hijama for PCOS</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Polycystic Ovary Syndrome, commonly known as PCOS, is a complex condition that disrupts the bodys delicate hormonal rhythm. It is frequently characterized by inflammation, poor circulation, and stubborn hormonal imbalances. While conventional medicine often focuses on symptom masking, our specialized Hijama therapy for PCOS offers a holistic alternative. We focus on the root causes by targeting the endocrine system directly to support the bodys natural regulatory processes.
                                </motion.p>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    This therapy is not just about physical relief; it is about restoring internal harmony. As the <Link href={'/'} className='text-blue-500'>Best Hijama Center </Link> in Lahore, we ensure complete privacy with a dedicated ladies staff for female clients, whether you visit our Bahria Town clinic or choose our discreet home service option. We aim to revitalize the system from within.
                                </motion.p>

                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-gray-900">How It Supports Hormonal Health</motion.h3>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    The science behind this therapy lies in its ability to manipulate blood flow and detoxification. Pelvic congestion can lead to poor ovarian function. <Link href={fireCuppingUrl} className="text-teal-600 hover:text-teal-800 font-semibold underline">Hijama aids</Link> in removing this stagnant blood and reducing systemic inflammation. Crucially, this process helps in the detoxification of excess hormones that may be causing chaos in your cycle. The therapy improves fresh blood flow to the reproductive organs, ensuring they receive the oxygen and nutrients needed for optimal function. Our 24/7 Hijama service ensures you can schedule your treatment when it best suits your cycle and needs.
                                </motion.p>
                                
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-gray-900">Key Benefits for PCOS Management</motion.h3>
                                <motion.ul variants={staggerContainer} className="mt-6 space-y-4">
                                    {benefits.map((benefit, index) => (
                                        <motion.li key={index} variants={itemVariants} className="flex items-start">
                                            <benefit.icon className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                                            <span className="text-gray-700">{benefit.text}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                <motion.div variants={itemVariants} className="mt-12">
                                    <h3 className="text-3xl font-bold text-gray-900">Is This Therapy Right for You?</h3>
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
                                            <p className="mt-2 text-gray-600">This therapy is not suitable for:</p>
                                            <ul className="mt-4 space-y-2 text-gray-700">
                                                {contraindications.map((item, index) => (
                                                    <li key={index} className="flex items-start"><ChevronRight className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" /><span>{item}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-sm text-gray-500 italic">A full consultation is conducted by our female specialist to ensure this treatment is appropriate for you.</p>
                                </motion.div>


                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-gray-900">Your Treatment Journey</motion.h3>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    We ensure a comfortable, private, and professional environment for all our clients. We have male staff for male clients seeking other services and the dedicated ladies staff for female clients seeking this specialized Hijama for PCOS treatment.
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
                                
                            </motion.div>
                        </div>

                        <aside className="lg:col-span-1">
                            <motion.div 
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, ease: 'easeOut' }}
                                className="sticky top-24 bg-gray-50 p-8 rounded-2xl shadow-lg"
                            >
                                <h3 className="text-2xl font-bold text-gray-900">Book Your Session</h3>
                                <p className="mt-2 text-gray-600">A specialized, confidential service for women by our female practitioners.</p>
                                
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
                                    <h4 className="text-lg font-semibold text-gray-800">Your Specialist (Female Staff)</h4>
                                    <div className="flex justify-center items-center gap-8 mt-4">
                                        <div>
                                            {/* Female specialist image is relevant as this service is specialized for women */}
                                            <img src="/female-specialist.webp" alt="Ms. Fatima Khan" className="w-24 h-24 rounded-full mx-auto object-cover" />
                                            <p className="mt-2 font-bold">Ms. Fatima Khan</p>
                                            <p className="text-sm text-gray-600">Certified Hijama Therapist</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </aside>
                    </div>

                    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="mt-24">
                        <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-gray-900 text-center">Optimizing Your Results</motion.h2>
                        <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
                            Preparation and after-care are vital for the success of the treatment and sustaining hormonal balance.
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
                    
                    <motion.section 
                        className="mt-20 bg-teal-600 text-white py-10 rounded-3xl shadow-2xl" 
                            initial="hidden" 
                            animate="visible" 
                            variants={itemVariants}
                    >
                        <div className="container mx-auto px-4 sm:px-8 text-center"> 
    
                            <h2 className="text-3xl md:text-4xl font-extrabold">
                                📞 Book Your Appointment at the Best Hijama Center in Lahore
                            </h2>
                                     <p className="mt-3 text-lg font-light max-w-3xl mx-auto">
                                        Ready to find a supportive path to recovery? We provide confidential, professional care.
                                     </p>
                        <div className="mt-6 space-y-3 md:space-y-0 md:flex md:justify-center md:gap-6 text-base font-semibold">
                            <p>✅ Clinic Location: Bahria Town, Lahore.</p>
                            <p>⏰ Availability: 24/7 service.</p>
                            <p>👩 Staff: Dedicated Ladies Staff for Female clients.</p>
                        </div>

                             <Link
                                href="/booking"
                                className="mt-8 inline-flex items-center justify-center px-8 py-3 bg-[#FF6900] text-white font-bold text-lg rounded-lg shadow-xl hover:brightness-90 transition-all duration-300 transform hover:scale-105"
                             >
                                <Phone className="w-5 h-5 mr-2"/>
                                Call Us Today to Book 
                                </Link>
                              </div>
                    </motion.section>

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
                                Answering your questions on using Hijama to manage PCOS.
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

export default PCOSPage;