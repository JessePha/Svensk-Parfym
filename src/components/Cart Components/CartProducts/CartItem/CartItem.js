import React from "react";
import classes from "./CartItem.module.css";

const CartItem = ({ img, name, add, amount, size, price, minus, remove }) => {
  return (
    <div className={classes.CartItem}>
      <div className={classes.InnerCartItemContainer}>
        <img
          src={img}
          alt="product"
          style={{ height: "70px", width: "70px" }}
        ></img>
        <div className={classes.InnerContainer}>
          <p>{name}</p>
          <div className={classes.InnerItem}>
            <button onClick={() => add(name)}>+</button>
            <p>{amount}</p>
            <button onClick={() => minus(name)}>-</button>
            <button onClick={() => remove(name)}>remove</button>
            <p>{price}</p>
            <p>kr</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
