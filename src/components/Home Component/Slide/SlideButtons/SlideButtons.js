import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./SlideButtons.module.css"
import React from "react";

const LeftButton = (props) => {
  return (
    <button
      id={"left"}
      type={"button"}
      value={props.currentPage - props.shownData}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  );
};
const RightButton = (props) => {
  return (
    <button
      id={"rigth"}
      type={"button"}
      value={props.currentPage + props.shownData}
    >
      <FontAwesomeIcon icon={faArrowRight} />
    </button>
  );
};

export { RightButton, LeftButton };
