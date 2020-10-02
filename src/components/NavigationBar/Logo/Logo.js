import React from "react";
import Logo from "../../../shared/Images/newLogo.jpg";
import { Link } from "react-router-dom";
import "./Logo.css";

const logo = (props) => {
  return (
    <div className="Logo" style={{ height: props.height }}>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
    </div>
  );
};

export default logo;
