import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    picture: "",
    type: "",
  });
  const { addProduct } = useProducts();

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
    <Box sx={{ width: "60vw", margin: "10vh auto" }}>
      <TextField
        sx={{ marginBottom: "10px", borderColor: "black" }}
        fullWidth
        id="outlined-basic"
        name="name"
        size="small"
        label="Name"
        variant="outlined"
        onChange={handleInp}
      />
      <TextField
        sx={{ marginBottom: "10px", borderColor: "black" }}
        fullWidth
        id="outlined-basic"
        name="description"
        size="small"
        label="Description"
        variant="outlined"
        onChange={handleInp}
      />
      <TextField
        sx={{ marginBottom: "10px", borderColor: "black" }}
        fullWidth
        id="outlined-basic"
        name="price"
        size="small"
        label="Price"
        variant="outlined"
        onChange={handleInp}
      />
      <TextField
        sx={{ marginBottom: "10px", borderColor: "black" }}
        fullWidth
        id="outlined-basic"
        name="picture"
        size="small"
        label="Picture"
        variant="outlined"
        onChange={handleInp}
      />
      <TextField
        sx={{ marginBottom: "10px", borderColor: "black" }}
        fullWidth
        id="outlined-basic"
        name="type"
        size="small"
        label="Type"
        variant="outlined"
        onChange={handleInp}
      />
      <Button
        onClick={() => addProduct(product)}
        fullWidth
        sixe="large"
        variant="outlined"
      >
        Add product
      </Button>
    </Box>
  );
};

export default AddProduct;
