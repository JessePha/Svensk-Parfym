import classes from "../Dots/Dots.module.css";
import React from "react";
const Dots = (props) => {
  return (
    <button
      className={classes.dots}
      id={classes.soloDot}
      value={props.data * props.shownData}
      key={props.index}
    >

    </button>
  );
};

export default Dots;
