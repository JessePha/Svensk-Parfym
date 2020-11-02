import React from "react";
import classes from "./ShowOutOfStock.module.css";

const ShowOutOfStock = (props) => {
  return (
    <div className={classes.ShowAddedItem}>
      <h4>Out of stock</h4>
      <div>
        <div>
          <img src={props.url} alt="perfume" />
        </div>
        <div>
          <p>{props.name}</p>
          <p>{props.size}</p>
          <p>{`${props.price} Kr`}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowOutOfStock;
