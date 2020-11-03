import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../NavigationItem/Navigationitem.module.css";

const NavigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <NavLink
        to={`/${props.link}`}
        exact
        activeClassName="my-active"
        activeStyle={{
          color: "gold",
          borderBottom: "1px solid rgb(209, 164, 39)",
        }}
        onClick={props.click}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
