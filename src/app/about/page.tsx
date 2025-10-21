'use client';

import { Phone, ShieldCheck, Heart, Star, Award } from 'lucide-react';
import { motion, Variants } from 'framer-motion'; // Ensure motion is imported
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';
import Image from 'next/image';


// --- Reusable AnimatedStat Component ---
type AnimatedStatProps = {
  to: number;
  text: string;
  suffix?: string;
};

function AnimatedStat({ to, text, suffix = "" }: AnimatedStatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      const element = ref.current;
      if (!element) return;

      const controls = animate(0, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          element.textContent = Math.round(value).toString();
        },
      });

      return () => controls.stop();
    }
  }, [inView, to]);

  return (
    <div className="text-center" ref={inViewRef}>
      <p className="text-4xl font-bold text-teal-600">
        <span ref={ref}>0</span>{suffix}
      </p>
      <p className="mt-1 text-sm text-gray-600">{text}</p>
    </div>
  );
}

// --- Main About Page Component ---
const AboutPage = () => {
  // Animation Variants
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger effect for children
        delayChildren: 0.1,
      },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const commitments = [
      {
          icon: Star,
          title: 'Sunnah-Based Healing',
          description: 'Our practice is deeply rooted in the Prophetic traditions of Hijama, ensuring an authentic and spiritually fulfilling healing experience.'
      },
      {
          icon: ShieldCheck,
          title: 'Uncompromising Hygiene',
          description: 'We adhere to the highest standards of cleanliness, using sterile, single-use equipment for every procedure to guarantee your safety.'
      },
      {
          icon: Heart,
          title: 'Personalized Patient Care',
          description: 'Every treatment plan is tailored to your unique health needs. We listen to your concerns to provide the most effective therapy.'
      },
      {
          icon: Award,
          title: 'Years of Experience',
          description: 'With over 25 years in alternative medicine, our therapist brings a wealth of knowledge and expertise to every session.'
      }
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* --- Hero Section --- */}
      <section className="relative bg-gray-800 text-white py-32 sm:py-48 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/about.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto px-6 text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-6xl md:text-8xl font-extrabold tracking-tight"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mt-4 text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            Experience the ancient art of Hijama cupping therapy to help restore balance, alleviate pain, and enhance your natural vitality. We are committed to providing exceptional care in a sterile environment for your journey to optimal health.
          </motion.p>
        </div>
      </section>

      {/* --- Our Mission Section --- */}
      <motion.section
        className="py-24 bg-[#F0FDF4]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-12 sm:px-20 lg:px-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInLeft} className="text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">Our Mission</h2>
                <p className="mt-6 text-lg text-gray-600">
                    Our mission is guided by the prophetic tradition: <i>"Whoever perform Hijama on the 17th, 19th or 21st of the lunar month, it is a cure, by Allahs permission."</i> (Sunan Abi Dawud). We are dedicated to reviving this Sunnah by providing authentic, accessible healing to the community of Lahore. To honor this, we offer dedicated male therapists for men and female therapists for women, along with convenient home services, ensuring a comfortable and trusted experience for every client.
                </p>
            </motion.div>
            {/* <<< MODIFICATION: Added hover pop-up >>> */}
            <motion.div
                variants={fadeInRight}
                className="flex justify-center"
            >
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="rounded-2xl shadow-2xl overflow-hidden"
                >
                    <img
                        src="/mission.jpg"
                        alt="Hijama therapy session in progress, focusing on healing"
                        width={500}
                        height={400}
                        className="object-cover w-full h-full"
                    />
                </motion.div>
            </motion.div>
        </div>
      </motion.section>

      {/* --- Our Vision Section --- */}
      <motion.section
        className="py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-12 sm:px-20 lg:px-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* <<< MODIFICATION: Added hover pop-up >>> */}
            <motion.div
                variants={fadeInLeft}
                className="flex justify-center"
            >
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="rounded-2xl shadow-2xl overflow-hidden"
                >
                    <img
                        src="/vision.jpg"
                        alt="A serene, healthy environment representing the vision of community well-being"
                        width={500}
                        height={400}
                        className="object-cover w-full h-full"
                    />
                </motion.div>
            </motion.div>
            <motion.div variants={fadeInRight} className="text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">Our Vision</h2>
                <p className="mt-6 text-lg text-gray-600">
                    Our vision is to be the most trusted Hijama center in Lahore, deeply rooted in the prophetic wisdom of Sunnah-based healing. We see a future where every individual has access to this blessed cure, performed with the utmost care and authenticity. We are committed to upholding the traditions, such as observing the preferred dates of the 17th, 19th, and 21st of the lunar month for maximum benefit. Our goal is to empower our community to embrace natural wellness, making it accessible for everyone. This includes providing dedicated male and female therapists for the comfort of our clients and offering convenient home services across the city. We aim to be a beacon of holistic health, guiding people towards a balanced life through the timeless and powerful practice of Hijama cupping therapy.
                </p>
            </motion.div>
        </div>
      </motion.section>

      {/* --- Meet The Therapist Section --- */}
      <motion.section
        className="py-24 bg-[#F0FDF4]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-12 sm:px-20 lg:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInLeft}>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
                Meet Our Founder & Hijama Therapist
              </h2>
              <p className="mt-3 text-2xl text-teal-700 font-semibold">
                Mr. Jameel ur Rehman
              </p>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Meet Mr. Jameel ur Rehman, a certified Hijama Specialist from Oman and a Tibbenabvi Hakeem in Pakistan. With 25 years of dedicated experience, his expertise is rooted in the authentic, Sunnah-based traditions of cupping therapy. Mr. Rehman is proficient in treating a wide array of health conditions, believing in a holistic approach to wellness. He effectively addresses issues ranging from brain and nervous system disorders like migraines and stress, to heart, liver, and digestive problems. His gentle approach and deep understanding of prophetic medicine have helped countless individuals find natural healing and restore balance to their lives.
              </p>

              <div className="mt-10 flex justify-center lg:justify-start items-center space-x-12">
                <AnimatedStat to={10} suffix="K+" text="Satisfied Clients" />
                <div className="h-16 w-px bg-gray-300"></div>
                <AnimatedStat to={25} text="Years of Experience" />
              </div>
            </motion.div>
            <motion.div
              className="flex justify-center lg:justify-end"
              variants={fadeInRight}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="rounded-2xl shadow-2xl overflow-hidden max-w-md w-full"
              >
                <img
                  src="/ceo.jpg"
                  alt="Mr. Jameel ur Rehman, Founder & Hijama Therapist"
                  width={400}
                  height={450}
                  className="object-cover w-full h-auto"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* --- Our Commitment Section --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 sm:px-16">
            <motion.div
                className="text-center mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-gray-800">
                    Our Commitment to Your Well-Being
                </motion.h2>
                <motion.p variants={fadeInUp} className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                    Your health is our utmost priority. We are dedicated to providing a healing experience that is not only effective but also safe, comfortable, and spiritually uplifting.
                </motion.p>
            </motion.div>

            <motion.div
                className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                {commitments.map((item, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-8 rounded-2xl shadow-lg text-center flex flex-col items-center"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05, y: -5 }} // Added hover effect
                        transition={{ duration: 0.3, ease: 'easeOut' }} // Added hover transition
                    >
                        <div className="bg-teal-100 rounded-full p-4">
                            <item.icon className="h-10 w-10 text-teal-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mt-5">{item.title}</h3>
                        <p className="mt-2 text-gray-600 flex-grow">{item.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="bg-[#F0FDF4] py-24">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black">
            Begin Your Journey to Better Health
          </h2>
          <p className="mt-4 text-lg text-black max-w-2xl mx-auto">
            Ready to experience the benefits of Hijama? Contact us today to schedule your consultation and take the first step towards a healthier, more balanced life.
          </p>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#FF6900] text-white font-bold text-lg rounded-full shadow-lg hover:brightness-90 transition-all duration-300 transform hover:scale-105"
            >
              Book an Appointment
              <Phone className="ml-3 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;