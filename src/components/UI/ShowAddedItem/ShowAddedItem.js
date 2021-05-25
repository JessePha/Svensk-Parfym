import React from "react";
import classes from "./ShowAddedItem.module.css";

const showAddedItem = ({ url, name, price, size }) => {
  return (
    <div className={classes.ShowAddedItem}>
      <h4>Item added to cart</h4>
      <div>
        <div>
          <img src={url} alt="perfume"/>
        </div>
        <div>
          <p>{name}</p>
          <p>{size}</p>
          <p>{`${price} SEK`}</p>
        </div>
      </div>
    </div>
  );
};

export default showAddedItem;
