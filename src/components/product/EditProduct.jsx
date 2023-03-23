import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import "./Product.css";
import { useNavigate, useParams } from "react-router";

const EditProduct = () => {
  const { getProductDetails, productDetails } = useProducts();
  const navigate = useNavigate();
  const [product, setProduct] = useState(productDetails);

  const { id } = useParams();
  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  const handleInp = (e) => {
    if (e.target.name == "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };
  console.log(product);
  return (
    <Box
      sx={{
        width: "40vw",
        margin: "5vh auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <TextField
        className="admin_inp"
        id="outlined-basic"
        label="Name"
        variant="outlined"
        name="name"
        size="small"
        onChange={handleInp}
      />
      <TextField
        className="admin_inp"
        id="outlined-basic"
        label="Descripton"
        variant="outlined"
        name="description"
        size="small"
        onChange={handleInp}
      />
      <TextField
        className="admin_inp"
        id="outlined-basic"
        label="Price"
        variant="outlined"
        name="price"
        size="small"
        onChange={handleInp}
      />
      <TextField
        className="admin_inp"
        id="outlined-basic"
        label="Picture"
        variant="outlined"
        name="picture"
        size="small"
        onChange={handleInp}
      />
      <TextField
        className="admin_inp"
        id="outlined-basic"
        label="Type"
        variant="outlined"
        name="type"
        size="small"
        onChange={handleInp}
      />
      <Button
        className="admin_btn"
        onClick={() => {
          navigate("/products");
        }}
        size="large"
        variant="outlined"
        sx={{
          border: "1px solid black",
          color: "white",
          backgroundColor: "black",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        save changes
      </Button>
    </Box>
  );
};

export default EditProduct;
