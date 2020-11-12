import React from "react";
import "./App.css";
import HomeView from "./view/Home View/HomeView";
import View from "./view/View";
import InventView from "./view/Invent View/InventView";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import ShopView from "./view/Shop View/ShopView";
import ProductView from "./view/Product View/ProductView";
import CheckoutView from "./view/Checkout View/CheckoutView";
import ProcessView from "./view/Process View/ProcessView";
import MissingPage from "./view/MissingPage view/MissingPageView";
import PurchaseView from "./view/Purchase view/PurchaseView";
import PolicyView from "./view/Policy View/PolicyView";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <View>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/invent" component={InventView} />
            <Route exact path="/Fragrance" component={ShopView} />
            <Route
              exact
              path={"/Fragrance/:name/:size"}
              component={ProductView}
            />
            <Route exact path={"/Checkout"} component={CheckoutView} />
            <Route exact path={"/process"} component={ProcessView} />
            <Route exact path={"/purchase/:orderid"} component={PurchaseView} />
            <Route path={"/policy"} component={PolicyView} />
            <Route path="" component={MissingPage} />
          </Switch>
        </View>
      </BrowserRouter>
    </div>
  );
};

export default App;
