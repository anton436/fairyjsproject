import React from "react";
import "./Catalog.css";
import pic from "./img/Rectangle.png";
import pic1 from "./img/Rectangle1.png";
import pic2 from "./img/Rectangle2.png";
import pic3 from "./img/Rectangle3.png";
import pic4 from "./img/Rectangle4.png";
import pic5 from "./img/Rectangle4.png";
import compareImg from "./img/compareImg.svg";
import { Navigate, useNavigate } from "react-router-dom";

const Catalog = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="catalog">
        <div className="catalogHead">
          <h1 className="catalogHeadH1"> Каталог</h1>
          <p
            style={{ cursor: "pointer", fontSize: "24px", color: "black" }}
            onClick={() => navigate("/products")}
            id="catalogH1"
          >
            Перейти в каталог
          </p>
        </div>
        <div className="catalogBody">
          <div className="card">
            <img src={pic} alt="" />
            <div className="cardBottom">
              <span>
                <h2 className="catalogh2">Кровать Амелия 1200</h2>
                <h3 className="catalogh3">19 940 грн</h3>
              </span>
              <button>
                <img className="imgCatalog" src={compareImg} alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img src={pic1} alt="" />
            <div className="cardBottom">
              <span>
                <h2 className="catalogh2">Кровать Амелия 1400</h2>
                <h3 className="catalogh3">19 940 грн</h3>
              </span>
              <button>
                <img className="imgCatalog" src={compareImg} alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img src={pic2} alt="" />

            <div className="cardBottom">
              <span>
                <h2 className="catalogh2">Кровать Теннесси 1600</h2>
                <h3 className="catalogh3">19 940 грн</h3>
              </span>
              <button>
                <img className="imgCatalog" src={compareImg} alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img src={pic3} alt="" />
            <div className="cardBottom">
              <span>
                <h2 className="catalogh2">Кровать Рим 1600</h2>
                <h3 className="catalogh3">19 940 грн</h3>
              </span>
              <button>
                <img className="imgCatalog" src={compareImg} alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img src={pic4} alt="" />

            <div className="cardBottom">
              <span>
                <h2 className="catalogh2">Кровать Монтана 1800</h2>
                <h3 className="catalogh3">19 940 грн</h3>
              </span>
              <button>
                <img className="imgCatalog" src={compareImg} alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img src={pic5} alt="" />
            <div className="cardBottom">
              <span>
                <h2 className="catalogh2">Кровать Флоренция 1600</h2>
                <h3 className="catalogh3">19 940 грн</h3>
              </span>
              <button>
                <img className="imgCatalog" src={compareImg} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
