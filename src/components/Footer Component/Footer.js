import React from "react";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.CopyRight}>
        <p>Copyright © 2020</p>
      </div>
      <ul className={classes.FooterInfo}>
        <li>POLICY</li>
        <li>CONTACT</li>
        <li>INSTAGRAM</li>
      </ul>
    </footer>
  );
};

export default Footer;
