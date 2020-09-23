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
      <ShopView/>
        <Route path="/home" component={HomeView} />
        <Route path="/aboutus" component={AboutUs} />
      </View>
    </div>
  );
};

export default App;
