import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";
import phoneImage from "../../../assets/images/mobileBannerImage.png"; // Update the path to your phone image

const MobileAppBanner = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-900 text-white p-8 rounded-lg shadow-lg border border-white overflow-hidden">
      {/* Left Column: Phone Image */}
      <div className="flex-1 flex justify-center mb-6 md:mb-0">
        <img
          src={phoneImage}
          alt="Mobile App"
          className="w-3/4 h-auto max-w-md rounded-lg transition-transform duration-200 hover:scale-105"
        />
      </div>

      {/* Right Column: Text and Buttons */}
      <div className="flex-1 flex flex-col justify-center p-4">
        <h1 className="text-4xl font-bold mb-4 font-sans tracking-wide">
          Download Our Mobile App!
        </h1>
        <p className="mb-4 text-lg font-sans leading-relaxed">
          Experience the best features of our service on your mobile device.
          Download now to stay connected and enjoy exclusive benefits!
        </p>
        <div className="flex space-x-4">
          <a
            href="https://play.google.com/store"
            className="flex items-center bg-white text-black py-2 px-4 rounded transition duration-200 transform hover:bg-gray-300 hover:shadow-lg active:scale-95"
          >
            <FontAwesomeIcon icon={faGooglePlay} className="mr-2" />
            Download from Play Store
          </a>
          <a
            href="https://www.apple.com/app-store/"
            className="flex items-center bg-white text-black py-2 px-4 rounded transition duration-200 transform hover:bg-gray-300 hover:shadow-lg active:scale-95"
          >
            <FontAwesomeIcon icon={faApple} className="mr-2" />
            Download from App Store
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-400">
          *Available on both iOS and Android devices. Stay updated with our
          latest features and offers!
        </p>
      </div>
    </div>
  );
};

export default MobileAppBanner;
