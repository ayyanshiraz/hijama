'use client';

import { Phone, CheckCircle, Shield, Clock, Sun, Moon, Droplets, Plus, Minus, ChevronRight, AlertTriangle, ShieldAlert, Facebook, Instagram, Youtube, Video } from 'lucide-react';
import { motion, AnimatePresence, Variants, Transition } from 'framer-motion';
import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs'; 
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTiktok, FaYoutube } from 'react-icons/fa6';

// --- DATA ARRAYS WITH BOLD FORMATTING ---
const benefits = [
    { icon: CheckCircle, text: '<strong>Reduces Localized Inflammation</strong>: Helps calm swelling and irritation in the surrounding tissues.' },
    { icon: CheckCircle, text: '<strong>Promotes Fresh Blood Flow</strong>: Increases circulation to the pelvic area, aiding the body’s natural repair mechanisms.' },
    { icon: CheckCircle, text: '<strong>Detoxifies the Area</strong>: Aids in drawing out deep-seated toxins and inflammatory byproducts.' },
    { icon: CheckCircle, text: '<strong>Accelerates Healing</strong>: Supports the tissue repair process, potentially speeding up recovery alongside medical treatment.' },
    { icon: CheckCircle, text: '<strong>Non-Invasive Management</strong>: A safe, supportive therapy to manage symptoms without additional surgery.' },
    { icon: CheckCircle, text: '<strong>Alleviates Discomfort</strong>: Can help reduce pain, itching, and general pelvic discomfort.' },
];

const processSteps = [
    { icon: Droplets, title: 'Mandatory Diagnosis & Consultation', description: 'Before we begin, we require a clear, confirmed medical diagnosis. Your session starts with a private consultation to discuss your history and symptoms.' },
    { icon: Shield, title: 'Sterile Preparation', description: 'The therapist meticulously cleans and sterilizes the treatment area on the lower back and buttocks, away from the fistula opening.' },
    { icon: ShieldAlert, title: 'Targeted Cupping Therapy', description: <span>We use a combination of <Link href="/services/dry-and-massage-cupping" className="text-teal-600 hover:underline font-medium">dry cupping</Link> and <Link href="/services/wet-cupping" className="text-teal-600 hover:underline font-medium">wet cupping (Hijama)</Link> applied to specific points on the lower back, sacrum, and glutes to improve circulation to the entire region.</span> },
    { icon: Clock, title: 'Detoxification & Relief', description: 'This process helps to pull deep inflammation and inflammatory byproducts away from the affected tract, promoting comfort and healing from within.' },
    { icon: Shield, title: 'Post-Therapy Care', description: 'The area is cleaned, and you receive crucial after-care guidance on hygiene, diet, and activity to ensure sustained results.' },
];

const indications = [
    'Managing symptoms of anal fistula (after clear medical diagnosis)',
    'Reducing recurrent inflammation or infection in the area',
    'Alleviating pain, swelling, or discharge',
    'As a supportive, non-invasive therapy alongside conventional medical treatment',
    'Promoting healing of the surrounding tissue for sustained recovery'
];

const contraindications = [
    'For women: During the menstrual cycle (Periods hijama cannot be done).',
    'A medical diagnosis is ESSENTIAL. We do not treat undiagnosed anal pain or bleeding.',
    'Directly on the fistula opening, an active abscess, or broken skin.',
    'During pregnancy.',
    'If you have a severe active infection or fever.',
    'Individuals with bleeding disorders or on blood-thinning medication.',
    'History of rectal or colon cancer (requires doctor clearance).'
];

const preparation = [
    { icon: Sun, title: 'Before the Session', points: ['You must have a clear medical diagnosis from a proctologist or surgeon.', 'Ensure the area is thoroughly cleaned before your appointment.', 'Inform your specialist of all your symptoms and medical history.', 'Have a light meal 2-3 hours prior.'] },
    { icon: Moon, title: 'After the Session', points: ['Follow the specific hygiene instructions provided by your therapist rigorously.', 'Avoid strenuous activity and prolonged sitting for 24-48 hours to reduce pelvic pressure.', 'Drink plenty of water to help flush released toxins (Hydration is key).', 'Eat a high-fiber, clean diet to prevent constipation, which can aggravate the condition.'] },
];

