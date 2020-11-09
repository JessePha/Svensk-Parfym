import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems";
import classes from "./Sidebar.module.css";
const SideBar = ({ open, toggleSidebar, navPic }) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  let content = null;
  if (navPic.url !== undefined) {
    content = (
      <div className={attachedClasses.join(" ")}>
        <Logo logo = {navPic.url[0]} toggleSidebar={toggleSidebar} />
        <NavigationItems isOpen={open} toggleSidebar={toggleSidebar} />
      </div>
    );
  }
  return <div className={classes.sidebarDiv}>{content}</div>;
};

export default SideBar;
