import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
];

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      className="bg-gray-900 bg-opacity-60 backdrop-blur-xl rounded-xl p-8 shadow-lg transform transition-transform duration-500 hover:scale-105"
      initial={{ opacity: 0, x: -100 * (index % 2 === 0 ? 1 : -1) }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
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
      <p className="mt-2 text-sm text-gray-400 text-center">
        {testimonial.location}
      </p>
      <p className="mt-4 text-gray-300 text-center italic">
        "{testimonial.review}"
      </p>
    </motion.div>
  );
};

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, y: 0 });
    } else {
      animation.start({ opacity: 0, y: 50 });
    }
  }, [inView, animation]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-8 relative"
      ref={ref}
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-fixed bg-no-repeat opacity-30"
        style={{ backgroundImage: `url('/images/parallax-bg.jpg')` }} // Replace with an appropriate background image URL
        initial={{ y: 0 }}
        animate={{ y: inView ? -50 : 0 }}
        transition={{ duration: 1 }}
      />

      <motion.h2
        className="text-4xl font-bold mb-4 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={animation}
        transition={{ duration: 0.6 }}
      >
        What Our Travelers Say
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-lg text-gray-300 mb-12 text-center max-w-3xl relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={animation}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        We take pride in crafting unforgettable travel experiences. Hear from
        our happy travelers who have explored the world with us and loved every
        moment!
      </motion.p>

      <motion.div
        className="max-w-6xl w-full relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </Slider>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="mt-12 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={animation}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <a
          href="/testimonials"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Read More Testimonials
        </a>
      </motion.div>
    </div>
  );
};

export default Testimonials;
