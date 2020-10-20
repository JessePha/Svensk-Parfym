import React from "react";
import UpperImages from "./UpperImages/UpperImages";
import classes from "./Process.module.css";
import MiddleText from "./MiddleText/MiddleText";
import Slideshow from "../../UI/Slide/Slide";

const Process = (props) => {
  
  return (
    <div className={classes.Process}>
      <UpperImages />
      <MiddleText />
      <Slideshow products={props.products} fetchData={props.fetchData}/>
    </div>
  );
};

export default (Process);
