'use client';

import { Phone, CheckCircle, Shield, Clock, Sun, Moon, Droplets, Plus, Minus, ChevronRight, AlertTriangle, Zap, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
    { icon: CheckCircle, text: 'Accelerates muscle repair and reduces recovery time' },
    { icon: CheckCircle, text: 'Effectively clears lactic acid and reduces soreness (DOMS)' },
    { icon: CheckCircle, text: 'Increases blood flow and oxygenation to tired muscles' },
    { icon: CheckCircle, text: 'Releases tight fascia and improves flexibility' },
    { icon: CheckCircle, text: 'Reduces inflammation from intense training' },
    { icon: CheckCircle, text: 'Enhances overall athletic performance and endurance' },
];

const processSteps = [
    { icon: Droplets, title: 'Performance Assessment', description: 'We evaluate your training regimen, areas of muscle strain, and recovery goals.' },
    { icon: Shield, title: 'Targeted Sterilization', description: 'The specific muscle groups and areas of tightness are prepared for treatment.' },
    { icon: Zap, title: 'Dynamic Cupping', description: 'A combination of stationary and massage cupping is used to release deep muscle knots and improve circulation.' },
    { icon: Clock, title: 'Recovery Stimulation', description: 'Wet cupping is often applied to key points to draw out metabolic waste and accelerate the healing process.' },
    { icon: ShieldCheck, title: 'Post-Session Protocol', description: 'You receive professional advice on hydration, stretching, and when to resume training.' },
];

const indications = [
    'Delayed Onset Muscle Soreness (DOMS)',
    'Muscle strains and tightness in legs, back, and shoulders',
    'IT Band Syndrome and runners knee',
    'Improving flexibility and range of motion for sports like martial arts or gymnastics',
    'Pre-event preparation to optimize muscle function',
    'Post-event recovery to minimize downtime',
    'General maintenance for active individuals'
];

const contraindications = [
    'Acute injuries like fresh sprains, tears, or fractures.',
    'Directly over areas with torn ligaments or muscles.',
    'Immediately before a high-intensity competition (allow 2-3 days for recovery).',
    'If you are severely dehydrated or exhausted.',
    'Open wounds or skin infections.',
    'Bleeding disorders or use of high-dose anticoagulants.'
];

const preparation = [
    { icon: Sun, title: 'Before the Session', points: ['Discuss your training schedule and specific recovery needs with the therapist.', 'Ensure you are well-hydrated before your appointment.', 'Avoid a heavy workout immediately before your session.', 'Come with clean skin, free from oils or lotions.'] },
    { icon: Moon, title: 'After the Session', points: ['Engage in light, active recovery like walking or gentle stretching.', 'Hydrate aggressively with water and electrolytes.', 'Avoid intense training, saunas, or hot tubs for 24-48 hours.', 'Consume a protein-rich meal to support muscle repair.'] },
];

const faqs = [
    {
        question: "How soon can I train after a Hijama session?",
        answer: "We generally recommend avoiding strenuous or high-intensity exercise for at least 24 to 48 hours after a session. This allows your body to fully benefit from the recovery process. Light activities like walking or gentle stretching are encouraged."
    },
    {
        question: "Is this better than a sports massage?",
        answer: "Hijama for sports recovery offers unique benefits. While sports massage focuses on compressing tissue, cupping uses negative pressure to lift and separate tissue layers. This is highly effective for breaking up deep adhesions, releasing nerve entrapment, and drawing out metabolic waste that massage may not reach."
    },
    {
        question: "Should I get this therapy before or after a competition?",
        answer: "It can be beneficial for both. A session 5-7 days before an event can help prime the muscles and improve flexibility. A session 1-2 days after an event is excellent for accelerating recovery, reducing soreness, and flushing out metabolic byproducts from intense exertion."
    },
    {
        question: "Will the marks affect my performance?",
        answer: "The circular marks are a normal result of the therapy and are not painful. They do not hinder muscle function or performance. Many professional athletes regularly compete with these marks, as they are a sign that the body is undergoing a beneficial healing process."
    }
];

