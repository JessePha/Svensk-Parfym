import React from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import "./Cart.css";
import CheckoutButton from "../../CheckoutButton/CheckoutButton";
import CartProducts from "../../CartProduct/CartProducts";
import TotalPrice from "../../TotalPrice/TotalPrice";

const Cart = (props) => {
  let attachedClasses = ["Cart", "CloseCart"];
  if (props.open) {
    attachedClasses = ["Cart", "OpenCart"];
  }
  console.log(props.totalPrice);
  return (
    <div className={attachedClasses}>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        Cart Information
        <div className="Cart-Info"></div>
        <CartProducts
          products={props.products}
          setProducts={props.setProducts}
          totalPrice={props.totalPrice}
          setTotalPrice={props.setTotalPrice}
        />
        <CheckoutButton />
        <TotalPrice products={props.products} totalPrice={props.totalPrice} />
      </div>
    </div>
  );
};

export default Cart;
