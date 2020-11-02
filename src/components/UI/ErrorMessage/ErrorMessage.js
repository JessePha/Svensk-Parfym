import React from "react";
import { HiX } from "react-icons/hi";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./ErrorMessage.module.css";

const ErrorMessage = (props) => {
  let closeMessage = () => {
    props.setError(false);
  };

  return (
    <div>
      <Backdrop open={props.error} closed={closeMessage} />
      <div
        style={props.error ? { display: "block" } : { display: "none" }}
        className={classes.ErrorMessage}
      >
        <HiX className={classes.Close} onClick={closeMessage}></HiX>
        <div className={classes.Message}>
          <p>Error</p>
          <p>Something went wrong</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
