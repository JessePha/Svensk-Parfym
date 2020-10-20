import classes from "../Dots/Dots.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Dots = (props) => {
  return (
    <button
      className={classes.dots}
      id={classes.soloDot}
      value={props.data * props.shownData}
    >
      <FontAwesomeIcon icon={faCircle} style={{ pointerEvents: "none" }} />
    </button>
  );
};

export default Dots;
