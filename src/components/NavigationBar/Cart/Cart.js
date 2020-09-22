import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import "./Cart.css";
import CheckoutButton from "../../CheckoutButton/CheckoutButton";

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
      </div>
      <CheckoutButton/>
    </div>
  );
};

export default Cart;
