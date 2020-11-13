import React, { useEffect, useState } from "react";
import { act } from "react-dom/test-utils";
import classes from "./Information/Information.module.css";

const Display = ({ textContent, defaultContent }) => {
  const [content, setContent] = useState(null);
  const [boolArr, setBoolArr] = useState([]);
  let tempContent = textContent;
  let slice = tempContent.slice(0, 5);
  let currentPage = false;

  useEffect(() => {
    let sliceTemp = [];
    slice.forEach((content, index) => {
      sliceTemp.push(currentPage);
    });
    sliceTemp[0] = true;
    setBoolArr(sliceTemp);
    let contentArr = [];
    contentArr.push(defaultContent);
    console.log(contentArr);
    setContent(contentArr);
  }, []);

  const showText = (buttonIndex) => {
    let data = [...tempContent];
    let temp = [];
    if (buttonIndex === 0) {
      temp.unshift([defaultContent]);
      setContent(temp);
    } else {
      temp = data.filter((content, index) => {
        return index === buttonIndex * 2 - 2 || index === buttonIndex * 2 - 1;
      });
    }
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
  let textBundleDiv = null;
  if (content !== undefined && content !== null) {
    textBundleDiv = content.map((content, index) => {
      if (content.includes(defaultContent)) {
        return (
          <div className={classes.TextBundleDiv} key={index}>
            <p>{content}</p>
          </div>
        );
      }
      return (
        <div className={classes.TextBundleDiv} key={index}>
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
