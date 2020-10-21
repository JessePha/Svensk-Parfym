import React from "react";
import img1 from "../../../../shared/Images/Ny_SP.png";
import classes from "./UpperImages.module.css";
const UpperImages = () => {
  return (
    <div className={classes.UpperImages}>
      <img src={img1} alt="img" />
    </div>
  );
};

export default UpperImages;
