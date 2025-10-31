'use client';

// Import React for React.Fragment
import React, { useState } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Check, Droplets, ShieldCheck, Award, Home, MapPin } from 'lucide-react';
// 1. Import DatePicker and its CSS
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// --- Data ---
// Service options
const options = [
  {
    id: 'perCup',
    icon: Droplets,
    name: 'Per Cup',
    description: 'Select the exact number of cups you need.',
    priceText: 'Rs. 300 / cup',
  },
  {
    id: 'sunnah',
    icon: Award,
    name: 'According to Sunnah',
    description: 'Fixed 11-cup session as per Sunnah.',
    priceText: 'Rs. 3300 (Fixed)',
  },
  {
    id: 'general',
    icon: ShieldCheck,
    name: 'General Session',
    description: 'Fixed 15-cup session for general detox.',
    priceText: 'Rs. 4500 (Fixed)',
  },
];

// Home service options
const homeServiceOptions = [
  { id: '10km', label: 'Up to 10km', fee: 0, description: 'Free Service' },
  { id: '15km', label: 'Up to 15km', fee: 450, description: 'Rs. 450' },
  { id: '20km', label: 'Up to 20km', fee: 500, description: 'Rs. 500' },
];

// Price and quantity constants
const CUP_PRICE = 300;
const SUNNAH_CUPS = 11;
const GENERAL_CUPS = 15;

// Define types for state
type ServiceOption = 'perCup' | 'sunnah' | 'general' | null;
type HomeServiceFee = 0 | 450 | 500;

// --- Main Component ---
const BookingPage = () => {
  const [step, setStep] = useState(1);

  // State with explicit types
  const [selectedOption, setSelectedOption] = useState<ServiceOption>(null);
  const [cupQuantity, setCupQuantity] = useState<number | ''>(1);
  const [totalPrice, setTotalPrice] = useState(0); // This is now JUST the service price
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // --- NEW STATE for Home Service ---
  const [homeServiceFee, setHomeServiceFee] = useState<HomeServiceFee>(0);

  // Add state for form fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState(''); // Optional notes

  // Handler with toggle logic
  const handleOptionSelect = (option: ServiceOption) => {
    if (option === selectedOption) {
      setSelectedOption(null);
      setHomeServiceFee(0); // Also reset home service
      setTotalPrice(0);
    } else {
      setSelectedOption(option);
      setSelectedDate(null); // Reset date
      setHomeServiceFee(0); // Reset home service on new service selection

      if (option === 'sunnah') {
        const price = SUNNAH_CUPS * CUP_PRICE;
        setCupQuantity(SUNNAH_CUPS);
        setTotalPrice(price);
      } else if (option === 'general') {
        const price = GENERAL_CUPS * CUP_PRICE;
        setCupQuantity(GENERAL_CUPS);
        setTotalPrice(price);
      } else { // 'perCup'
        setCupQuantity(1);
        setTotalPrice(CUP_PRICE);
      }
    }
  };

  // --- NEW HANDLER for Home Service ---
  const handleHomeServiceSelect = (fee: HomeServiceFee) => {
    if (fee === homeServiceFee) {
      setHomeServiceFee(0); // Toggle off if clicking the same one
    } else {
      setHomeServiceFee(fee);
    }
  };

  // --- Updated quantity change handler ---
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    // Only allow numbers or an empty string
    if (!/^[0-9]*$/.test(val)) {
      return; // Dont update if its not a number
    }

    if (val === '') {
      setCupQuantity('');
      setTotalPrice(0);
      return;
    }
    
    // Parse the value. This will handle "023" -> 23
    const quantity = parseInt(val, 10);

    if (!isNaN(quantity)) {
      // Set the state to the *parsed number*. 
      setCupQuantity(quantity); 
      
      if (quantity >= 1) {
        setTotalPrice(quantity * CUP_PRICE);
      } else {
        setTotalPrice(0); // If quantity is 0
      }
    }
  };

  // Helper function to get service details
  const getBookingDetails = () => {
    if (!selectedOption) {
      return { name: '', price: 0 };
    }
    //... (rest of the function is unchanged)
    switch (selectedOption) {
      case 'sunnah':
        return { name: `According to Sunnah (${SUNNAH_CUPS} Cups)`, price: totalPrice };
      case 'general':
        return { name: `General Session (${GENERAL_CUPS} Cups)`, price: totalPrice };
      case 'perCup':
        return { name: `${cupQuantity} Cup(s) (Per Cup)`, price: totalPrice };
      default:
        return { name: '', price: 0 };
    }
  };

  // --- CALCULATE GRAND TOTAL ---
  const grandTotal = totalPrice + homeServiceFee;

  // Handler with explicit type for 'event'
  const handleBookingSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { name: serviceName, price: servicePrice } = getBookingDetails();

    if (!name || !phone || !serviceName || !selectedDate) {
      alert('Please fill in all required fields.');
      return;
    }

    // --- WhatsApp Integration ---
    const yourWhatsappNumber = '+923007598000';
    const formattedDate = selectedDate.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });

    // --- UPDATED Message Construction ---
    const messageLines = [
      '*New Hijama Booking Request*',
      '',
      `*Service:* ${serviceName}`,
      `*Service Price:* Rs. ${servicePrice}`,
    ];

    if (homeServiceFee > 0) {
      messageLines.push(`*Home Service Fee:* Rs. ${homeServiceFee}`);
    }

    messageLines.push(`*Grand Total:* Rs. ${grandTotal}`);
    messageLines.push(`*Date & Time:* ${formattedDate}`);
    messageLines.push(`*Name:* ${name}`);
    messageLines.push(`*Phone:* ${phone}`);

    if (notes.trim() !== '') {
      messageLines.push(`*Notes:* ${notes}`);
    }
    messageLines.push('');
    messageLines.push('Please confirm this booking.');

    const message = messageLines.join('\n');
    const encodedMessage = encodeURIComponent(message);
    const cleanPhoneNumber = yourWhatsappNumber.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;

    window.location.href = whatsappUrl;
  };

  // Validation checks
  // This is the fixed line
