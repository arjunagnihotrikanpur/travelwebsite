import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-full text-white py-10 bg-[url('https://images.pexels.com/photos/5639934/pexels-photo-5639934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-right-bottom bg-no-repeat">
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Footer content */}
      <div className="relative px-4 sm:px-8 lg:px-16 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Social Media Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Follow us</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-white hover:text-gray-400 text-xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-white hover:text-gray-400 text-xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-white hover:text-gray-400 text-xl" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-white hover:text-gray-400 text-xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-white hover:text-gray-400 text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick links</h2>
            <ul>
              <li className="mb-2">
                <Link to="/attractions" className="hover:text-gray-400">
                  Attractions
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/experiences" className="hover:text-gray-400">
                  Experiences
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/festivals-events" className="hover:text-gray-400">
                  Festivals and Events
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/faqs" className="hover:text-gray-400">
                  FAQs
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/content-hub" className="hover:text-gray-400">
                  Incredible US Content Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Newsletter</h2>
            <p className="mb-4">
              Sign up for exciting news, learn more about our events, and get
              great travel ideas.
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
              Subscribe now
            </button>
          </div>

          {/* QR Code Section */}
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4">Scan to chat</h2>
            <img
              src="https://img.freepik.com/free-vector/scan-me-qr-code_78370-2915.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728345600&semt=ais_hybrid"
              alt="QR Code"
              className="w-32 h-32"
            />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Ministry of Tourism, Government of
            US. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link to="/terms" className="hover:text-gray-400">
              Terms of Use
            </Link>
            <span>|</span>
            <Link to="/privacy-policy" className="hover:text-gray-400">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to="/contact-us" className="hover:text-gray-400">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
