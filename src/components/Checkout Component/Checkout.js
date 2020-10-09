import React from "react";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import CheckoutList from "./CheckoutList/CheckoutList";
import Styles from "../Checkout Component/Checkout.module.css";

const Checkout = () => {
  return (
    <div className={Styles.Checkout}>
      <CheckoutForm /> <CheckoutList />
    </div>
  );
};

export default Checkout;
