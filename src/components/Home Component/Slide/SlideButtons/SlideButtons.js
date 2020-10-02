import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./SlideButtons.module.css";
import React from "react";

const LeftButton = (props) => {
  return (
    <button
      type={"button"}
      value={props.currentPage - props.shownData}
      className={classes.SlideButtons}
    >
      <FontAwesomeIcon icon={faArrowLeft} style={{ pointerEvents: "none" }} />
    </button>
  );
};
const RightButton = (props) => {
  return (
    <button
      type={"button"}
      value={props.currentPage + props.shownData}
      className={classes.SlideButtons}

    >
      <FontAwesomeIcon icon={faArrowRight} style={{ pointerEvents: "none" }} />
    </button>
  );
};

export { RightButton, LeftButton };
