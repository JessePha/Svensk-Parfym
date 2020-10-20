import React from "react";
import classes from "./SlideRender.module.css";

const SlideRender = (props) => {
  const cssClasses = [!props.switchingPage ? classes.render : classes.switch];
  return (
    <div className={cssClasses}>
      <div>
        <img src={props.data.url} alt="perfume"></img>
      </div>
    </div>
  );
};

export default SlideRender;
