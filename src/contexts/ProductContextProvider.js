import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API } from "../helpers/consts";

export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};

const INIT_PAGE = {
  products: [],
};

const reducer = (state = INIT_PAGE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };

    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_PAGE);

  const getProducts = async () => {
    const res = await axios.get(API);
    console.log(res);
  };
  // ! create (post request)
  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
  };
  const values = { addProduct, getProducts };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
