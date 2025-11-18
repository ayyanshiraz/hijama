'use client';

import { CheckCircle, Shield, Clock, Sun, Moon, Droplets, Plus, Minus, ChevronRight, AlertTriangle, Heart, Activity, Utensils, Zap, Filter } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// +++ START of inlined Breadcrumbs component +++
const Breadcrumbs = ({ items }: { items: { name: string, href: string }[] }) => (
  <nav aria-label="Breadcrumb" className="bg-gray-50 py-3 border-b border-gray-200">
    <div className="container mx-auto px-8 sm:px-16">
      <ol className="flex items-center space-x-2 text-sm text-gray-500">
        {items.map((item, index) => (
          <li key={item.name}>
            <div className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 flex-shrink-0 text-gray-400 mr-2" />
              )}
              <Link
                href={item.href}
                className={`font-medium ${index === items.length - 1 ? 'text-gray-700' : 'text-gray-500 hover:text-gray-700'}`}
                aria-current={index === items.length - 1 ? 'page' : undefined}
              >
                {item.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </nav>
);
// +++ END of inlined Breadcrumbs component +++

// BENEFITS ARRAY (Updated with new icons)
const benefits = [
    { icon: Activity, text: 'Helps regulate high blood pressure naturally' },
    { icon: Filter, text: 'Detoxifies the liver and kidneys by removing stagnant blood' },
    { icon: Utensils, text: 'Improves digestion and relieves stomach bloating' },
    { icon: Heart, text: 'Supports healthy cholesterol levels and heart function' },
    { icon: Zap, text: 'Boosts the immune system and metabolic health' },
    { icon: CheckCircle, text: 'Improves circulation for diabetic care' },
];

const processSteps = [
    { icon: Activity, title: 'Vital Check', description: 'We check your blood pressure and discuss your history (sugar, BP, etc.) before starting.' },
    { icon: Shield, title: 'Point Selection', description: 'Specific Sunnah points are selected on the back corresponding to organs like the liver, heart, or stomach.' },
    { icon: Droplets, title: 'Sterilization', description: 'The area is thoroughly cleaned to ensure a safe and hygienic environment.' },
    { icon: Clock, title: 'Cupping Therapy', description: 'Cups are applied to draw out toxins and stimulate organ function using controlled pressure.' },
    { icon: Zap, title: 'Revitalization', description: 'The site is dressed, leaving you with a sense of internal lightness and improved flow.' },
];

const indications = [
    'High Blood Pressure (Hypertension)',
    'Stomach acidity, gas, and IBS',
    'High Cholesterol levels',
    'Fatty Liver and sluggish liver function',
    'Diabetes support (improving circulation)',
    'Weak immune system and frequent fatigue',
    'Kidney detox and urinary health'
];

const contraindications = [
    'In Periods hijama cannot be done.', 
    'Severe organ disease (e.g., kidney failure, liver cirrhosis) without a doctor\'s consent.',
    'Individuals with pacemakers or severe heart conditions.',
    'During pregnancy.',
    'If you are on heavy medication, a consultation is essential.',
    'Extreme weakness or severe anemia.',
    'Immediately after a heavy meal or during fasting.'
];

const preparation = [
    { icon: Sun, title: 'Before the Session', points: ['Inform the therapist about all your health conditions and medications.', 'Stay well-hydrated for 24 hours leading up to the session.', 'Have a light, nutritious meal 2-3 hours beforehand.', 'Avoid caffeine and stimulants on the day of your therapy.'] },
    { icon: Moon, title: 'After the Session', points: ['Follow a simple, clean diet for 24-48 hours (e.g., avoid dairy, red meat, and processed foods).', 'Drink plenty of water to aid the detoxification process.', 'Allow your body to rest and avoid stressful situations.', 'Take note of any positive changes in your digestion, sleep, or energy levels.'] },
];

const faqs = [
    {
        question: "How does Hijama help with digestive issues?",
        answer: "By applying cups to specific points on the abdomen and back, Hijama can stimulate the digestive organs, improve peristalsis (gut movement), reduce inflammation, and relieve issues like bloating, gas, and constipation."
    },
    {
        question: "Can this therapy really help balance hormones?",
        answer: "Hijama helps improve blood flow to endocrine glands and supports the detoxification of excess hormones from the body. This can be particularly beneficial for managing symptoms related to conditions like PCOS and thyroid imbalances, as part of a holistic treatment plan."
    },
    {
        question: "Is this a 'detox' in the medical sense?",
        answer: "Hijama is a powerful detoxification method that has been used for centuries. It works by removing stagnant blood and metabolic waste products from just beneath the skin. This process helps to lighten the load on your bodys primary detox organs, like the liver and kidneys, allowing them to function more efficiently."
    },
    {
        question: "How often should I have this therapy for general wellness?",
        answer: "For general health maintenance and detoxification, a session every 3 to 6 months is often recommended. If you are addressing a specific internal health issue, our specialist may suggest a more frequent, tailored schedule to begin with."
    }
];

// JSON-LD Schema data
const schema = {
    "@context": "https://schema.org",
    "@type": "TherapeuticProcedure",
    "name": "Hijama for Internal Health",
    "description": "A holistic Hijama therapy focused on improving organ function, balancing hormones, and promoting overall internal wellness. This treatment supports the body's natural detoxification processes and helps manage systemic issues like digestive disorders and hormonal imbalances.",
    "indication": [
        { "@type": "MedicalCondition", "name": "Digestive Disorders" },
        { "@type": "MedicalCondition", "name": "Hormonal Imbalance" },
        { "@type": "MedicalCondition", "name": "Hypertension" },
        { "@type": "MedicalCondition", "name": "Chronic Fatigue Syndrome" },
        { "@type": "MedicalCondition", "name": "Stress" }
    ],
    "bodyLocation": "Applied to specific points on the back, abdomen, and other areas corresponding to internal organs and endocrine glands.",
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

const InternalHealthPage = () => {
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
        { name: 'Hijama for Internal Health', href: '/services/hijama-for-internal-health' },
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
                    style={{ backgroundImage: "url('/services/s4.webp')" }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative container mx-auto px-6 text-center z-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight"
                    >
                        Hijama for Internal Health
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
                    >
                        A restorative therapy to detoxify organs, balance hormones, and enhance your overall vitality from within.
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

                                {/* --- START: NEW CONTENT --- */}

                                {/* Introduction */}
                                <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-teal-600">Hijama for Internal Health: More Than Just Pain Relief</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Do you feel constantly sluggish, or are you managing chronic conditions like hypertension or digestive discomfort? Often, we focus on external pain, but true wellness starts deep inside. At <strong>Al Madina Hijama Center</strong> in Bahria Town, Lahore, we specialize in internal healing. We don&apos;t just treat symptoms; we use targeted Cupping Therapy to optimize the function of your vital organs.
                                </motion.p>

                                {/* Section 1: High BP */}
                                <motion.h2 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-600">Managing High Blood Pressure Naturally</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Hypertension is a silent issue affecting many in Pakistan. If you are looking for a natural way to manage your levels, <strong>hijama for high blood pressure</strong> is a powerful, time-tested therapy.
                                </motion.p>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    High blood pressure often results from increased resistance in your blood vessels. Cupping therapy works by drawing stagnant blood out of the system and encouraging fresh, oxygenated blood to circulate freely. This process helps to dilate blood vessels and reduce the pressure on arterial walls.
                                </motion.p>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Our therapists are trained to identify specific <strong>hijama points for high blood pressure</strong> located on the upper back and neck. By stimulating these points, we aim to lower stress levels and regulate circulation, providing a complementary approach to your heart health alongside your doctor&apos;s advice.
                                </motion.p>

                                {/* Image for BP */}
                                <motion.div variants={itemVariants} className="mt-8">
                                    <Image 
                                        src="/services/bp-points.webp" 
                                        alt="Therapist applying hijama cups on upper back for blood pressure regulation"
                                        className="w-full h-auto object-cover rounded-xl shadow-lg"
                                        width={1600}
                                        height={900}
                                        style={{ maxHeight: '500px' }}
                                    />
                                    <p className="mt-2 text-sm text-gray-500 italic text-center">Targeting specific Sunnah points to support healthy blood flow.</p>
                                </motion.div>

                                {/* Section 2: Stomach & Digestion */}
                                <motion.h2 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-600">Digestive Relief: Hijama for Stomach Problems</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    In Lahore, our rich diet often leads to digestive struggles. Whether you are dealing with chronic acidity, bloating, or constipation, <strong>hijama for stomach</strong> issues can provide surprising relief.
                                </motion.p>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    We utilize both dry and wet <strong>cupping on the stomach</strong> area (navel and abdomen) to stimulate the digestive organs. This therapy helps to:
                                </motion.p>
                                <ul className="mt-4 space-y-2 text-lg text-gray-600 list-disc pl-5">
                                    <li>Relieve deep-seated muscle tension in the abdomen (check our <Link href="/services/hijama-for-pain-relief" className="text-blue-600 underline">pain relief service</Link> for more on muscle tension).</li>
                                    <li>Reduce inflammation in the gut (Gastritis).</li>
                                    <li>Improve metabolism and relieve constipation.</li>
                                </ul>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Many of our clients report feeling lighter and less bloated immediately after a session targeting these digestive meridians.
                                </motion.p>

                                {/* Section 3: Cholesterol */}
                                <motion.h2 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-600">Combating Cholesterol and Heart Health</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    High cholesterol creates blockages that force your heart to work harder. Our specific protocol for <strong>hijama for cholesterol</strong> focuses on removing toxins and &quot;bad blood&quot; that contributes to sluggish circulation. By clearing these pathways, we support your body&apos;s natural ability to break down lipids, contributing to better heart health and reduced fatigue.
                                </motion.p>

                                {/* Section 4: Detox (Liver/Kidney) */}
                                <motion.h2 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-600">The Ultimate Body Reset: Cupping for Detox</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Your liver and kidneys are your body’s filtration system. Over time, they can become overwhelmed by processed foods and environmental toxins. We offer a specialized <strong>cupping for detox</strong> session designed to support these organs.
                                </motion.p>
                                <ul className="mt-4 space-y-2 text-lg text-gray-600 list-disc pl-5">
                                    <li><strong>Hijama for Liver:</strong> We target points on the right side of the back to stimulate liver function, helping to clear toxins and improve energy.</li>
                                    <li><strong>Hijama for Kidney:</strong> Specific points on the lower back are treated to support kidney filtration and reduce urinary issues.</li>
                                </ul>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    This full-body approach ensures that your internal systems are running clean and efficient.
                                </motion.p>

                                 {/* Image for Detox */}
                                 <motion.div variants={itemVariants} className="mt-8">
                                    <Image 
                                        src="/services/detox-points.webp" 
                                        alt="Diagram showing hijama points for liver and kidney detox on the human back"
                                        className="w-full h-auto object-cover rounded-xl shadow-lg"
                                        width={1600}
                                        height={900}
                                        style={{ maxHeight: '500px' }}
                                    />
                                </motion.div>

                                {/* Section 5: Diabetes Support */}
                                <motion.h2 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-600">Support for Diabetes and Metabolic Health</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Living with diabetes requires constant care, and many of our patients in Lahore look for natural ways to support their lifestyle. While Hijama is not a replacement for insulin or medication, <strong>hijama for diabetes</strong> (sugar patients) is widely used to improve quality of life.
                                </motion.p>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    High blood sugar levels can damage blood vessels and nerves over time, leading to poor circulation, especially in the feet and hands. Our therapy focuses on:
                                </motion.p>
                                <ul className="mt-4 space-y-2 text-lg text-gray-600 list-disc pl-5">
                                    <li><strong>Improving Circulation:</strong> By removing stagnant blood, we encourage fresh flow to the extremities, which is crucial for preventing diabetic neuropathy.</li>
                                    <li><strong>Reducing Inflammation:</strong> Chronic inflammation is a key driver of metabolic issues. <strong>Hijama for sugar patients</strong> helps lower systemic inflammation, allowing the body&apos;s insulin response to function more efficiently.</li>
                                    <li><strong>Stress Reduction:</strong> Stress spikes blood sugar levels. Our relaxing cupping sessions help lower cortisol, indirectly aiding in glucose management.</li>
                                </ul>

                                {/* Section 6: Immunity */}
                                <motion.h2 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-600">Boosting Immunity and Internal Vitality</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Internal health isn&apos;t just about fixing organs; it&apos;s about defending them. If you find yourself falling sick often or feeling constantly drained, your immune system may need a &quot;kickstart.&quot;
                                </motion.p>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    By targeting specific points on the upper back, Hijama stimulates the lymphatic system and promotes the production of white blood cells—your body&apos;s defense soldiers. This natural immunity boost helps your body fight off seasonal flus, infections, and fatigue more effectively, keeping your internal systems strong and resilient.
                                </motion.p>
                                
                                {/* CTA Section */}
                                <motion.h2 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-600">Start Your Healing Journey Today</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Your body deserves to feel its best from the inside out. Whether you need support with blood pressure, digestion, or a complete detox, our team at Al Madina Hijama Center is here to guide you.
                                </motion.p>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    <Link href="/booking" className="text-blue-600 font-bold hover:underline">Book your internal health consultation</Link> today and experience the difference of professional, hygienic Cupping Therapy in Lahore.
                                </motion.p>
                                {/* --- BENEFITS SECTION (Restored) --- */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-600">Key Benefits for Your Internal Health</motion.h3>
                                <motion.ul variants={staggerContainer} className="mt-6 space-y-4">
                                    {benefits.map((benefit, index) => (
                                        <motion.li key={index} variants={itemVariants} className="flex items-start">
                                            <benefit.icon className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                                            <span className="text-gray-700">{benefit.text}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                                {/* --- END BENEFITS SECTION --- */}

                                {/* Indications/Contraindications Section */}
                                <motion.div variants={itemVariants} className="mt-12">
                                    <h3 className="text-3xl font-bold text-teal-600">Is This Holistic Therapy for You?</h3>
                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-800 flex items-center"><CheckCircle className="h-6 w-6 text-green-600 mr-2" />Indications</h4>
                                            <p className="mt-2 text-gray-600">This therapy can provide significant relief for:</p>
                                            <ul className="mt-4 space-y-2 text-gray-700">
                                                {indications.map((item, index) => (
                                                    <li key={index} className="flex items-start"><ChevronRight className="w-5 h-5 text-teal-600 mr-2 mt-1 flex-shrink-0" /><span>{item}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-800 flex items-center"><AlertTriangle className="h-6 w-6 text-red-600 mr-2" />Contraindications</h4>
                                            <p className="mt-2 text-gray-600">Please consult our specialist before booking if you have:</p>
                                            <ul className="mt-4 space-y-2 text-gray-700">
                                                {contraindications.map((item, index) => (
                                                    <li key={index} className="flex items-start"><ChevronRight className="w-5 h-5 text-teal-600 mr-2 mt-1 flex-shrink-0" /><span>{item}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-sm text-gray-500 italic">Full disclosure of your medical history is crucial to ensure a safe and beneficial treatment tailored to your needs.</p>
                                </motion.div>

                                {/* Process Section */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-teal-600">The Internal Health Treatment Process</motion.h3>
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

                                {/* --- END: NEW CONTENT --- */}

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
                                <p className="mt-2 text-gray-600">Invest in your long-term health and well-being.</p>
                                
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
                                            <Image src="/ceo.webp" alt="Mr. Jameel ur Rehman" className="w-24 h-24 rounded-full mx-auto object-cover" width={96} height={96} />
                                            <p className="mt-2 font-bold">Mr. Jameel ur Rehman</p>
                                            <p className="text-sm text-gray-600">Certified Hijama Therapist</p>
                                        </div>
                                        <div>
                                            {/* Assuming you have an image for the female specialist at /female-specialist.webp */}
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
                        <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-teal-600 text-center">Preparation & After-care</motion.h2>
                        <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
                            Proper preparation and after-care are vital for supporting your bodys detoxification and healing process.
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
                                                <ChevronRight className="w-5 h-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
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
                                Answering your questions on using Hijama for internal wellness.
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

export default InternalHealthPage;