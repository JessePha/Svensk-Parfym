import React from "react";
import classes from "./ProcessRender.module.css";
const HomeSection = (props) => {
  console.log(props.section.sect);
  return (
    <div className={classes.Section}>
      <div className={classes.images}>
        <div className={classes.image}>
          <img
            src={props.section.sect[0].pic1}
            style={{
              transform: `translateY(${
                props.section.sect[0].cord * props.yCord
              }px)`,
              transition: ` 0.8s ease-out`,
            }}
            alt="parfume"
          />
        </div>
        <div className={classes.image}>
        <img
          src={props.section.sect[1].pic2}
          style={{
            transform: `translateY(${
              props.section.sect[1].cord * props.yCord
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
            props.section.sect[2].cord * props.yCord
          }px)`,
          transition: ` 0.8s ease-out`,
        }}
      >
        <div className={classes.innerTextContent}>
          {props.section.sect[2].text}
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
