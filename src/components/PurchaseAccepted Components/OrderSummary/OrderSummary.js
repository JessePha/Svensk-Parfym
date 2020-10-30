import React from "react";
import classes from "./OrderSummary.module.css";
const OrderSummary = (props) => {
  let Sum = null;
  if (props.itemInCart.length > 0) {
    Sum = props.itemInCart.map((data, index) => {
      return (
        <div className={classes.ProductInformation} key={index}>
          <div>
            <img style={{ width: "18vw" }} src={data.url} alt={"productImg"} />
          </div>
          <div>
            <p>{data.name}</p>
            <p>{data.price}</p>
            <p>Art.No:</p>
            <p>{data.artNo}</p>
            <p>Quantity:</p>
            <p>{data.stock}</p>
            <p>Size:</p>
            <p>{data.size}</p>
          </div>
        </div>
      );
    });
  } else {
    Sum = <p className={classes.OrderSummary}>Product-data missing</p>;
  }
  return (
    <div className={classes.OrderSummary}>
      {" "}
      <h1>ORDER SUMMARY</h1>
      {Sum}
      </div>
  );
};

export default OrderSummary;
