import React from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import CheckoutButton from "../../UI/CheckoutButton/CheckoutButton";
import CartProducts from "../../Cart Component/CartProducts/CartProducts";
import classes from "./Cart.module.css";

const Cart = (props) => {
  let attachedClasses = [classes.Cart, classes.CloseCart];
  if (props.open) {
    attachedClasses = [classes.Cart, classes.Open];
  }
  return (
    <div className={attachedClasses}>
      <Backdrop open={props.open} closed={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className="Cart-Info">
          {props.products.length > 0 ? (
            <div>
              <div className={classes.CartHeader}>
                My basket ({props.totalAmount} items)
              </div>
              <CartProducts />
            </div>
          ) : (
            <div className={classes.CartHeader}>
              My basket ({props.totalAmount} items)
            </div>
          )}
          <div className={classes.result}>
            <h3>Total Price: {props.totalPrice} Kr</h3>
            <CheckoutButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
