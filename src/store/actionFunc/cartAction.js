import * as actionTypes from "./actionType";

export const addItemToCart = (item, amount, setOutOfStock) => {
  return {
    type: actionTypes.ADD_ITEM_TO_CART,
    payload: {
      product: item,
      amount: amount,
      setOutOfStock: setOutOfStock,
    },
  };
};

export const addItem = (name, size, stock) => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: {
      name: name,
      size: size,
      stock: stock,
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

export const removeAllItemsFromCart = () => {
  return {
    type: actionTypes.REMOVE_ALL_ITEMS,
  }
}