import React from "react";
import classes from "./Purchase.module.css";
import Message from "./Message/Message";
import OrderDetails from "./OrderDetails/OrderDetails";
import OrderSummary from "./OrderSummary/OrderSummary";
const PurchasePage = (props) => {
  return (
    <div className={classes.PurchaseConfirmed}>
      <Message />
      <OrderDetails />
      <OrderSummary />
    </div>
  );
};

export default PurchasePage;
