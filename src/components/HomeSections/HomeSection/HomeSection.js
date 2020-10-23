import React from "react";
import classes from "./HomeSection.module.css";
const HomeSection = (props) => {
  let currentText = "";
  if (props.showText > 1 && props.showText < 1.5) {
    currentText = props.texts[0];
  } else if (props.showText > 1.7 && props.showText < 2.3) {
    currentText = props.texts[1];
  } else if (props.showText > 2.5 && props.showText < 3.5) {
    currentText = props.texts[2];
  } else if (props.showText > 3.8 && props.showText < 5) {
    currentText = props.texts[3];
  }
  return (
    <div className={classes.Section}>
      <div className={classes.images}>
        <div className={classes.image}>
          <img
            src={props.section.url[0]}
            style={{
              transform: `translateY(${
                props.cordination[0].cord * props.yCord
              }px)`,
              transition: ` 0.8s ease-out`,
            }}
            alt="parfume"
          />
        </div>
        <div className={classes.image}>
          <img
            src={props.section.url[1]}
            style={{
              transform: `translateY(${
                props.cordination[1].cord * props.yCord
              }px)`,
              transition: ` 0.8s ease-out`,
            }}
            alt="parfume"
          />
        </div>
        <div className={classes.image}>
          <img
            src={props.section.url[2]}
            style={{
              transform: `translateY(${
                props.cordination[2].cord * props.yCord
              }px)`,
              transition: ` 0.8s ease-out`,
            }}
            alt="parfume"
          />
        </div>
      </div>
      <div className={classes.textContent}>
        <div
          className={classes.innerTextContent}
        >
          {props.showText > 1 ? currentText : ""}
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
