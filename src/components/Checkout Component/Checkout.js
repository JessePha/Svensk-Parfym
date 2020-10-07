import React from "react";
import CheckoutForm from "./CheckoutForm";

const Checkout = (props) => {
  return (
    <div>
      <CheckoutForm />
      <button>{props.totalPrice}</button>
    </div>
  );
};

export default Checkout;
