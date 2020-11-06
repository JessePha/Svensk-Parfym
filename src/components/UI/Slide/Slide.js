import React from "react";
import classes from "./Slide.module.css";
import SlideRender from "./SlideRender/SlideRender";
let Slide = (props) => {
  console.log(props.switchImage);
  let render = props.currentImages.map((product, index) => {
    return <SlideRender switchImage={props.switchImage} data={product} key={index} />;
  });

  let availableItems = null;
  if (props.products.length > 0) {
    availableItems = <div className={classes.Slide}>{render}</div>;
  } else {
    availableItems = (
      <div style={{ color: "white" }}>
        <p>No items found</p>
      </div>
    );
  }
  return availableItems;
};

export default Slide;
