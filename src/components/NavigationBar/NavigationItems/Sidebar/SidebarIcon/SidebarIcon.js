import React from "react";
import classes from  "./SidebarIcon.module.css";

const SidebarIcon = (props) => {
  return (
    <div className= {classes.Container}>
      <div className={classes.SidebarIcon} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default SidebarIcon;
