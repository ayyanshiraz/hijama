import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa'; // Import the WhatsApp icon

const FloatingWhatsApp = () => {
  return (
    <Link
      href="https://wa.me/923007598000" // Your WhatsApp link
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 rounded-full text-white shadow-lg hover:bg-green-600 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={32} /> {/* Icon size */}
    </Link>
  );
};

export default FloatingWhatsApp;