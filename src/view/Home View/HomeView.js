import React, { useState, useEffect } from "react";
import classes from "./HomeView.module.css";
import HomeSections from "../../components/HomeSections/HomeSections";
import HomeImage from "../../shared/Images/HomeImage.jpg";

let HomeView = () => {
  const [offSetY, setOffSetY] = useState(0);
  const handleScroll = () => {
    setOffSetY(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offSetY]);
  let pxToVh = offSetY / (window.innerHeight - 10);

  let showCase = (
    <div className={classes.HomeView}>
      <div className={classes.HomeOpenUp}>
        <div className={classes.ImagesContainer}>
          <div className={classes.Image}>
            <img src={HomeImage} alt="perfume" style={{}} />
          </div>
        </div>
        <div
          className={classes.innerShowcaseText}
          style={{
            transform: `translateY(${-1.2 * offSetY}px)`,
          }}
        >
          <div>SVENSK PARFYM</div>
          <div>MADE IN SWEDEN</div>
          <div>ARTISTERY</div>
          <div>INSPIRED BY SWEDEN</div>
        </div>
      </div>
      <div className={classes.BlankSpace}></div>
      <HomeSections yCord={offSetY} pxToVh={pxToVh} />
      <div className={classes.dots}>
        <div className={pxToVh >= 0 && pxToVh < 1 ? classes.dot : ""}></div>
        <div className={pxToVh > 1 && pxToVh < 1.7 ? classes.dot : ""}></div>
        <div className={pxToVh > 1.8 && pxToVh < 2.5 ? classes.dot : ""}></div>
        <div className={pxToVh > 2.6 && pxToVh < 3.7 ? classes.dot : ""}></div>
        <div className={pxToVh > 3.8 ? classes.dot : ""}></div>
      </div>
    </div>
  );

  return <>{showCase}</>;
};

export default HomeView;
