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
        <NavLink to="/">HOMEPAGE</NavLink>
        <NavLink to="Fragrance">FRAGRANCE</NavLink>
        <NavLink to="Invent">INVENT</NavLink>
        <NavLink to="Process">PROCESS</NavLink>
      </div>
    </div>
  );
};

export default MissingPage;
