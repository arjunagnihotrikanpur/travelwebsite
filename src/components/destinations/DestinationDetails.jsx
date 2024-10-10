import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const DestinationDetails = () => {
  const { destinationName } = useParams();

  // Sample data for demonstration
  const destinationData = {
    paris: {
      title: "Paris",
      description:
        "Known as the city of love, Paris is famous for its art, fashion, and culture.",
      imageUrl:
        "https://assets.voxcity.com/uploads/blog_images/paris-blog-updated_original.jpg",
      attractions: [
        {
          name: "Eiffel Tower",
          imageUrl:
            "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Louvre Museum",
          imageUrl:
            "https://media.architecturaldigest.com/photos/5900cc370638dd3b70018b33/16:9/w_2560%2Cc_limit/Secrets%2520of%2520Louvre%25201.jpg",
        },
        {
          name: "Notre-Dame Cathedral",
          imageUrl:
            "https://cdn.britannica.com/29/255529-050-63A22A3C/notre-dame-de-paris-cathedral-paris-france.jpg",
        },
      ],
      localCuisine: [
        {
          name: "Croissant",
          description: "A buttery and flaky pastry, perfect for breakfast.",
          imageUrl:
            "https://images.pexels.com/photos/3943178/pexels-photo-3943178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Escargots",
          description: "Snails cooked in garlic butter, a French delicacy.",
          imageUrl:
            "https://images.pexels.com/photos/7474061/pexels-photo-7474061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
      travelTips: "Learn some basic French phrases to enhance your experience.",
      bestTimeToVisit:
        "April to June and September to October for pleasant weather.",
      culturalInsights:
        "Paris is known for its art scene, fashion, and cafe culture.",
    },
    newyork: {
      title: "New York",
      description:
        "The Big Apple is known for its skyline, Broadway shows, and vibrant culture.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1200px-New_york_times_square-terabass.jpg",
      attractions: [
        {
          name: "Statue of Liberty",
          imageUrl:
            "https://cdn.britannica.com/12/77412-050-55A7B1E8/Detail-Statue-of-Liberty-Island-New-York.jpg",
        },
        {
          name: "Central Park",
          imageUrl:
            "https://olmsted.org/wp-content/uploads/2023/06/Park-Aerial_20190604_04-1-scaled.jpg",
        },
        {
          name: "Times Square",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYjnXDsn1bmA30mjcDc05rk5iaAB1BMIoYQA&s",
        },
      ],
      localCuisine: [
        {
          name: "Bagel",
          description: "A boiled and baked doughnut-shaped bread roll.",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJV21ohZfHFO4CqD-e2lwujABe4O376g27HQ&s",
        },
        {
          name: "New York-style Pizza",
          description: "Thin crust pizza with a wide slice, often folded.",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXd9WmXcp_ikj7mGBumjmqwI7uEzuyeNy_3w&s",
        },
      ],
      travelTips: "Use the subway for quick travel across the city.",
      bestTimeToVisit:
        "Spring (April to June) and Fall (September to November).",
      culturalInsights:
        "New York is a melting pot of cultures, with diverse neighborhoods and cuisines.",
    },
    tokyo: {
      title: "Tokyo",
      description:
        "A bustling metropolis known for its modernity and rich history.",
      imageUrl:
        "https://content.r9cdn.net/rimg/dimg/ca/7e/9ae1c4b2-city-21033-16c1b1c620d.jpg?crop=true&width=1020&height=498",
      attractions: [
        {
          name: "Tokyo Tower",
          imageUrl:
            "https://res-1.cloudinary.com/jnto/image/upload/w_2064,h_1300,c_fill,f_auto,fl_lossy,q_auto/v1646014276/tokyo/H_00658_001",
        },
        {
          name: "Senso-ji Temple",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEdPbSGjUA5UaSPeLhfUOQ6RXa-PRjQjMFJw&s",
        },
        {
          name: "Shibuya Crossing",
          imageUrl:
            "https://plus.unsplash.com/premium_photo-1661902398022-762e88ff3f82?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hpYnV5YSUyMGNyb3NzaW5nJTJDJTIwc2hpYnV5YSUyQyUyMGphcGFufGVufDB8fDB8fHww",
        },
      ],
      localCuisine: [
        {
          name: "Sushi",
          description:
            "Vinegared rice combined with various ingredients, including seafood.",
          imageUrl:
            "https://cdn.britannica.com/52/128652-050-14AD19CA/Maki-zushi.jpg",
        },
        {
          name: "Ramen",
          description:
            "Noodles served in a flavorful broth with various toppings.",
          imageUrl:
            "https://s23209.pcdn.co/wp-content/uploads/2014/10/220602_DD_Homemade-Ramen_572.jpg",
        },
      ],
      travelTips:
        "Get a Japan Rail Pass for cost-effective travel across the country.",
      bestTimeToVisit:
        "March to May for cherry blossoms and September to November for autumn colors.",
      culturalInsights:
        "Respect local customs, such as bowing and removing shoes when entering homes.",
    },
  };

  // Fetch the data based on the destination name
  const destination = destinationData[destinationName.toLowerCase()];

  if (!destination) {
    return <p>Destination not found.</p>;
  }

  return (
    <div className="flex flex-col items-center p-6 bg-gray-900 text-white relative">
      {/* Back Button */}
      <Link
        to="/destinations"
        className="absolute top-4 left-4 flex items-center p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12H3m0 0l6-6m-6 6l6 6"
          />
        </svg>
      </Link>

      <motion.h2
        className="text-4xl font-semibold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {destination.title}
      </motion.h2>
      <motion.img
        src={destination.imageUrl}
        alt={destination.title}
        className="w-full h-64 object-cover mb-6 rounded-lg shadow-lg"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.p
        className="mt-4 text-lg text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {destination.description}
      </motion.p>

      <motion.div
        className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {destination.attractions.map((attraction) => (
          <motion.div
            key={attraction.name}
            className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={attraction.imageUrl}
              alt={attraction.name}
              className="w-full h-40 object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-25"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.h3
                className="text-xl font-semibold text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {attraction.name}
              </motion.h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Local Cuisine Section */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold">Local Cuisine</h3>
        <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2 lg:grid-cols-3">
          {destination.localCuisine.map((dish) => (
            <motion.div
              key={dish.name}
              className="relative overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={dish.imageUrl}
                alt={dish.name}
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-25"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                <h4 className="text-lg font-semibold">{dish.name}</h4>
                <p>{dish.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Travel Tips Section */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold">Travel Tips</h3>
        <p className="mt-4">{destination.travelTips}</p>
      </div>

      {/* Best Time to Visit Section */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold">Best Time to Visit</h3>
        <p className="mt-4">{destination.bestTimeToVisit}</p>
      </div>

      {/* Cultural Insights Section */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold">Cultural Insights</h3>
        <p className="mt-4">{destination.culturalInsights}</p>
      </div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold">Explore More Destinations</h3>
        <div className="flex justify-center mt-4 space-x-4">
          <Link
            to="/destinations/paris"
            className="px-4 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Paris
          </Link>
          <Link
            to="/destinations/newyork"
            className="px-4 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-700"
          >
            New York
          </Link>
          <Link
            to="/destinations/tokyo"
            className="px-4 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Tokyo
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default DestinationDetails;
