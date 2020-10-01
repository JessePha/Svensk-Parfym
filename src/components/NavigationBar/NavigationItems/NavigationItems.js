import React from "react";
import classes from "../NavigationItems/NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/shop">Doft</NavigationItem>
    <NavigationItem link="aboutus">About Us</NavigationItem>
    <NavigationItem link="aboutus">Process</NavigationItem>
    </ul>
);

export default navigationItems;
