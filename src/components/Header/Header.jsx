import React from "react";
import photo1 from "./homepageImg/HM2.png";
import photo2 from "./homepageImg/HM3.png";
import photo3 from "./homepageImg/HM4.png";
import next from "./homepageImg/next.png";
// import "./homePage.css";
import "../CarouselPage/Carouse.css";
// import "./HomePageAdapt.css";

const Header = () => {
  return (
    <div>
      <div className="header_block1">
        <div className="header_block_text">
          <h1 className="header_title">Новинка Box Spring</h1>
          <p className="header_title2">
            Не следует, однако, забывать, что дальнейшее развитие различных форм
            деятельности позволяет оценить значение направлений прогрессивного
            развития. Сложно сказать, почему независимые государства указаны как
            претенденты на роль ключевых факторов! Прежде всего, повышение
            уровня гражданского сознания играет важную роль в формировании
            направлений прогрессивного развития.
          </p>
          <div>
            <button className="header_button">
              Подробнее <img src={next} alt="button" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <img className="headerImg1" src={photo1} alt="photo" />
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

export default Header;
