import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "../components/Auth/Auth";
import Company from "../components/Company/Company";
import ContactUs from "../components/ContactUs/ContactUs";
import ProductCard from "../components/product/ProductCard";
import { authContext, useAuth } from "../contexts/AuthContextProvider";
import { ADMIN } from "../helpers/consts";

import AdminPage from "../pages/AdminPage/AdminPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import EditProductPage from "../pages/EditProductPage/EditProductPage";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";

const MainRoutes = () => {
  const { user } = useAuth();

  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/products", element: <ProductsPage />, id: 2 },
    { link: "/*", element: <NotFoundPage />, id: 4 },
    { link: "/company", element: <Company />, id: 6 },
    { link: "/contacts", element: <ContactUs />, id: 7 },
    { link: "/details/:id", element: <DetailsPage />, id: 8 },
    { link: "/auth", element: <AuthPage />, id: 9 },
  ];

  const PRIVATE_ROUTES = [
    { link: "/admin", element: <AdminPage />, id: 3 },
    { link: "/edit/:id", element: <EditProductPage />, id: 5 },
    { link: "/auth", element: <Auth />, id: 9 },
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}

        {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                path={item.link}
                element={
                  user.email === ADMIN ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
                key={item.id}
              />
            ))
          : null}

        {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                path={item.link}
                element={
                  user.email === ADMIN ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
                key={item.id}
              />
            ))
          : null}
      </Routes>
    </>
  );
};

export default MainRoutes;
