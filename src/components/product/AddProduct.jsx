
import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";

import { useProducts } from "../../contexts/ProductContextProvider";
import "./Product.css";
import { useNavigate } from "react-router";


const AddProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    picture: '',
    type: '',
  });
  const { addProduct } = useProducts();

  const handleInp = (e) => {
    if (e.target.name == 'price') {
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
        width: '40vw',
        margin: '5vh auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <TextField
        className="admin_inp"
        id="outlined-basic"
        label="Name"
        variant="outlined"
        color="grey"
        name="name"
        size="small"
        onChange={handleInp}
      />
      <TextField
        className="admin_inp"
        id="outlined-basic"
        label="Descripton"
        variant="outlined"
        color="grey"
        name="description"
        size="small"
        onChange={handleInp}
      />
      <TextField
        className="admin_inp"
        id="outlined-basic"
        label="Price"
        variant="outlined"
        color="grey"
        name="price"
        size="small"
        onChange={handleInp}
      />
      <TextField
        className="admin_inp"
        id="outlined-basic"
        label="Picture"
        variant="outlined"
        color="grey"
        name="picture"
        size="small"
        onChange={handleInp}
      />
      <TextField
        className="admin_inp"
        id="outlined-basic"
        label="Type"
        variant="outlined"
        color="grey"
        name="type"
        size="small"
        onChange={handleInp}
      />
      <Button

        className="admin_btn"
        onClick={() => {
          addProduct(product);
          navigate("/products");
        }}
        size="large"
        variant="outlined"

        sx={{
          border: '1px solid black',
          color: 'white',
          backgroundColor: 'black',
          fontFamily: 'Montserrat, sans-serif',
        }}
      >
        Add product
      </Button>
    </Box>
  );
};

export default AddProduct;
