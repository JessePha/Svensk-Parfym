import React from "react";
import { BiErrorCircle } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import classes from "./message.module.css";
import Button from '../Button/Button'

const message = (props) => {
  return (
    <div className={props.isClick ? classes.Message : classes.HideMessage}>
      {props.isError ? (
        <AiOutlineCheckCircle className={classes.Icon} />
      ) : (
        <BiErrorCircle className={classes.Icon} />
      )}
      <p>{props.text}</p>
      < Button  text = {props.buttonText} click = {props.closeInfo} style = "messageButton"/>
    </div>
  );
};

export default message;
