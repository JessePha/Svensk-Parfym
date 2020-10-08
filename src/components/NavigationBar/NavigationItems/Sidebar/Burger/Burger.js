import React from "react";
import classes from  "./Burger.module.css";

const Burger = (props) => {
  return (
    <div className= {classes.BurgerWrapper}>
      <div className={classes.Burger} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Burger;
