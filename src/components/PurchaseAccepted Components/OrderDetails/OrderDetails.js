import React from "react";
import classes from "./OrderDetails.module.css";
const OrderDetails = ({ customerData }) => {
  let details = null;
  if (customerData) {
    details = (
      <div>
        <div className={classes.Order}>
          <div className={classes.UserInfo}>
            <p>{`Firstname: ${customerData.FName}`}</p>
            <p>{`Lastname: ${customerData.LName}`}</p>
            <p>{`Country: ${customerData.Country}`}</p>
            <p>{`City: ${customerData.City}`}</p>
            <p>{`Adress: ${customerData.Adress}`}</p>
            <p>{`Zip code: ${customerData.ZipCode}`}</p>
            <p>{`Email: ${customerData.Email}`}</p>
            <p>{`Phone number: ${customerData.PhoneNumber}`}</p>
            <p>{`Payment method: ${customerData.PaymentMethod}`}</p>
          </div>
        </div>
      </div>
    );
  } else {
    details = <p>Personal information missing</p>;
  }
  return (
    <div className={classes.OrderDetails}>
      <h1>ORDER DETAILS</h1>
      {details}
    </div>
  );
};

export default OrderDetails;
