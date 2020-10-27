import React from "react";
import classes from "./SlideRender.module.css";

const SlideRender = (props) => {
  return (
    <div className={classes.render}>
      <div>
        <img src={props.data.url} alt="perfume"></img>
      </div>
    </div>
  );
};

export default SlideRender;
