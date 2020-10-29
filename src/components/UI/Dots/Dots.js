import React from 'react';
import classes from './Dots.module.css';

const Dots = ({pxToVh}) => {
    return (
        <div className={classes.dots}>
          <div className={pxToVh >= 0 && pxToVh < 1 ? classes.dot : ""}></div>
          <div className={pxToVh > 1 && pxToVh < 1.7 ? classes.dot : ""}></div>
          <div
            className={pxToVh > 1.8 && pxToVh < 2.5 ? classes.dot : ""}
          ></div>
          <div
            className={pxToVh > 2.6 && pxToVh < 3.7 ? classes.dot : ""}
          ></div>
          <div className={pxToVh > 3.8 ? classes.dot : ""}></div>
        </div>
    )
}

export default Dots
