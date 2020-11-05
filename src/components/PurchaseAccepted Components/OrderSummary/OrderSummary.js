import React from "react";
import classes from "./OrderSummary.module.css";
const OrderSummary = ({ orderedProduct, totalPrice }) => {
  let sum = null;
  if (orderedProduct) {
    sum = orderedProduct.map((data) => (
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
    sum = <p className={classes.OrderSummary}>Product-data missing</p>;
  }
  return (
    <div className={classes.OrderSummary}>
      {sum}
      <div className={classes.totalPrice}>
        <h2>{`Total Price: ${totalPrice}`}</h2>
      </div>
    </div>
  );
};

export default OrderSummary;
