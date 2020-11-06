import React from "react";
import Logo from "../../../shared/Images/newLogo.jpg";
import { Link } from "react-router-dom";
import "./Logo.module.css";
import classes from "./Logo.module.css";

const logo = ({toggleSidebar}) => {
  return (
    <div className={classes.Logo}>
      <Link to="/">
        <img src={Logo} alt="Logo" onClick = {toggleSidebar} />
      </Link>
    </div>
  );
};

export default logo;
