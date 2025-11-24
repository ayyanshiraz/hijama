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
    { icon: Clock, title: 'Recovery Stimulation', description: 'Blood cupping is often applied to key points to draw out metabolic waste and accelerate the healing process.' },
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
    'In Periods hijama cannot be done.',
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
                    style={{ backgroundImage: "url('/services/s5.webp')" }}
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
                                
                                {/* --- NEW CONTENT START --- */}
                                <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-teal-500 leading-tight">
                                    Hijama for Sports Recovery & Cupping Therapy in Lahore
                                </motion.h2>

                                <motion.p variants={itemVariants} className="mt-6 text-lg text-gray-600 leading-relaxed">
                                    If you are an athlete in Lahore, you know the reality of the game: you train hard, you push your limits, and often, you wake up the next day with a body that feels like it’s been hit by a truck. Whether you are a fast bowler, a bodybuilder lifting heavy at the gym, or a runner, recovery is the most critical part of your routine.
                                </motion.p>

                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    If you have been searching for <Link href="/contact" className="text-blue-600 font-semibold hover:underline">"Hijama near me"</Link> or "Cupping therapy for sports", you are likely dealing with stiff muscles, lingering pain, or just general fatigue. At <Link href="/" className="text-blue-600 font-semibold hover:underline">Al Madina Hijama Center</Link>, we specialize in Hijama for sports recovery, helping athletes get back in the game faster, stronger, and naturally.
                                </motion.p>

                                <motion.h3 variants={itemVariants} className="mt-10 text-2xl font-bold text-teal-500">
                                    Why Athletes Are Turning to Hijama (Cupping)
                                </motion.h3>

                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Rest days are important, but sometimes rest alone isn&apos;t enough to flush out the &quot;bad blood&quot; and toxins that build up during intense exercise.
                                </motion.p>

                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    When working out, your muscles develop microscopic tears. This is how you build strength, but this process also produces lactic acid and metabolic waste. If this waste isn&apos;t cleared out, it settles in your tissues, leading to knots, stiffness, and long-term injury risks.
                                </motion.p>

                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    This is where Hijama makes the difference. While a standard massage pushes down on sore muscles, cupping therapy uses suction to pull the muscle and fascia upwards. This decompression technique is far more effective at deep tissue release than simple rubbing.
                                </motion.p>

                                <motion.h3 variants={itemVariants} className="mt-10 text-2xl font-bold text-teal-500">
                                    The Powerful Benefits of Hijama for Athletes
                                </motion.h3>

                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    We combine the wisdom of Sunnah with modern sports science. From international cricketers to local fitness enthusiasts in Lahore, people choose our service because it works. Here are the specific benefits of Hijama for sports recovery:
                                </motion.p>

                                <motion.div variants={itemVariants} className="mt-6 space-y-6">
                                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-teal-500">
                                        <h4 className="text-xl font-bold text-teal-500">1. Instant Lactic Acid Removal (Detox)</h4>
                                        <p className="mt-2 text-gray-600 leading-relaxed">Think of Hijama as a deep clean for your muscles. The suction draws stagnant blood and lactic acid to the skin&apos;s surface. Once this toxic blood is removed (via Wet Cupping/Hijama), fresh, oxygen-rich blood rushes in to nourish the muscle. This dramatically speeds up recovery time between matches or heavy leg days.</p>
                                    </div>
                                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-teal-500">
                                        <h4 className="text-xl font-bold text-teal-500">2. Natural Pain Relief</h4>
                                        <p className="mt-2 text-gray-600 leading-relaxed">Many athletes rely on painkillers or sprays to get through a match. Hijama therapy offers a natural alternative. It triggers the body to release natural chemicals (like endorphins) and reduces inflammation in joints and tendons. It is highly effective for chronic back pain, stiff necks, and &quot;text neck&quot; from bad posture.</p>
                                    </div>
                                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-teal-500">
                                        <h4 className="text-xl font-bold text-teal-500">3. Fixing &quot;Tight&quot; Muscles (Fascia Release)</h4>
                                        <p className="mt-2 text-gray-600 leading-relaxed">Have you ever felt your muscles were &quot;too short&quot; or tight? That is often due to the fascia (the connective tissue covering your muscles) becoming sticky. Dry Cupping stretches this fascia, loosening it up and restoring your flexibility. This is crucial for bowlers and martial artists who need a full range of motion.</p>
                                    </div>
                                </motion.div>

                                <motion.h3 variants={itemVariants} className="mt-10 text-2xl font-bold text-teal-500">
                                    Tailored Hijama Treatments for Every Sport
                                </motion.h3>

                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    At our center in Lahore, we don&apos;t just apply cups randomly. We customize the Hijama points based on your specific sport:
                                </motion.p>

                                <motion.ul variants={itemVariants} className="mt-4 space-y-3 text-lg text-gray-600 list-disc pl-6">
                                    <li><strong className="text-teal-500">For Cricketers:</strong> We focus on the rotator cuff (shoulder), lower back, and hamstrings to prevent common bowling injuries.</li>
                                    <li><strong className="text-teal-500">For Bodybuilders:</strong> We target the traps, lats, and quads to relieve tension from heavy lifting and improve muscle definition (vascularity).</li>
                                    <li><strong className="text-teal-500">For Runners & Footballers:</strong> We treat the calves, shins (for shin splints), and plantar fascia (feet) to manage the impact stress.</li>
                                </motion.ul>
                                <Image 
                                                                    src="/services/sports-recovery-cricket.webp" 
                                                                    alt="Sports cupping therapy treatment for athletes including a cricketer, bodybuilder, and runner recovering from injuries"
                                                                    className="w-full h-auto object-cover rounded-xl shadow-lg mt-8" // Added mt-8 for spacing
                                                                    width={1600} // Aspect ratio ke liye
                                                                    height={900} // Aspect ratio ke liye
                                                                    style={{ maxHeight: '500px' }}
                                />

                                <motion.h3 variants={itemVariants} className="mt-10 text-2xl font-bold text-teal-500">
                                    Is Hijama Safe for Athletes?
                                </motion.h3>

                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Absolutely. At <strong className="text-gray-900">Al Madina Hijama Center</strong>, we adhere to the highest hygiene standards.
                                </motion.p>

                                <motion.ul variants={itemVariants} className="mt-4 space-y-3 text-lg text-gray-600 list-disc pl-6">
                                    <li><strong className="text-teal-500">Sterile & Safe:</strong> We use brand-new, single-use cups for every client.</li>
                                    <li><strong className="text-teal-500">Sunnah Compliant:</strong> We perform Hijama according to Sunnah dates and methods, ensuring you get both spiritual and physical healing.</li>
                                    <li><strong className="text-teal-500">The &quot;Marks&quot;:</strong> The circular marks you see on athletes (like Karim Benzema or Michael Phelps) are not bruises. They are a sign that the Hijama has successfully pulled stagnation to the surface. These marks are painless and typically fade within 3 to 7 days.</li>
                                </motion.ul>
                                {/* --- NEW CONTENT END --- */}

                                {/* Benefits Section (Original Visual List) */}
                                <motion.h3 variants={itemVariants} className="mt-16 text-3xl font-bold text-teal-500">Key Benefits Overview</motion.h3>
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
                                    <h3 className="text-3xl font-bold text-teal-500">Is Sports Hijama Right for You?</h3>
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
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-500">The Sports Recovery Process</motion.h3>
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
                                <h3 className="text-2xl font-bold text-teal-500">Book Your Session</h3>
                                <p className="mt-2 text-gray-600">Accelerate your recovery and get back in the game.</p>
                                
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
                        <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-teal-500 text-center">Preparation & After-care</motion.h2>
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
                    
                    <motion.div variants={itemVariants} className="mt-12 bg-teal-50 p-8 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold text-teal-500">Ready to Level Up Your Performance?</h3>
                        <p className="mt-4 text-lg text-gray-600">
                            Don&apos;t let a nagging injury keep you on the bench. Your body does the hard work. Give it the care it deserves.
                        </p>
                        <p className="mt-4 text-lg font-medium text-gray-900">
                            Stop seeking generic treatments and choose the specialists in Hijama for sports recovery. Visit us in Lahore to experience the difference yourself.
                        </p>
                        <div className="mt-8">
                            <Link href="/booking" className="inline-block px-8 py-4 bg-[#FF6900] text-white font-bold text-lg rounded-lg shadow-lg hover:brightness-90 transition-all duration-300 transform hover:scale-105">
                                Book Your Hijama Session Now
                            </Link>
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