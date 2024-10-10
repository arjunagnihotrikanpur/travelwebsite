import React from "react";
import Banner from "../components/about/Banner";
import Faq from "../components/about/Faq";
import WhyUs from "../components/about/WhyUs";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <div className="">
      <Helmet>
        <title>About - Travel Website</title>
        <meta
          name="description"
          content="This is the home page of travel website - webwise digital - sample project."
        />
      </Helmet>
      <Banner />
      <WhyUs />
      <Faq />
    </div>
  );
};

export default AboutPage;
