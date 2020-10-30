import React from "react";
import classes from "./Purchase.module.css";
import Message from "./Message/Message";
import OrderDetails from "./OrderDetails/OrderDetails";
import OrderSummary from "./OrderSummary/OrderSummary";
import { connect } from "react-redux";
const PurchasePage = (props) => {
    return (
      <div className={classes.PurchaseConfirmed}>
        <Message />
        <OrderDetails personalData={props.personalData} />
        <OrderSummary
          itemInCart={props.itemInCart}
          totalPrice={props.totalPrice}
        />
      </div>
    );
  }

const mapStateToProps = (state) => {
  return {
    totalPrice: state.crt.totalPrice,
    itemInCart: state.crt.cartItem,
  };
};

export default connect(mapStateToProps, null)(PurchasePage);
