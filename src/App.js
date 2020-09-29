import React from "react";

import "./App.css";
import HomeView from "./view/Home View/HomeView";
import ShopView from "./view/Shop View/ShopView";
import View from "./view/View";
import { Route } from "react-router-dom";
import AboutUs from "./view/AboutUs View/AboutUs";

const App = () => {

  return (
    <div>
      <View>
      <HomeView />
        <Route path="/aboutus" component={AboutUs} />
      </View>
    </div>
  );
};

export default App;
