import React from "react";
import classes from "./SlideRender.module.css";

const SlideRender = (props) => {
  const cssClasses = [!props.switchingPage ? classes.render : classes.switchS];
  return (
    <div className={cssClasses}>
      <div>
        <img src={props.data.img} alt="perfume"></img>
      </div>
    </div>
  );
};

export default SlideRender;
