import React from "react";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.CopyRight}>
        <p>Copyright © 2020</p>
      </div>
      <ul className={classes.FooterInfo} style={{listStyle:"none"}}>
        <li>POLICY</li>
        <li>CONTACT</li>
        <li>INSTAGRAM</li>
      </ul>
    </div>
  );
};

export default Footer;
