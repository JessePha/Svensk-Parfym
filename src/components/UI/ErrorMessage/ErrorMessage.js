import React from "react";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <HiX className={classes.Close} onClick={closeMessage}></HiX>
        </Link>
        <div className={classes.Message}>
          <p>Error</p>
          <p>Something went wrong</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
