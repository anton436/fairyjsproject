import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ProductContextProvider from './contexts/ProductContextProvider';
import MainRoutes from './routes/MainRoutes';

const App = () => {
  return (
    <ProductContextProvider>
      <Navbar />
      <MainRoutes />
    </ProductContextProvider>
  );
};

export default App;
