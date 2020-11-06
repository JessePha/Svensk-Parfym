import React from "react";
import classes from "../Purchase.module.css"
const PurchasePage = (props) => {
  return (
    <div className={classes.Message}>
      <h1>Thank You For The Order!</h1>
      <h2>You will recieve an order confirmation email shortly</h2>
    </div>
  );
};

export default PurchasePage;
