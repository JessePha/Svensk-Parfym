import React from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import "./Cart.css";
import CheckoutButton from "../../CheckoutButton/CheckoutButton";
import AddRemoveItem from "../../AddRemoveItem/AddSubRemoveItem";

const Cart = (props) => {
  let attachedClasses = ["Cart", "CloseCart"];
  if (props.open) {
    attachedClasses = ["Cart", "OpenCart"];
  }
  return (
    <div className={attachedClasses}>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        Cart Information
        <div className="Cart-Info"></div>
        <AddRemoveItem/>
        <CheckoutButton/>
      </div>
    </div>
  );
};

export default Cart;
