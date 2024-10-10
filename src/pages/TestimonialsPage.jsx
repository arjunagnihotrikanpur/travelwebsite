import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    review:
      "Absolutely amazing! The entire trip was well-organized, and I had the time of my life exploring the world with this travel company!",
    location: "Paris, France",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    review:
      "A seamless travel experience! Every detail was taken care of, and I got to visit some stunning places. Highly recommend!",
    location: "New York, USA",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Brown",
    review:
      "From start to finish, this company exceeded my expectations. The guides were knowledgeable, and the itinerary was perfectly curated!",
    location: "Tokyo, Japan",
    imageUrl: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Emily Davis",
    review:
      "An unforgettable experience. The service was excellent, and the destinations were breathtaking. Can’t wait for my next trip!",
    location: "Rome, Italy",
    imageUrl: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "David Lee",
    review:
      "A world-class travel experience. Everything was arranged perfectly, from the hotels to the excursions. Highly recommend!",
    location: "Sydney, Australia",
    imageUrl: "https://randomuser.me/api/portraits/men/99.jpg",
  },
  {
    name: "Sophia Martinez",
    review:
      "The best travel company I’ve ever worked with! Each destination was more beautiful than the last.",
    location: "Barcelona, Spain",
    imageUrl: "https://randomuser.me/api/portraits/women/77.jpg",
  },
  {
    name: "Chris Johnson",
    review:
      "An amazing journey filled with adventure and exploration! I couldn’t have asked for a better experience.",
    location: "Rio de Janeiro, Brazil",
    imageUrl: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    name: "Olivia Wilson",
    review:
      "An incredible experience with a fantastic team! The memories I made will last a lifetime.",
    location: "Cape Town, South Africa",
    imageUrl: "https://randomuser.me/api/portraits/women/11.jpg",
  },
];

// Stagger Animation Variants
const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const letterVariants = {
  hidden: { scale: 1 },
  visible: {
    scale: [1, 1.3, 1], // Scale up and down
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "loop", // Loop the animation
    },
  },
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      className="bg-white bg-opacity-10 backdrop-blur-lg border border-gray-200 rounded-xl p-8 shadow-xl transition-transform duration-500 hover:scale-105 hover:bg-opacity-20"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src={testimonial.imageUrl}
          alt={testimonial.name}
          className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
        />
      </motion.div>
      <h3 className="text-xl font-semibold text-white mt-4 text-center">
        {testimonial.name}
      </h3>
      <p className="mt-2 text-sm text-gray-200 text-center">
        {testimonial.location}
      </p>
      <p className="mt-4 text-gray-100 text-center italic">
        "{testimonial.review}"
      </p>
    </motion.div>
  );
};

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-800 to-purple-800 text-white p-8">
      {/* Intro Section */}
      <div className="mb-16 max-w-3xl text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {Array.from("All Testimonials").map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.h2>
        <p className="text-lg text-gray-300">
          Hear from our travelers about their unforgettable experiences with our
          services. We take pride in providing exceptional travel experiences
          tailored to your needs!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>

      {/* Back Button */}
      <div className="mt-12">
        <motion.a
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition transform duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Back to Home
        </motion.a>
      </div>

      {/* Footer Section */}
      <footer className="mt-16 text-center text-gray-400">
        <p>&copy; 2024 Travel Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TestimonialsPage;
