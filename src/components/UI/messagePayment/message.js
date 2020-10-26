import React from "react";
import Button from "../Button/Button";
import { BiErrorCircle } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import classes from "./message.module.css";

const message = ({ text, isClick, isError, buttonText, closeInfo }) => {

  return (
    <div className={isClick ? classes.Message : classes.HideMessage}>
      {isError ? (
        <AiOutlineCheckCircle className={classes.Icon} />
      ) : (
        <BiErrorCircle className={classes.Icon} />
      )}
      <p>{text}</p>
      <div>
        <Button text={buttonText} click ={closeInfo} style = "messageButton" />
      </div>
    </div>
  );
};

export default message;
