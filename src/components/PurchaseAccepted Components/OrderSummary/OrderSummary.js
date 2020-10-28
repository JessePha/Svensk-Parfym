import React from "react";
import classes from "./OrderSummary.module.css";
const OrderSummary = (props) => {
  return (
    <div className={classes.OrderSummary}>
      <h1>ORDER SUMMARY</h1>
      <div className={classes.Summary}>
        <div className={classes.ProductInformation}>
          <img img={props.img} alt={"productImg"} />
          <p>{props.name}</p>
          <p>{props.cost}</p>
          <p>Art.No:</p>
          <p>{props.artNo}</p>
          <p>Quantity:</p>
          <p>{props.quantity}</p>
          <p>Size:</p>
          <p>{props.size}</p>
        </div>
        <div className={classes.PriceInformation}>
          <h2>Total: {props.totalCost}</h2>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
