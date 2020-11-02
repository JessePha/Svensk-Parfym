import * as actionTypes from "./actionType";

export const addItemToCart = (item, amount) => {
  return {
    type: actionTypes.ADD_ITEM_TO_CART,
    payload: {
      product: item,
      amount: amount,
    },
  };
};


export const addItem = (name, size) => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: {
      name: name,
      size: size,
    },
  };
};
export const minusItem = (name, size) => {
  return {
    type: actionTypes.MINUS_ITEM,
    payload: {
      name: name,
      size: size,
    },
  };
};
export const removeItem = (name, price, size) => {
  return {
    type: actionTypes.REMOVE_ITEM,
    payload: {
      name: name,
      price: price,
      size: size,
    },
  };
};
