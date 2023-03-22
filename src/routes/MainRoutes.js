import React from "react";
import AdminPage from "../pages/AdminPage/AdminPage";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProductsPage from "../pages/ProductPage/ProductsPage";
import { Routes, Route } from "react-router-dom";

const MainRoutes = () => {
  const PUBLICK_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/products", element: <ProductsPage />, id: 2 },
    { link: "/admin", element: <AdminPage />, id: 3 },
    { link: "/*", element: <NotFoundPage />, id: 4 },
  ];

  return (
    <>
      <Routes>
        {PUBLICK_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
