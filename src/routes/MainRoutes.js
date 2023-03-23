import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage/AdminPage";
import EditProductPage from "../components/product/EditProduct";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/products", element: <ProductsPage />, id: 2 },
    { link: "/admin", element: <AdminPage />, id: 3 },
    { link: "/*", element: <NotFoundPage />, id: 4 },
    { link: "/edit/:id", element: <EditProductPage />, id: 5 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
