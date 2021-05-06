import React from "react";
import classes from "./CartRender.module.css";
import Price from "../../../UI/Price/Price";

const CartRender = ({
  img,
  name,
  amount,
  size,
  price,
  add,
  minus,
  remove,
}) => {
  return (
    <div className={classes.CartItem}>
      <div className={classes.InnerCartItemContainer}>
        <img
          src={img}
          alt="product"
          style={{ height: "50%", width: "50%" }}
        ></img>
        <div className={classes.InnerContainer}>
          <p>{name}</p>
          <p>size: {size} </p>
          {<Price price={price} value="Kr" />}
          <div className={classes.InnerItem}>
            <button onClick={() => add(name, size)}>
              +
            </button>
            <p>{amount}</p>
            <button onClick={() => minus(name, size)}>
              -
            </button>
            <button onClick={() => remove(name, price, size)}>remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartRender;
