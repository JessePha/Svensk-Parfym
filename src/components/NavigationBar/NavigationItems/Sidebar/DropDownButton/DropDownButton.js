import React from "react";
import "./DropDownButton.css";

const Burger = (props) => {
  return (
    <div className="BurgerWrapper">
      <div className="Burger" onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Burger;
