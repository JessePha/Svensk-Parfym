import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems";
import Backdrop from "../../../UI/Backdrop/Backdrop";
import './Sidebar.css';

const SideBar = (props) => {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }
  return (
    <div>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className= "Logo">
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
