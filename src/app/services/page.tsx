'use client';

import {
  Droplets,
  Wind,
  Heart,
  Zap,
  ShieldCheck,
  Award,
  Plus,
  Minus,
  Phone,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image'; // <-- Make sure Image is imported

// Data for the services offered
const servicesList = [
  {
    icon: Droplets,
    title: 'Wet Cupping (Hijama)',
    description: 'The traditional Prophetic method involving light scratches and suction to remove stagnant blood and toxins, boosting immunity and promoting overall healing.',
    image: '/services/s1.jpg',
    learnMoreLink: '/services/wet-cupping'
  },
  {
    icon: Wind,
    title: 'Dry & Massage Cupping',
    description: 'A non-invasive technique where suction is applied to the skin, helping to relieve muscle tension, reduce inflammation, and improve blood flow without incisions.',
    image: '/services/s2.jpg',
    learnMoreLink: '/services/dry-cupping'
  },
  {
    icon: Zap,
    title: 'Hijama for Pain Relief',
    description: 'Targeted therapy for chronic pain conditions such as migraines, lower back pain, sciatica, and arthritis. A natural alternative to medication.',
    image: '/services/s3.jpg',
    learnMoreLink: '/services/hijama-for-pain-relief'
  },
  {
    icon: Heart,
    title: 'Hijama for Internal Health',
    description: 'A holistic approach to managing internal conditions like high blood pressure, digestive issues, and hormonal imbalances including PCOS and fertility.',
    image: '/services/s4.jpg',
    learnMoreLink: '/services/hijama-for-internal-health'
  },
  {
    icon: ShieldCheck,
    title: 'Hijama for Sports Recovery',
    description: 'Accelerate muscle recovery, reduce soreness, and improve flexibility for athletes and active individuals. Enhances performance and prevents injuries.',
    image: '/services/s5.jpg',
    learnMoreLink: '/services/hijama-for-sports-recovery'
  },
  {
    icon: Award,
    title: 'Hijama for Detox & Wellness',
    description: 'A comprehensive full-body detox to cleanse impurities, boost your immune system, improve skin health, and increase energy levels and mental clarity.',
    image: '/services/s6.jpg',
    learnMoreLink: '/services/hijama-for-detox'
  }
];

// Data for the FAQ section
const faqs = [
  {
    question: "What is the difference between Wet and Dry Hijama?",
    answer: "Wet Hijama involves making small, superficial scratches on the skin to draw out a small amount of toxic blood. Dry Hijama uses only suction to stimulate blood flow and relieve muscle tension without any incisions. Both are effective, but for different purposes."
  },
  {
    question: "How do I know which therapy is right for me?",
    answer: "The best therapy for you depends on your specific health concerns and goals. We highly recommend a free phone consultation with our specialist, Mr. Jameel ur Rehman, who will assess your needs and recommend a personalized treatment plan."
  },
  {
    question: "Is Hijama therapy safe for my specific condition?",
    answer: "Hijama is safe for a wide range of conditions, but there are certain contraindications. It is crucial to disclose your full medical history during the consultation to ensure the treatment is appropriate for you. Our certified practitioners prioritize your safety above all else."
  },
  {
    question: "How should I prepare for a Hijama session?",
    answer: "We recommend being well-hydrated and having a light meal 2-3 hours before your session. Avoid heavy meals right before treatment. Wear loose, comfortable clothing. Our team will provide you with detailed preparation instructions when you book your appointment."
  }
];

// Main Services Page Component
const ServicesPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <main className="bg-white text-gray-800">
      {/* --- Hero Section --- */}
      <section className="relative bg-gray-800 text-white py-32 sm:py-48 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/services/1.avif')" }} // This is likely a background, keep as style
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto px-6 text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight"
          >
            Our Hijama Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            Discover tailored, Sunnah-based therapies designed to restore your bodys natural balance and enhance vitality.
          </motion.p>
        </div>
      </section>

      {/* --- Services Grid Section --- */}
      <motion.section
        ref={servicesRef}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={staggerContainer}
        id="services"
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-8 sm:px-16">
          <div className="text-center mb-16">
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-black">
              A Treatment For Every Need
            </motion.h2>
            <motion.p variants={itemVariants} className="mt-4 text-lg text-black max-w-3xl mx-auto">
              From traditional wet cupping to specialized treatments for chronic pain and wellness, our services are performed by certified practitioners in a safe, hygienic environment.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="h-full" // Ensure motion.div takes full height for Link
              >
                <Link href={service.learnMoreLink} passHref className="h-full">
                  {/* The clickable card */}
                  <div className="bg-[#1E4137] rounded-2xl shadow-lg overflow-hidden flex flex-col group transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer h-full">
                    {/* Image Container */}
                    <div className="relative w-full h-48">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill={true} // Use fill prop
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Add sizes
                        className="object-cover" // Removed w-full h-full as fill handles it
                      />
                    </div>
                    {/* Text Content Container */}
                    <div className="p-6 flex flex-col flex-grow text-white">
                      <div className="flex items-center mb-4">
                        <div className="bg-white/10 text-white rounded-lg w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                          <service.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold leading-tight">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm flex-grow mb-6">
                        {service.description}
                      </p>
                      <div className="mt-auto">
                        <button
                          onClick={(e) => {
                            e.preventDefault(); // Prevent the Link's navigation
                            e.stopPropagation(); // Stop the event from bubbling to the parent Link
                            window.location.href = '/booking'; // Navigate manually to booking
                          }}
                          className="inline-flex items-center justify-center text-center px-5 py-3 bg-[#FF6900] text-white font-semibold rounded-lg hover:brightness-90 transition-all duration-300 w-full"
                        >
                          Book Now
                          <ChevronRight className="ml-2 h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* --- FAQ Section --- */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-8 sm:px-16">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-gray-800">
                Frequently Asked Questions
              </motion.h2>
              <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Your questions, answered. Here is some information to help you feel prepared for your healing journey.
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
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="bg-[#F0FDF4] py-24">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Book a free on-call consultation with our specialist to discuss your needs and find the perfect therapy for you.
          </p>
          <div className="mt-10">
            <a
              href="tel:+923007598000"
              className="inline-flex items-center px-8 py-4 bg-[#FF6900] text-white font-bold text-lg rounded-full shadow-lg hover:brightness-90 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="mr-3 h-5 w-5" />
              Book Your Free Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;