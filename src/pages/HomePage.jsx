import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../components/home/HeroSection/HeroSection";
import MobileAppBanner from "../components/home/MobileAppBanner/MobileAppBanner";
import Testimonials from "../components/home/Testimonials/Testimonials";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home - Travel Website</title>
        <meta
          name="description"
          content="This is the home page of travel website - webwise digital - sample project."
        />
      </Helmet>
      <HeroSection />
      <MobileAppBanner />
      <Testimonials />
    </>
  );
};

export default HomePage;
