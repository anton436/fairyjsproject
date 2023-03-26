import Carousel from "react-bootstrap/Carousel";

import slide1 from "./HomePageImage.svg";
import slide2 from "./Rectangle94.png";
import slide3 from "./Rectangle98.png";
import icon1 from "./weight.png";
import icon2 from "./Vector1.png";
import icon3 from "./Vector0.png";
// import icon5 from "./Line23.png";
import "./CarouselAdapt.css";
import "./CarouselAdapt.css";
function CarouselPage() {
  return (
    <>
      <div className="CarouselBlock">
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100 homePageHight "
              src={slide1}
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 homePageHight"
              src={slide3}
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 homePageHight "
              src={slide2}
              alt="Third slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* <div className="homePageIcon">
        <img className="homePageImg" src={icon1} alt="icon" />
      </div>
      <div className="homePageIcon1">
        <img className="homePageImg1" src={icon2} alt="icon" />
        <div className="homePageIcon2">Адреса магазинов</div>
        <img className="homePageImg2" src={icon3} alt="icon" />
      </div> */}
    </>
  );
}

export default CarouselPage;
