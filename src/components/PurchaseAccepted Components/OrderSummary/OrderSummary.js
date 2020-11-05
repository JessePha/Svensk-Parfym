import React from "react";
import classes from "./OrderSummary.module.css";
const OrderSummary = (props) => {
  let Sum = null;
  if (props.itemInCart.length > 0) {
    Sum = props.itemInCart.map((data, index) => {
      return (
        <div>
          <div className={classes.Summary}>
            <div className={classes.ProductInformation}>
              <div>
                <img src={data.url} alt={"productImg"} />
              </div>
              <div>
                <p>Produkt Namn: {data.name}</p>
                <p>Pris: {data.price}</p>
                <p>Art.No: {data.artNo}</p>
                <p>Quantity: {data.count}</p>
                <p>Size: {data.size}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
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
