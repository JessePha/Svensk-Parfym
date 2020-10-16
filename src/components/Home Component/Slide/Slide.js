import React, { useEffect, useState } from "react";
import { LeftButton, RightButton } from "./SlideButtons/SlideButtons";
import classes from "./Slide.module.css";
import Dots from "./Dots/Dots";
import SlideRender from "./SlideRender/SlideRender";
let Slide = (props) => {
  const shownData = 3;
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
  const dotsArray = [];
  let arr = props.products;
  let div = arr.length / 3;
  for (let i = 1; i <= div; i++) {
    dotsArray.push(i);
  }
  let dots = dotsArray.map((data, index) => {
    return <Dots shownData={shownData} data={data} key={index} />;
  });
  let updatePage = (e) => {
    e.preventDefault();
    let value = parseInt(e.target.value);
    if (pagesArray.includes(value)) {
      setSwitchingPage(true);
      setCurrentPage(value);
      setCurrentData(props.products.slice(value - shownData, value));
    } else if (!pagesArray.includes(value) && value > totalData) {
      setSwitchingPage(true);
      setCurrentPage(totalData - totalData + 3);
      setCurrentData(props.products.slice(0, totalData - totalData + 3));
    } else if (
      !pagesArray.includes(value) &&
      value < totalData - totalData + 1
    ) {
      setSwitchingPage(true);
      setCurrentPage(totalData);
      setCurrentData(props.products.slice(totalData - 3, totalData));
    }
  };
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
      if (pagesArray.includes(currentPage + 3)) {
        setSwitchingPage(true);
        setCurrentPage(currentPage + 3);
        setCurrentData(props.products.slice(currentPage, currentPage + 3));
      } else {
        setSwitchingPage(true);
        setCurrentPage(shownData);
        setCurrentData(props.products.slice(0, shownData));
      }
    }, 8000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    setSwitchingPage(false)
  }, [switchingPage])
  let availableItems = null;
  if (props.products.length > 0) {
    availableItems = (
      <div>
        <form onClick={updatePage}>
          <div className={classes.Slide}>
            <LeftButton
              currentPage={currentPage}
              currentData={currentData}
              shownData={shownData}
              updatePage={updatePage}
            />
            {render}
            <RightButton
              currentPage={currentPage}
              currentData={currentData}
              shownData={shownData}
            />
          </div>
          <div className={classes.Dots}>{dots}</div>
        </form>
      </div>
    );
  } else {
    availableItems = (
      <div className={classes.Slide}>
        <p>No items found</p>
      </div>
    );
  }
  return availableItems;
};

export default Slide;
