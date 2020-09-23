import React from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import "./Cart.css";
import CheckoutButton from "../../CheckoutButton/CheckoutButton";
import AddSubRemoveItems from "../../AddSubRemoveItems/AddSubRemoveItems";

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
        <AddSubRemoveItems products={props.products} setProducts={props.setProducts}/>
        <CheckoutButton />
      </div>
    </div>
  );
};

export default Cart;
