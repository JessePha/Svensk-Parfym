import classes from "../Header.module.css";
import React from "react";

const Header = (props) => {
  return (
    <div className={classes.Header}>
      <p>FRAGRANCE </p>
      <p>ARTISTERY </p>
      <p>INSPIRED BY SWEDEN</p>
      <p>MADE IN SWEDEN</p>
    </div>
  );
};

export default Header;
