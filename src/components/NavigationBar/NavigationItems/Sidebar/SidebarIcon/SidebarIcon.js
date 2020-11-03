import React from "react";
import classes from "./SidebarIcon.module.css";

const SidebarIcon = ({ clicked, isOpened }) => {
  const styles = {
    lineTop: {
      transform: isOpened ? "rotate(45deg)" : "none",
      transformOrigin: "top left",
    },
    lineMiddle: {
      opacity: isOpened ? 0 : 1,
      transform: isOpened ? "translateX(-16px)" : "none",
    },
    lineBottom: {
      transform: isOpened ? "rotate(-45deg)" : "none",
      transformOrigin: "top left",
    },
  };
  return (
    <div className={classes.Container}>
      <div className={classes.SidebarIcon} onClick={clicked}>
        <div style={{ ...styles.line, ...styles.lineTop }}></div>
        <div style={{ ...styles.line, ...styles.lineMiddle }}></div>
        <div style={{ ...styles.line, ...styles.lineBottom }}></div>
      </div>
    </div>
  );
};

export default SidebarIcon;
