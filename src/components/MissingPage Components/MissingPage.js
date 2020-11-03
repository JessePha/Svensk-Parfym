import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MissingPage.module.css";
const MissingPage = () => {
  return (
    <div className={classes.MissingPage}>
      <div className={classes.Header}>
        <h1>404</h1>
        <h4>Page not found</h4>
      </div>
      <div className={classes.Options}>
        <NavLink to="/">HomePage</NavLink>
        <NavLink to="Fragrance">Fragrance</NavLink>
        <NavLink to="Invent">Invent</NavLink>
        <NavLink to="Process">Process</NavLink>
      </div>
    </div>
  );
};

export default MissingPage;
