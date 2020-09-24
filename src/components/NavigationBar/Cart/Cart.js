import React from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import "./Cart.css";
import CheckoutButton from "../../Cart Components/CheckoutButton/CheckoutButton";
import CartProducts from "../../Cart Components/CartProduct/CartProducts";
import TotalPrice from "../../Cart Components/TotalPrice/TotalPrice";

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
        <div className={"result"}>
        <TotalPrice products={props.products} totalPrice={props.totalPrice} />
        <CheckoutButton />
        </div>
      </div>
    </div>
  );
};

export default Cart;
