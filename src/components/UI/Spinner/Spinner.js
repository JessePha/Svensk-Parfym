import React from "react";
import classes from "./Spinner.module.css";

const Spinner = ({ loading }) => {
  return (
    <div className={classes.Spinner}>
      {loading ? (
        <div className={classes.ldsring}>
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
