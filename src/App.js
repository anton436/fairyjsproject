import React from "react";
import Company from "./components/Company/Company";
import Footer from "./components/Footer/Footer";

import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <CartContextProvider>
      <AuthContextProvider>
        <ProductContextProvider>
          <Navbar />
          <MainRoutes />
          <Footer />
        </ProductContextProvider>
      </AuthContextProvider>
    </CartContextProvider>
  );
};

export default App;
