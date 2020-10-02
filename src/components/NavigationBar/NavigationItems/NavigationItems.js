import React from "react";
import classes from "../NavigationItems/NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/Fragrance">Fragrance</NavigationItem>
    <NavigationItem link="/invent">invent</NavigationItem>
    <NavigationItem link="/process">Process</NavigationItem>
  </ul>
);

export default navigationItems;
