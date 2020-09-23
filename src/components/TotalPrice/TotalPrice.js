import React from "react";

const Cart = (props) => {
    console.log(props.totalPrice)
  return (
    <div>
    <p>Total</p>
    {props.totalPrice}
    </div>
  );
};

export default Cart;
