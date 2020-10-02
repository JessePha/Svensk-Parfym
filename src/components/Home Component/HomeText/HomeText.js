import classes from "./HomeText.module.css";
import React from "react";

const Header = (props) => {
  return (
    <div className={classes.HomeText}>
      <p>ARTISTERY </p>
      <p>INSPIRED BY SWEDEN</p>
      <p>MADE IN SWEDEN</p>
      <p className={classes.citation}>
        För att citera Antoine de Saint-Exupéry: “Perfection is achieved, not
        when there is nothing left to add, but when there is nothing left to
        take away.”
      </p>
    </div>
  );
};

export default Header;
