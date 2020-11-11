import React from "react";
import classes from "./Purchase.module.css";
import Message from "./Message/Message";
import OrderDetails from "./OrderDetails/OrderDetails";
import OrderSummary from "./OrderSummary/OrderSummary";
import PriceInformation from "./PriceInformation/PriceInformation";
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

        <PriceInformation totalPrice={orderData.totalPrice} />
    </div>
  );
};

export default PurchasePage;
