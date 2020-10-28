import React from "react";
import { BiErrorCircle } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import classes from "./message.module.css";
import { Link } from "react-router-dom";

const message = (props) => {
  return (
    <div className={props.isClick ? classes.Message : classes.HideMessage}>
      {props.isError ? (
        <AiOutlineCheckCircle className={classes.Icon} />
      ) : (
        <BiErrorCircle className={classes.Icon} />
      )}
      <p>{props.text}</p>
      <div>
        <Link to="/purchase">
          Continue
        </Link>
      </div>
    </div>
  );
};

export default message;
