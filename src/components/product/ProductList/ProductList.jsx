import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useProducts } from "../../../contexts/ProductContextProvider";
import ProductCard from "../ProductCard";
import "./ProductList.css";
const ProductList = () => {
  const { getProducts, products } = useProducts();

  useEffect(() => {
    getProducts();
    // console.warn(products);
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Typography id="product_list_title">Блог</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "120px",
        }}
      >
        {products.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </Box>
    </Box>
  );
};

export default ProductList;
