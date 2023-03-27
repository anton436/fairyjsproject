import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Footer.css";
import "../Footer/adaptive.css";
import instaLogo from "../Footer/images/instagram_icon.png";
import faceBookLogo from "../Footer/images/facebook (1) 3.png";
import footerLogo from "../Footer/images/logo_Footer.png";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="footer">
      <div className="footer_info">
        <img className="footer_logo" src={footerLogo} alt="" />
        <div className="footer_end">©2021. все права защищены</div>
      </div>
      <div className="footer_list_right">
        <div className="footer_list">
          <p
            className={location.pathname == "/" ? "green" : "footer_list_text"}
            onClick={() => navigate(`/`)}
          >
            Каталог кроватей
          </p>
          <p
            className={
              location.pathname == "/products" ? "green" : "footer_list_text"
            }
            onClick={() => navigate(`/products`)}
          >
            Компания
          </p>
          <p
            className={
              location.pathname == "/admin" ? "green" : "footer_list_text"
            }
            onClick={() => navigate(`/admin`)}
          >
            Блог
          </p>
          <p
            className={
              location.pathname == "/comp" ? "green" : "footer_list_text"
            }
            onClick={() => navigate(`/comp`)}
          >
            Контакты
          </p>
        </div>
        <div className="footer_list" id="footer_info_data">
          <p className="footer_list_text" id="footer_text">
            Адреса магазинов
          </p>{" "}
          {/* нужно добавить навигейты*/}
          <p className="footer_list_text">Новости</p>
          <div className="footer_icons">
            <img
              className="footer_icons_facebook"
              src={faceBookLogo}
              alt="facebook"
            />
            <img
              className="footer_icons_instagram"
              src={instaLogo}
              alt="instagram"
            />
          </div>
        </div>
      </div>

      <div className="footer_reight">
        <iframe
          className="footer_map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.1304438103593!2d4.367699815745808!3d50.8472686795321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c482a7578471%3A0xa7713c3e13f82b7d!2sSouth%20Asia%20Democratic%20Forum!5e0!3m2!1sru!2skg!4v1679565990272!5m2!1sru!2skg"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
