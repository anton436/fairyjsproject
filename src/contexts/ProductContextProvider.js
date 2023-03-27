import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router";

import { API } from "../helpers/consts";

export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
  productDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };

    case "GET_PRODUCT_DETAILS":
      return { ...state, productDetails: action.payload };

    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();

  //! read (get request)

  const getProducts = async () => {
    const { data } = await axios.get(`${API}${window.location.search}`);

    dispatch({ type: "GET_PRODUCTS", payload: data });
  };

  // ! create (post request)
  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
    getProducts();
  };

  //! delete
  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };

  //! get product details
  const getProductDetails = async (id) => {
    const { data } = await axios.get(`${API}/${id}`);
    dispatch({ type: "GET_PRODUCT_DETAILS", payload: data });
  };

  //! saveChanges (patch request)

  const saveEditedProduct = async (editedProduct) => {
    await axios.patch(`${API}/${editedProduct.id}`, editedProduct);
    getProducts();
  };

  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(window.location.search);
    if (value == "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${window.location.pathname}? ${search.toString()}`;
    navigate(url);
  };

  const values = {
    saveEditedProduct,
    fetchByParams,
    addProduct,
    getProducts,
    products: state.products,
    deleteProduct,
    getProductDetails,
    productDetails: state.productDetails,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
