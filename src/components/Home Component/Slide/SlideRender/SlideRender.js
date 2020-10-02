import React from "react";
import classes from "./SlideRender.module.css";

const Data = (props) => {
  return (
    <div className={classes.render}>
    <div>
      <img src={props.data.img} alt="perfume"></img>
      </div>
      <h3>{props.data.name}</h3>
      <p>{props.data.descripition}</p>
      <p>{props.data.price} Kr</p>
      <button className={classes.toCartButton} onClick={props.moreInfo}>Add to cart</button>
    </div>
  );
};

export default Data;
