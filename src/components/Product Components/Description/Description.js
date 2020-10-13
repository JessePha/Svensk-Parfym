import React, { useState } from "react";
import classes from "./Description.module.css";
let Description = ({ viewProduct }) => {
  let [showMore, setShowMore] = useState(false);
  let showMorefun = () => {
    setShowMore(true);
  };
  let viewMoreButton = (
    <div>
      {showMore ? null : (
        <button className={classes.viewMoreButton} onClick={showMorefun}>
          View More
        </button>
      )}
    </div>
  );
  let media = window.matchMedia("min-width: 600px")
  return (
    <div className={classes.Desc}>
      <h3 style={{ textAlign: "center" }}>{viewProduct.name}</h3>
      <div>
        {showMore || media ? (
          <p>{viewProduct.description}</p>
        ) : (
          <p>{viewProduct.description.substring(0, 200)}</p>
        )}
      </div>
      {viewMoreButton}
    </div>
  );
};
export default Description;
