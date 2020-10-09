import React, { useState } from "react";
import { useParams } from "react-router";
import classes from "./ProductView.module.css";
import { connect } from "react-redux";
import * as actionType from "../../store/actionFunc/actionType";
import Description from "../../components/Product Components/Description/Description";
import ImageSlideShow from "../../components/Product Components/Image Slideshow/ImageSlideshow";
import Select from "../../components/Product Components/Select/Select";

const ProductView = (props) => {
  let { name } = useParams();
  let [price, setPrice] = useState(0);
  let [amount, setAmount] = useState(0);
  let item = props.products.filter((product) => product.name === name);
  const [selectSize, setselectSize] = useState();
  const [showPrice, setShowPrice] = useState(false);
  const [viewProduct] = useState(...item);
  const [chosenItem, setChosenItem] = useState();

  const addItem = () => {
    setAmount(amount + 1);
  };

  const minusItem = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    } else {
      return;
    }
  };

  const selectedSize = (e) => {
    let temp = { ...viewProduct };

    setselectSize(e.target.value);
    if (e.target.value === "Select size") {
      setPrice();
      setShowPrice(false);
    }
    if (e.target.value === viewProduct.size[0]) {
      setPrice(850);
      setShowPrice(true);
      setChosenItem({ ...temp, price: 850, size: e.target.value });
    }
    if (e.target.value === viewProduct.size[1]) {
      setPrice(175);
      setShowPrice(true);
      setChosenItem({ ...temp, price: 175, size: e.target.value });
    }
  };

  return (
    <div className={classes.ProductView}>
      <ImageSlideShow viewProduct={viewProduct} />
      <div className={classes.Options}>
        <Description viewProduct={viewProduct} />
        <Select
          viewProduct={viewProduct}
          selectSize={selectSize}
          selectedSize={selectedSize}
          showPrice={showPrice}
          price={price}
          amount={amount}
          chosenItem={chosenItem}
          addToCart={props.addToCart}
          addItem={addItem}
          minusItem={minusItem}
        />
        </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.prd.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item, amount) =>
      dispatch({
        type: actionType.ADD_ITEM_TO_CART,
        payload: {
          product: item,
          amount: amount,
        },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);