const isStep1Valid = selectedOption && (selectedOption !== 'perCup' || (selectedOption === 'perCup' && Number(cupQuantity) >= 1));
  const isStep3Valid = name.trim() !== '' && phone.trim() !== '';

  const { name: serviceNameForReview, price: servicePriceForReview } = getBookingDetails();


  return (
    <main className="bg-gray-50 min-h-screen">
      {/* py-16 sm:py-24 to reduce padding on mobile */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <div className="text-center mb-12">
          {/* text-3xl sm:text-4xl md:text-5xl for better mobile scaling */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
            Book Your Session
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to schedule your appointment for natural healing.
          </p>
        </div>

        {/* --- RESPONSIVE Step Indicator --- */}
        <div className="w-full max-w-3xl mx-auto mb-12">
          {/* We use items-start to align the top of the circles, and sm:items-center for desktop */}
          <div className="flex items-start sm:items-center justify-between">
            {['Choose Service', 'Pick Date & Time', 'Confirm Details'].map((label, index) => {
              const stepNumber = index + 1;
              const isCompleted = step > stepNumber;
              const isActive = step === stepNumber;

              return (
                // Use a fragment to group the item and its connector line
                <React.Fragment key={label}>
                  {/* Step Item (Circle + Label) */}
                  {/* w-20 sm:w-28 gives a bit of width for text to wrap */}
                  <div className="flex flex-col items-center text-center w-20 sm:w-28">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 font-bold flex-shrink-0 ${
                        isCompleted ? 'bg-teal-600 text-white' : 
                        (isActive ? 'bg-white text-teal-600 border-2 border-teal-500' : 'bg-gray-200 text-gray-500')
                      }`}
                    >
                      {isCompleted ? <Check size={20} /> : stepNumber}
                    </div>
                    {/* text-xs sm:text-sm for smaller mobile text */}
                    <span
                      className={`mt-2 font-medium text-xs sm:text-sm ${
                        isCompleted || isActive ? 'text-gray-800' : 'text-gray-400'
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                  
                  {/* Connector Line (if not the last item) */}
                  {/* The line is aligned to the top (mt-4) to match the circles center */}
                  {/* mx-1 sm:mx-2 for smaller mobile margins */}
                  {index < 2 && (
                    <div className={`flex-1 h-0.5 mt-4 mx-1 sm:mx-2 transition-colors ${isCompleted ? 'bg-teal-600' : 'bg-gray-200'}`}></div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Step Content */}
        {/* We removed overflow-hidden from here to fix the z-index bug */}
        <div className="max-w-3xl mx-auto"> 
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              // We removed variants prop to fix the stacking context bug
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="relative" 
            >
              {/* --- Step 1: Choose Service --- */}
              {step === 1 && (
                <motion.div layout> {/* Add layout for smooth open/close */}
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <span className="bg-teal-600 text-white rounded-full w-8 h-8 text-lg flex items-center justify-center mr-3">1</span>
                    Select an Option
                  </h2>
                  <div className="space-y-4">
                    {options.map((option) => (
                      <div key={option.id}>
                        {/* --- 1. The Option Button --- */}
                        <button
                          onClick={() => handleOptionSelect(option.id as ServiceOption)}
                          className={`w-full text-left p-4 sm:p-6 bg-white border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-between ${
                            selectedOption === option.id
                              ? 'border-teal-500 ring-2 ring-teal-500 rounded-b-none'
                              : 'border-gray-200 hover:border-teal-400'
                          }`}
                        >
                          <div className="flex items-center">
                            <div className="bg-teal-100 p-3 rounded-full mr-3 sm:mr-5">
                              <option.icon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                            </div>
                            <div>
                              <h3 className="font-bold text-base sm:text-lg text-gray-800">{option.name}</h3>
                              <p className="text-gray-500 text-sm">{option.description}</p>
                            </div>
                          </div>
                          <span className="font-semibold text-teal-600 text-sm sm:text-lg ml-2 sm:ml-4 text-right flex-shrink-0">{option.priceText}</span>
                        </button>

                        {/* --- 2. The Collapsible Content (Quantity + Home Service + Subtotal) --- */}
                        <AnimatePresence>
                          {selectedOption === option.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className="overflow-hidden" 
                            >
                              <div className="bg-white border border-t-0 border-teal-500 rounded-b-lg shadow-sm ring-2 ring-teal-500">
                                
                                {/* --- 2a. CONDITIONAL Quantity Box --- */}
                                {option.id === 'perCup' && (
                                  <div className="p-4 sm:p-6 border-b border-gray-200">
                                    <label htmlFor="quantity" className="block text-base sm:text-lg font-bold text-gray-800 mb-2">
                                      Select Quantity
                                    </label>
                                    <p className="text-sm text-gray-500 mb-4">Enter the number of cups you would like.</p>
                                    
                                    {/* --- THIS IS THE NEW LINE --- */}
                                    <p className="text-sm text-gray-700 mb-4 italic">
                                      Unsure about the quantity?{' '}
                                      <a 
                                        href="https://wa.me/923007598000" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-teal-600 font-medium underline hover:text-teal-700"
                                      >
                                        Contact us on WhatsApp
                                      </a>
                                      {' '}for a consultation.
                                    </p>
                                    
                                    <input
                                      id="quantity"
                                      type="text"
                                      inputMode="numeric"
                                      pattern="[0-9]*"
                                      value={cupQuantity}
                                      onChange={handleQuantityChange}
                                      className="w-full max-w-xs px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-black placeholder-gray-500"
                                      placeholder="e.g., 5"
                                    />
                                  </div>
                                )}

                                {/* --- 2b. HOME SERVICE SECTION (MOVED) --- */}
                                <div className="p-4 sm:p-6 border-t border-gray-200">
                                  <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 flex items-center">
                                    <Home size={18} className="mr-2 flex-shrink-0" />
                                    Home Service (Optional)
                                  </h2>
                                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                                    We are located in Bahria Town. Please select your distance for home service.
                                  </p>
                                  <div className="space-y-3 sm:space-y-0 sm:flex sm:space-x-4">
                                    {homeServiceOptions.map((opt) => (
                                      <button
                                        key={opt.id}
                                        onClick={() => handleHomeServiceSelect(opt.fee as HomeServiceFee)}
                                        className={`w-full text-left p-4 border rounded-lg transition-all duration-200 ${
                                          homeServiceFee === opt.fee
                                            ? 'border-teal-500 ring-2 ring-teal-500 bg-teal-50'
                                            : 'border-gray-200 hover:border-teal-400 bg-white'
                                        }`}
                                      >
                                        <div className="flex items-center">
                                          <MapPin className={`w-5 h-5 mr-3 flex-shrink-0 ${homeServiceFee === opt.fee ? 'text-teal-600' : 'text-gray-500'}`} />
                                          <div>
                                            <h4 className="font-bold text-gray-800 text-sm sm:text-base">{opt.label}</h4>
                                            <p className="text-sm font-semibold text-teal-600">{opt.description}</p>
                                          </div>
                                        </div>
                                      </button>
                                    ))}
                                  </div>
                                </div>
                                
                                {/* --- 2c. UPDATED Subtotal and Navigation --- */}
                                <div className="flex flex-wrap sm:flex-nowrap justify-between items-center p-4 border-t border-gray-200 bg-gray-50 rounded-b-lg">
                                  <div className="mb-4 sm:mb-0">
                                    <p className="text-xs sm:text-sm text-gray-600">Service Price: <span className="font-medium text-gray-800">Rs. {totalPrice}</span></p>
                                    <p className="text-xs sm:text-sm text-gray-600">Home Service: <span className="font-medium text-gray-800">Rs. {homeServiceFee}</span></p>
                                    <p className="text-base sm:text-lg font-bold text-teal-600">Grand Total: Rs. {grandTotal}</p>
                                  </div>
                                  <button
                                    onClick={() => setStep(2)}
                                    disabled={!isStep1Valid}
                                    className={`w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg shadow-md transition-colors ${
                                      isStep1Valid
                                        ? 'bg-[#FF6900] text-white hover:brightness-90'
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    }`}
                                  >
                                    Pick Date & Time
                                    <ChevronRight className="ml-2 h-5 w-5" />
                                  </button>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>

                  {/* --- Home Service Section REMOVED From Here --- */}
                  
                </motion.div>
              )}


              {/* --- Step 2: Pick Date & Time --- */}
              {step === 2 && (
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <span className="bg-teal-600 text-white rounded-full w-8 h-8 text-lg flex items-center justify-center mr-3">2</span>
                    Pick a Date & Time
                  </h2>
                  <div className="p-4 sm:p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                    {/* --- UPDATED Display Selected Service --- */}
                    <div className="mb-6 pb-4 border-b border-gray-200">
                      <h3 className="font-bold text-lg text-gray-800 mb-2">Your Selection:</h3>
                      <p className="text-gray-600 text-sm sm:text-base">Service: <span className="text-teal-700 font-medium">{serviceNameForReview}</span></p>
                      <p className="text-gray-600 text-sm sm:text-base">Home Service: <span className="text-teal-700 font-medium">Rs. {homeServiceFee}</span></p>
                      <p className="text-gray-800 font-bold text-base sm:text-lg">Grand Total: <span className="text-teal-700 font-medium">Rs. {grandTotal}</span></p>
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
                        showTimeSelect
                        minDate={new Date()}
                        dateFormat="MMMM d, yyyY h:mm aa"
                        timeIntervals={30}
                        className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-black placeholder-gray-500"
                        placeholderText="Click to select date and time"
                        wrapperClassName="w-full"
                        // portalId removed
                      />
                      {!selectedDate && (
                        <p className="text-xs text-red-500 mt-1">Please select a date and time.</p>
                      )}
                    </div>

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
                        ← Back to Options
                      </button>
                      <button
                        onClick={() => {
                          if (selectedDate) {
                            setStep(3);
                          }
                        }}
                        disabled={!selectedDate}
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
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <span className="bg-teal-600 text-white rounded-full w-8 h-8 text-lg flex items-center justify-center mr-3">3</span>
                    Confirm Your Details
                  </h2>
                  <form onSubmit={handleBookingSubmit} className="p-4 sm:p-6 bg-white border border-gray-200 rounded-lg shadow-sm space-y-6">
                    {/* --- UPDATED Review Section --- */}
                    <div className="mb-4 pb-4 border-b border-gray-200 space-y-1">
                      <h3 className="font-bold text-lg text-gray-800 mb-2">Review Your Booking:</h3>
                      <p className="text-gray-600 text-sm sm:text-base">Service: <span className="text-teal-700 font-medium">{serviceNameForReview}</span></p>
                      <p className="text-gray-600 text-sm sm:text-base">Service Price: <span className="text-teal-700 font-medium">Rs. {servicePriceForReview}</span></p>
                      <p className="text-gray-600 text-sm sm:text-base">Home Service Fee: <span className="text-teal-700 font-medium">Rs. {homeServiceFee}</span></p>
                      <p className="text-gray-800 font-bold text-base sm:text-lg">Grand Total: <span className="text-teal-700 font-bold">Rs. {grandTotal}</span></p>
                      <p className="text-gray-600 pt-1 text-sm sm:text-base">Date & Time: <span className="text-teal-700 font-medium">{selectedDate ? selectedDate.toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' }) : 'Not selected'}</span></p>
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
                        type="tel"
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
                    <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center pt-4">
                      {/* Stacked on mobile, side-by-side on desktop */}
                      <button type="button" onClick={() => setStep(2)} className="mt-4 sm:mt-0 text-sm text-gray-500 hover:text-gray-800 transition-colors">
                        ← Back to Date & Time
                      </button>
                      <button
                        type="submit"
                        disabled={!isStep3Valid}
                        // w-full on mobile, w-auto on desktop
                        className={`w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 font-semibold rounded-lg shadow-md transition-colors ${
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
      
      {/* --- Global Styles (FIXED) --- */}
      <style jsx global>{`
        .react-datepicker-wrapper {
          width: 100%; 
        }
        .react-datepicker__input-container input {
          width: 100%;
        }
        
        /* FIX 1: Make sure datepicker appears on top */
        .react-datepicker-popper {
          z-index: 50 !important; 
        }

        /* * The 'display: flex' and 'border-left' rules were removed 
         * to allow the datepicker to stack vertically on mobile screens.
         */
      `}</style>
    </main>
  );
};

export default BookingPage;