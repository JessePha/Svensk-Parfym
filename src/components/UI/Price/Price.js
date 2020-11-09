import React from "react";
import classes from "./Price.module.css";

const Price = ({ price, value }) => {
  return (
    <div>
      <p className={classes.Style}>{`Price:`}</p>
      <p className={classes.Style}>{`${price} ${value} `}</p>
    </div>
  );
};

export default Price;
