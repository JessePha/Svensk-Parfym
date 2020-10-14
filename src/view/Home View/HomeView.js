import React, { useState, useEffect } from "react";
import classes from "./HomeView.module.css";
import HomeSections from "../../components/HomeSections/HomeSections";

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

  return (
    <div className={classes.HomeView}>
      <div className={classes.showcaseText}>
        <div
          className={classes.innerShowcaseText}
          style={{
            transform: `translateY(${-1.5 * offSetY}px)`,
            transition: " 2 ease-in-out",
            opacity: (offSetY * 15) / 100,
          }}
        >
          <div>SVENSK PARFYM</div>
          <div>MADE IN SWEDEN</div>
          <div>ARTISTERY</div>
          <div>INSPIRED BY SWEDEN</div>
        </div>
      </div>
      <HomeSections yCord={offSetY} />
    </div>
  );
};

export default HomeView;
