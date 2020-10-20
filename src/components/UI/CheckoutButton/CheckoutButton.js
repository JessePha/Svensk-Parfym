import React from "react";
import { Link } from "react-router-dom";
import classes from "../CheckoutButton/CheckoutButton.module.css";


let CheckoutButton = (props) => {
  return (
    <div>
      <Link to={"/Checkout"}>
        <button className={classes.CheckoutButton} onClick={props.closed}>Checkout</button>
      </Link>
    </div>
  );
};

export default CheckoutButton;
