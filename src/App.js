import React from "react";
import { Route } from "react-router-dom";
import HomeView from "./view/HomeView/HomeView";
import {Router} from "react-router-dom"
function App() {
  return (
    <div>
    <Route path="/" exact component={HomeView}/>
    </div>
  );
}

export default App;
