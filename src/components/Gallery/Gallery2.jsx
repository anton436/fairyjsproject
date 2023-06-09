import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img from "./imgGallery/Rectangle58.svg";
import img1 from "./imgGallery/Rectangle59.svg";
import img2 from "./imgGallery/Rectangle60.svg";
import img3 from "./imgGallery/Rectangle61.svg";
import img4 from "./imgGallery/Rectangle62.svg";
import img5 from "./imgGallery/Rectangle63.svg";
import img6 from "./imgGallery/Rectangle64.svg";
import img7 from "./imgGallery/Rectangle65.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Gallery2.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          320: {
            width: 220,
            slidesPerView: 1,
          },
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 3,
          },
          1024: {
            width: 850,
            slidesPerView: 3,
          },
          1440: {
            width: 1150,
            slidesPerView: 3,
          },
        }}
        slidesPerView={3}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="cardImageGallery">
            <img src={img} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cardImageGallery">
            <img src={img1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="cardImageGallery">
            <img src={img2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="cardImageGallery">
            <img src={img3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="cardImageGallery">
            <img src={img4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="cardImageGallery">
            <img src={img5} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="cardImageGallery">
            <img src={img6} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="cardImageGallery">
            <img src={img7} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
