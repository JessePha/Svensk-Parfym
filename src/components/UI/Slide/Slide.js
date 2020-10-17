import React, { useEffect, useState } from "react";
import classes from "./Slide.module.css";
import SlideRender from "./SlideRender/SlideRender";
let Slide = (props) => {
  const shownData = 4;
  let [currentData, setCurrentData] = useState(
    props.products.slice(0, shownData)
  );
  let [currentPage, setCurrentPage] = useState(shownData);
  let [switchingPage, setSwitchingPage] = useState(false);
  let totalData = props.products.length;
  let divided = totalData / shownData;
  let pagesArray = [];
  for (let i = 1; i <= divided; i++) {
    pagesArray.push(i * shownData);
  }
  console.log(switchingPage);

  let render = currentData.map((product, index) => {
    return (
      <SlideRender
        data={product}
        key={index}
        moreInfo={() => props.goTo(product.name)}
        switchingPage={switchingPage}
      />
    );
  });

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
    }, 8000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    setSwitchingPage(false);
  }, [switchingPage]);

  let availableItems = null;
  if (props.products.length > 0) {
    availableItems = (
      <div>
        <div className={classes.Slide}>{render}</div>
      </div>
    );
  } else {
    availableItems = (
      <div style={{ color: "white" }}>
        <p>No items found</p>
      </div>
    );
  }
  return availableItems;
};

export default Slide;
