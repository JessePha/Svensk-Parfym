import React, { useState } from "react";
import { useParams } from "react-router";
import classes from "./ProductView.module.css";
import { connect } from "react-redux";
import { addItemToCart } from "../../store/actionFunc/indexAction";
import Description from "../../components/Product Components/Description/Description";
import ImageSlideShow from "../../components/Product Components/Image Slideshow/ImageSlideshow";
import Select from "../../components/Product Components/Select/Select";
import Spinner from "../../components/UI/Spinner/Spinner";

const ProductView = (props) => {
  let { name } = useParams();
  let item = [];
  if (props.products) {
    item = props.products.filter((product) => product.name === name);
  }
  let [price, setPrice] = useState(0);
  let [amount, setAmount] = useState(0);
  const [selectSize, setselectSize] = useState();
  const [showPrice, setShowPrice] = useState(false);
  const [viewProduct] = useState(...item.slice());
  const [chosenItem, setChosenItem] = useState(null);
  const [maxItems, setMaxItems] = useState(false);
  const addItem = () => {
    if (amount < chosenItem.stock) {
      setAmount(amount + 1);
    } else if (amount >= chosenItem.stock) {
      setMaxItems(true);
    }
  };
  const subtractItem = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
    if (amount === chosenItem.stock - 1) {
      setMaxItems(false);
    }
  };
  const selectedSize = (e) => {
    setselectSize(e.target.value);
    if (e.target.value === "Select size") {
      setPrice();
      setShowPrice(false);
    }
    if (e.target.value === viewProduct.size[0]) {
      setPrice(viewProduct.price[1]);
      setShowPrice(true);
      setChosenItem({
        ...viewProduct,
        price: viewProduct.price[1],
        size: e.target.value,
      });
      setAmount(0);
    }
    if (e.target.value === viewProduct.size[1]) {
      setPrice(viewProduct.price[0]);
      setShowPrice(true);
      setChosenItem({
        ...viewProduct,
        price: viewProduct.price[0],
        size: e.target.value,
      });
      setAmount(0);
    }
  };
  let content = (
    <>
      <Spinner />
    </>
  );
  if (item) {
    content = (
      <>
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
            subtractItem={subtractItem}
            max={maxItems}
          />
        </div>
      </>
    );
  }
  return <div className={classes.ProductView}>{content}</div>;
};

const mapStateToProps = (state) => {
  return {
    products: state.prd.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item, amount) => dispatch(addItemToCart(item, amount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);
