import React from "react";
import classes from "./OrderSummary.module.css";
const OrderSummary = (props) => {
  console.log(props.itemInCart);
  let Sum = null;
  if (props.itemInCart.length > 0) {
    Sum = props.itemInCart.map((data, index) => {
      return (
        <div className={classes.OrderSummary} key={index}>
          <h1>ORDER SUMMARY</h1>
          <div className={classes.Summary}>
            <div className={classes.ProductInformation}>
              <img style={{width: "5vw"}} src={data.url} alt={"productImg"} />
              <p>{data.name}</p>
              <p>{data.price}</p>
              <p>Art.No:</p>
              <p>{data.artNo}</p>
              <p>Quantity:</p>
              <p>{data.stock}</p>
              <p>Size:</p>
              <p>{data.size}</p>
            </div>
            <div className={classes.PriceInformation}>
              <h2>Total: {props.totalPrice}</h2>
            </div>
          </div>
        </div>
      );
    });
  } else {
    Sum = <p className={classes.OrderSummary}>Missing data</p>;
  }
  return <div>{Sum}</div>;
};

export default OrderSummary;
