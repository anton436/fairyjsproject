import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import imgOfDetails from "../../pages/DetailsPage/img/imgOfDetails.svg";
import imgOfDetailsLine from "../../pages/DetailsPage/img/imgOfDetailsLine.svg";
import imgOfDetailsCalendar from "../../pages/DetailsPage/img/imgOfDetailsCalendar.svg";

import { Box, flexbox } from "@mui/system";

import Details3card from "./Details3card";
const DetailsPage = () => {
  const {
    getProductDetails,
    productDetails: product,
    getRandomProducts,
    randomProducts,
  } = useProducts();

  console.log(randomProducts);
  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);

    getRandomProducts();
  }, []);

  return (
    <Box>
      <Box
        style={{ marginLeft: " 12%", marginTop: "6%" }}
        className="main_blok_of_sale"
      >
        <span style={{ marginRight: "14px", cursor: "pointer" }}>Главная</span>
        <span style={{ marginRight: "14px" }}>
          <img src={imgOfDetails} alt="" />
        </span>
        <span style={{ marginRight: "14px", cursor: "pointer" }}>Блог</span>
        <span styleim={{ marginRight: "14px" }}>
          <img src={imgOfDetails} alt="" />
        </span>
        <span style={{ marginRight: "14px", color: "#006C73" }}>
          Акция на угловые диваны
        </span>
        <Box style={{ marginTop: "8%" }}>
          <img style={{ marginBottom: "2%" }} src={imgOfDetailsLine} alt="" />
          <h1
            style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "48px",
              lineHeight: "59px",
            }}
          >
            {product.name}
          </h1>
        </Box>
      </Box>
      <img
        style={{
          marginLeft: "4.17%",
          width: " 63%",

          maxHeight: 1500,
          objectFit: "cover",
          marginTop: "7%",
        }}
        src={product.picture}
        alt=""
      />
      <Box
        className="card_list"
        style={{
          marginTop: " 5%",
          width: "55%",
          marginLeft: "10%",
          fontFamily: "Open Sans",
          fontStyle: " normal",
          fontWeight: " 300",
          fontSize: "20px",
          lineHeight: "150%",
          color: "#202020",
        }}
      >
        <h3>{product.description}</h3>
      </Box>

      <Box
        style={{
          marginLeft: " 15%",
          marginTop: "4%",
          marginBottom: "4%",
          fontFamily: "Open Sans",
          fontStyle: " normal",
          fontWeight: " 300",
          fontSize: "16px",
          lineHeight: "150%",
        }}
        className="calendar"
      >
        <img src={imgOfDetailsCalendar} alt="" />
        <span style={{ marginLeft: "13px" }}>03.18.2023</span>
      </Box>
      <hr />
      {/* last block */}
      <Box className="last_blockof_details">
        <h1 style={{ marginLeft: "12%", marginTop: "6%", marginBottom: "6%" }}>
          Другие новости
        </h1>
        <Details3card />
      </Box>
    </Box>
  );
};

export default DetailsPage;