// JSON-LD Schema data
const schema = {
    "@context": "https://schema.org",
    "@type": "TherapeuticProcedure",
    "name": "Hijama for Sports Recovery",
    "description": "A specialized Hijama therapy designed for athletes and active individuals to accelerate muscle repair, reduce soreness, and enhance performance. This treatment uses a combination of cupping techniques to improve circulation, clear metabolic waste, and release deep tissue tension.",
    "indication": [
      { "@type": "MedicalCondition", "name": "Delayed Onset Muscle Soreness (DOMS)" },
      { "@type": "MedicalCondition", "name": "Muscle Strain" },
      { "@type": "MedicalCondition", "name": "Myofascial Pain Syndrome" },
      { "@type": "MedicalCondition", "name": "Sports Injuries" }
    ],
    "bodyLocation": "Commonly applied to major muscle groups such as the back, legs (hamstrings, quadriceps, calves), shoulders, and arms.",
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

const SportsRecoveryPage = () => {
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
        { name: 'Hijama for Sports Recovery', href: '/services/hijama-for-sports-recovery' },
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
                    style={{ backgroundImage: "url('/services/s5.png')" }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative container mx-auto px-6 text-center z-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight"
                    >
                        Hijama for Sports Recovery
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
                    >
                        Gain a competitive edge with advanced therapy to accelerate recovery, reduce soreness, and boost performance.
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
                                <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-gray-900">Optimize Your Performance</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Hijama for Sports Recovery is a specialized treatment tailored to the needs of athletes and active individuals. This powerful therapy helps to flush out lactic acid, reduce muscle soreness, and repair micro-tears in muscle fibers that occur during intense exercise. By improving blood flow and removing metabolic waste, it significantly speeds up your bodys natural recovery process.
                                </motion.p>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Whether you are a professional athlete or a weekend warrior, this therapy can help you train harder, recover faster, and reduce the risk of injury. Our certified male and female practitioners understand the demands of athletic performance and offer this service both in our clinic and at your home.
                                </motion.p>

                                {/* Benefits Section */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-gray-900">Key Benefits for Athletes</motion.h3>
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
                                    <h3 className="text-3xl font-bold text-gray-900">Is Sports Hijama Right for You?</h3>
                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-800 flex items-center"><CheckCircle className="h-6 w-6 text-green-600 mr-2" />Indications</h4>
                                            <p className="mt-2 text-gray-600">This therapy is ideal for managing:</p>
                                            <ul className="mt-4 space-y-2 text-gray-700">
                                                {indications.map((item, index) => (
                                                    <li key={index} className="flex items-start"><ChevronRight className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" /><span>{item}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-800 flex items-center"><AlertTriangle className="h-6 w-6 text-red-600 mr-2" />Contraindications</h4>
                                            <p className="mt-2 text-gray-600">This therapy should be avoided for:</p>
                                            <ul className="mt-4 space-y-2 text-gray-700">
                                                {contraindications.map((item, index) => (
                                                    <li key={index} className="flex items-start"><ChevronRight className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" /><span>{item}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-sm text-gray-500 italic">Consult with our specialist to determine the optimal timing for your Hijama session in relation to your training and competition schedule.</p>
                                </motion.div>

                                {/* Process Section */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-gray-900">The Sports Recovery Process</motion.h3>
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
                                <p className="mt-2 text-gray-600">Accelerate your recovery and get back in the game.</p>
                                
                                <div className="mt-6 space-y-2">
                                    <div>
                                        <p className="text-4xl font-extrabold text-teal-600">Rs. 3,200</p>
                                        <p className="text-sm text-gray-500">per session</p>
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-gray-800">Session Duration</p>
                                        <p className="text-gray-600">Approx. 40-50 minutes</p>
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
                                    <a href="/about#therapist" className="text-teal-600 hover:underline mt-2 inline-block">View Profile</a>
                                </div>
                            </motion.div>
                        </aside>
                    </div>

                    {/* Preparation & After-care Section */}
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="mt-24">
                        <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-gray-900 text-center">Preparation & After-care</motion.h2>
                        <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
                            Following a proper protocol before and after your session is crucial for maximizing recovery benefits.
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
                                Answering common questions from athletes about Hijama therapy.
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

export default SportsRecoveryPage;
