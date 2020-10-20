import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./ErrorMessage.module.css";
const ErrorMessage = (props) => {
  let closeMessage = () => {
    props.setError(true);
  };

  return (
    <div>
      <Backdrop open={props.error} closed={props.setError} />
      <div
        style={props.error ? { display: "block" } : { display: "none" }}
        className={classes.ErrorMessage}
      >
        <span onClick={closeMessage}></span>
        <div className={classes.Message}>
          <p>Error</p>
          <p>Something went wrong</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
