import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import contactImage from "../assets/images/contactImage.jpg"; // Update this path to your image

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    startDate: "",
    endDate: "",
    guests: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      className="bg-gray-900 text-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6">Book Your Trip</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors duration-200"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors duration-200"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label className="block mb-2">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors duration-200"
          />
        </div>
        <div>
          <label className="block mb-2">End Date</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors duration-200"
          />
        </div>
        <div>
          <label className="block mb-2">Guests</label>
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors duration-200"
            placeholder="Number of Guests"
          />
        </div>
        <motion.button
          type="submit"
          className="w-full bg-blue-600 p-3 rounded hover:bg-blue-500 transition-colors duration-200 hover:shadow-lg active:scale-95"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit
        </motion.button>
      </form>
    </motion.div>
  );
};

const ContactInfo = () => {
  return (
    <motion.div
      className="bg-gray-900 text-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      <p className="mb-4">
        <strong>Phone:</strong> +123 456 7890
      </p>
      <p className="mb-4">
        <strong>Email:</strong> info@travel.com
      </p>
      <p className="mb-4">
        <strong>Address:</strong> 123 Main Street, City, Country
      </p>
      <p>
        <strong>Working Hours:</strong> Mon-Fri: 9:00 AM - 6:00 PM
      </p>
    </motion.div>
  );
};

const MapSection = () => {
  const position1 = [51.505, -0.09]; // Example coordinates for Map 1
  const position2 = [48.8566, 2.3522]; // Example coordinates for Map 2 (Paris)

  return (
    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
      {/* First Map */}
      <motion.div
        className="w-full md:w-1/2 h-64 bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <MapContainer
          center={position1}
          zoom={13}
          scrollWheelZoom={false}
          className="h-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position1}>
            <Popup>Location 1: Example City</Popup>
          </Marker>
        </MapContainer>
      </motion.div>

      {/* Second Map */}
      <motion.div
        className="w-full md:w-1/2 h-64 bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <MapContainer
          center={position2}
          zoom={13}
          scrollWheelZoom={false}
          className="h-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position2}>
            <Popup>Location 2: Paris, France</Popup>
          </Marker>
        </MapContainer>
      </motion.div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 space-y-12">
      <motion.h1
        className="text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch With Us
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <BookingForm />
        <div className="flex flex-col">
          <ContactInfo />
          {/* Contact Image */}
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={contactImage} // Update this path to your image
              alt="Contact Us"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>

      <MapSection />

      {/* Additional Content Below the Maps */}
      <motion.div
        className="bg-gray-800 p-8 rounded-lg text-center shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
        <p className="mb-4">
          We provide personalized travel experiences tailored to your needs. Our
          dedicated team ensures you have a seamless booking process and
          unforgettable adventures.
        </p>
        <p>Connect with us to start planning your next getaway today!</p>
      </motion.div>
    </div>
  );
};

export default ContactPage;
