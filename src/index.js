import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import cartReducer from "./store/reducers/cartreducer";
import productReducer from "./store/reducers/productreducer";

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state.crt);
    localStorage.setItem("itemCart", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}


const rootReducer = combineReducers({
  prd: productReducer,
  crt: cartReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
store.subscribe(() => saveToLocalStorage(store.getState()));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
