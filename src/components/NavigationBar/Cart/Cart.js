import React from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import CheckoutButton from "../../UI/CheckoutButton/CheckoutButton";
import CartProducts from "../../Cart Components/CartProducts/CartProducts";
import classes from "./Cart.module.css";

const Cart = (props) => {
  let attachedClasses = [classes.Cart, classes.CloseCart];
  if (props.open) {
    attachedClasses = [classes.Cart, classes.Open];
  }
  const addItem = (itemName, size) => {
    const itemInCart = [...Object.values(props.products)];
    let addItem = itemInCart.filter((item) =>
      item.name === itemName && item.size === size ? item.count++ : item.count
    );
    props.setProducts(addItem);
  };

  const subtractItem = (itemName, size) => {
    const itemInCart = [...Object.values(props.products)];
    let removeItem = null;
    if (itemInCart.length > 0) {
      removeItem = itemInCart.filter((item) =>
        item.count > 0 && item.name === itemName && item.size === size
          ? --item.count
          : item.count
      );
    }
    props.setProducts(removeItem);
  };

  const removeItem = (itemName, price, size) => {
    console.log(itemName, price, size);
    const itemInCart = [...Object.values(props.products)];
    let removeItem = null;
    if (itemInCart.length > 0) {
      removeItem = itemInCart.filter(
        (item) =>
          item.name !== itemName || item.size !== size || item.price !== price
      );
    }
    props.setProducts(removeItem);
  };
  return (
    <div className={attachedClasses}>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className="Cart-Info">
          {props.products.length > 0 ? (
            <div>
              <div className={classes.CartHeader}>
                My basket ({props.totalAmount} items)
              </div>
              <CartProducts
                itemInCart={props.products}
                add={addItem}
                minus={subtractItem}
                remove={removeItem}
              />
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
