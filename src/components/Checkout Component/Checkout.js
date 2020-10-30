import React from "react";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import CheckoutList from "./CheckoutList/CheckoutList";
import Styles from "../Checkout Component/Checkout.module.css";
import { connect } from "react-redux";
import classes from "../Checkout Component/Checkout.module.css";
import { useHistory } from "react-router-dom";

const Checkout = ({ data, itemInCart, totalPrice }) => {
  let history = useHistory();
  const goTo = () =>{
    history.push("/Fragrance")
  }

  let checkOut = (
    <div className={classes.EmptyCart}>
      <h3>Empty cart</h3> <button onClick = {() => goTo()}>Return to shop</button>
    </div>
  );
  if (itemInCart.length > 0) {
    checkOut = (
      <>
        <CheckoutForm
          countries={data}
          totalPrice={totalPrice}
          itemInCart={itemInCart}
        />
        <CheckoutList />
      </>
    );
  }
  return <div className={Styles.Checkout}>{checkOut}</div>;
};

const mapStateToProps = (state) => {
  return {
    totalPrice: state.crt.totalPrice,
    itemInCart: state.crt.cartItem,
  };
};

export default connect(mapStateToProps, null)(Checkout);
