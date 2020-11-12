import React from "react";
import classes from "./ShopRender.module.css";
import { BiShoppingBag } from "react-icons/bi";

const ShopRenderForSet = ({
  img,
  price,
  name,
  moreInfo,
  addToCart,
  disable,
  outOfStock,
  disableButton,
}) => {
  return (
    <div className={classes.container}>
      <button
        className={classes.DirectBuy}
        onClick={addToCart}
        disabled={disable || disableButton || outOfStock}
      >
        <BiShoppingBag className={classes.Bag} />
      </button>
      <img src={img} alt="perfume" onClick={moreInfo} />
      <div className={classes.productInfo}>
        <h3>{name}</h3>
        {disable || outOfStock ? <p>Out of stock</p> : <p>{price} KR</p>}
        <div className={classes.details}>
          <button
            style={{ border: "none", background: "none" }}
            onClick={moreInfo}
          >
            View detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopRenderForSet;
