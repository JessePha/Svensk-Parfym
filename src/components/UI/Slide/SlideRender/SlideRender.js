import React from "react";
import classes from "./SlideRender.module.css";

const SlideRender = (props) => {
  console.log(props.switchingImage);
  return (
    <div
      className={
        !props.switchingImage ? classes.SlideCurrent : classes.SlideSwitch
      }
    >
      <div>
        <img src={props.data} alt="perfume"></img>
      </div>
    </div>
  );
};

export default SlideRender;
