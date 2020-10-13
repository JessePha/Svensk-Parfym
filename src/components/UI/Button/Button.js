import React from "react";
import "./Button.css";
const Button = (props) => {
  return (
    <button
      className={props.style}
      disabled={!props.disable}
      disable={props.max}
      onClick={props.click}
    >
      {props.text}
    </button>
  );
};

export default Button;
