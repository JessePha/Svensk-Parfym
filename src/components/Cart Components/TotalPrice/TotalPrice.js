import React from "react";
import classes from "./TotalPrice.module.css";
const Cart = (props) => {
  return (
    <ul className={classes.Total}>
      <p className={classes.Item}>Total </p>
      <p className={classes.Item}>{props.totalPrice}</p>
    </ul>
  );
};

export default Cart;
