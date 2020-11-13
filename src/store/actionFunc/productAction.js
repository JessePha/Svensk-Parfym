import * as actionTypes from "./actionType";

export const setProduct = (products) => {
  return {
    type: actionTypes.SET_PRODUCT,
    products: products,
  };
};

export const fetchProductFail = () => {
  return {
    type: actionTypes.FETCH_PRODUCT_FAIL,
  };
};

