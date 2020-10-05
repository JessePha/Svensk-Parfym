import React from "react";
import CartItem from "./CartRender/CartRender";
import classes from './CartProducts.module.css'

const CartProducts = (props) => {
  return (
    <div className = {classes.CartProducts}>
      {props.itemInCart.map((item) => (
        <CartItem
          key={item.name + item.size}
          img={item.img}
          name={item.name}
          amount={item.count}
          price={item.price}
          size = {item.size}
          add={props.add}
          minus={props.minus}
          remove ={props.remove}
        />
      ))}
    </div>
  );
};

export default CartProducts;
