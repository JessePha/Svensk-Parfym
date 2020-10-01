import classes from "../Dots/Dots.module.css";
import React from "react";

const Dots = (props) => {
  return (
    <button
      value={props.data * props.shownData}
      id={classes.soloDot}
      key={props.index}
    >
      {props.data}
    </button>
  );
};

export default Dots;
