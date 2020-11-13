import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import classes from "./Description.module.css";
let Description = ({ viewProduct }) => {
  let [showMore, setShowMore] = useState(false);
  const show = () => {
    setShowMore(!showMore);
  };
  return (
    <div className={showMore ? classes.DescWithText : classes.Desc}>
      <div className={classes.viewMoreButton} onClick={() => show()}>
        <BsArrowRight
          style={{
            transition: "0.5s ease-out",
            transform: showMore ? "rotate(90deg)" : null,
          }}
          className={classes.Arrow}
        />
        <div>Description</div>
      </div>
      {showMore ? (
        <div className={classes.DescText}>{viewProduct.description}</div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Description;
