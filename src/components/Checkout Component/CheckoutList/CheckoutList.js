import React from "react";
import { connect } from "react-redux";
import Styles from "./CheckoutList.module.css";

const mapStateToProps = (state) => {
  return {
    totalPrice: state.crt.totalPrice,
    cartItem: state.crt.cartItem,
  };
};

const CheckoutList = (props) => {
  return (
    <div className={Styles.listDiv}>
      <h3>Your Order</h3>
      {props.cartItem.map((items) => (
        <div className={Styles.mapDiv}>
          <img className={Styles.img} src={items.img} alt={items.name} />{" "}
          <p classname={Styles.mapTitle}>{items.name}</p>
          <p>Amount: {items.count}</p>
        </div>
      ))}
      <p>Your total price is: {props.totalPrice}</p>
    </div>
  );
};

export default connect(mapStateToProps, null)(CheckoutList);
