import React from "react";
import classes from "./CartItem.module.css";

const CartItem = ({ img, name, add, amount, size, price, minus, remove }) => {
  return (
    <div className={classes.CartItem}>
      <div className={classes.InnerCartItemContainer}>
        <img
          src={img}
          alt="product"
          style={{ height: "80px", width: "80px" }}
        ></img>
        <div className={classes.InnerContainer}>
          <p>{name}</p>
          <p>{size}</p>
          <div className={classes.InnerItem}>
            <button onClick={() => add(name,size)}>+</button>
            <p>{amount}</p>
            <button onClick={() => minus(name,size)}>-</button>
            <button onClick={() => remove(name,price)}>remove</button>
            <p>{price}</p>
            <p>kr</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
