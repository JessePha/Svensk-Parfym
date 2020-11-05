import React from "react";
import classes from "./Purchase.module.css";
import Message from "./Message/Message";
import OrderDetails from "./OrderDetails/OrderDetails";
import OrderSummary from "./OrderSummary/OrderSummary";
const PurchasePage = ({ orderData }) => {
  return (
    <div className={classes.PurchaseConfirmed}>
      <Message />
      <div className = {classes.OrdAndSumContainer}>
        <OrderDetails customerData={orderData.customer} />
        <OrderSummary
          orderedProduct={orderData.product}
          totalPrice={orderData.totalPrice}
        />   
      </div>
    </div>
  );
};

export default PurchasePage;
