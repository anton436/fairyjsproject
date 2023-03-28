import React from "react";
import Company from "./components/Company/Company";
import Footer from "./components/Footer/Footer";

import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <AuthContextProvider>
      <ProductContextProvider>
        <Navbar />
        <MainRoutes />
        <Footer />
      </ProductContextProvider>
    </AuthContextProvider>
  );
};

export default App;
