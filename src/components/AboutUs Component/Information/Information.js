import classes from "../Information.module.css";
import React, { Component } from "react";
import AboutUsPhoto from "../AboutUsPhoto/AboutUsPhoto";
import photo1 from "../../../shared/Images/perfumer.jpg";
import signature from "../../../shared/Images/signature.jpg";

import {
  text,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  text9,
  text10,
  text11,
  text12,
} from "../../../shared/AboutUs.json";

class Information extends Component {
  render() {
    return (
      <div className={classes.Information}>
        <div className={classes.Title}>ABOUT</div>

        <div className={classes.TopText}>
          Perfumer Henrik Lestréus and the fine fragrances brand Svensk Parfym
        </div>

        <AboutUsPhoto image={photo1} />

        <div className={classes.MainInformation}>
          <p>{text}</p>
          <br />
          <p>{text2}</p>
          <br />
          <p>{text3}</p>
          <br />
          <p>{text4}</p>
          <br />
          <p>{text5}</p>
          <br />
          <p>{text6}</p>
          <br />
          <p>{text7}</p>
          <br />
          <p>{text8}</p>
          <br />
          <p>{text9}</p>
          <br />
          <p>{text10}</p>
          <br />
          <p>{text11}</p>
          <br />
          <p>{text12}</p>
        </div>

        <div>
          <img src={signature} alt="signature" className={classes.Signature} />
        </div>
      </div>
    );
  }
}

export default Information;
