import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
export default function Footer() {
    return (
      <footer className="container px-12 md:px-24 py-12">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Sri Vishwa Academy. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-700" title="facebook">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-sky-700" title="X (formerly Twitter)">
              <SiX size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-700" title="instagram">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-700" title="linkedin">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </footer>

    );
  }