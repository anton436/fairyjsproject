import React from "react";
import Catalog from "../../components/Catalog/Catalog";
import Gallery2 from "../../components/Gallery/Gallery2";
import Reviews from "../../components/Reviews/Reviews";

import Header from "../../components/Header/Header";
import Map from "../../components/Map/Map";
import CarouselPage from "../../components/CarouselPage/CarouselPage";
// import BodyHeader from "../../components/CarouselPage/BodyHeader";

const HomePage = () => {
  return (
    <div>
      <CarouselPage />
      {/* <BodyHeader /> */}
      <Header />
      <Catalog />
      <Gallery2 />
      <Map />
      <Reviews />
    </div>
  );
};

export default HomePage;
