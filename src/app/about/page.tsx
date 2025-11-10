'use client';

import { Phone, ShieldCheck, Heart, Star, Award } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';
import Image from 'next/image'; // Ensure Image is imported

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
        staggerChildren: 0.2,
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
          description: 'With over 15 years in alternative medicine, our therapist brings a wealth of knowledge and expertise to every session.' // Updated years
      }
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* --- Hero Section --- */}
      <section className="relative bg-gray-800 text-white py-32 sm:py-48 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/about.webp')" }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto px-6 text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight" // Adjusted responsive size
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mt-4 text-lg sm:text-2xl text-gray-200 max-w-xl sm:max-w-3xl mx-auto" // Adjusted responsive size
          >
            Experience the ancient art of Hijama cupping therapy to help restore balance, alleviate pain, and enhance your natural vitality. We are committed to providing exceptional care in a sterile environment for your journey to optimal health.
          </motion.p>
        </div>
      </section>

      <motion.section
        className="py-16 sm:py-24 bg-[#F0FDF4]" // Adjusted padding
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
  
        <div className="container mx-auto px-4 sm:px-12 md:px-20 lg:px-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div variants={fadeInLeft} className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">Our Mission</h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 text-justify"> {/* Added text-justify */}
                Our mission is guided by the prophetic tradition: <i>Whoever perform Hijama on the 17th, 19th or 21st of the lunar month, it is a cure, by Allahs permission.</i> (Sunan Abi Dawud). We are dedicated to reviving this Sunnah by providing authentic, accessible healing to the community of Lahore. To honor this, we offer dedicated male therapists for men and female therapists for women, along with convenient home services, ensuring a comfortable and trusted experience for every client.
            </p>
          </motion.div>
          <motion.div
              variants={fadeInRight}
              className="flex justify-center"
          >
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="rounded-2xl shadow-2xl overflow-hidden max-w-sm sm:max-w-md md:max-w-lg w-full"
            >
              <Image
                src="/mission.webp"
                alt="Hijama therapy session in progress, focusing on healing"
                width={500}
                height={400}
                className="object-cover w-full h-auto" // Responsive image
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* --- Our Vision Section --- */}
      <motion.section
        className="py-16 sm:py-24 bg-white" // Adjusted padding
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
         {/* Adjusted padding */}
        <div className="container mx-auto px-4 sm:px-12 md:px-20 lg:px-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image first on mobile, second on desktop */}
          <motion.div
              variants={fadeInLeft}
              className="flex justify-center order-1 lg:order-2" // Responsive order
          >
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                 // Responsive max width
                className="rounded-2xl shadow-2xl overflow-hidden max-w-sm sm:max-w-md md:max-w-lg w-full"
            >
              <Image
                src="/vision.webp"
                alt="A serene, healthy environment representing the vision of community well-being"
                width={500}
                height={400}
                className="object-cover w-full h-auto" // Responsive image
              />
            </motion.div>
          </motion.div>
          {/* Text second on mobile, first on desktop */}
          <motion.div variants={fadeInRight} className="order-2 lg:order-1 text-center lg:text-left"> {/* Responsive order */}
             {/* Responsive text */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">Our Vision</h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 text-justify"> {/* Added text-justify */}
                Our vision is to be the most trusted Hijama center in Lahore, deeply rooted in the prophetic wisdom of Sunnah-based healing. We see a future where every individual has access to this blessed cure, performed with the utmost care and authenticity. We are committed to upholding the traditions, such as observing the preferred dates of the 17th, 19th, and 21st of the lunar month for maximum benefit. Our goal is to empower our community to embrace natural wellness, making it accessible for everyone. This includes providing dedicated male and female therapists for the comfort of our clients and offering convenient home services across the city. We aim to be a beacon of holistic health, guiding people towards a balanced life through the timeless and powerful practice of Hijama cupping therapy.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* --- Meet Our Founder & Hijama Therapist Section --- */}
      <motion.section
        className="py-16 sm:py-24 bg-[#F0FDF4]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4 sm:px-12 md:px-20 lg:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Column: order-2 lg:order-1 */}
            <motion.div variants={fadeInLeft} className="order-2 lg:order-1 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
                Meet Our Founder & Hijama Therapist
              </h2>
              <p className="mt-2 sm:mt-3 text-xl sm:text-2xl text-teal-700 font-semibold">
                Mr. Jameel ur Rehman
              </p>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
                Meet Mr. Jameel ur Rehman, a certified Hijama Specialist from Oman and a Tibbenabvi Hakeem in Pakistan. With 15 years of dedicated experience, his expertise is rooted in the authentic, Sunnah-based traditions of cupping therapy. Mr. Rehman is proficient in treating a wide array of health conditions, believing in a holistic approach to wellness. He effectively addresses issues ranging from brain and nervous system disorders like migraines and stress, to heart, liver, and digestive problems. His gentle approach and deep understanding of prophetic medicine have helped countless individuals find natural healing and restore balance to their lives.
              </p>

              {/* Stats container adapts */}
              <div className="mt-8 sm:mt-10 flex flex-col items-center space-y-4 md:flex-row md:justify-center lg:justify-start md:items-center md:space-y-0 md:space-x-12">
                <AnimatedStat to={10} suffix="K+" text="Satisfied Clients" />
                <div className="h-16 w-px bg-gray-300 hidden md:block"></div>
                <AnimatedStat to={15} text="Years of Experience" />
              </div>
            </motion.div>

            {/* Image Column: order-1 lg:order-2 */}
            <motion.div
              className="flex justify-center lg:justify-end order-1 lg:order-2"
              variants={fadeInRight}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="rounded-2xl shadow-2xl overflow-hidden max-w-xs sm:max-w-sm md:max-w-md w-full"
              >
                <Image
                  src="/ceo.webp"
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

      {/* ===== START: UPDATED HAKEEM SECTION ===== */}
      <motion.section
        className="py-16 sm:py-24 bg-white" // White background
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4 sm:px-12 md:px-20 lg:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
             {/* Image Column: order-1 lg:order-1 (Left on Desktop) */}
            <motion.div
              className="flex justify-center lg:justify-start order-1 lg:order-1" // Image first on mobile, first on desktop
              variants={fadeInLeft} // Animate from left
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="rounded-2xl shadow-2xl overflow-hidden max-w-xs sm:max-w-sm md:max-w-md w-full"
              >
                <Image
                  src="/hakeem.jpg" // Your placeholder image
                  alt="Hakeem Muhammad Atif Ali Aqasha"
                  width={400}
                  height={450}
                  className="object-cover w-full h-auto"
                />
              </motion.div>
            </motion.div>

            {/* Text Column: order-2 lg:order-2 (Right on Desktop) */}
            <motion.div variants={fadeInRight} className="order-2 lg:order-2 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
                Meet Our Expert Hakeem
              </h2>
              <p className="mt-2 sm:mt-3 text-xl sm:text-2xl text-teal-700 font-semibold">
                Hakeem Muhammad Atif Ali Aqasha
              </p>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
                We are honored to introduce <strong>Hakeem Muhammad Atif Ali Aqasha</strong>, a highly qualified and registered practitioner of traditional Tibb. He is officially licensed by the <strong>National Council for Tibb (NCT), Government of Pakistan</strong> (Reg. No. QH-37741-A), ensuring his practice meets the highest national standards.
              </p>
              <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
                Hakeem Atif Ali holds a comprehensive four-year diploma as a <strong>Fazil-ut-Tibb-Wal-Jarahat (FTJ)</strong> from the esteemed Razi Tibbia College, Gojra. His expertise is further enriched by a diploma in the <strong>Muhammadin System of Shafa (M.D.S.S)</strong> and a specialization in <strong>Tibb-e-Nabvi</strong> (Prophetic Medicine). With a deep-rooted foundation in both traditional Tibb and Islamic knowledge, he provides personalized, holistic consultations to help restore your bodys natural balance.
              </p>
              {/* Stats container */}
              <div className="mt-8 sm:mt-10 flex flex-col items-center space-y-4 md:flex-row md:justify-center lg:justify-start md:items-center md:space-y-0 md:space-x-12">
                <AnimatedStat to={10} suffix="+" text="Years of Experience" />
                <div className="h-16 w-px bg-gray-300 hidden md:block"></div>
                <AnimatedStat to={4} suffix="+" text="Formal Qualifications" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* ===== END: UPDATED HAKEEM SECTION ===== */}

      

      {/* --- Our Commitment Section --- */}
      <section className="py-16 sm:py-24 bg-white"> {/* Adjusted padding */}
         {/* Adjusted padding */}
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
            <motion.div
                className="text-center mb-12 sm:mb-16" // Adjusted margin
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                {/* Responsive text */}
                <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">
                  Our Commitment to Your Well-Being
                </motion.h2>
                <motion.p variants={fadeInUp} className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-3xl mx-auto">
                  Your health is our utmost priority. We are dedicated to providing a healing experience that is not only effective but also safe, comfortable, and spiritually uplifting.
                </motion.p>
            </motion.div>

            <motion.div
                 // Grid adapts
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                {commitments.map((item, index) => (
                  <motion.div
                        key={index}
                         // Adjusted padding
                        className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-lg text-center flex flex-col items-center"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        <div className="bg-teal-100 rounded-full p-3 sm:p-4">
                            {/* Responsive Icon */}
                            <item.icon className="h-8 w-8 sm:h-10 sm:w-10 text-teal-600" />
                        </div>
                        {/* Responsive text */}
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-4 sm:mt-5">{item.title}</h3>
                        <p className="mt-2 text-sm sm:text-base text-gray-600 flex-grow">{item.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="bg-[#F0FDF4] py-16 sm:py-24"> {/* Adjusted padding */}
         {/* Adjusted padding */}
        <div className="container mx-auto px-4 sm:px-8 text-center">
           {/* Responsive text */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">
            Begin Your Journey to Better Health
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-black max-w-md sm:max-w-2xl mx-auto">
            Ready to experience the benefits of Hijama? Contact us today to schedule your consultation and take the first step towards a healthier, more balanced life.
          </p>
           {/* Adjusted margin */}
          <div className="mt-8 sm:mt-10">
            <a
              href="/booking"
               // Adjusted padding and text size
              className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-[#FF6900] text-white text-base sm:text-lg font-bold rounded-full shadow-lg hover:brightness-90 transition-all duration-300 transform hover:scale-105"
            >
              Book an Appointment
              <Phone className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;