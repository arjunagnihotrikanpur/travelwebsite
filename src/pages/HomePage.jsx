import React from "react";

import HeroSection from "../components/home/HeroSection";
import SectionHowItWork from "../components/home/SectionHowItWork ";
import SectionOurFeatures from "../components/home/SectionOurFeatures ";
import Destination from "../components/home/Destination";
import Experiences from "../components/home/Experiences";
import MasonryImagesGallery from "../components/home/MasonryImagesGallery";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Destination />
      <SectionHowItWork />
      <SectionOurFeatures />
      <Experiences />
      <MasonryImagesGallery />
    </>
  );
};

export default HomePage;
