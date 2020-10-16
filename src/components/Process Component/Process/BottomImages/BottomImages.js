import React from "react";
import img1 from "../../../../shared/Images/ljus.png"
import classes from "./BottomImages.module.css";
const BottomImages = (props) => {
  return (
    <div className={classes.BottomImages}>
      <img src={img1} alt="img" />
      <img src={img1} alt="img" />
      <img src={img1} alt="img" />
      <img src={img1} alt="img" />
    </div>
  );
};

export default BottomImages;
