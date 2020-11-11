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
      <div className={classes.textContent}>
        <div className={classes.innerTextContent}>
          {props.showText > 0.7 && props.showText < 1.2 ? (
            <p>{props.texts[0]}</p>
          ) : (
            ""
          )}
          {props.showText > 1.5 && props.showText < 2 ? (
            <p>{props.texts[1]}</p>
          ) : (
            ""
          )}
          {props.showText > 2.3 && props.showText < 2.7 ? (
            <p>{props.texts[2]}</p>
          ) : (
            ""
          )}
          {props.showText > 3.5 && props.showText < 4.5 ? (
            <p>{props.texts[3]}</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
