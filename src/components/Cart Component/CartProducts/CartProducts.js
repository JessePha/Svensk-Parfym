import React from "react";
import CartItem from "./CartRender/CartRender";
import classes from "./CartProducts.module.css";
import { connect } from "react-redux";
import * as actionCreator from "../../../store/actionFunc/indexAction";
import CheckoutButton from "../../UI/CheckoutButton/CheckoutButton"

const CartProducts = (props) => {
  return (
    <div className={classes.CartProducts}>
      {props.itemInCart.map((item) => (
        <CartItem
          key={item.name + item.size}
          img={item.url}
          name={item.name}
          amount={item.count}
          price={item.price}
          size={item.size}
          add={props.addItem}
          minus={props.minusItem}
          remove={props.removeItem}
        />
      ))}
      <h3>Total Price: {props.totalPrice} Kr</h3>
      <CheckoutButton closed={props.closed}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.prd.products,
    itemInCart: state.crt.cartItem,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (name, size) => dispatch(actionCreator.addItem(name, size)),
    minusItem: (name, size) => dispatch(actionCreator.minusItem(name, size)),
    removeItem: (name, price, size) => dispatch(actionCreator.removeItem(name, price, size)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartProducts);
