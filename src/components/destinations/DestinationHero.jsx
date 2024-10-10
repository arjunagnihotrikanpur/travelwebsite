import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Slider from "react-slick"; // Import React Slick
import { motion } from "framer-motion"; // Import Framer Motion

const DestinationHero = () => {
  const [isOpen, setIsOpen] = useState(false);

  let imgArr = [
    {
      destination: "Paris",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTDgsO7qMSOjOIWWvXHa81v0UTh8IQPTAl2Q&s",
    },
    {
      destination: "NewYork",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUjB_HKIS_-CfAo0bSEtF-azaUr7PtV_8fhQ&s",
    },
    {
      destination: "Tokyo",
      imgUrl:
        "https://www.civitatis.com/blog/wp-content/uploads/2022/11/calle-akihabara-tokio.jpg",
    },
  ];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <header className="bg-gray-900 text-white">
      <div className="lg:flex">
        <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold lg:text-4xl">
              Explore Amazing{" "}
              <span className="text-blue-500">Destinations</span>
            </h2>

            <p className="mt-4 text-sm lg:text-base">
              Discover beautiful places to visit, each offering unique
              experiences. Adventure awaits in every corner of the globe!
            </p>

            <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
              <Link
                to="/get-started"
                className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Get Started
              </Link>
              <Link
                to="/learn-more"
                className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-300 transition-colors duration-300 transform bg-gray-800 rounded-md lg:mx-4 hover:bg-gray-700"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
          <Slider {...sliderSettings}>
            <div className="relative">
              <img
                className="w-full h-full object-cover"
                src="https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900"
                alt="Destination 1"
              />
              <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>
            <div className="relative">
              <img
                className="w-full h-full object-cover"
                src="https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg"
                alt="Destination 2"
              />
              <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>
            <div className="relative">
              <img
                className="w-full h-full object-cover"
                src="https://media.cntraveler.com/photos/63482b255e7943ad4006df0b/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg"
                alt="Destination 3"
              />
              <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>
          </Slider>
        </div>
      </div>

      {/* Additional Destinations Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="py-16 bg-gray-800"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="text-2xl font-semibold text-center">
            Featured Destinations
          </h3>
          <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-3">
            {imgArr.map((item) => (
              <motion.div
                key={item.destination}
                className="overflow-hidden rounded-lg shadow-lg bg-gray-700"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  className="w-full h-48 object-cover"
                  src={item.imgUrl}
                  alt={item.destination}
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold">{item.destination}</h4>
                  <p className="mt-2 text-sm text-gray-300">
                    Explore the beauty and culture of {item.destination}. A
                    perfect spot for your next adventure!
                  </p>
                  <Link
                    to={`/destinations/${item.destination.toLowerCase()}`} // Updated link
                    className="mt-3 inline-block text-blue-500 hover:underline"
                  >
                    View More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </header>
  );
};

export default DestinationHero;
