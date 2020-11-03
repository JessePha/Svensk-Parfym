import classes from "./ProcessBar.module.css";
import React from "react";

let ProcessBar = (props) => {
  return (
    <div>
      <div className={classes.ProcessWrapper}>
        <div id={classes.ProgressBarContainer}>
          <ul>{props.dots}</ul>
          <div id={classes.Line}>
            <div
              id={classes.LineProcess}
              style={{ width: props.lineFill + "%"}}
            ></div>
          </div>
        </div>
        <div id={classes.ProgressContentSection}>
          <div className={classes.SectionContentDiscoveryActive}>
            {props.data[0]}
          </div>

          <div className={classes.SectionContentDiscoveryActive}>
            {props.data[1]}
          </div>
          <div className={classes.SectionContentDiscoveryActive}>
            {props.data[2]}
          </div>
          <div className={classes.SectionContentDiscoveryActive}>
            {props.data[3]}
          </div>
          <div className={classes.SectionContentDiscoveryActive}>
            {props.data[4]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessBar;
