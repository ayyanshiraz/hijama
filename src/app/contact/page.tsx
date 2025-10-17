'use client';

import { Phone, Mail, MapPin, MessageSquare, Plus, Minus, Globe } from 'lucide-react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const contactDetails = [
  {
    icon: MapPin,
    title: 'Our Address',
    lines: ['MashaAllah Center, 213-A, opp. Car Parking Grand Mosque, Commercial Sector C Bahria Town, Lahore, 53720'],
    href: 'https://maps.google.com/', // NOTE: You might want to update this with a real Google Maps link later
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+92 300 7598000'],
    href: 'tel:+923007598000',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['almadinahijamaclinic1400@gmail.com'],
    href: 'mailto:almadinahijamaclinic1400@gmail.com',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    lines: ['+92 300 7598000'],
    href: 'https://wa.me/923007598000',
  },
];

const faqs = [
    {
        question: "What is Hijama (Cupping Therapy)?",
        answer: "Hijama is a traditional therapeutic method that involves creating suction on the skin using cups to draw out stagnant, toxic blood. This process helps to detoxify the body, improve circulation, and stimulate the body’s natural healing processes."
    },
    {
        question: "Is the Hijama procedure painful?",
        answer: "Most people do not find Hijama to be painful. You may feel a slight pinching or pulling sensation during the application of the cups and minor scratches from the incisions, but it is generally well-tolerated. Our practitioners are trained to ensure you are as comfortable as possible."
    },
    {
        question: "How long does a typical Hijama session take?",
        answer: "A standard session usually lasts between 30 to 45 minutes. This includes a brief consultation, the cupping procedure itself, and post-treatment care advice."
    },
    {
        question: "Are the instruments you use safe and sterile?",
        answer: "Absolutely. We adhere to the strictest hygiene standards. All of our equipment, including cups and surgical blades, is single-use and disposable. We ensure a completely sterile environment for every client to guarantee your safety."
    },
    {
        question: "What should I expect to feel after a Hijama session?",
        answer: "After a session, many clients report feeling lighter, more energetic, and relaxed. You may have circular marks on your skin which are temporary and typically fade within a week. We will provide you with complete aftercare instructions."
    },
    {
        question: "How often should I get Hijama done?",
        answer: "The frequency of sessions depends on your individual health condition and wellness goals. For general health maintenance, once every few months is often recommended. For specific ailments, our practitioner will advise a personalized treatment plan for you."
    },
    {
        question: "Do you have separate arrangements for male and female clients?",
        answer: "Yes, we provide services for both men and women. We have professional male practitioners for our male clients and female practitioners for our female clients to ensure a comfortable and private experience for everyone."
    },
    {
        question: "Do you offer home services?",
        answer: "Yes, we understand the need for convenience and comfort, which is why we offer professional Hijama services at your home. Our practitioners will bring all the necessary sterile equipment to provide a safe and effective treatment in your own space."
    }
];


const ContactPage = () => {
  // Hook to trigger animation when the element is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures the animation runs only once
    threshold: 0.1,    // Triggers when 10% of the section is visible
  });

  // State to manage which FAQ item is open
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Animation variants for Framer Motion
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32 sm:py-48 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/contact.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
            Contact Us
          </h1>
          <p className="mt-4 text-2xl text-gray-300 max-w-2xl mx-auto">
            We are here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="bg-white pt-16 pb-24 sm:pt-20 sm:pb-32">
        <div className="container mx-auto px-8 sm:px-16">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex justify-center mb-6">
                <Globe className="w-12 h-12 text-gray-800" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-wider">
              FAQS
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about Hijama therapy and our services to help you feel prepared and informed.
            </motion.p>
          </motion.div>

          {/* Single column layout for FAQs - Wider */}
          <div className="max-w-5xl mx-auto flex flex-col gap-y-4"> {/* Changed max-w-3xl to max-w-5xl */}
            {faqs.map((faq, index) => { // Iterate directly over faqs array
              const isOpen = openFaqIndex === index;

              return (
                <div key={index}> {/* Render each item directly */}
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className={`w-full flex justify-between items-center text-left gap-4 bg-[#1E4137] p-6 text-white transition-all duration-300 ${
                      isOpen ? 'rounded-t-lg' : 'rounded-lg hover:bg-opacity-90'
                    }`}
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

      {/* Animated Combined Contact Section */}
      <section
        ref={ref}
        className="bg-white text-gray-800 pt-0 pb-24 sm:pb-32 overflow-hidden"
      >
        <div className="container mx-auto px-8 sm:px-16">
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-5xl font-bold text-black">Get In Touch</motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-xl text-gray-600">Book your session today and experience the benefits of natural healing.</motion.p>
          </motion.div>

          <div className="max-w-6xl mx-auto mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

              <motion.div
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                variants={fadeInLeft}
                className="bg-[#1E4137] text-white p-8 rounded-lg h-full"
              >
                <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="full-name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                    <input type="text" name="full-name" id="full-name" className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-black placeholder-gray-500" placeholder="Your Name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                    <input type="email" name="email" id="email" className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-black placeholder-gray-500" placeholder="your.email@example.com" />
                  </div>
                   <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                    <input type="text" name="subject" id="subject" className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-black placeholder-gray-500" placeholder="Reason for contacting us" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                    <textarea name="message" id="message" rows={5} className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-black placeholder-gray-500" placeholder="Write your message here..." ></textarea>
                  </div>
                  <div>
                    <button type="submit" className="w-full px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-300">
                      Send Message
                    </button>
                  </div>
                </form>
              </motion.div>

              <motion.div
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                variants={fadeInRight}
                className="flex flex-col space-y-6"
              >
                <motion.div
                  variants={staggerContainer}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                  {contactDetails.map((detail, index) => (
                    <motion.a
                      key={index}
                      href={detail.href}
                      variants={fadeInUp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1E4137] text-white p-5 rounded-lg text-center flex flex-col items-center justify-center hover:bg-opacity-90 transition-colors"
                    >
                      <detail.icon className="w-8 h-8 mb-3 text-white" />
                      <h3 className="text-lg font-bold">{detail.title}</h3>
                      <div className="mt-1 text-sm text-gray-300">
                        {detail.lines.map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
                <motion.div variants={fadeInUp} className="rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.6080539835734!2d74.18216067544479!3d31.369793374283226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ffe68d865491%3A0xe0baf4f3c53bc165!2sAl-Madina%20Hijama%20Center!5e0!3m2!1sen!2s!4v1760633158199!5m2!1sen!2" // NOTE: You might want to update this with a real Google Maps embed link later
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;