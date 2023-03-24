import React from "react";
import "./Gallery.css";
import img from "./imgGallery/Rectangle58.svg";
import img1 from "./imgGallery/Rectangle59.svg";
import img2 from "./imgGallery/Rectangle60.svg";
import img3 from "./imgGallery/Rectangle61.svg";
import img4 from "./imgGallery/Rectangle62.svg";
import img5 from "./imgGallery/Rectangle63.svg";
import img6 from "./imgGallery/Rectangle64.svg";
import img7 from "./imgGallery/Rectangle65.svg";
import arrowLeft from "./imgGallery/Group.svg";
import arrowRight from "./imgGallery/Group1.svg";

const Gallery = () => {
  return (
    <div>
      <div className="headerGallery">
        <h1>Галлерея</h1>
        <div className="headerGalleryBtn">
          <div id="btnGallery1">
            <img src={arrowLeft} alt="" />
          </div>
          <div>
            <img id="btnGallery2" src={arrowRight} alt="" />
          </div>
        </div>
      </div>

      <div className="cardBodyGallery">
        <div className="cardImageGallery">
          <img src={img} alt="" />
        </div>
        <div className="cardImageGallery">
          <img src={img1} alt="" />
        </div>
        <div className="cardImageGallery">
          <img src={img2} alt="" />
        </div>
        <div className="cardImageGallery">
          <img src={img3} alt="" />
        </div>
        <div className="cardImageGallery">
          <img src={img4} alt="" />
        </div>
        <div className="cardImageGallery">
          <img src={img5} alt="" />
        </div>
        <div className="cardImageGallery">
          <img src={img6} alt="" />
        </div>
        <div className="cardImageGallery">
          <img src={img7} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
