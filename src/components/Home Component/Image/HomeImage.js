import React from "react";
import home from "../../../shared/Images/HomeImage.jpg";
import classes from "./HomeImage.module.css"

const App = () => {
  return (
    <img src={home} alt="nature" className={classes.HomeImage}/>
  );
};

export default App;
