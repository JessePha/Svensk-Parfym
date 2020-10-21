import React from "react";
import "./Backdrop.css";

const Backdrop = (props) => {
  console.log(props.closed);
  console.log(props.open);
  return props.open ? (
    <div className="Backdrop" onClick={props.closed}></div>
  ) : null;
};

export default Backdrop;
