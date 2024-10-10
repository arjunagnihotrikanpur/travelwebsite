import React from "react";

import DestinationHero from "../components/destinations/DestinationHero";
import { Helmet } from "react-helmet";

const DestinationsPage = () => {
  return (
    <>
      <Helmet>
        <title>Destinations - Travel Website</title>
        <meta
          name="description"
          content="This is the home page of travel website - webwise digital - sample project."
        />
      </Helmet>
      <DestinationHero />
    </>
  );
};

export default DestinationsPage;
