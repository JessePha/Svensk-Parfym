import React from "react";
import classes from "./Spinner.module.css";

const Spinner = ({ loading, style }) => {
  let spinner = null;
  if (style === "black") {
    spinner = classes.black;
  } else {
    spinner = classes.white;
  }
  return (
    <div className={classes.Spinner}>
      {loading ? (
        <div className={`${classes.ldsring} ${spinner}`}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : null}
    </div>
  );
};

export default Spinner;
