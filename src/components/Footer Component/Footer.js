import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer className={classes.Footer}>
      <div className={classes.CopyRight}>
        <p>Copyright © {year}</p>
      </div>
      <ul className={classes.FooterInfo}>
        <Link className={classes.Link} to="/policy">
          POLICY
        </Link>
        <br />
        <Link className={classes.Link} to="/contact">
          CONTACT
        </Link>
        <li>INSTAGRAM</li>
      </ul>
    </footer>
  );
};

export default Footer;
