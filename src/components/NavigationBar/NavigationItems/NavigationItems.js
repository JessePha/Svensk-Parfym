import React from "react";
import classes from "../NavigationItems/NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/home">Home</NavigationItem>
    <NavigationItem link="/shop">Shop</NavigationItem>
    <NavigationItem link="aboutus">About Us</NavigationItem>
  </ul>
);

export default navigationItems;
