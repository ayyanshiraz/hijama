'use client';

import {
  Phone, Heart, Ghost, Zap, PersonStanding, Baby, Droplet, PlusCircle,
  SquareKanban, LineChart, Droplets, Brain, ShieldCheck, Sunrise, Sparkles, Soup,
  Star, ChevronLeft, ChevronRight, MessageSquare, Mail, MapPin
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, Variants, animate, AnimatePresence } from 'framer-motion';


const slideshowData = [
  {
    image: '/hero.jpg',
    title: (
      <>
        One Of The Most <span className="text-teal-400">Credible</span>
        <br />
        Hijama Centers In Lahore
      </>
    ),
    subtitle: 'With 25 years of Experience in Hijama and Alternative medicine, we are one of the most credible Hijama centers in Lahore.',
    buttonText: 'Call +92 300 7598000',
    buttonLink: 'tel:+92 300 7598000',
    hasIcon: true, // Keep icon for phone number
  },
  {
    image: '/hero5.png',
    title: (
      <>
        Discover <span className="text-teal-400">Natural Healing</span>
        <br />
        Through Sunnah
      </>
    ),
    subtitle: 'Embrace a holistic approach to wellness with our traditional and effective Hijama cupping therapies.',
    buttonText: 'Learn More',
    buttonLink: '/about',
    hasIcon: false, // No icon for learn more
  },
  {
    image: '/hero3.jpg',
    title: (
      <>
        Safe & Hygienic
        <br />
        <span className="text-teal-400">Expert Care</span>
      </>
    ),
    subtitle: 'Your health is our priority. Our certified practitioners ensure a sterile, safe, and comfortable experience.',
    buttonText: 'Our Services',
    buttonLink: '/services',
    hasIcon: false, // No icon for our services
  },
  {
    image: '/hero2.png',
    title: (
      <>
        Revitalize Your Body
        <br />
        <span className="text-teal-400">Book A Session</span>
      </>
    ),
    subtitle: 'Take the first step towards better health. Schedule your personal consultation and therapy session today.',
    buttonText: 'Book A Session',
    buttonLink: '/services', // UPDATED: This now points to the services page to start the funnel.
    hasIcon: false, // UPDATED: The phone icon is removed.
  },
];

const features = [
  {
    icon: Heart,
    title: 'Natural Immunity Boost',
    description: 'Strengthen your bodys natural defenses with Hijama cupping. Our therapy promotes detoxification and enhances immune response for lasting wellness.',
  },
  {
    icon: Zap,
    title: 'Effective Pain Management',
    description: 'Find relief from chronic pain, migraines, and muscle tension. Hijama improves blood flow to help you manage discomfort and regain mobility without medication.',
  },
  {
    icon: Ghost,
    title: 'Safe & Holistic Healing',
    description: 'Embrace a trusted, non-invasive treatment rooted in Sunnah. Hijama is a 100% natural therapy that works in harmony with your body, free from side effects.',
  },
];

const benefits = [
  { icon: PersonStanding, text: 'Joint Pains' },
  { icon: Baby, text: 'Fertility Issues' },
  { icon: Droplet, text: 'Skin Issues' },
  { icon: PlusCircle, text: 'and Much More!' },
];

const hijamaBenefits = [
    {
        icon: SquareKanban,
        title: "Enhanced Detoxification",
        description: "Draws out toxins and impurities from the body, promoting clearer skin and improved organ function.",
        image: "/hijama-detox.jpg"
    },
    {
        icon: LineChart,
        title: "Improved Blood Circulation",
        description: "Stimulates blood flow to ensure oxygen and essential nutrients reach all tissues effectively.",
        image: "/hijama-blood.jpg"
    },
    {
        icon: Droplets,
        title: "Reduced Inflammation",
        description: "Provides natural relief from joint pain, arthritis, and muscle soreness without medication.",
        image: "/hijama-inflammation.jpg"
    },
    {
        icon: Brain,
        title: "Mental Clarity & Stress Relief",
        description: "Calms the nervous system, leading to better sleep, improved focus, and a sense of well-being.",
        image: "/hijama-mind.jpg"
    },
    {
        icon: ShieldCheck,
        title: "Strengthened Immune System",
        description: "Activates the bodys natural defenses by stimulating the production of immune cells.",
        image: "/hijama-immune.jpg"
    },
    {
        icon: Sunrise,
        title: "Accelerated Healing",
        description: "Boosts the bodys natural repair processes for faster recovery from injuries and muscle fatigue.",
        image: "/hijama-healing.jpg"
    },
    {
        icon: Sparkles,
        title: "Rejuvenated Skin Health",
        description: "Helps treat skin conditions like acne and eczema by improving local circulation and detoxification.",
        image: "/hijama-skin.jpg"
    },
    {
        icon: Soup,
        title: "Regulated Digestive System",
        description: "Aids in relieving digestive issues such as bloating, constipation, and loss of appetite.",
        image: "/hijama-digestive.jpg"
    }
];

