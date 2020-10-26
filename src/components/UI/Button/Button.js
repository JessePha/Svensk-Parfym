import React from "react";
import './Button.css'
const Button = ({text,style,click}) => {
  return (
    <button
      className={style}
      onClick={click}
    >
      {text}
    </button>
  );
};

export default Button;
