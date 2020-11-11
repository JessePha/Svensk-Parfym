import React from "react";
import classes from "./CartProducts.module.css";
import { connect } from "react-redux";
import * as actionCreator from "../../../store/actionFunc/indexAction";
import CheckoutButton from "../../UI/CheckoutButton/CheckoutButton"
import CartRender from "./CartRender/CartRender";

const CartProducts = ({itemInCart,totalPrice,addItem,minusItem,removeItem, closed}) => {
  return (
    <div className={classes.CartProducts}>
      {itemInCart.map((item, index) => (
        <CartRender
          key={index}
          img={item.url}
          name={item.name}
          amount={item.count}
          price={item.price}
          size={item.size}
          stock={item.stock}
          add={addItem}
          minus={minusItem}
          remove={removeItem}
        />
      ))}
      <h3>Total Price: {totalPrice} Kr</h3>
      <CheckoutButton closed={closed}/>
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
    addItem: (name, size, stock) => dispatch(actionCreator.addItem(name, size, stock)),
    minusItem: (name, size) => dispatch(actionCreator.minusItem(name, size)),
    removeItem: (name, price, size) => dispatch(actionCreator.removeItem(name, price, size)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartProducts);
