'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Calendar, Clock, User, Check, Droplets, Wind, Zap, Heart, ShieldCheck, Award } from 'lucide-react';
import Link from 'next/link';
// 1. Import DatePicker and its CSS
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Use Date type
  // Add state for form fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState(''); // Optional notes


  const handleSelectService = (service: typeof services[0]) => {
    setSelectedService(service);
    setSelectedDate(null); // Reset date when service changes
    setStep(2); // Move to the next step
  };

  const variants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  // Basic time filtering (optional): Prevent selecting past times on the current day
  const filterPassedTime = (time: Date) => {
    const currentDate = new Date();
    const selectedDt = new Date(time);
    return currentDate.getTime() < selectedDt.getTime();
  };

  // Handle form submission and redirect to WhatsApp
  const handleBookingSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission
    if (!name || !phone || !selectedService || !selectedDate) {
      alert('Please fill in all required fields.'); // Basic validation
      return;
    }

    // --- WhatsApp Integration ---
    const yourWhatsappNumber = '+923007598000'; // Replace with YOUR WhatsApp number
    const formattedDate = selectedDate.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });

    // Construct the message - Ensure newlines are consistent
    const messageLines = [
      '*New Hijama Booking Request*',
      '', // Add an empty line for spacing
      `*Service:* ${selectedService.name}`,
      `*Price:* Rs. ${selectedService.price}`,
      `*Date & Time:* ${formattedDate}`,
      `*Name:* ${name}`,
      `*Phone:* ${phone}`,
    ];
    if (notes.trim() !== '') {
        messageLines.push(`*Notes:* ${notes}`);
    }
    messageLines.push(''); // Add an empty line before the final text
    messageLines.push('Please confirm this booking.');

    // Join lines with newline character for encoding
    const message = messageLines.join('\n');


    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);

    // --- CHANGE BACK HERE: Use the wa.me format ---
    // Remove '+' and any non-digit characters from the number
    const cleanPhoneNumber = yourWhatsappNumber.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;
    // --- END CHANGE ---

    // --- Debugging: Log the URL ---
    console.log("Generated WhatsApp URL (wa.me):", whatsappUrl);
    // --- End Debugging ---

    // Redirect the user to WhatsApp
    window.location.href = whatsappUrl;

    // Optional: Reset state if needed
    // --- End WhatsApp Integration ---
  };

  // Basic validation check for the submit button
  const isStep3Valid = name.trim() !== '' && phone.trim() !== '';


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

              {/* --- Step 2: Pick Date & Time --- */}
              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <span className="bg-teal-600 text-white rounded-full w-8 h-8 text-lg flex items-center justify-center mr-3">2</span>
                    Pick a Date & Time
                  </h2>
                   <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                    {/* Display Selected Service */}
                    <div className="mb-6">
                      <h3 className="font-bold text-lg text-gray-800">Selected Service:</h3>
                      <p className="text-teal-700 font-medium">{selectedService?.name || 'None selected'}</p>
                    </div>

                    {/* Date & Time Picker Implementation */}
                    <div className="mb-6">
                        <label htmlFor="dateTime" className="block text-sm font-medium text-gray-700 mb-2">
                            Choose Date & Time:
                        </label>
                        <DatePicker
                            id="dateTime"
                            selected={selectedDate}
                            onChange={(date: Date | null) => setSelectedDate(date)}
                            showTimeSelect // Enable time selection
                            minDate={new Date()} // Prevent selecting past dates
                            // filterTime={filterPassedTime} // Optional: filter past times
                            dateFormat="MMMM d, yyyy h:mm aa" // Format for display
                            timeIntervals={30} // Set time intervals (e.g., every 30 mins)
                            className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-black placeholder-gray-500" // Tailwind Styling
                            placeholderText="Click to select date and time"
                            wrapperClassName="w-full" // Ensure wrapper takes full width
                        />
                         {/* Basic error/guidance message */}
                        {!selectedDate && (
                          <p className="text-xs text-red-500 mt-1">Please select a date and time.</p>
                        )}
                    </div>

                    {/* Display Selected Date/Time (Optional but helpful) */}
                    {selectedDate && (
                      <div className="mb-6 p-3 bg-teal-50 rounded-md border border-teal-200">
                        <p className="text-sm font-medium text-teal-800">
                          Selected Appointment: {selectedDate.toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}
                        </p>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between items-center mt-8">
                       <button onClick={() => setStep(1)} className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                            ← Back to Services
                       </button>
                       <button
                         onClick={() => {
                            if (selectedDate) { // Only proceed if date is selected
                                setStep(3);
                            }
                         }}
                         disabled={!selectedDate} // Disable button if no date is selected
                         className={`inline-flex items-center px-6 py-3 font-semibold rounded-lg shadow-md transition-colors ${
                            selectedDate
                             ? 'bg-[#FF6900] text-white hover:brightness-90'
                             : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                         }`}
                       >
                         Proceed to Confirmation
                         <ChevronRight className="ml-2 h-5 w-5" />
                       </button>
                    </div>
                   </div>
                </div>
              )}

              {/* --- Step 3: Confirm Details --- */}
              {step === 3 && (
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                     <span className="bg-teal-600 text-white rounded-full w-8 h-8 text-lg flex items-center justify-center mr-3">3</span>
                     Confirm Your Details
                   </h2>
                  {/* Form for user details */}
                  <form onSubmit={handleBookingSubmit} className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm space-y-6">
                       {/* Display selected service and time */}
                       <div className="mb-4 pb-4 border-b border-gray-200">
                         <h3 className="font-bold text-lg text-gray-800 mb-2">Review Your Booking:</h3>
                         <p className="text-gray-600">Service: <span className="text-teal-700 font-medium">{selectedService?.name}</span></p>
                         <p className="text-gray-600">Price: <span className="text-teal-700 font-medium">Rs. {selectedService?.price}</span></p>
                         <p className="text-gray-600">Date & Time: <span className="text-teal-700 font-medium">{selectedDate ? selectedDate.toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' }) : 'Not selected'}</span></p>
                       </div>

                       {/* Name Input */}
                       <div>
                         <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                           Full Name <span className="text-red-500">*</span>
                         </label>
                         <input
                           type="text"
                           id="name"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           required
                           className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-black placeholder-gray-500"
                           placeholder="Enter your full name"
                         />
                       </div>

                       {/* Phone Input */}
                       <div>
                         <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                           Phone Number <span className="text-red-500">*</span>
                         </label>
                         <input
                           type="tel" // Use type="tel" for phone numbers
                           id="phone"
                           value={phone}
                           onChange={(e) => setPhone(e.target.value)}
                           required
                           className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-black placeholder-gray-500"
                           placeholder="Enter your phone number (e.g., 03xx-xxxxxxx)"
                         />
                       </div>

                       {/* Optional Notes */}
                        <div>
                         <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                           Additional Notes (Optional)
                         </label>
                         <textarea
                           id="notes"
                           value={notes}
                           onChange={(e) => setNotes(e.target.value)}
                           rows={3}
                           className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-black placeholder-gray-500"
                           placeholder="Any specific requests or health information?"
                         ></textarea>
                       </div>

                       {/* Navigation and Submit Buttons */}
                       <div className="flex justify-between items-center pt-4">
                         <button type="button" onClick={() => setStep(2)} className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                             ← Back to Date & Time
                         </button>
                         <button
                           type="submit" // This button now triggers the form's onSubmit
                           disabled={!isStep3Valid} // Disable if name or phone is empty
                           className={`inline-flex items-center px-8 py-3 font-semibold rounded-lg shadow-md transition-colors ${
                              isStep3Valid
                               ? 'bg-[#FF6900] text-white hover:brightness-90'
                               : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                           }`}
                         >
                           Confirm Booking
                         </button>
                       </div>
                  </form>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      {/* Add custom styles for react-datepicker if needed */}
      <style jsx global>{`
        .react-datepicker-wrapper {
          width: 100%; /* Make the input wrapper take full width */
        }
        .react-datepicker__input-container input {
          width: 100%; /* Make the input field take full width */
        }
        /* You can add more overrides here if necessary */
      `}</style>
    </main>
  );
};

export default BookingPage;