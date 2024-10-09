import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";
import phoneImage from "../../../assets/images/mobileBannerImage.png"; // Update the path to your phone image

const MobileAppBanner = () => {
  return (
    <div className="flex flex-row bg-green-100 text-green-900 p-8">
      {/* Left Column: Phone Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={phoneImage}
          alt="Mobile App"
          className="w-3/4 h-auto max-w-sm rounded-lg transition-transform duration-175 hover:scale-105"
        />
      </div>

      {/* Right Column: Text and Buttons */}
      <div className="flex-1 flex flex-col justify-center p-4">
        <h1 className="text-5xl font-bold mb-4 font-sans">
          Download Our Mobile App!
        </h1>
        <p className="mb-4 text-xl font-sans">
          Experience the best features of our service on your mobile device.
          Download now to stay connected and enjoy exclusive benefits!
        </p>
        <div className="flex space-x-4">
          <a
            href="https://play.google.com/store"
            className="flex items-center bg-black text-white py-2 px-4 rounded hover:bg-green-700 transition duration-200"
          >
            <FontAwesomeIcon icon={faGooglePlay} className="mr-2" />
            Download from Play Store
          </a>
          <a
            href="https://www.apple.com/app-store/"
            className="flex items-center bg-black text-white py-2 px-4 rounded hover:bg-green-700 transition duration-200"
          >
            <FontAwesomeIcon icon={faApple} className="mr-2" />
            Download from App Store
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileAppBanner;
