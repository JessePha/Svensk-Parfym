import React from "react";
import { connect } from "react-redux";
import Styles from "./CheckoutList.module.css";

const CheckoutList = (props) => {
  return (
    <div className={Styles.container}>
      <h3>Your Order</h3>
      <div className={Styles.listDiv}>
        {props.cartItem.map((items) => (
          <div className={Styles.mapDiv} key={`${items.id}${items.size}`}>
            <img className={Styles.img} src={items.url} alt={items.name} />
            <p className={Styles.mapText}>
              {items.name} {items.size} ⨯ {items.count}:{" "}
              {items.price * items.count}kr{" "}
            </p>
          </div>
        ))}
      </div>
      <h4>Your total price is: {props.totalPrice}kr</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    totalPrice: state.crt.totalPrice,
    cartItem: state.crt.cartItem,
  };
};

export default connect(mapStateToProps, null)(CheckoutList);
