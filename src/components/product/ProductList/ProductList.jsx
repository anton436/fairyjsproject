import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useProducts } from "../../../contexts/ProductContextProvider";
import ProductCard from "../ProductCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./ProductList.css";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const { getProducts, products } = useProducts();

  const [searchParams] = useSearchParams();
  useEffect(() => {
    getProducts();
    // console.warn(products);
  }, []);
  useEffect(() => {
    // console.log(searchParams);
    getProducts();
    // console.warn(products);
  }, [searchParams]);
  //! pagination
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const itemsPerPage = 5;
  const count = Math.ceil(products.length / itemsPerPage);

  const currentData = () => {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  };

  //! pagination

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography id="product_list_title">Блог</Typography>

      <Box id="list_card">
        {currentData().map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </Box>

      <Stack sx={{ display: "flex", marginTop: "60px" }} spacing={2}>
        <Pagination
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "60px",
          }}
          count={count}
          color="success"
          variant="outlined"
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </Box>
  );
};

export default ProductList;
