import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { getProducts, products } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Box>
      {products.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </Box>
  );
};

export default ProductList;
