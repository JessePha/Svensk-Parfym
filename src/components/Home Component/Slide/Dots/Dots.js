import classes from "../Dots/Dots.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";

const Dots = (props) => {
  return (
    <button
      className={classes.dots}
      id={classes.soloDot}
      value={props.data * props.shownData}
      key={props.index}
    >
      <FontAwesomeIcon icon={faDotCircle} />
    </button>
  );
};

export default Dots;
