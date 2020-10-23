import * as actionTypes from "./actionType";
import { projectFirestore } from "../../firestore/config";

export const setProduct = (products) => {
  return {
    type: actionTypes.FETCH_PRODUCT,
    products: products,
  };
};

export const fetchProductFail = () => {
  return {
    type: actionTypes.FETCH_PRODUCT_FAIL,
  };
};

export const fetchProduct = () => {
  let items = [];
  return (dispatch) => {
    projectFirestore
      .collection("products")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          items.push({ ...doc.data(), id: doc.id });
        });
        dispatch(setProduct(items));
      })
      .catch((error) => {
        dispatch(fetchProductFail());
      });
  };
};