const testimonials = [
  {
    text: "The wet cupping session significantly eased my chronic back pain; the staff was incredibly professional.",
    name: "Musa Mutahir",
    rating: 4,
  },
  {
    text: "Hijama with Mr. Jameel ur Rehman has been a game-changer for my post-workout sports recovery.",
    name: "Muhammad Mustafa",
    rating: 5,
  },
  {
    text: "After just one session for my migraine, I felt amazing. So grateful they have female therapists available!",
    name: "Fizza Bashir",
    rating: 5,
  },
  {
    text: "My muscle stiffness is completely gone after the dry cupping therapy, I highly recommend their services.",
    name: "Abdul Muhaymin",
    rating: 4,
  },
  {
    text: "The hijama for back pain performed by Mr. Jameel ur Rehman provided instant and lasting relief.",
    name: "Moiz Ahmad",
    rating: 4,
  },
  {
    text: "Its wonderful that they offer both male and female therapists, making it very comfortable for my family.",
    name: "Roshaan Ahmed",
    rating: 5,
  },
  {
    text: "I was so impressed with their hygienic and convenient home service; the whole process was seamless.",
    name: "Ayesha Akhtar",
    rating: 5,
  },
  {
    text: "The wet cupping treatment was excellent and the clinic environment is very clean and professional.",
    name: "Sanaan Zahid",
    rating: 4,
  },
];


type AnimatedStatProps = {
  to: number;
  text: string;
  suffix?: string;
};

function AnimatedStat({ to, text, suffix = "" }: AnimatedStatProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
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
  }, [to]);

  return (
    <div className="text-center">
      <p className="text-4xl font-bold text-teal-600">
        <span ref={ref}>0</span>{suffix}
      </p>
      <p className="mt-1 text-sm text-gray-600">{text}</p>
    </div>
  );
}


