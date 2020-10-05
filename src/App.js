import React, { useState, useEffect } from "react";
import "./App.css";
import HomeView from "./view/Home View/HomeView";
import View from "./view/View";
import AboutUs from "./view/AboutUs View/AboutUs";
import { Route, Switch } from "react-router-dom";
import productData from "./data/data";
import { BrowserRouter } from "react-router-dom";
import ShopView from "./view/Shop View/ShopView";
import ProductView from "./view/Product View/ProductView";

const App = () => {
  const [data, setData] = useState(productData);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let updateCart = [...cart];
    addAmount(updateCart);
  }, [cart]);

  const addToCartHandler = (product, amount = 1) => {
    const cartItems = cart.slice();
    let alreadyInCart = false;
    if (amount === 0) {
      return;
    }
    cartItems.forEach((item) => {
      if (item.name === product.name && item.size === product.size) {
        item.count += amount;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: amount });
    }
    setCart(cartItems);
    addAmount(cartItems);
  };

  const addAmount = (itemInCart) => {
    const tempItem = { ...itemInCart };
    const tempData = [...data.items];
    let amount = Object.values(tempItem)
      .map((item) => item.count)
      .reduce((num, sum) => {
        return num + sum;
      }, 0);
    setData({
      items: tempData,
      totalAmount: amount,
      totalPrice: addTotalPrice(itemInCart),
    });
  };

  const addTotalPrice = (itemInCart) => {
    const tempItem = { ...itemInCart };
    let price = Object.values(tempItem)
      .map((item) => item.price * item.count)
      .reduce((num, sum) => {
        return num + sum;
      }, 0);
    return price;
  };
  return (
    <div className="App">
      <BrowserRouter>
        <View data={data} cartProducts={cart} setCartProducts={setCart}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <HomeView data={data}/>
              )}
            />
            <Route exact path="/invent" component={AboutUs} />
            <Route
              exact
              path="/Fragrance"
              render={() => <ShopView data={data} />}
            />
            <Route
              exact
              path={"/Fragrance/:name"}
              render={() => (
                <ProductView data={data} addToCartHandler={addToCartHandler} />
              )}
            />
          </Switch>
        </View>
      </BrowserRouter>
    </div>
  );
};

export default App;
