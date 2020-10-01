import React, { useState } from "react";
import SlideButtons, {
  LeftButton,
  RightButton,
} from "./SlideButtons/SlideButtons";
import classes from "./Slide.module.css";
import Dots from "./Dots/Dots";
import SlideRender from "./SlideRender/SlideRender";
import en from "../../../shared/Images/en.png";

let Slide = (props) => {
  const [data] = useState({
    items: [
      {
        img: en,
        name: "En",
        description: "Test data for perfume.",
        price: 175,
      },
      {
        img: en,
        name: "Fröjd",
        description: "Test data for perfume.",
        price: 175,
      },
      {
        img: en,
        name: "Idyll",
        description: "Test data for perfume.",
        price: 175,
      },
      {
        img: en,
        name: "Ljus",
        description: "Test data for perfume.",
        price: 175,
      },
      {
        img: en,
        name: "Prakt",
        description: "Test data for perfume.",
        price: 175,
      },
      {
        img: en,
        name: "Sadel",
        description: "Test data for perfume.",
        price: 175,
      },
      {
        img: en,
        name: "Shyng",
        description: "Test data for perfume.",
        price: 175,
      },
      {
        img: en,
        name: "Stilla",
        description: "Test data for perfume.",
        price: 175,
      },
      {
        img: en,
        name: "Virke",
        description: "Test data for perfume.",
        price: 175,
      },
    ],
    totalPrice: 0,
    totalAmount: 0,
  });
  const shownData = 3;
  let [currentData, setCurrentData] = useState(data.items.slice(0, shownData));
  let [currentPage, setCurrentPage] = useState(3);

  let totalData = data.items.length;
  let divided = totalData / shownData;
  let pagesArray = [];
  for (let i = 1; i <= divided; i++) {
    pagesArray.push(i * shownData);
  }
  let dotsArray = [];
  let arr = data.items;
  let div = arr.length / 3;
  for (let i = 1; i <= div; i++) {
    dotsArray.push(i);
  }
  console.log(dotsArray)
  let dots = dotsArray.map((data, index) => {
    return <Dots shownData={shownData} data={data} key={index} />;
  });

  let updatePage = (e) => {
    let value = parseInt(e.target.value);
    if (pagesArray.includes(value)) {
      setCurrentPage(value);
      setCurrentData(data.items.slice(value - shownData, value));
    }
  };

  let render = currentData.map((data, index) => {
    return <SlideRender data={data} key={index} />;
  });
  return (
    <div className={classes.Slide}>
      <form onClick={updatePage} id={"pageSwitchForm"}>
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
        {dots}
      </form>
    </div>
  );
};

export default Slide;
