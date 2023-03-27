import React from "react";
import { useNavigate } from "react-router-dom";
import "./Map.css";
const Map = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container_map">
        <div style={{ marginTop: "5%" }}>
          <h1
            style={{
              paddingLeft: "9%",
              paddingBottom: "7px",
              color: "#EEC48B",
            }}
          >
            ____
          </h1>
          <h1 style={{ marginLeft: "9%", marginBottom: "5%", fontSize: "48" }}>
            Где купить
          </h1>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37311.736044901125!2d74.53998223946331!3d42.898318918017644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec83fbd34c63b%3A0x33c21a2b3bcb5ca8!2z0YPQuy4g0JHQvtC7LiDQkdC10LnRiNC10L3QsNC70LjQtdCy0L7QuSwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1679474156788!5m2!1sru!2skg"
          width="100%"
          height="450"
          style={{ border: 0 }}
          // allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="container-connection">
        <h3 className="connection__title">Связаться с нами</h3>
        <p className="connection__p">
          Не следует, однако, забывать, что дальнейшее развитие различных форм
          деятельности позволяет оценить значение направлений прогрессивного
          развития.
        </p>
        <a onClick={() => navigate("/contacts")} className="connection__btn">
          связаться
        </a>
      </div>
    </div>
  );
};

export default Map;