const faqs = [
    {
        question: "Is Hijama for fistula safe?",
        answer: "Yes, when performed by an experienced practitioner, it is very safe. We never apply cups directly to the fistula itself, abscess, or broken skin. Instead, we cup specific surrounding points on the lower back and glutes to improve systemic blood flow, reduce inflammation, and promote healing in the entire pelvic region."
    },
    {
        question: "Can Hijama cure my fistula?",
        answer: "Hijama is a powerful supportive therapy that can significantly help manage chronic symptoms, reduce inflammation, and aid the healing process. However, complex fistulas often require surgical intervention. This therapy is an excellent way to manage the condition non-invasively or support recovery post-surgery, but it is not a guaranteed cure on its own and should be combined with medical oversight."
    },
    {
        question: "How does cupping the back help a fistula?",
        answer: "The cupping points on the lower back and sacrum are connected via the nervous system and deep blood vessels to the pelvic and rectal area. By stimulating these points, we increase clean, oxygenated blood flow to the deeper tissues, helping to fight infection and clear inflammation from the source, leading to sustained comfort."
    },
    {
        question: "Is this treatment painful?",
        answer: "The cupping is applied to the lower back and buttocks, not the immediate, sensitive anal area, so the discomfort from the procedure itself is minimal. Our certified practitioners are trained to be extremely gentle and prioritize your comfort and privacy throughout the session."
    }
];

