import React, { useState } from "react";
import classes from "./Information.module.css";

const Display = ({ textContent, defaultContent }) => {
  const [content, setContent] = useState(null);
  const [defaultAcive, setDefaultActive] = useState(true);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const onClick = (e) => {
    let text = [];
    if (e.target.value === "1") {
      text = textContent.filter(
        (content) => content[0] === "Scent" || content[0] === "Importance"
      );
      setContent(text);
      setActive1(true);
      setActive4(false);
      setActive2(false);
      setActive3(false);
      setActive2(active2 ? false : active2);
      setDefaultActive(false);
    } else if (e.target.value === "2") {
      text = textContent.filter(
        (content) => content[0] === "Expression" || content[0] === "Process"
      );
      setContent(text);
      setActive2(true);
      setActive4(false);
      setActive1(false);
      setActive3(false);
      setDefaultActive(false);
    } else if (e.target.value === "3") {
      text = textContent.filter(
        (content) => content[0] === "Art" || content[0] === "Business"
      );
      setContent(text);
      setActive3(true);
      setActive4(false);
      setActive1(false);
      setActive2(false);
      setDefaultActive(false);
    } else if (e.target.value === "4") {
      text = textContent.filter(
        (content) => content[0] === "Passion" || content[0] === "Brand"
      );
      setContent(text);
      setActive4(true);
      setActive1(false);
      setActive2(false);
      setActive3(false);
      setDefaultActive(false)
    }
    else{
      setContent(null)
      setDefaultActive(true)
      setActive1(active1 ? false : active1);
      setActive2(active2 ? false : active2);
      setActive3(active3 ? false : active3);
      setActive4(active4 ? false : active4);
    }
  };

  return (
    <div>
      <div className={classes.ButtonDiv}>
        <button
          className={
            defaultAcive
              ? `${classes.Buttons} ${classes.Active}`
              : classes.Buttons
          }
          value="0"
          onClick={(e) => onClick(e)}
        />
        <button
          className={
            active1 ? `${classes.Buttons} ${classes.Active}` : classes.Buttons
          }
          value="1"
          onClick={(e) => onClick(e)}
        />
        <button
          className={
            active2 ? `${classes.Buttons} ${classes.Active}` : classes.Buttons
          }
          value="2"
          onClick={(e) => onClick(e)}
        />
        <button
          className={
            active3 ? `${classes.Buttons} ${classes.Active}` : classes.Buttons
          }
          value="3"
          onClick={(e) => onClick(e)}
        />
        <button
          className={
            active4 ? `${classes.Buttons} ${classes.Active}` : classes.Buttons
          }
          value="4"
          onClick={(e) => onClick(e)}
        />
      </div>
      {content === null ? (
        <div className={classes.defaultText}>{defaultContent}</div>
      ) : (
        <div className={classes.TextBundleDiv}>
          {content.map((text) => (
            <div className={classes.textContent} key={text[0]}>
              {" "}
              <h2>{text[0]}</h2> <p>{text[1]}</p>{" "}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Display;
