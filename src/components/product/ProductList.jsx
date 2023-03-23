import React, { useEffect } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";

const ProductList = () => {
  const { getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);
  return <div>ProductList</div>;
};

export default ProductList;