// JSON-LD Schema data
const schema = {
    "@context": "https://schema.org",
    "@type": "TherapeuticProcedure",
    "name": "Hijama for Anal Fistula Supportive Care in Lahore",
    "description": "The Top Islamic Hijama Center in Lahore offers 24/7 care for Anal Fistula. Get sustained recovery and faster comfort with our specialized, non-invasive Hijama approach. Home Service available.",
    "indication": [
        { "@type": "MedicalCondition", "name": "Anal Fistula" }
    ],
    "bodyLocation": "Lower back, sacrum, and gluteal region (surrounding the affected area)",
    "provider": {
        "@type": "MedicalBusiness",
        "name": "Al Madina Islamic Hijama Center (Best Hijama Center in Lahore)",
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

const HijamaForFistulaPage = () => {
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
        { name: 'Hijama for Fistula', href: '/services/hijama-for-fistula' },
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
                    style={{ backgroundImage: "url('/services/s12.webp')" }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative container mx-auto px-6 text-center z-10">
                    <motion.h1 
                        {...heroAnimateProps}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight"
                    >
                        Hijama for Anal Fistula in Lahore
                    </motion.h1>
                    <motion.p 
                        initial={heroAnimateProps.initial}
                        animate={heroAnimateProps.animate}
                        transition={{ ...heroAnimateProps.transition, delay: 0.2 } as Transition}
                        className="mt-4 text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto"
                    >
                        A specialized, supportive therapy to manage chronic inflammation and promote natural healing for sustained comfort.
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
                                <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-teal-600">A Humanized Approach to Anal Fistula Management</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Living with an anal fistula can be a physically painful and emotionally exhausting experience. The constant discomfort, swelling, and risk of infection often disrupt daily life. While medical intervention from a surgeon is typically the primary route to a cure, many individuals seek complementary therapies to help <Link href="/services/hijama-for-pain-relief" className="text-teal-600 hover:underline">manage challenging symptoms</Link> and support the body&apos;s recovery capabilities.
                                </motion.p>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Our specialized Hijama therapy offers a non-invasive, supportive approach. It is designed not to replace conventional medical treatment but to work alongside it. By focusing on <Link href="/services/hijama-for-detox" className="text-teal-600 hover:underline">systemic detoxification</Link> and localized circulation, we aim to reduce the burden of inflammation on the pelvic region and promote a healthier internal environment for tissue repair.
                                </motion.p>
                                <motion.blockquote variants={itemVariants} className="mt-6 p-4 border-l-4 border-teal-600 bg-teal-50 italic text-gray-700">
                                    🌟 <b>Why Choose Al-Madina Islamic Hijama Center?</b>
                                    <br></br> We are recognized as the <Link href='/' className='text-teal-600 font-bold hover:underline'>Best Hijama Center in Lahore</Link>, offering 24/7 service from our clinic located in Bahria Town, Lahore. We prioritize privacy and comfort with <Link href="/blog/hijama-center-lahore-for-ladies-female-staff" className="text-blue-600 hover:underline font-semibold">dedicated female staff</Link> for ladies and male staff for male clients. Home service is also readily available across Lahore.
                                </motion.blockquote>

                                {/* 2. Understanding the Method */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-600">Understanding the Strategic, Non-Invasive Method</motion.h3>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Safety is our absolute priority when dealing with such a sensitive condition. All patients must understand that we never apply cups directly to the fistula opening, abscess, or any broken skin. Direct application would be unsafe and painful. Instead, our certified practitioners utilize a strategic, indirect method. We apply cupping therapy to specific meridian points located on the lower back, sacrum, and gluteal muscles. 
                                </motion.p>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    This targeted placement serves a dual purpose: it helps to draw deep-seated inflammation and toxins away from the affected tract, and it encourages fresh circulation to deeper pelvic tissues. This influx of oxygenated blood is crucial for enhancing the body&apos;s immune response and facilitating the natural healing of surrounding tissue. Learn more about the comprehensive benefits of Cupping Therapy by viewing our <Link href="/services/fire-cupping" className="text-teal-600 hover:text-teal-800 font-semibold underline">Fire Cupping service</Link>.
                                </motion.p>
                                
                                {/* 3. Key Benefits Section */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-600">Key Benefits of This Supportive Therapy</motion.h3>
                                <motion.ul variants={staggerContainer} className="mt-6 space-y-4">
                                    {benefits.map((benefit, index) => (
                                        <motion.li key={index} variants={itemVariants} className="flex items-start">
                                            <benefit.icon className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                                            <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: benefit.text }} />
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                {/* 4. Indications/Contraindications Section */}
                                <motion.div variants={itemVariants} className="mt-12">
                                    <h3 className="text-3xl font-bold text-teal-600">Who Can Benefit from This Supportive Therapy?</h3>
                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-800 flex items-center"><CheckCircle className="h-6 w-6 text-green-600 mr-2" />Indications</h4>
                                            <p className="mt-2 text-gray-600">This supportive care is highly recommended for:</p>
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
                                    <p className="mt-6 text-sm text-gray-500 italic">A prior, clear diagnosis from a proctologist or general surgeon is required before this therapy can be administered.</p>
                                </motion.div>

                                {/* 5. Process Section */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-600">The Treatment Protocol at the Hijama Center Lahore</motion.h3>
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

                                <motion.div variants={itemVariants} className="mt-12 p-6 bg-yellow-50 rounded-lg shadow-inner">
                                    <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                                        <ShieldAlert className="w-6 h-6 text-yellow-600 mr-2"/> More Assurance of Natural Healing
                                    </h3>
                                    <p className="mt-3 text-lg text-gray-700 leading-relaxed text-justify">
                                        <b>Why Choose a Natural Approach for Anal Fistula? </b>
                                        <br></br>
                                        While modern medicine often involves complex procedures, many individuals seek Hijama therapy because of its focus on natural self-healing. Our clients frequently report that this supportive care, when combined with necessary medical oversight, provides faster comfort and a sense of holistic recovery that goes beyond conventional methods alone. We believe in providing your body with the optimum environment—through enhanced circulation and detoxification—to activate its guaranteed internal healing power, helping you achieve a better and more sustained outcome.
                                    </p>
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
                                <p className="mt-2 text-gray-600">Confidential, professional care for a sensitive condition. 24/7 service available.</p>
                                
                                <div className="mt-6 space-y-2">
                                    <div>
                                        <p className="text-4xl font-extrabold text-teal-600">Rs. 300</p>
                                        <p className="text-sm text-gray-500">per cup</p>
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-gray-800">Clinic Location</p>
                                        <p className="text-gray-600">Bahria Town, Lahore (Home Service available)</p>
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
                                    <Link 
                                        href="/contact"
                                        className="mt-4 text-sm font-semibold text-teal-600 hover:text-teal-800 inline-flex items-center"
                                    >
                                        <Phone className="w-4 h-4 mr-1"/> Contact for Home Service
                                    </Link>
                                </div>

                                {/* Social Media Links Integration (Optimized Colors) */}
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <h4 className="text-lg font-semibold text-gray-800 text-center mb-4">Connect With Us</h4>
                                    <div className="flex justify-center gap-4">
                                        <a href="https://www.facebook.com/BestHijamaLahore/" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#1877F2] text-white rounded-full hover:opacity-80 transition-opacity" aria-label="Facebook">
                                            <FaFacebook className="w-5 h-5" />
                                        </a>
                                        <a href="https://www.instagram.com/almadinahijmacenter" target="_blank" rel="noopener noreferrer" className="p-2 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-full hover:opacity-80 transition-opacity" aria-label="Instagram">
                                            <Instagram className="w-5 h-5" />
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
                    
                    {/* CTA Section */}
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
                            <p>👨‍👩‍👧‍👦 Staff: Separate male and female staff available.</p>
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
                                We have compiled answers to common questions about Hijama for this condition.
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

export default HijamaForFistulaPage;