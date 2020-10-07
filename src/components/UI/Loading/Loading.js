import React from "react";
import classes from "./Loading.module.css";
let Loading = ({ loading }) => {
  console.log(loading);
  return (
    <div>
      {loading ? (
        <div className={classes.Roller}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : null}
    </div>
  );
};
export default Loading;
