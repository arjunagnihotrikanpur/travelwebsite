import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        navbar ? "bg-black" : "bg-transparent"
      } text-xl`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Left - Logo */}
        <div className="text-3xl font-bold text-white pixel-font hover:text-cyan-900 transition duration-300 ease-out transform hover:scale-110">
          <Link to="/">Incredible US</Link>
        </div>

        {/* Center - Menu Links */}
        <ul className="hidden md:flex space-x-6 text-white text-center">
          {["About", "Destinations", "Contact"].map((item, idx) => (
            <li key={idx}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="relative group hover:text-pink-500 transition-all duration-300"
              >
                {item}
                {/* <span className="absolute left-0 bottom-[-5px] w-full h-[2px] bg-white group-hover:animate-bounce"></span> */}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right - Search Icon */}
        <div className="flex space-x-4 text-white ">
          <FaSearch
            size={24}
            className="cursor-pointer hover:text-gray-400 hidden"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-pink-500 transition-all duration-300 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <div className="">
                <div className="w-6 h-1 bg-white my-1 transition duration-300 ease-in-out transform-gpu origin-center" />
                <div className="w-6 h-1 bg-white my-1 transition duration-300 ease-in-out transform-gpu origin-center" />
                <div className="w-6 h-1 bg-white my-1 transition duration-300 ease-in-out transform-gpu origin-center" />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#d9f99d] border-t-4 border-black p-8 transform ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } transition-transform duration-500 ease-in-out z-50`}
      >
        <div className="flex justify-end mb-6">
          <button
            onClick={toggleMenu}
            className="text-black hover:text-pink-500 transition-all duration-300 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="space-y-6 text-center">
          {["About", "Destination", "Contact"].map((item, idx) => (
            <li key={idx}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="text-3xl font-bold text-black pixel-font hover:text-pink-500 transition-all duration-300 block"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
