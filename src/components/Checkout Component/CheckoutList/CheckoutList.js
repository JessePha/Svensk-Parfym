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
          <img className={Styles.img} src={items.url} alt={items.name} />
          <p className={Styles.mapText}>
            {items.name} {items.size} ⨯ {items.count}:{" "}
            {items.price * items.count}kr{" "}
          </p>
        </div>
      ))}
      <br />
      <h4>Your total price is: {props.totalPrice}kr</h4>
    </div>
  );
};

export default connect(mapStateToProps, null)(CheckoutList);
