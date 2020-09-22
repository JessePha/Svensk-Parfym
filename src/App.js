import React from "react";

import "./App.css";
import HomeView from "./view/HomeView/HomeView";
import ShopView from "./view/ShopView/ShopView";
import View from "./view/View";
import { Route } from "react-router-dom";
import AboutUs from "./view/AboutUs/AboutUs";

const App = () => {
  return (
    <div>
      <View>
        <Route path="/shopview" component={ShopView} />
        <Route path="/homeview" component={HomeView} />
        <Route path="/aboutusview" component={AboutUs} />
      </View>
    </div>
  );
};

export default App;
