import React from 'react';
import classes from './Dots.module.css';

const Dots = ({pxToVh}) => {
    return (
        <div className={classes.dots}>
          <div className={pxToVh >= 0 && pxToVh < 1 ? classes.dot : ""}></div>
          <div className={pxToVh > 1 && pxToVh < 2 ? classes.dot : ""}></div>
          <div
            className={pxToVh > 2.3 && pxToVh < 3 ? classes.dot : ""}
          ></div>
          <div
            className={pxToVh > 3.3 && pxToVh < 4.3 ? classes.dot : ""}
          ></div>
          <div className={pxToVh > 4.6 ? classes.dot : ""}></div>
        </div>
    )
}

export default Dots
