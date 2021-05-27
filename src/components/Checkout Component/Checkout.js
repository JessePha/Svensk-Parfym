import React from "react";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import Styles from "../Checkout Component/Checkout.module.css";
import { connect } from "react-redux";
import classes from "../Checkout Component/Checkout.module.css";
import { useHistory } from "react-router-dom";
import { removeAllItemsFromCart } from "../../store/actionFunc/cartAction";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHED_KEY);

const Checkout = ({
  data,
  itemInCart,
  totalPrice,
  removeItemsFromCart,
  url,
}) => {
  let history = useHistory();
  const goTo = () => {
    history.push("/Fragrance");
  };

  let checkOut = (
    <div className={classes.EmptyCart}>
      <h3>Empty cart</h3> <button onClick={() => goTo()}>Return to shop</button>
    </div>
  );
  if (itemInCart.length > 0) {
    checkOut = (
      <div>
        <CheckoutForm
          countries={data}
          totalPrice={totalPrice}
          itemInCart={itemInCart}
          pictures={url}
          removeItemsFromCart={removeItemsFromCart}
        />
      </div>
    );
  }
  return (
    <div className={Styles.Checkout}>
      <Elements stripe={stripePromise}>{checkOut}</Elements>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    totalPrice: state.crt.totalPrice,
    itemInCart: state.crt.cartItem,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeItemsFromCart: () => dispatch(removeAllItemsFromCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
