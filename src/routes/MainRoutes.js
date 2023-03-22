import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminPage from '../pages/AdminPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import ProductsPage from '../pages/ProductsPage';

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: '/', element: <HomePage />, id: 1 },
    { link: '/products', element: <ProductsPage />, id: 2 },
    { link: '/admin', element: <AdminPage />, id: 3 },
    { link: '*', element: <NotFoundPage />, id: 4 },
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
