import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import imgOfDetailsVector from "../../pages/DetailsPage/img/imgOfDetailsVector.svg";
const Details3card = () => {
  const { randomProducts } = useProducts();
  const navigate = useNavigate();
  return (
    <div>
      <Box
        style={{
          display: "flex",
          justifyContent: " space-evenly",
          marginBottom: "14%",
        }}
      >
        {randomProducts.map((item) => (
          <Box style={{ width: "30%" }} key={item.id}>
            <img
              style={{ width: "98%", height: "70%", objectFit: "cover" }}
              src={item.picture}
              alt=""
            />
            <h3 style={{ marginTop: "8%" }}>{item.name}</h3>
            <Typography sx={{ marginTop: "8%" }}>{item.description}</Typography>

            <Box
              style={{
                display: "flex",
                justifyContent: " end",
                marginTop: "8%",
                marginRight: "3%",
              }}
            >
              <Button sx={{ color: "black" }}>Подробнее</Button>
              <img src={imgOfDetailsVector} alt="" />
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default Details3card;
