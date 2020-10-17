import React from "react";
import UpperImages from "./UpperImages/UpperImages";
import classes from "./Process.module.css";
import MiddleText from "./MiddleText/MiddleText";
import ImageSlider from "../../UI/Slide/Slide"
const Process = (props) => {
  return (
    <div className={classes.Process}>
      <UpperImages />
      <MiddleText />
      <ImageSlider products={props.products}/>
    </div>
  );
};

export default Process;
