import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems";
import Backdrop from "../../../UI/Backdrop/Backdrop";
import classes from "./Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const SideBar = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <div className={classes.sidebarDiv}>
      <Backdrop open={props.open} closed={props.closed} />

      <div className={attachedClasses.join(" ")}>
        <span onClick={props.closed}>
          <FontAwesomeIcon
            className={classes.CloseButton}
            icon={faWindowClose}
          ></FontAwesomeIcon>
        </span>
        <Logo />
        <NavigationItems />
      </div>
    </div>
  );
};

export default SideBar;
