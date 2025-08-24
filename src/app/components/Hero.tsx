import { FaAndroid, FaYoutube, FaExternalLinkAlt } from 'react-icons/fa'; // Import icons

export default function Hero() {
    return (
            <section id="hero" className="relative py-32 text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
            Welcome to Sri Vishwa Academy
          </h1>
          <p className="text-lg md:text-xl sm:text-lg text-gray-200 dark:text-gray-300 max-w-2xl mx-auto">
          Shri Vishwa Academy prepares students for competitive recruitment exams through simplified lessons, strategic test prep, and live sessions.
          </p>
          <div className="flex justify-center items-center mt-8 space-x-4"> {/* Added wrapper div for centering and spacing */}
            <button className="px-5 py-2 bg-primary-500 text-white rounded-lg shadow hover:bg-primary-600 transition flex items-center justify-center">
             <a href="https://play.google.com/store/apps/details?id=com.fhbwcx.rjyzob" target="_blank" className="flex items-center">
               <FaAndroid className="mr-2" /> App <FaExternalLinkAlt className="ml-2" />
             </a>
            </button>
            <button className="px-5 py-2 bg-fuchsia-600 text-white rounded-lg shadow hover:bg-fuchsia-500 transition flex items-center justify-center">
             <a href="https://www.youtube.com/@viswasirmaths8959" target="_blank" className="flex items-center">
               <FaYoutube className="mr-2" /> Youtube <FaExternalLinkAlt className="ml-2" />
             </a>
            </button>
          </div>
        </div>
      </section>
    );
  }