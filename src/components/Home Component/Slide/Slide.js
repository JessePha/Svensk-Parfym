import React from "react";
import SlideButtons from "./SlideButtons/SlideButtons";
import classes from "./Slide.module.css";

let Slide = (props) => {
  return (
    <div classes={classes.Slide}>
    <SlideButtons/>
    </div>
  );
};

export default Slide;
