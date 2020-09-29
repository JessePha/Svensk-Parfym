import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";
import classes from "./SlideButtons.module.css";
import SlideData from "../SlideData/SlideData";
import en from "../../../../shared/Images/en.png";
let SlideButtons = () => {
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

  const [temp, setTemp] = useState(
    data.items.filter((perfume, index) => index <= 2)
  );
  const [slideIndex, setSlideIndex] = useState(1);
  const max = data.items.length;
  const maxArr = max / 3;

  const goLeft = () => {
    if (slideIndex === 1) {
      setSlideIndex(3);
      setTemp(
        data.items.filter((perfume, index) => index > max - 4 && index <= max)
      );
    } else {
      let lastIndex = temp[temp.length - 1];
      console.log(data.items.indexOf(lastIndex) - 2);
      console.log(data.items.indexOf(lastIndex) - 5);

      setTemp(
        data.items.filter(
          (perfume, index) =>
            index < data.items.indexOf(lastIndex) - 2 &&
            index >= data.items.indexOf(lastIndex) - 5
        )
      );
      setSlideIndex(slideIndex - 1);
    }
  };
  const goRight = () => {
    if (slideIndex === maxArr) {
      setSlideIndex(1);
      setTemp(data.items.filter((perfume, index) => index <= 2));
    } else {
      let lastIndex = temp[temp.length - 1];
      console.log(data.items.indexOf(lastIndex));
      console.log(data.items.indexOf(lastIndex) + 2);
      setTemp(
        data.items.filter(
          (perfume, index) =>
            index > data.items.indexOf(lastIndex) &&
            index <= data.items.indexOf(lastIndex) + 3
        )
      );

      setSlideIndex(slideIndex + 1);
    }
  };

  const value = temp.map((perfume) => {
    return (
      <SlideData
        key={perfume.name}
        img={perfume.img}
        name={perfume.name}
        description={perfume.description}
        price={perfume.price}
      />
    );
  });

  return (
    <div className={classes.SlideButtons}>
      <FontAwesomeIcon
        icon={faAngleDoubleLeft}
        onClick={goLeft}
        id={classes.left}
      >
        <div />
      </FontAwesomeIcon>
      {value}
      <FontAwesomeIcon
        icon={faAngleDoubleRight}
        onClick={goRight}
        id={classes.rigth}
      >
        <div />
      </FontAwesomeIcon>
    </div>
  );
};

export default SlideButtons;
