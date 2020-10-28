import React, { useState } from "react";
import classes from "./Slide.module.css";
import SlideRender from "./SlideRender/SlideRender";
let Slide = (props) => {

  const [currentImages, setCurrentImages] = useState(props.products.slice(0,5))


  /*useEffect(() => {
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
  });*/

  /*useEffect(() => {
    setSwitchingPage(false);
  }, [switchingPage]);*/
  console.log(props.currentImages)
  console.log(currentImages)
  let render = props.currentImages.map((product, index) => {
    return (
      <SlideRender className={classes.slideRender} data={product} key={index} />
    );
  });
  let availableItems = null;
  if (props.products.length > 0) {
    availableItems = <div className={classes.Slide}>{render}</div>;
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
