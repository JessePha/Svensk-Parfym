import React from "react";
import classes from "../NavigationItems/NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
const navigationItems = (props) => (
  <ul className={props.show ? classes.DesktopOnly : classes.NavigationItems}>
    <NavigationItem link="/Fragrance">Fragrance</NavigationItem>
    <NavigationItem link="/invent">Invent</NavigationItem>
    <NavigationItem link="/process">Process</NavigationItem>
  </ul>
);

export default navigationItems;
