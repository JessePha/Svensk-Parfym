import React from "react";
import CartItem from "./CartRender/CartRender";
import classes from './CartProducts.module.css'
import {connect} from 'react-redux'
import * as actionType from "../../../store/actionFunc/actionType";

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
          add = {props.addItem}
          minus = {props.minusItem}
          remove = {props.removeItem}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    itemInCart: state.crt.cartItem
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addItem: (name, size) =>
      dispatch({
        type: actionType.ADD_ITEM,
        payload: {
          name: name,
          size: size,
        },
      }),
    minusItem: (name, size) =>
      dispatch({
        type: actionType.MINUS_ITEM,
        payload: {
          name: name,
          size: size,
        },
      }),
    removeItem: (name, price, size) =>
      dispatch({
        type: actionType.REMOVE_ITEM,
        payload: {
          name: name,
          price: price,
          size: size,
        },
      }),
  };
};



export default connect(mapStateToProps,mapDispatchToProps)(CartProducts);
