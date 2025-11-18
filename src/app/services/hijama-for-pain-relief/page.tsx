'use client';

import { CheckCircle, Shield, Clock, Sun, Moon, Droplets, Plus, Minus, ChevronRight, AlertTriangle, Zap } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import Image from 'next/image'; 
import Link from 'next/link';

const benefits = [
    { icon: CheckCircle, text: 'Provides natural relief from chronic and acute pain' },
    { icon: CheckCircle, text: 'Reduces inflammation and swelling in affected areas' },
    { icon: CheckCircle, text: 'Releases muscle knots and deep tissue tension' },
    { icon: CheckCircle, text: 'Improves mobility and range of motion' },
    { icon: CheckCircle, text: 'Stimulates the release of natural painkillers (endorphins)' },
    { icon: CheckCircle, text: 'Offers a safe alternative to long-term pain medication' },
];

const processSteps = [
    { icon: Droplets, title: 'Pain Point Assessment', description: 'Our specialist identifies the precise locations and root cause of your pain.' },
    { icon: Shield, title: 'Sterilization', description: 'The targeted areas are carefully sterilized to ensure a hygienic procedure.' },
    { icon: Zap, title: 'Targeted Cupping', description: 'Cups are applied to specific meridians and trigger points related to your pain.' },
    { icon: Clock, title: 'Therapeutic Action', description: 'The therapy proceeds with either Blood or Dry cupping, depending on your condition, to release pressure and toxins.' },
    { icon: Shield, title: 'After-care', description: 'The area is cleaned, and you receive tailored advice for post-treatment care to maximize pain relief.' },
];

const indications = [
    'Lower back pain and sciatica',
    'Chronic neck and shoulder tension',
    'Migraines and recurring headaches',
    'Arthritic pain in joints like knees and hips',
    'Fibromyalgia and widespread muscle pain',
    'Pain from sports injuries or repetitive strain',
    'Plantar fasciitis and foot pain'
];

const contraindications = [
    'In Periods hijama cannot be done.',
    'Directly over open wounds, fractures, or inflamed skin.',
    'If you have a bleeding disorder or are on high doses of blood thinners.',
    'During pregnancy, especially on the abdomen and lower back.',
    'If you are extremely fatigued or have a high fever.',
    'On areas with deep vein thrombosis.',
    // 'doctor's' was fixed to 'doctor&apos;s' (this was an error)
    'Certain severe medical conditions require a doctor&apos;s clearance.'
];

const preparation = [
    { icon: Sun, title: 'Before the Session', points: ['Discuss your pain points in detail with the therapist.', 'Hydrate well by drinking water throughout the day.', 'Eat a light meal 2-3 hours before your session.', 'Avoid applying any oils or lotions to the areas that will be treated.'] },
    { icon: Moon, title: 'After the Session', points: ['Rest and avoid strenuous activity for at least 24 hours.', 'Keep the treated areas warm and protected from drafts.', 'Follow any specific stretching or movement advice given by your therapist.', 'Continue to stay hydrated to support the healing process.'] },
];

const faqs = [
    {
        question: "How quickly can I expect pain relief after the session?",
        answer: "Many clients report feeling immediate relief and a sense of lightness right after the session. For chronic conditions, the full benefits may become more apparent after a day or two, or may require a series of treatments for lasting results."
    },
    {
        question: "Is this treatment better than a regular massage for pain?",
        answer: "While massage compresses muscles, Hijama works by creating negative pressure, lifting tissue to release tension and improve blood flow in a way that massage cannot. It is particularly effective for deep-seated, chronic pain and inflammation."
    },
    {
        question: "Will the treatment be applied directly to the painful area?",
        answer: "Yes, in most cases, the cups are applied to the area of pain. However, based on Prophetic tradition and therapeutic principles, cups may also be placed on related meridian points to address the root cause of the pain, not just the symptom."
    },
    {
        question: "How many sessions will I need for my chronic pain?",
        answer: "The number of sessions depends on the severity and duration of your condition. Our specialist will assess your situation and recommend a personalized treatment plan during your initial consultation. Typically, a series of 3-5 sessions can produce significant, long-term relief."
    }
];

