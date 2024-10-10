import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import videoOne from "../../../assets/herovideos/1.mp4";
import videoTwo from "../../../assets/herovideos/2.mp4";
import videoThree from "../../../assets/herovideos/3.mp4";
import videoFour from "../../../assets/herovideos/4.mp4";

function CustomSlide({ videoSrc }) {
  return (
    <div className="relative w-full h-screen">
      {/* Fullscreen Video */}
      <video className="w-full h-full object-cover" autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

function CustomSlides() {
  const sliderRef = useRef(null); // Reference to the Slider component
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false, // Remove default dots navigation
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Disable default arrows
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex), // Update current index on slide change
  };

  // Array of video sources and titles
  const slidesData = [
    { videoSrc: videoOne, title: "First Video" },
    { videoSrc: videoTwo, title: "Second Video" },
    { videoSrc: videoThree, title: "Third Video" },
    { videoSrc: videoFour, title: "Fourth Video" },
  ];

  const handleTitleClick = (index) => {
    setCurrentIndex(index); // Update the state for the selected video
    sliderRef.current.slickGoTo(index); // Use the ref to navigate to the selected slide
  };

  useEffect(() => {
    // Auto change slides every 4 seconds
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slidesData.length; // Loop through the slides
      sliderRef.current.slickGoTo(nextIndex);
    }, 4000);

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, [currentIndex, slidesData.length]);

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {slidesData.map((slide, index) => (
          <CustomSlide key={index} videoSrc={slide.videoSrc} />
        ))}
      </Slider>

      {/* Bottom-left Navbar for switching videos */}
      <div className="absolute flex flex-row bottom-5 left-5 bg-black bg-opacity-0 text-white p-4 rounded">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`cursor-pointer p-2 mb-2 flex items-center ${
              currentIndex === index
                ? "bg-yellow-500 text-black"
                : "hover:bg-gray-600"
            }`}
            onClick={() => handleTitleClick(index)}
          >
            {slide.title}
            {/* Only show the separator if it's not the last index */}
            {index < slidesData.length - 1 && (
              <span className="text-yellow-500 px-3">|</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomSlides;
