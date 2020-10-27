import React from "react";
import "./App.css";
import HomeView from "./view/Home View/HomeView";
import View from "./view/View";
import AboutUs from "./view/AboutUs View/AboutUs";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import ShopView from "./view/Shop View/ShopView";
import ProductView from "./view/Product View/ProductView";
import CheckoutView from "./view/Checkout View/CheckoutView";
import ErrorMessage from "./components/UI/ErrorMessage/ErrorMessage";
import ProcessView from "./view/Process View/ProcessView";
import MissingPage from "./view/MissingPage view/MissingPageView";
import PurchaseConfirmed from "./components/UI/PurchaseConfirmed/PurchaseConfirmed";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <View>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/invent" component={AboutUs} />
            <Route exact path="/Fragrance" component={ShopView} />
            <Route
              exact
              path={"/Fragrance/:name/:size"}
              component={ProductView}
            />
            <Route exact path={"/Checkout"} component={CheckoutView} />
            <Route exact path={"/process"} component={ProcessView} />
            <Route path="" component={MissingPage} />
          </Switch>
        </View>
      </BrowserRouter>
      <ErrorMessage />
      <PurchaseConfirmed/>
    </div>
  );
};

export default App;
