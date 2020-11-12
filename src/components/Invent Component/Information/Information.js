import React from "react";
import InventPhoto from "../InventPhoto/InventPhotos";
import TextBundle from "../TextBundles.js";
import classes from "./Information.module.css";

const Information = ({ aboutContent }) => {
  let temp = Object.values(aboutContent);
  const textContent = temp.filter(text => text.length < 3  )
  return (
    <div className={classes.Information}>
      <div className={classes.PhotoDiv}>
        <div className={classes.PhotoDivInDiv}>
          <InventPhoto image={aboutContent.url[0]} />
        </div>
      </div>
      <div className={classes.TopText}>{aboutContent.intro}</div>
      <div>
        <TextBundle textContent = {textContent} defaultContent = {aboutContent.defaultText} />
      </div>

      <div className={classes.NameDiv}>
        {aboutContent.endContent.map((content) => (
          <p key={content} className={classes.MVH}>
            {content}
          </p>
        ))}
      </div>

      <div className = {classes.Signature}>
        <img
          src={aboutContent.url[1]}
          alt="signature"
        />
      </div>
    </div>
  );
};

export default Information;
