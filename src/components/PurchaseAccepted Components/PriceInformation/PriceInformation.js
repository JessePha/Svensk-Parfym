import React from "react";
import classes from "./PriceInformation.module.css";
const PriceInformation = (props) => {
  return (
    <div className={classes.PriceInformation}>
      <h2>Total Price: {props.totalPrice}</h2>
    </div>
  );
};

export default PriceInformation;
