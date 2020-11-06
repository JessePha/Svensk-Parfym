import React from "react";
import classes from "../NavigationItems/NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/fragrance">Fragrance</NavigationItem>
    <NavigationItem link="/invent">Invent</NavigationItem>
    <NavigationItem link="/process">Process</NavigationItem>
  </ul>
);

export default navigationItems;
