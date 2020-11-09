import React from "react";
import { Link } from "react-router-dom";
import "./Logo.module.css";
import classes from "./Logo.module.css";

const logo = ({toggleSidebar, logo}) => {
  return (
    <div className={classes.Logo}>
      <Link to="/">
        <img src={logo} alt="Logo" onClick = {toggleSidebar} />
      </Link>
    </div>
  );
};

export default logo;
