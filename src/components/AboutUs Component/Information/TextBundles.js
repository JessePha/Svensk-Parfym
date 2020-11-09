import React, { useState } from "react";
import classes from "./Information.module.css";

const Display = ({ textContent, defaultContent }) => {
  const [content, setContent] = useState(null);
  const onClick = (e) => {
    let text = [];
    if (e.target.value === "1") {
      text = textContent.filter(
        (content) => content[0] === "Scent" || content[0] === "Importance"
      );
      setContent(text);
    } else if (e.target.value === "2") {
      text = textContent.filter(
        (content) => content[0] === "Expression" || content[0] === "Process"
      );
      setContent(text);
    } else if (e.target.value === "3") {
      text = textContent.filter(
        (content) => content[0] === "Art" || content[0] === "Business"
      );
      setContent(text);
    } else if (e.target.value === "4") {
      text = textContent.filter(
        (content) => content[0] === "Passion" || content[0] === "Brand"
      );
      setContent(text);
    }
  };

  return (
    <div>
      <div className={classes.ButtonDiv}>
        <button
          className={classes.Buttons}
          value="1"
          onClick={(e) => onClick(e)}
        />
        <button
          className={classes.Buttons}
          value="2"
          onClick={(e) => onClick(e)}
        />
        <button
          className={classes.Buttons}
          value="3"
          onClick={(e) => onClick(e)}
        />
        <button
          className={classes.Buttons}
          value="4"
          onClick={(e) => onClick(e)}
        />
      </div>
      {content === null ? (
        <div className={classes.defaultText}>{defaultContent}</div>
      ) : (
        <div className={classes.TextBundleDiv}>
          { content.map((text) => (
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
