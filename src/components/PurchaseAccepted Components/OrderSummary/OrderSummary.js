import React from "react";
import classes from "./OrderSummary.module.css";
const OrderSummary = ({ orderedProduct, totalPrice }) => {
  let Sum = null;
  if (orderedProduct) {
    Sum = orderedProduct.map((data) => (
      <div key={data.id} className={classes.Summary}>
        <div className={classes.ProductInformation}>
          <div>
            <img src={data.url} alt={"productImg"} />
          </div>
          <div>
            <p>{`Product name: ${data.name}`}</p>
            <p>{`Price: ${data.price}`}</p>
            <p>{`Quantity: ${data.count}`}</p>
            <p>{`Size: ${data.size}`}</p>
          </div>
        </div>
      </div>
    ));
  } else {
    Sum = <p>Product-data missing</p>;
  }
  return (
    <div className={classes.OrderSummary}>
      <h1>ORDER SUMMARY</h1>
      {Sum}
    </div>
  );
};

export default OrderSummary;
