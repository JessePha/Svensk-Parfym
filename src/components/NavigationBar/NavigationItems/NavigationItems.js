import React from 'react'
import classes from "../NavigationItems/NavigationItems.module.css"
import {Link} from "react-router-dom"
import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems = () => (
    <ul className={classes.NavigationItems}>
    <NavigationItem link="/homeview">Home</NavigationItem>
    <NavigationItem link="/shopview">Shop</NavigationItem>
    <NavigationItem link="aboutusview">About Us</NavigationItem>
    </ul>
);

export default navigationItems;