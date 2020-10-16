import React from "react";
import UpperImages from "./UpperImages/UpperImages";
import classes from "./Process.module.css";
import MiddleText from "./MiddleText/MiddleText";
import BottomImages from "./BottomImages/BottomImages";
const Process = (props) => {
  return (
    <div className={classes.Process}>
      <UpperImages />
      <MiddleText />
      <BottomImages />
    </div>
  );
};

export default Process;
