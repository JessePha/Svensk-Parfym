import React from "react";
import classes from "./SlideRender.module.css";

const SlideRender = (props) => {
  const cssClasses = [!props.switchingPage ? classes.render : classes.switchS];
  return (
    <div className={cssClasses}>
      <div>
        <img src={props.data.img} alt="perfume" onClick={props.moreInfo}></img>
      </div>
      <h3>{props.data.name}</h3>
      <p>{props.data.descripition}</p>
      <p>{props.data.price} Kr</p>
      <button className={classes.toCartButton} onClick={props.moreInfo}>
        View detail
      </button>
    </div>
  );
};

export default SlideRender;
