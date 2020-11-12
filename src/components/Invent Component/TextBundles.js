import React, { useEffect, useState } from "react";
import classes from "./Information/Information.module.css";

const Display = ({ textContent, defaultContent }) => {
  const [content, setContent] = useState(null);
  const [boolArr, setBoolArr] = useState([]);
  let tempContent = textContent;
  let slice = tempContent.slice(0, 4);
  let currentPage = false;

  useEffect(() => {
    let temp = [];
    slice.forEach((content, index) => {
      temp.push(currentPage);
    });
    setBoolArr(temp);
  }, []);
  const showText = (buttonIndex) => {
    let data = [...tempContent];
    let temp = [];
    temp = data.filter((content, index) => {
      return index === buttonIndex * 2 || index === buttonIndex * 2 + 1;
    });
    setContent(temp);

    let boolTemp = [...boolArr];
    let active = boolTemp.findIndex((content, index) => {
      return index === buttonIndex;
    });
    let arr = [];
    boolTemp.findIndex((content, index) => {
      if (index !== buttonIndex) {
        arr.push(index);
      }
    });
    boolTemp[active] = true;
    arr.forEach((content) => {
      boolTemp[content] = false;
    });
    console.log(boolTemp);
    setBoolArr(boolTemp);
  };
  let buttonDiv = slice.map((content, index) => {
    return (
      <div key={index} className={classes.ButtonDiv}>
        <button
          className={
            boolArr[index]
              ? `${classes.Buttons} ${classes.Active}`
              : classes.Buttons
          }
          onClick={() => showText(index)}
        ></button>
      </div>
    );
  });
  let textBundleDiv = (
    <div className={classes.defaultText}>{defaultContent}</div>
  );
  if (content !== undefined && content !== null) {
    textBundleDiv = content.map((content, index) => {
      return (
        <div className={classes.TextBundleDiv} key={content[index]}>
          <h2>{content[0]}</h2>
          <p>{content[1]}</p>
        </div>
      );
    });
  }

  return (
    <div>
      <div className={classes.ButtonContainer}>{buttonDiv}</div>
      {textBundleDiv}
    </div>
  );
};

export default Display;
