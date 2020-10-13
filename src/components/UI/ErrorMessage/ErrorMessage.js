import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <span onClick={closeMessage}>
          <FontAwesomeIcon
            className={classes.Close}
            icon={faWindowClose}
          ></FontAwesomeIcon>
        </span>
        <div className={classes.Message}>
          <p>Error</p>
          <p>Something went wrong</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
