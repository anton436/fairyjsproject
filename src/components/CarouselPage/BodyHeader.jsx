import React from "react";
import photo1 from "./HM2.png";
import photo2 from "./HM3.svg";
import photo3 from "./HM4.svg";
import next from "./Next.png";
import "./Carousel.css";
import "./CarouselAdapt.css";

const BodyHeader = () => {
  return (
    <div>
      <div className="header_block1">
        <div className="header_block_text" style={{ width: "50%" }}>
          <h1 className="header_title">Новинка Box Spring</h1>
          <p className="header_title2">
            Не следует, однако, забывать, что дальнейшее развитие различных форм
            деятельности позволяет оценить значение направлений прогрессивного
            развития. Сложно сказать, почему независимые государства указаны как
            претенденты на роль ключевых факторов! Прежде всего, повышение
            уровня гражданского сознания играет важную роль в формировании
            направлений прогрессивного развития.
          </p>
          <button className="header_button">
            Подробнее <img src={next} alt="button" />
          </button>
        </div>
        <img
          className="headerImg1"
          src={photo1}
          alt="photo"
          style={{ width: "50%" }}
        />
      </div>
      <div className="headerBottom">
        <div>
          <img className="headerImg2" src={photo2} alt="photo" />
        </div>
        <div>
          <img className="headerImg3" src={photo3} alt="photo" />
        </div>
      </div>
    </div>
  );
};

export default BodyHeader;
