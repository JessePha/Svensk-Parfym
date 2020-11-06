import React, { useState, useEffect } from "react";
import Price from "../../UI/Price/Price";
import classes from "./ProductRender.module.css";
import { BiShoppingBag } from "react-icons/bi";
const ProductRender = (props) => {
  const [activea, setActiveA] = useState(true);
  const [activeb, setActiveB] = useState(false);
  const changeActiveA = () => {
    setActiveA(!activea);
    setActiveB(false);
  };
  const changeActiveB = () => {
    setActiveB(!activeb);
    setActiveA(false);
  };
  useEffect(() => {
    props.setDefault();
  }, []);
  return (
    <div className={classes.SelectOptions}>
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
      <div className={classes.price}>
        <Price price={props.price} value="Kr" />
      </div>
      <div className={classes.AddToCartButtonContain2}>
        <button
          className={classes.AddToCartButton}
          onClick={() => props.addToCart({ data: props.chosenItem, amount: 1 })}
        >
          <BiShoppingBag className={classes.ShoppingBag} />
          <p>Buy</p>
        </button>
      </div>
    </div>
  );
};

export default ProductRender;
