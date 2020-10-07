import * as actionType from "../actionFunc/actionType";
import * as actionFunc from "../actionFunc/actionFunc";

const initialState = {
  cartItem: [],
  totalPrice: 0,
  totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_ITEM_TO_CART: {
      const itemsInCart = state.cartItem.slice();
      let alreadyInCart = false;
      if (action.payload.amount === 0) {
        return {
          ...state,
        };
      }
      itemsInCart.forEach((item) => {
        if (
          item.name === action.payload.product.name &&
          item.size === action.payload.product.size
        ) {
          item.count += action.payload.amount;
          alreadyInCart = true;
        }
      });
      if (!alreadyInCart) {
        itemsInCart.push({ ...action.payload.product, count: action.payload.amount });
      }
      let amount = actionFunc.addTotalAmount(itemsInCart);
      let price = actionFunc.addTotalPrice(itemsInCart);
      return {
        ...state,
        cartItem: itemsInCart,
        totalPrice: price,
        totalAmount: amount,
      };
    }
    case actionType.ADD_ITEM: {
      const items = state.cartItem.slice();
      const itemInCart = [...Object.values(items)];
      let addItem = itemInCart.filter((item) =>
        item.name === action.payload.name && item.size === action.payload.size
          ? item.count++
          : item.count
      );
      let price = actionFunc.addTotalPrice(addItem);
      let amount = actionFunc.addTotalAmount(addItem);
      return {
        ...state,
        cartItem: addItem,
        totalPrice: price,
        totalAmount: amount,
      };
    }
    case actionType.MINUS_ITEM: {
      const items = state.cartItem.slice();
      let minusItem = null;
      if (items.length > 0) {
        minusItem = items.filter((item) =>
          item.count > 0 &&
          item.name === action.payload.name &&
          item.size === action.payload.size
            ? --item.count
            : item.count
        );
      }
      let price = actionFunc.addTotalPrice(minusItem);
      let amount = actionFunc.addTotalAmount(minusItem);
      return {
        ...state,
        cartItem: minusItem,
        totalPrice: price,
        totalAmount: amount,
      };
    }
    case actionType.REMOVE_ITEM: {
      const items = state.cartItem.slice();
      let removeItem = null;
      if (items.length > 0) {
        removeItem = items.filter(
          (item) =>
            item.name !== action.payload.name ||
            item.size !== action.payload.size ||
            item.price !== action.payload.price
        );
      }
      let price = actionFunc.addTotalPrice(removeItem);
      let amount = actionFunc.addTotalAmount(removeItem);
      return {
        ...state,
        cartItem: removeItem,
        totalPrice: price,
        totalAmount: amount
      };
    }
    default:
      return state;
  }
};

export default cartReducer;