import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems";
import Backdrop from "../../../UI/Backdrop/Backdrop";
import classes from "./Sidebar.module.css";

const SideBar = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <div>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <Logo />
        <NavigationItems />
      </div>
    </div>
  );
};

export default SideBar;