// JSON-LD Schema data
const schema = {
    "@context": "https://schema.org",
    "@type": "TherapeuticProcedure",
    "name": "Hijama for Pain Relief",
    "description": "A targeted, natural therapy using Blood or Dry cupping to effectively manage chronic pain, reduce inflammation, and restore mobility. It addresses the root causes of discomfort without medication.",
    "indication": [
        { "@type": "MedicalCondition", "name": "Back Pain" },
        { "@type": "MedicalCondition", "name": "Migraine" },
        { "@type": "MedicalCondition", "name": "Arthritis" },
        { "@type": "MedicalCondition", "name": "Sciatica" },
        { "@type": "MedicalCondition", "name": "Muscle Pain" }
    ],
    "bodyLocation": "Targeted application on specific pain points, commonly the back, neck, shoulders, and joints.",
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

const PainReliefPage = () => {
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
        { name: 'Hijama for Pain Relief', href: '/services/hijama-for-pain-relief' },
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
                    style={{ backgroundImage: "url('/services/s3.webp')" }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative container mx-auto px-6 text-center z-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight"
                    >
                        Hijama for Pain Relief
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
                    >
                        A targeted, natural therapy to effectively manage chronic pain, reduce inflammation, and restore mobility without medication.
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

                                {/* --- START: REPLACED CONTENT --- */}
                                
                                {/* (H1) Page Heading */}
                                <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-teal-500">Natural Pain Relief with Hijama & Cupping Therapy in Lahore</motion.h2>
                                
                                {/* (Introduction) */}
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    {/* 'it's' was fixed to 'it&apos;s' (this was an error) */}
                                    Are you tired of chronic pain dictating your life? Whether it&apos;s a persistent ache in your lower back, sharp sciatica pain, or debilitating neck stiffness, finding effective, natural relief can feel impossible. Many people rely on painkillers for a quick fix, but these only mask the symptoms; they don&apos;t solve the root cause.
                                </motion.p>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    If you are in Lahore and searching for a natural, lasting solution to pain, Hijama for Pain Relief is your answer. Our dedicated hijama center in Bahria Town, Lahore, specializes in this time-tested, prophetic healing method to help you live pain-free.
                                </motion.p>

                                {/* (H2) Why Choose Hijama Over Conventional Painkillers? */}
                                <motion.h2 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-500">Why Choose Hijama Over Conventional Painkillers?</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Painkillers work by blocking pain signals to the brain, giving you a temporary sense of relief while the underlying issue remains. In sharp contrast, cupping therapy for pain relief works with your body.
                                </motion.p>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    {/* 'body's', 'It's', 'it's' were fixed (this was an error) */}
                                    Hijama immediately promotes intense blood flow to the targeted area. The suction from the cups releases deep muscle knots, reduces inflammation, and helps flush out stagnant blood and toxins, powerfully activating your body&apos;s natural healing system. It&apos;s not just a band-aid; it&apos;s a solution that targets the root of the problem.
                                </motion.p>

                                {/* (H2) Our Specialized Hijama Treatments for Pain: */}
                                <motion.h2 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-500">Our Specialized Hijama Treatments for Pain:</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    {/* 'don't' was fixed to 'don&apos;t' (this was an error) */}
                                    We don&apos;t believe in a one-size-fits-all approach. We design a specialized treatment plan based on your unique pain points. Our certified practitioners have extensive experience in treating:
                                </motion.p>
                                
                                {/* (H3) Hijama for Back Pain and Lower Back Pain: */}
                                <motion.h3 variants={itemVariants} className="mt-8 text-2xl font-bold text-teal-500">Hijama for Back Pain and Lower Back Pain:</motion.h3>
                                <motion.p variants={itemVariants} className="mt-2 text-lg text-gray-600 leading-relaxed">
                                    This is our most in-demand service. Chronic discomfort, especially hijama for lower back pain, is often caused by poor posture, long sitting hours, or old injuries. We precisely target the correct hijama points for back pain to instantly release deep-seated tension and alleviate pressure, often providing significant relief after just one session.
                                </motion.p>

                                {/* (H3) Hijama for Sciatica Pain Relief */}
                                <motion.h3 variants={itemVariants} className="mt-8 text-2xl font-bold text-teal-500">Hijama for Sciatica Pain Relief</motion.h3>
                                <motion.p variants={itemVariants} className="mt-2 text-lg text-gray-600 leading-relaxed">
                                    The sharp, shooting pain of sciatica that travels down the leg can be agonizing. Cupping therapy for sciatica pain is highly effective because it decompresses the sciatic nerve and reduces surrounding inflammation. Our therapists are expertly trained to identify the proper hijama points for sciatica pain to help you find lasting freedom from this debilitating condition.
                                </motion.p>
                                
                                {/* <img> was replaced with <Image> (this fixes a warning) */}
                                <Image 
                                    src="/services/hijama-sciatica-points.webp" 
                                    alt="Difference between Wet Cupping (Hijama) and Dry Cupping"
                                    className="w-full h-auto object-cover rounded-xl shadow-lg mt-8" // Added mt-8 for spacing
                                    width={1600} // Aspect ratio ke liye
                                    height={900} // Aspect ratio ke liye
                                    style={{ maxHeight: '500px' }}
                                />
                                
                                {/* (H3) Hijama for Neck and Shoulder Pain: */}
                                <motion.h3 variants={itemVariants} className="mt-8 text-2xl font-bold text-teal-500">Hijama for Neck and Shoulder Pain:</motion.h3>
                                <motion.p variants={itemVariants} className="mt-2 text-lg text-gray-600 leading-relaxed">
                                    {/* 'today's' and "Tech Neck" were fixed (this was an error) */}
                                    In today&apos;s digital world, &quot;Tech Neck&quot; from constant phone and laptop use is a common complaint. Hijama for neck pain is an excellent remedy for the severe stiffness and tension built up in these muscles. We also focus on hijama points for shoulder pain to restore your full range of motion.
                                </motion.p>

                                {/* (H3) Hijama for Knee Pain and Joint Pain: */}
                                <motion.h3 variants={itemVariants} className="mt-8 text-2xl font-bold text-teal-500">Hijama for Knee Pain and Joint Pain:</motion.h3>
                                <motion.p variants={itemVariants} className="mt-2 text-lg text-gray-600 leading-relaxed">
                                    {/* 'Don't' was fixed to 'Don&apos;t' (this was an error) */}
                                    Don&apos;t let aching joints stop you. Whether due to age, injury, or conditions like arthritis, hijama for knee pain (and other joint pains) can make a world of difference. By boosting circulation and reducing inflammation, this therapy can significantly improve mobility and reduce discomfort.
                                </motion.p>

                                {/* (H2) Your Professional Hijama Center in Bahria Town, Lahore: */}
                                <motion.h2 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-500">Your Professional Hijama Center in Bahria Town, Lahore:</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    {/* "hijama center near me," was fixed (this was an error) */}
                                    When you search for a &quot;hijama center near me,&quot; you deserve a clinic that is hygienic, safe, and professional. Our hijama center in Bahria Town, Lahore, is committed to providing the highest standard of care. All our equipment is fully sterilized, and our therapists are certified and experienced.
                                </motion.p>

                                {/* Image with Alt Text (UPDATE 'src' PATH) */}
                                <motion.div variants={itemVariants} className="mt-12">
                                {/* <img> was replaced with <Image> (this fixes a warning) */}
                                <Image 
                                    src="/services/clinic-room.webp" 
                                    alt="Difference between Wet Cupping (Hijama) and Dry Cupping"
                                    className="w-full h-auto object-cover rounded-xl shadow-lg"
                                    width={1600} // Aspect ratio ke liye
                                    height={900} // Aspect ratio ke liye
                                    style={{ maxHeight: '500px' }} // Original style wapis add kar diya
                                />
                                </motion.div>

                                {/* (H2) Common Concerns About Hijama Therapy: */}
                                <motion.h2 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-500">Common Concerns About Hijama Therapy:</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    It&apos;s perfectly normal to have questions before your first session. Here are answers to some of the most common concerns.
                                </motion.p>
                                
                                {/* (H3) Is Hijama painful? */}
                                <motion.h3 variants={itemVariants} className="mt-8 text-2xl font-bold text-teal-500">Is Hijama painful?</motion.h3>
                                <motion.p variants={itemVariants} className="mt-2 text-lg text-gray-600 leading-relaxed">
                                    {/* "painful." and "deep-tissue massage." were fixed (this was an error) */}
                                    This is the most frequent question we hear. No, Hijama is not considered &quot;painful.&quot; You will feel a strong pulling or tightening sensation as the cups create suction, which most clients describe as a &quot;deep-tissue massage.&quot; If you opt for Wet Hijama, the tiny incisions are superficial and feel like light scratches.
                                </motion.p>
                                
                                {/* (H3) Will I have pain after hijama? */}
                                <motion.h3 variants={itemVariants} className="mt-8 text-2xl font-bold text-teal-500">Will I have pain after hijama?</motion.h3>
                                <motion.p variants={itemVariants} className="mt-2 text-lg text-gray-600 leading-relaxed">
                                    {/* 'you'd' was fixed to 'you&apos;d' (this was an error) */}
                                    It is very rare to feel any significant pain after hijama. You might experience mild soreness, similar to how you&apos;d feel after a workout, which is a positive sign that the muscles were treated. The circular marks are not bruises; they are a sign of blood flow to the area and will fade completely within 3-7 days.
                                </motion.p>
                                
                                {/* (H3) How many sessions will I need for chronic pain? */}
                                <motion.h3 variants={itemVariants} className="mt-8 text-2xl font-bold text-teal-500">How many sessions will I need for chronic pain?</motion.h3>
                                <motion.p variants={itemVariants} className="mt-2 text-lg text-gray-600 leading-relaxed">
                                    Everybody responds differently. For hijama therapy for chronic pain, a series of 3-5 sessions is often recommended for the best results. For more acute or recent pain, you may feel significant improvement after just one or two sessions. We will advise a personal treatment plan during your consultation.
                                </motion.p>
                                
                                {/* (H2) Take the First Step Towards a Pain-Free Life */}
                                <motion.h2 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-500">Take the First Step Towards a Pain-Free Life</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    {/* 'don't' was fixed to 'don&apos;t' (this was an error) */}
                                    You don&apos;t have to live with pain. Take the first step towards natural, long-lasting relief today. Contact us to book your hijama for pain relief consultation at our clinic in Bahria Town, Lahore.
                                </motion.p>
                                
                                {/* --- END: REPLACED CONTENT --- */}


                                {/* --- START: ORIGINAL CONTENT (UNTOUCHED) --- */}

                                {/* Benefits Section */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-500">Key Benefits of Hijama for Pain Relief</motion.h3>
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
                                    <h3 className="text-3xl font-bold text-teal-500">Is This Treatment Right for Your Pain?</h3>
                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-800 flex items-center"><CheckCircle className="h-6 w-6 text-green-600 mr-2" />Indications</h4>
                                            <p className="mt-2 text-gray-600">This therapy is highly effective for:</p>
                                            <ul className="mt-4 space-y-2 text-gray-700">
                                                {indications.map((item, index) => (
                                                    <li key={index} className="flex items-start"><ChevronRight className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" /><span>{item}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-800 flex items-center"><AlertTriangle className="h-6 w-6 text-red-600 mr-2" />Contraindications</h4>
                                            <p className="mt-2 text-gray-600">Caution is advised. Please consult us if you have:</p>
                                            <ul className="mt-4 space-y-2 text-gray-700">
                                                {contraindications.map((item, index) => (
                                                    <li key={index} className="flex items-start"><ChevronRight className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" /><span>{item}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-sm text-gray-500 italic">A pre-treatment consultation is essential to ensure this therapy is safe and suitable for your specific condition.</p>
                                </motion.div>

                                {/* Process Section */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-500">The Pain Relief Process</motion.h3>
                                <div className="mt-6 space-y-8">
                                    {processSteps.map((step, index) => (
                                        <motion.div key={index} variants={itemVariants} className="flex items-start">
                                            <div className="flex-shrink-0 mr-4">
                                                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                                                    <step.icon className="w-6 h-6 text-teal-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-semibold text-teal-500">{step.title}</h4>
                                                <p className="text-gray-600 mt-1">{step.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                                {/* --- END: ORIGINAL CONTENT (UNTOUCHED) --- */}

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
                                <h3 className="text-2xl font-bold text-teal-500">Book Your Session</h3>
                                <p className="mt-2 text-gray-600">Take the first step towards a pain-free life.</p>
                                
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
                                            {/* <img> was replaced with <Image> (this fixes a warning) */}
                                            <Image src="/ceo.webp" alt="Mr. Jameel ur Rehman" className="w-24 h-24 rounded-full mx-auto object-cover" width={96} height={96} />
                                            <p className="mt-2 font-bold">Mr. Jameel ur Rehman</p>
                                            <p className="text-sm text-gray-600">Certified Hijama Therapist</p>
                                        </div>
                                        <div>
                                            {/* <img> was replaced with <Image> (this fixes a warning) */}
                                            <Image src="/female-specialist.webp" alt="Ms. Fatima Khan" className="w-24 h-24 rounded-full mx-auto object-cover" width={96} height={96} />
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
                        <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-teal-500 text-center">Preparation & After-care</motion.h2>
                        <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
                            Following these guidelines is key to maximizing the pain-relieving effects of your treatment.
                        </motion.p>

                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                            {preparation.map((item, index) => (
                                <motion.div key={index} variants={itemVariants} className="bg-gray-50 p-8 rounded-2xl">
                                    <div className="flex items-center">
                                        <item.icon className="w-10 h-10 text-teal-600 mr-4" />
                                        <h3 className="text-2xl font-bold text-teal-500">{item.title}</h3>
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
                            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-teal-500">
                                Frequently Asked Questions
                            </motion.h2>
                            <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                                Your questions about using Hijama for pain relief, answered.
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

export default PainReliefPage;