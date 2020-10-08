import React from "react";
import classes from "./Price.module.css";

const Price = ({ price, value }) => {
  return (
    <div>
      <p classes={classes.Style}>{`${price} ${value}`}</p>
    </div>
  );
};

export default Price;
