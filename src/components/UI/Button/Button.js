import React from "react";
import classes from "./Button.css"
const Button = (props) => {
  return (
    <div>
      <button className = {props.style} disabled = {!props.disable} style = {classes.Button} onClick={props.click}>{props.text}</button>
    </div>
  );
};

export default Button;
