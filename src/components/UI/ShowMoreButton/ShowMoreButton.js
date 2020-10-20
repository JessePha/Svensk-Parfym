import React from "react";
import classes from "./ShowMoreButton.module.css";
const ShowMoreButton = (props) => {
  let showMoreFunction = () => {
    props.setShowMore(true);
  };
  return (
    <div className={classes.showMoreButton}>
      {props.showMore ? null : (
        <button className={classes.viewMoreButton} onClick={showMoreFunction}>
          Read More
        </button>
      )}
    </div>
  );
};

export default ShowMoreButton;
