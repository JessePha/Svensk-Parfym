import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../NavigationItem/Navigationitem.module.css";

const NavigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <NavLink to={props.link} exact activeClassName="my-active" activeStyle = {{color: "gold"}}>
      {props.children}
    </NavLink>
  </li>
);

export default NavigationItem;
