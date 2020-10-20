import React, { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import classes from "./Slide.module.css";
import SlideRender from "./SlideRender/SlideRender";
let Slide = (props) => {
  const shownData = 4;

  let [currentData, setCurrentData] = useState(
    props.products.slice(0, shownData)
  );
  const [currentPage, setCurrentPage] = useState(shownData);
  const [switchingPage, setSwitchingPage] = useState(false);

  const totalData = props.products.length;
  const divided = totalData / shownData;
  const pagesArray = [];
  for (let i = 1; i <= divided; i++) {
    pagesArray.push(i * shownData);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (pagesArray.includes(currentPage + shownData)) {
        setSwitchingPage(true);
        setCurrentPage(currentPage + shownData);
        setCurrentData(
          props.products.slice(currentPage, currentPage + shownData)
        );
      } else {
        setSwitchingPage(true);
        setCurrentPage(shownData);
        setCurrentData(props.products.slice(0, shownData));
      }
    }, 10000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    setSwitchingPage(false);
  }, [switchingPage]);

  let render = <Spinner />;
  render = currentData.map((product, index) => {
    return (
      <SlideRender
        className={classes.slideRender}
        data={product}
        key={index}
        moreInfo={() => props.goTo(product.name)}
        switchingPage={switchingPage}
      />
    );
  });
  let availableItems = null;
  availableItems = <div className={classes.Slide}>{render}</div>;
  return availableItems;
};

export default Slide;
