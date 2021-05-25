import React, { useState } from "react";
import Price from "../../UI/Price/Price";
import classes from "./ProductRender.module.css";
import { BiShoppingBag } from "react-icons/bi";
const ProductRender = (props) => {
  const [activea, setActiveA] = useState(true);
  const [activeb, setActiveB] = useState(false);
  const changeActiveA = () => {
    setActiveA(true);
    setActiveB(false);
  };
  const changeActiveB = () => {
    setActiveB(true);
    setActiveA(false);
  };
  let form = null;
  if (
    props.viewProduct.name === "Discovery Set 1" ||
    props.viewProduct.name === "Discovery Set 2" ||
    props.viewProduct.name === "Discovery Set 3"
  ) {
    form = (
      <div className={classes.SelectForm}>
        <div className={classes.SetOption}>
          <label>
            <input
              onChange={props.selectedSize}
              onClick={() => changeActiveA()}
              value={props.viewProduct.size}
              type="checkbox"
              checked={activea}
            ></input>
            <span>{props.viewProduct.size}</span>
          </label>
        </div>
      </div>
    );
  } else {
    form = (
      <div className={classes.SelectForm}>
        <div>
          <label>
            <input
              onChange={props.selectedSize}
              onClick={() => changeActiveA()}
              value={props.viewProduct.size[0]}
              type="checkbox"
              checked={activea}
            ></input>
            <span>{props.viewProduct.size[0]}</span>
          </label>
        </div>
        <div>
          <label>
            <input
              onChange={props.selectedSize}
              onClick={() => changeActiveB()}
              value={props.viewProduct.size[1]}
              type="checkbox"
              checked={activeb}
            ></input>
            <span>{props.viewProduct.size[1]}</span>
          </label>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.SelectOptions}>
      {form}
      <div className={classes.price}>
        {<Price price={props.price} value="SEK" />}
      </div>
      <div className={classes.AddToCartButtonContain2}>
        <button
          className={classes.AddToCartButton}
          onClick={() => props.addToCart({ data: props.chosenItem, amount: 1 })}
          disabled= {props.disableButton}
        >
          <BiShoppingBag className={classes.ShoppingBag} />
          <p>Buy</p>
        </button>
      </div>
    </div>
  );
};

export default ProductRender;
