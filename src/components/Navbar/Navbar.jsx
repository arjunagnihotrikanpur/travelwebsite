import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaHeart, FaBars } from "react-icons/fa"; 

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);


  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 px-16 ${
        navbar ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center p-4 w-full mx-auto ">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">Incredible US</Link>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center space-x-6 text-white">
          {/* Dropdown for Destinations */}
          <div className="relative group">
            <button className="hover:text-red-500">Destinations</button>
            <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg p-2">
              <Link
                to="/north-india"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                North USA
              </Link>
              <Link
                to="/south-india"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                South USA
              </Link>
              <Link
                to="/east-india"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                East USA
              </Link>
              <Link
                to="/west-india"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                West USA
              </Link>
            </div>
          </div>

          {/* Dropdown for Experiences */}
          <div className="relative group">
            <button className="hover:text-red-500">Experiences</button>
            <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg p-2">
              <Link
                to="/heritage"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Heritage
              </Link>
              <Link
                to="/adventure"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Adventure
              </Link>
              <Link to="/culture" className="block px-4 py-2 hover:bg-gray-200">
                Culture
              </Link>
            </div>
          </div>

          {/* Dropdown for Plan your trip */}
          <div className="relative group">
            <button className="hover:text-red-500">Plan your trip</button>
            <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg p-2">
              <Link
                to="/accommodations"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Accommodations
              </Link>
              <Link
                to="/transportation"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Transportation
              </Link>
              <Link to="/tours" className="block px-4 py-2 hover:bg-gray-200">
                Tours
              </Link>
            </div>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-white">
          <FaSearch className="cursor-pointer hover:text-gray-400" />
          <FaUser className="cursor-pointer hover:text-gray-400" />
          <FaHeart className="cursor-pointer hover:text-gray-400" />
          <FaBars className="cursor-pointer hover:text-gray-400 md:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
