import React from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
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
              <CartProducts totalPrice={props.totalPrice} closed={props.closed}/>
            </div>
          ) : (
            <div className={classes.CartHeader}>
              My basket ({props.totalAmount} items)
            </div>
          )}
          <div className={classes.result}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
