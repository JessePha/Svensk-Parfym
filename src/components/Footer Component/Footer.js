import React from "react";
import {Link} from "react-router-dom"
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.CopyRight}>
        <p>Copyright © 2020</p>
      </div>
      <ul className={classes.FooterInfo}>
        <Link className={classes.Link} to="/policy">POLICY</Link>
        <li>CONTACT</li>
        <li>INSTAGRAM</li>
      </ul>
    </footer>
  );
};

export default Footer;
