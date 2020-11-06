import React from "react";
import classes from "./ShopRender.module.css";
import { BiShoppingBag } from "react-icons/bi";

const Perfume = ({ img, price, name, description, moreInfo, addToCart }) => {
  return (
    <div className={classes.container}>
      <button className = {classes.DirectBuy} onClick = {addToCart}>
        <BiShoppingBag  className = {classes.Bag}/>
      </button>
      <img src={img} alt="perfume" onClick={moreInfo}></img>
      <div className={classes.productInfo}>
        <h3>{name}</h3>
        <p>
          {price[0]} - {price[1]} KR
        </p>
        <p>{description}</p>
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


export default Perfume;
