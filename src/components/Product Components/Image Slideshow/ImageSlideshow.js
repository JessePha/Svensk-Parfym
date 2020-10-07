import React from "react";
import classes from "./ImageSlideshow.module.css";
let ImageSlideShow = ({viewProduct}) => {
  return (
    <div className={classes.Image}>
      <img
        src={viewProduct.img}
        alt="perfume"
      />
    </div>
  );
};

export default ImageSlideShow;
