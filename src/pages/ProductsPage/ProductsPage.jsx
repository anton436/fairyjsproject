import React from "react";
import ProductList from "../../components/product/ProductList/ProductList";
import { Grid } from "@mui/material";
import SideBar from "../../components/product/SideBar";

const ProductsPage = () => {
  return (
    <Grid sx={{ display: "flex" }}>
      <Grid item md={3}>
        <SideBar />
      </Grid>
      <Grid item md={8}>
        <ProductList />
      </Grid>
    </Grid>
  );
};

export default ProductsPage;
