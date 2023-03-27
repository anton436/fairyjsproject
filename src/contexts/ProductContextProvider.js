import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API } from "../helpers/consts";

export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
  productDetails: {},
  randomProducts: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };

    case "GET_PRODUCT_DETAILS":
      return { ...state, productDetails: action.payload };
    case "GET_RANDOM_PRODUCTS":
      return { ...state, randomProducts: action.payload };

    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //! read (get request)

  const getProducts = async () => {
    const { data } = await axios.get(API);

    dispatch({ type: "GET_PRODUCTS", payload: data });
  };
  const getRandomProducts = async () => {
    const { data } = await axios.get(API + "?_limit=3");

    dispatch({ type: "GET_RANDOM_PRODUCTS", payload: data });
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

  // ! save changes (patch request)

  const saveEditedProduct = async (editedProduct) => {
    await axios.patch(`${API}/${editedProduct.id}`, editedProduct);
    getProducts();
  };

  const values = {
    saveEditedProduct,
    addProduct,
    getProducts,
    products: state.products,
    deleteProduct,
    getProductDetails,
    productDetails: state.productDetails,
    getRandomProducts,
    randomProducts: state.randomProducts,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
