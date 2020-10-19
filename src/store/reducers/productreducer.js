import * as actionType from "../actionFunc/actionType";
import { updateObject } from "../utility";

const initialState = {
  products: [],
  error: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_PRODUCT:
      let temp = action.products.slice();
      return updateObject(state, {
        ...state,
        products: temp,
        error: false,
      });
    case actionType.FETCH_PRODUCT_FAIL:
      return updateObject(state, {
        ...state,
        error: true,
      });
    default:
      return {
        ...state,
      };
  }
};

export default productReducer;
