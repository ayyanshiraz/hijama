'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Calendar, Clock, User, Check, Droplets, Wind, Zap, Heart, ShieldCheck, Award } from 'lucide-react';
import Link from 'next/link';

// --- Data ---
const services = [
  {
    icon: Droplets,
    name: 'Wet Cupping (Hijama)',
    description: 'The traditional method for deep detoxification and healing.',
    price: 2500,
  },
  {
    icon: Wind,
    name: 'Dry & Massage Cupping',
    description: 'A non-invasive option for muscle tension and pain relief.',
    price: 2000,
  },
  {
    icon: Zap,
    name: 'Hijama for Pain Relief',
    description: 'Targeted therapy for chronic issues like back pain and migraines.',
    price: 3000,
  },
  {
    icon: Heart,
    name: 'Hijama for Internal Health',
    description: 'Focuses on improving organ function and hormonal balance.',
    price: 2800,
  },
  {
    icon: ShieldCheck,
    name: 'Hijama for Sports Recovery',
    description: 'Accelerates muscle repair and enhances athletic performance.',
    price: 3200,
  },
  {
    icon: Award,
    name: 'Hijama for Detox & Wellness',
    description: 'A full-body reset to boost energy and overall vitality.',
    price: 2500,
  },
];

// --- Main Component ---
const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const handleSelectService = (service: typeof services[0]) => {
    setSelectedService(service);
    setStep(2); // Move to the next step
  };

  const variants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
            Book Your Session
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to schedule your appointment for natural healing.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="w-full max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            {['Choose Service', 'Pick Date & Time', 'Confirm Details'].map((label, index) => (
              <div key={label} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    step > index ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step > index ? <Check size={20} /> : index + 1}
                </div>
                <span className={`ml-3 font-medium ${step >= index + 1 ? 'text-gray-800' : 'text-gray-400'}`}>
                  {label}
                </span>
                {index < 2 && <div className="flex-1 h-0.5 bg-gray-200 mx-4"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {/* --- Step 1: Choose Service --- */}
              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <span className="bg-teal-600 text-white rounded-full w-8 h-8 text-lg flex items-center justify-center mr-3">1</span>
                    Select a Service
                  </h2>
                  <div className="space-y-4">
                    {services.map((service) => (
                      <button
                        key={service.name}
                        onClick={() => handleSelectService(service)}
                        className="w-full text-left p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:border-teal-500 transition-all duration-300 flex items-center justify-between"
                      >
                        <div className="flex items-center">
                          <div className="bg-teal-100 p-3 rounded-full mr-5">
                            <service.icon className="w-6 h-6 text-teal-600" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-gray-800">{service.name}</h3>
                            <p className="text-gray-500">{service.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                           <span className="font-semibold text-teal-600 text-lg mr-4">Rs. {service.price}</span>
                           <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* --- Step 2: Pick Date & Time (Placeholder) --- */}
              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <span className="bg-teal-600 text-white rounded-full w-8 h-8 text-lg flex items-center justify-center mr-3">2</span>
                    Pick a Date & Time
                  </h2>
                   <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                    <div className="mb-4">
                        <h3 className="font-bold text-lg text-gray-800">Selected Service:</h3>
                        <p className="text-teal-700 font-medium">{selectedService?.name}</p>
                    </div>
                     <div className="text-center py-10 border-2 border-dashed border-gray-300 rounded-lg">
                       <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                       <h3 className="text-xl font-bold text-gray-400">Date & Time Picker</h3>
                       <p className="text-gray-400">This feature is under construction.</p>
                       <button onClick={() => setStep(3)} className="mt-6 inline-flex items-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-colors">
                           Proceed to Confirmation (Demo)
                           <ChevronRight className="ml-2 h-5 w-5" />
                       </button>
                     </div>
                     <button onClick={() => setStep(1)} className="mt-4 text-sm text-gray-500 hover:text-gray-800 transition-colors">
                        &larr; Back to Services
                     </button>
                   </div>
                </div>
              )}

              {/* --- Step 3: Confirm Details (Placeholder) --- */}
              {step === 3 && (
                <div>
                   <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <span className="bg-teal-600 text-white rounded-full w-8 h-8 text-lg flex items-center justify-center mr-3">3</span>
                    Confirm Your Details
                  </h2>
                  <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                     <div className="text-center py-10 border-2 border-dashed border-gray-300 rounded-lg">
                       <User className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                       <h3 className="text-xl font-bold text-gray-400">Confirmation Form</h3>
                       <p className="text-gray-400">This feature is under construction.</p>
                       <Link href="/" className="mt-6 inline-flex items-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-colors">
                           Finish Booking (Demo)
                       </Link>
                     </div>
                     <button onClick={() => setStep(2)} className="mt-4 text-sm text-gray-500 hover:text-gray-800 transition-colors">
                        &larr; Back to Date & Time
                     </button>
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
};

export default BookingPage;

