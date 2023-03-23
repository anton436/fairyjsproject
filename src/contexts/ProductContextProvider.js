import axios from 'axios';
import React, { createContext, useContext } from 'react';
import { API } from '../helpers/consts';

export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};

const ProductContextProvider = ({ children }) => {
  // ! create (post request)
  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
  };

  const values = { addProduct };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
