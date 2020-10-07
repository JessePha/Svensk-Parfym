import React from "react";
import classes from "./Description.module.css";
let Description = ({ viewProduct }) => {
  return (
    <div className={classes.Desc}>
      <h3>{viewProduct.name}</h3>
      <p>{viewProduct.description}</p>
    </div>
  );
};
export default Description;
