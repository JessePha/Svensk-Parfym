import React from "react";
import {Route, Switch} from 'react-router-dom';
import "./App.css";
import ShopView from "./view/ShopView/ShopView";
import View from "./view/View";
const App = () => {
  return (
    <div>
      <View>
          <ShopView />
      </View>
    </div>
  );
};

export default App;
