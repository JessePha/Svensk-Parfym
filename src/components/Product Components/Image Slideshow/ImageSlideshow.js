import React from "react";
import classes from "./productImage.module.css";
let ImageSlideShow = ({ viewProduct }) => {
  return (
    <div className={classes.productImage}>
      <img
        src={viewProduct.url}
        alt="perfume"
      />
    </div>
  );
};

export default ImageSlideShow;
