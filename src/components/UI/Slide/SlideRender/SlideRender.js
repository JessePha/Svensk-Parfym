import React from "react";
import classes from "./SlideRender.module.css";

const SlideRender = (props) => {
  return (
    <div className={props.switchImage ? classes.render : classes.reRender}>
      <img src={props.data} alt="perfume"></img>
    </div>
  );
};

export default SlideRender;
