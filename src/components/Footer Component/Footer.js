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
        <Link className={classes.Link} to="/contact">
          <a> CONTACT</a>
        </Link>
        <li className={classes.Link}>
          <a href="https://www.instagram.com/svenskparfym/" target="_blank">
            INSTAGRAM
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
