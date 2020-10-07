import React from "react";
import home from "../../../shared/Images/HomeImage.jpg";
import classes from "./HomeImage.module.css";

const App = () => {
  return (
    <div className={classes.imageDiv}>
      <img className={classes.HomeImage} src={home} alt="nature" />
    </div>
  );
};

export default App;
