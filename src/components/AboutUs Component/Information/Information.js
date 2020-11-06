import classes from "../Information.module.css";
import React, { Component } from "react";
import AboutUsPhoto from "../AboutUsPhoto/AboutUsPhoto";
import photo1 from "../../../shared/Images/perfumer.jpg";
import signature from "../../../shared/Images/SignHL.png";

import TextBundle from "./TextBundles.js"
import text from "../../../shared/AboutUs.json";

class Information extends Component {
  render() {
    return (

      <div className={classes.Information}>

        <div className={classes.Title}>ABOUT</div>

        <div className={classes.PhotoDiv}>
        <div className={classes.PhotoDivInDiv}>
        <AboutUsPhoto image={photo1} />
        <AboutUsPhoto image={photo1} />
        <AboutUsPhoto image={photo1} />
        </div>
        </div>

        <div  className={classes.PhotoUnderline}/>

        <div className={classes.TopText}>
          Perfumer Henrik Lestréus and the fine fragrances brand Svensk Parfym
        </div>

        <div  className={classes.PhotoUnderline}/>


        {
          //test
        }
        <div>
        <TextBundle/>
        </div>

        <div className={classes.NameDiv}>
        <p className={classes.MVH}>{text[9]}</p>
        <p className={classes.MVH}>{text[10]}</p>
        <p className={classes.MVH}>{text[11]}</p>
        </div>

        <div>
          <img src={signature} alt="signature" className={classes.Signature} />
        </div>
      </div>
    );
  }
}

export default Information;