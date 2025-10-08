'use client';

import { Phone, Heart, Ghost, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link'; // <--- ADDED THIS IMPORT

// --- How to use images from the 'public' folder in Next.js ---
// The 'public' directory is the correct place for static assets like images.
// You can reference any file from this folder directly with a path starting with '/',
// as if it were at the root of your website. There's no need to import the image file.

const slideshowData = [
  {
    image: '/hero1.jpg', // This is the correct path for an image located at 'public/hero1.jpg'
    title: (
      <>
        One Of The Most <span className="text-teal-400">Credible</span>
        <br />
        Hijama Centers In Lahore
      </>
    ),
    subtitle: 'With 25 years of Experience in Hijama and Alternative medicine, we are one of the most credible Hijama centers in Lahore.',
    buttonText: 'Call 0333-482427',
    buttonLink: 'tel:0333-482427',
  },
  {
    image: '/hero5.webp',
    title: (
      <>
        Discover <span className="text-teal-400">Natural Healing</span>
        <br />
        Through Sunnah
      </>
    ),
    subtitle: 'Embrace a holistic approach to wellness with our traditional and effective Hijama cupping therapies.',
    buttonText: 'Learn More',
    buttonLink: '#about', // Example link
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
    buttonLink: '#services', // Example link
  },
  {
    image: '/hero2.webp',
    title: (
      <>
        Revitalize Your Body
        <br />
        <span className="text-teal-400">Book A Session</span>
      </>
    ),
    subtitle: 'Take the first step towards better health. Schedule your personal consultation and therapy session today.',
    buttonText: 'Book An Appointment',
    buttonLink: '#contact', // Example link
  },
];

// --- SEO-FRIENDLY FEATURES DATA ---
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


const HomePage = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slideshowData.length);
    }, 5000); // Image changes every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const currentSlide = slideshowData[currentSlideIndex];

  return (
    <main className="font-sans bg-[#F0FDF4]"> {/* Changed main background to match the section */}
      {/* Hero Slideshow Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden text-white">
        {/* Background Image Slideshow */}
        {slideshowData.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlideIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 w-full h-full bg-black/60"></div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Animated Text Content */}
          <div
            key={currentSlideIndex} // This key is crucial for re-triggering the animation
            className="animate-fadeInUp"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-shadow-lg">
              {currentSlide.title}
            </h1>
            <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto text-shadow">
              {currentSlide.subtitle}
            </p>
            <div className="mt-8">
              {/* --- THIS IS THE FIXED PART --- */}
              {/* Conditionally render <a> for external links (tel:) and <Link> for internal links (#) */}
              {currentSlide.buttonLink.startsWith('tel:') ? (
                <a
                  href={currentSlide.buttonLink}
                  className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="mr-3 h-6 w-6" />
                  {currentSlide.buttonText}
                </a>
              ) : (
                <Link
                  href={currentSlide.buttonLink}
                  className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="mr-3 h-6 w-6" />
                  {currentSlide.buttonText}
                </Link>
              )}
            </div>
          </div>
        </div>
        
        {/* Navigation Dots */}
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
        {/* Curved top shape */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="relative block w-full h-[50px] md:h-[100px]">
                <path fill="#F0FDF4" d="M0,224L1440,32L1440,0L0,0Z"></path>
            </svg>
        </div>

        {/* The change is on the next line. Increased padding from px-6 to px-8 sm:px-16 */}
        <div className="container mx-auto px-8 sm:px-16 text-center">
            {/* --- SEO-FRIENDLY HEADINGS --- */}
            <h3 className="text-teal-600 text-lg font-semibold uppercase">Holistic Hijama Therapy in Lahore</h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-2">Restore Your Mind, Body & Soul</h2>
            
            {/* Features Grid */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div 
                        key={index} 
                        className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300"
                    >
                        {/* Icon */}
                        <div className="bg-orange-100 rounded-full p-4">
                            <feature.icon className="h-10 w-10 text-orange-500" />
                        </div>
                        {/* Title */}
                        <h4 className="text-2xl font-bold text-gray-900 mt-6">
                            {feature.title}
                        </h4>
                        {/* Description */}
                        <p className="mt-2 text-gray-600 leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Add a style tag for the animations */}
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