'use client';

import { Phone, CheckCircle, Shield, Clock, Sun, Moon, Droplets, Plus, Minus, ChevronRight, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState } from 'react';

const benefits = [
    { icon: CheckCircle, text: 'Removes toxins and stagnant blood' },
    { icon: CheckCircle, text: 'Boosts the immune system' },
    { icon: CheckCircle, text: 'Reduces pain and inflammation' },
    { icon: CheckCircle, text: 'Improves blood circulation' },
    { icon: CheckCircle, text: 'Enhances organ function' },
    { icon: CheckCircle, text: 'Promotes deep relaxation and reduces stress' },
];

const processSteps = [
    { icon: Droplets, title: 'Consultation', description: 'Our specialist discusses your health concerns to tailor the session to your needs.' },
    { icon: Shield, title: 'Sterilization', description: 'The treatment area is thoroughly cleaned and sterilized to ensure maximum safety.' },
    { icon: Clock, title: 'Cupping & Incision', description: 'Cups are applied to create suction, followed by tiny, superficial scratches on the skin.' },
    { icon: Droplets, title: 'Extraction', description: 'Cups are reapplied to gently draw out a small amount of toxic blood and impurities.' },
    { icon: Shield, title: 'After-care', description: 'The area is cleaned again, and you receive guidance on post-treatment care.' },
];

const indications = [
    'Chronic back, neck, and shoulder pain',
    'Frequent migraines and tension headaches',
    'Arthritis and joint pain',
    'Muscle stiffness and sports injuries',
    'Fatigue and low energy levels',
    'Skin conditions like acne and eczema',
    'Digestive issues and hypertension'
];

const contraindications = [
    'Are pregnant or breastfeeding.',
    'Are currently undergoing cancer treatment.',
    'Have a bleeding disorder like hemophilia.',
    'Are taking blood-thinning medication (e.g., Warfarin).',
    'Suffer from severe anemia or very low blood pressure.',
    'Have active skin infections, wounds, or severe eczema on the target area.'
];

const preparation = [
    { icon: Sun, title: 'Before the Session', points: ['Stay well-hydrated by drinking plenty of water.', 'Have a light meal 2-3 hours prior to your appointment.', 'Avoid vigorous exercise on the day of the therapy.', 'Wear loose and comfortable clothing.'] },
    { icon: Moon, title: 'After the Session', points: ['Avoid showering for 24 hours.', 'Keep the treated areas covered and warm.', 'Refrain from strenuous activities for 24-48 hours.', 'Follow the dietary recommendations provided by your therapist.'] },
];

const faqs = [
    {
        question: "Does Wet Hijama hurt?",
        answer: "Most clients experience minimal discomfort. The incisions are very superficial, often described as light scratches. Our practitioners are trained to be gentle and ensure your comfort throughout the session."
    },
    {
        question: "How much blood is removed?",
        answer: "A very small, insignificant amount of stagnant, toxic blood is removed. The goal is not to drain blood, but to stimulate the body’s healing and detoxification processes by removing impurities from just under the skin."
    },
    {
        question: "Will there be marks or scars?",
        answer: "The circular marks from the cups are temporary and typically fade within 3-10 days, depending on the level of stagnation. The scratches are superficial and do not leave permanent scars when proper after-care is followed."
    },
    {
        question: "Who should not get Wet Hijama?",
        answer: "Individuals with certain medical conditions, such as bleeding disorders, severe anemia, or those on blood-thinning medication, should consult with our specialist first. It is also not recommended for pregnant women. Full disclosure of your medical history is essential for your safety."
    }
];

// JSON-LD Schema data
const schema = {
    "@context": "https://schema.org",
    "@type": "TherapeuticProcedure",
    "name": "Wet Cupping (Hijama)",
    "description": "A traditional Prophetic method of healing that involves creating suction on the skin and making small, superficial incisions to draw out stagnant blood and toxins. It is used to treat a variety of conditions by promoting detoxification, improving circulation, and boosting the immune system.",
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

const WetCuppingPage = () => {
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
                  style={{ backgroundImage: "url('/service_wet_cupping.jpg')" }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative container mx-auto px-6 text-center z-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight"
                    >
                        Wet Cupping (Hijama)
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
                    >
                        The authentic Sunnah method for detoxification and natural healing, performed by certified specialists.
                    </motion.p>
                </div>
            </section>

            {/* --- Main Content Section --- */}
            <section className="py-24">
                <div className="container mx-auto px-8 sm:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        
                        {/* Left Column (Main Content) */}
                        <div className="lg:col-span-2">
                            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                                <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-gray-900">A Powerful Tradition for Modern Ailments</motion.h2>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    Wet Cupping, or Hijama, is a cornerstone of traditional and prophetic medicine. This therapeutic practice involves creating suction on the skin and then making tiny, superficial incisions to draw out a small quantity of stagnant blood and toxins. It is a powerful method for purifying the body, stimulating the immune system, and promoting the body’s natural ability to heal itself.
                                </motion.p>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    At Al Madina Hijama Center, we perform this sacred therapy with the utmost respect for tradition and the highest standards of hygiene. Our certified practitioners ensure a safe, comfortable, and spiritually uplifting experience.
                                </motion.p>
                                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    To ensure the comfort and convenience of all our clients, we provide dedicated services for both men and women, with male and female practitioners available. We also offer a professional home service throughout Lahore, bringing this healing therapy directly to your doorstep.
                                </motion.p>

                                {/* Benefits Section */}
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-gray-900">Key Benefits of Wet Cupping</motion.h3>
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
                                    <h3 className="text-3xl font-bold text-gray-900">Is Wet Cupping Right for You?</h3>
                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-800 flex items-center"><CheckCircle className="h-6 w-6 text-green-600 mr-2" />Indications</h4>
                                            <p className="mt-2 text-gray-600">This therapy is highly recommended if you suffer from:</p>
                                            <ul className="mt-4 space-y-2 text-gray-700">
                                                {indications.map((item, index) => (
                                                    <li key={index} className="flex items-start"><ChevronRight className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" /><span>{item}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-800 flex items-center"><AlertTriangle className="h-6 w-6 text-red-600 mr-2" />Contraindications</h4>
                                            <p className="mt-2 text-gray-600">Please consult our specialist before booking if you:</p>
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
                                <motion.h3 variants={itemVariants} className="mt-12 text-3xl font-bold text-gray-900">The Treatment Process</motion.h3>
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
                                <p className="mt-2 text-gray-600">Experience the benefits of Wet Cupping.</p>
                                
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
                                We have compiled answers to common questions about Wet Hijama to help you feel informed and confident.
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

