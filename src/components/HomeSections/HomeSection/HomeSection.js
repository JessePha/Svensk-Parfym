import React from "react";
import classes from "./HomeSection.module.css";
const HomeSection = (props) => {

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
      <div
        className={classes.textContent}
        style={{
          transform: `translateY(${
            props.cordination[3].cord * props.yCord
          }px)`,
          transition: ` 0.8s ease-out`,
        }}
      >
        <div className={classes.innerTextContent}>
          {props.section.text}
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
