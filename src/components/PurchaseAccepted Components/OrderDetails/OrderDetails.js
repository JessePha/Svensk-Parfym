import React from "react";
import classes from "./OrderDetails.module.css";
const OrderDetails = (props) => {
  let details = null;
  if (props > 0) {
    details = (
      <div className={classes.OrderDetails}>
        <h1>ORDER DETAILS</h1>
        <div className={classes.Order}>
          <div className={classes.UserInfo}>
            <p>EMAIL</p>
            <p>{props.email}</p>
            <p>PAYMENT METHOD</p>
            <p>{props.paymentMethod}</p>
            <p>ORDER DATE</p>
            <p>{props.orderDate}</p>
          </div>
          <div className={classes.DeliveryInfo}>
            <p>DELIVERY OPTIONS</p>
            <p>{props.deliveryOptions}</p>
            <p>DELIVERY ADDRESS</p>
            <p>{props.deliveryAdress}</p>
            <p>CONTACT NUMBER</p>
            <p>{props.contactInfo}</p>
          </div>
        </div>
      </div>
    );
  } else {
    details = <p className={classes.OrderDetails}>Personal information missing</p>;
  }
  return <div>{details}</div>;
};

export default OrderDetails;