const HomePage = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [numVisibleTestimonials, setNumVisibleTestimonials] = useState(1);

  const [hijamaRef, hijamaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [benefitsRef, benefitsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [therapistRef, therapistInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  const fadeInVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainerVariants: Variants = {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
  };

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setNumVisibleTestimonials(3);
      } else if (window.innerWidth >= 768) {
        setNumVisibleTestimonials(2);
      } else {
        setNumVisibleTestimonials(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slideshowData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = slideshowData[currentSlideIndex];

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentTestimonialIndex ? 1 : -1);
    setCurrentTestimonialIndex(index);
  }

  const getVisibleTestimonials = () => {
    const visibleTestimonials = [];
    for (let i = 0; i < numVisibleTestimonials; i++) {
      visibleTestimonials.push(testimonials[(currentTestimonialIndex + i) % testimonials.length]);
    }
    return visibleTestimonials;
  };


  return (
    <main className="font-sans bg-[#F0FDF4]">
      {/* Hero Slideshow Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden text-white">
        {slideshowData.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlideIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
        <div className="absolute inset-0 w-full h-full bg-black/60"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div
            key={currentSlideIndex}
            className="animate-fadeInUp"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-shadow-lg">
              {currentSlide.title}
            </h1>
            <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto text-shadow">
              {currentSlide.subtitle}
            </p>
            <div className="mt-8">
              <a
                href={currentSlide.buttonLink}
                className="inline-flex items-center px-8 py-4 bg-[#FF6900] text-white font-semibold rounded-lg shadow-md hover:brightness-90 transition-all duration-300 transform hover:scale-105"
              >
                {currentSlide.hasIcon && <Phone className="mr-3 h-6 w-6" />}
                {currentSlide.buttonText}
              </a>
            </div>
          </div>
        </div>
        <div className="absolute z-10 bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
          {slideshowData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlideIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlideIndex ? 'bg-white' : 'bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section id="features" className="relative py-24">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="relative block w-full h-[50px] md:h-[100px]">
                <path fill="#F0FDF4" d="M0,224L1440,32L1440,0L0,0Z"></path>
            </svg>
        </div>
        <div className="container mx-auto px-8 sm:px-16 text-center">
          <h3 className="text-teal-600 text-lg font-semibold uppercase">Holistic Hijama Therapy in Lahore</h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-2">Restore Your Mind, Body & Soul</h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="bg-orange-100 rounded-full p-4">
                  <feature.icon className="h-10 w-10 text-orange-500" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mt-6">
                  {feature.title}
                </h4>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- What is Hijama Section --- */}
      <motion.section
        id="about"
        className="py-24 bg-white"
        ref={hijamaRef}
        initial="hidden"
        animate={hijamaInView ? "visible" : "hidden"}
        variants={staggerContainerVariants}
      >
        <div className="container mx-auto px-8 sm:px-16">
          <div className="text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-black text-black tracking-tight"
              variants={itemVariants}
            >
              But What Is Hijama?
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-black"
              variants={itemVariants}
            >
              Know The Process!
            </motion.p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* <<< Hijama Image with Hover Effect >>> */}
            <motion.div
              className="relative w-full h-110 rounded-2xl shadow-2xl overflow-hidden"
              variants={fadeInVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <img
                src="/why.jpg"
                alt="Hijama cupping therapy showing cups on a back in a clean, serene setting"
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>

            <div className="text-left md:pl-8">
              <motion.p
                className="text-black leading-relaxed"
                variants={itemVariants}
              >
                Hijama cupping therapy includes the elimination of toxic
                substances from the blood. Hijama cupping therapy has a
                wide range of benefits all the way from head to toe.
              </motion.p>

              <motion.div
                className="mt-8 grid grid-cols-2 gap-y-8 gap-x-4 text-center"
                variants={staggerContainerVariants}
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center justify-start"
                    variants={itemVariants}
                  >
                    <benefit.icon className="h-12 w-12 text-orange-500" />
                    <p className="mt-3 font-bold text-gray-800">{benefit.text}</p>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-10 text-center">
                <motion.a
                  href="tel:+92 300 7598000"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#FF6900] text-white font-medium rounded-full shadow-lg hover:brightness-90 transition-all duration-300 transform hover:scale-105"
                  variants={itemVariants}
                >
                  Call For Free Consultation
                  <Phone className="ml-2 h-4 w-4" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* --- Benefits Of Hijama Section --- */}
      <motion.section
        id="benefits"
        className="py-24 bg-[#F0FDF4]"
        ref={benefitsRef}
        initial="hidden"
        animate={benefitsInView ? "visible" : "hidden"}
        variants={staggerContainerVariants}
      >
        <div className="container mx-auto px-8 sm:px-16 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-gray-800"
            variants={itemVariants}
          >
            Benefits Of Hijama Cupping Therapy
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Experience a wide range of health improvements with this ancient prophetic healing method, trusted for centuries to restore balance and vitality.
          </motion.p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {hijamaBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg text-left transform hover:-translate-y-2 transition-transform duration-300 overflow-hidden flex flex-col"
                variants={itemVariants}
              >
                <div className="relative w-full h-48">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className='flex items-center mb-4'>
                    <div className="bg-teal-100 text-teal-600 rounded-lg w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                        <benefit.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* --- Meet The Therapist Section --- */}
      <motion.section
        id="therapist"
        className="py-24 bg-white"
        ref={therapistRef}
        initial="hidden"
        animate={therapistInView ? "visible" : "hidden"}
        variants={staggerContainerVariants}
      >
        <div className="container mx-auto px-12 sm:px-20 lg:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
                Mr. Jameel Ur Rehman
              </h2>
              <p className="mt-3 text-lg text-teal-700 font-medium">
                Your Therapist at our Hijama center
              </p>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Meet Mr. Jameel ur Rehman, a certified Hijama Specialist from Oman and a Tibbenabvi Hakeem in Pakistan. With 25 years of dedicated experience, his expertise is rooted in the authentic, Sunnah-based traditions of cupping therapy. Mr. Rehman is proficient in treating a wide array of health conditions, believing in a holistic approach to wellness. He effectively addresses issues ranging from brain and nervous system disorders like migraines and stress, to heart, liver, and digestive problems. His gentle approach and deep understanding of prophetic medicine have helped countless individuals find natural healing and restore balance to their lives.
              </p>

              <div className="mt-10 flex justify-center lg:justify-start items-center space-x-12">
                {therapistInView && <AnimatedStat to={10} suffix="K+" text="Satisfied Clients" />}
                <div className="h-16 w-px bg-gray-300"></div>
                {therapistInView && <AnimatedStat to={25} text="Years of Experience" />}
              </div>

              <div className="mt-10">
                <a
                  href="tel:+92 300 7598000"
                  className="inline-flex items-center px-8 py-4 bg-[#FF6900] text-white font-semibold rounded-lg shadow-md hover:brightness-90 transition-all duration-300 transform hover:scale-105"
                >
                  Call For Free Consultation
                  <Phone className="ml-3 h-5 w-5" />
                </a>
              </div>
            </motion.div>

            {/* <<< Therapist Image with Hover Effect >>> */}
            <motion.div
              className="flex justify-center lg:justify-end"
              variants={imageVariants}
              initial="hidden"
              animate={therapistInView ? "visible" : "hidden"}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="rounded-2xl shadow-2xl overflow-hidden"
              >
                <img
                  src="/ceo.jpg"
                  alt="Mr Jameel ur Rehman, expert Hijama therapist in Lahore"
                  width="400"
                  height="450"
                  className="rounded-2xl shadow-2xl object-cover w-full h-auto max-w-md"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* --- TESTIMONIALS SECTION --- */}
      <motion.section
        id="testimonials"
        className="py-24 bg-[#F0FDF4]"
        ref={testimonialsRef}
        initial="hidden"
        animate={testimonialsInView ? "visible" : "hidden"}
        variants={staggerContainerVariants}
      >
        <div className="container mx-auto px-8 sm:px-16 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight"
            variants={itemVariants}
          >
            What Our Clients Says
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Hijama Healing That Gets People Talking.
          </motion.p>

          <div className="relative mt-16">
            <div className="flex items-center justify-between">
              <button onClick={prevTestimonial} className="z-20 bg-white rounded-full shadow-md w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition flex-shrink-0" aria-label="Previous testimonial">
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex-1 w-full max-w-5xl mx-2 sm:mx-4 overflow-hidden relative h-[480px] sm:h-[420px] md:h-[380px]">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={currentTestimonialIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      type: "tween",
                      ease: "easeInOut",
                      duration: 0.6,
                    }}
                    className="absolute top-0 left-0 w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center"
                  >
                    {getVisibleTestimonials().map((testimonial, index) => (
                      <div
                        key={`${currentTestimonialIndex}-${index}`}
                        className="bg-white p-6 rounded-2xl shadow-lg flex flex-col text-left h-full"
                      >
                        <p className="text-gray-600 leading-relaxed mb-4">
                          “{testimonial.text}”
                        </p>
                        <div className="mt-auto pt-4 border-t border-gray-100 w-full">
                          <h4 className="text-lg font-bold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <div className="flex mt-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                            ))}
                            {[...Array(5 - testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-gray-300" />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              <button onClick={nextTestimonial} className="z-20 bg-white rounded-full shadow-md w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition flex-shrink-0" aria-label="Next testimonial">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonialIndex ? 'bg-teal-500' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* --- CTA Section --- */}
      <section className="bg-[#1E4137] py-24">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Lets Book a Call to See How We can Help You!
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Book a Free On-Call Consultation With Mr Jameel ur Rehman and we will guide you how Hijama can do wonders for you.
          </p>
          <div className="mt-10">
            <a
              href="tel:+92 300 7598000"
              className="inline-flex items-center px-8 py-4 bg-[#FF6900] text-white font-bold text-lg rounded-full shadow-lg hover:brightness-90 transition-all duration-300 transform hover:scale-105"
            >
              Call For Free Consultation
              <Phone className="ml-3 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* --- Contact Us Section --- */}
      <section id="contact" className="bg-white py-24">
        <div className="container mx-auto px-8 sm:px-16">
          {/* Section Headings */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
              Contact Us
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Get in Touch
            </p>
          </div>

          {/* Centering Wrapper for the Grid */}
          <div className="mt-16 max-w-4xl mx-auto">
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

              {/* Left Column: Contact Details */}
              <div className="space-y-8">
                {/* Whatsapp Item */}
                <div className="flex items-start gap-5">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Whatsapp</h3>
                    <p className="text-gray-600 mt-1">+92 300 7598000</p>
                  </div>
                </div>

                {/* Email Item */}
                <div className="flex items-start gap-5">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Email</h3>
                    <p className="text-gray-600 mt-1">almadinahijamaclinic1400@gmail.com</p>
                  </div>
                </div>

                {/* Locations Item */}
                <div className="flex items-start gap-5">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Locations</h3>
                    <p className="text-gray-600 mt-1">MashaAllah Center, 213-A, opp. Car Parking Grand Mosque,</p>
                    <p className="text-gray-600">Commercial Sector C Bahria Town, Lahore, 53720</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div>
                <form action="#" method="POST" className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-black placeholder-black"
                    />
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Phone"
                      className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-black placeholder-black"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-black placeholder-black"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      placeholder="Message"
                      className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-black placeholder-black"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-8 py-3 bg-[#FF6900] text-white font-semibold rounded-lg shadow-md hover:brightness-90 transition-colors duration-300"
                    >
                      Send Message
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Style tag for animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-in-out;
        }
        .text-shadow-lg {
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
        }
        .text-shadow {
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
        }
      `}</style>
    </main>
  );
};

export default HomePage;