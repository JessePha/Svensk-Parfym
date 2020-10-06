import React from "react";
import classes from "./LoadingDots.module.css";
import ReactLoading from "react-loading";
let LoadingDots = ({ loading }) => {
  console.log(loading);
  return (
    <div>
      {loading ? (
        <ReactLoading
          type={"spinningBubbles"}
          color={"rgb(220, 181, 72)"}
          height={"10%"}
          width={"10%"}
        />
      ) : null}
    </div>
  );
};
export default LoadingDots;
