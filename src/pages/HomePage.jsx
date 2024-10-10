import React from "react";
import SectionHowItWork from "../components/home/SectionHowItWork ";
import SectionOurFeatures from "../components/home/SectionOurFeatures ";
import Destination from "../components/home/Destination";
import Experiences from "../components/home/Experiences";
import MasonryImagesGallery from "../components/home/MasonryImagesGallery";
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
      <Destination />
      <SectionHowItWork />
      <SectionOurFeatures />
      <Experiences />
      <MasonryImagesGallery />

      <Testimonials />
    </>
  );
};

export default HomePage;
