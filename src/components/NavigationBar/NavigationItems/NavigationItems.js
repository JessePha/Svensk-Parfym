import React from "react";
import classes from "../NavigationItems/NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
const navigationItems = (props) => {
  const items = ["", "Fragrance", "Invent", "Process"];
  return (
    <ul className={props.show ? classes.DesktopOnly : classes.NavigationItems}>
      {items.map((item) => (
        <NavigationItem
          key={item}
          link={item}
          opened={props.isOpen}
          click={props.toggleSidebar}
        >
          {item}
        </NavigationItem>
      ))}
    </ul>
  );
};

export default navigationItems;
