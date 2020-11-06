import React from "react";
import classes from "../Information.module.css";

import title from "../../../shared/AboutUsTitles.json";
import text from "../../../shared/AboutUs.json";

const Display = () => {
    const [DisplayTitle1, setDisplayTitle1] = React.useState()
    const [DisplayTitle2, setDisplayTitle2] = React.useState()
    const [DisplayText1, setDisplayText1] = React.useState(text[0])
    const [DisplayText2, setDisplayText2] = React.useState()

    const onClick = (number) => 
    (setDisplayTitle1(title[number]) & setDisplayTitle2(title[number+1]) &
    setDisplayText1(text[number]) & setDisplayText2(text[number+1]));
    
    return (
      <div>
        <div className={classes.ButtonDiv}>
        <input className={classes.Buttons} type="submit" value=""  onClick={() => onClick(1)} />
        <input className={classes.Buttons} type="submit" value=""  onClick={() => onClick(3)} />
        <input className={classes.Buttons} type="submit" value=""  onClick={() => onClick(5)} />
        <input className={classes.Buttons} type="submit" value=""  onClick={() => onClick(7)} />

        </div>
        <div className={classes.TextBundleDiv}>
        <div className={classes.BundleTitle}>
        {DisplayTitle1}
        </div>
        <div className={classes.textColumn}>
        {DisplayText1}
        </div>
        <div className={classes.BundleTitle}>
        {DisplayTitle2}
        </div>
        <div className={classes.textColumn}>
        {DisplayText2}
        </div>
        </div>
      </div>
    )
  }

  export default Display;