import React from "react";
import "./Burger.css";

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
