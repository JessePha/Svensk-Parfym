import classes from "./ProcessBar.module.css";
import React from "react";

let ProcessBar = (props) => {
  let text = props.data;
  let ProcessBar = null;
  if (text.length > 0) {
    ProcessBar = text.map((content, index) => {
      return (
        <div key={index} id={classes.ProgressContentSection}>
          {content}
        </div>
      );
    });
  }
  return (
    <div>
      <div className={classes.ProcessWrapper}>
        <div className={classes.ProgressBarContainer}>
          <div className={classes.ButtonContainer}>
            <ul>{props.dots}</ul>
          </div>
          <div id={classes.Line}>
            <div
              id={classes.LineProcess}
              style={{ width: props.lineFill + "%" }}
            ></div>
          </div>
        </div>
        {ProcessBar}
      </div>
    </div>
  );
};

export default ProcessBar;
