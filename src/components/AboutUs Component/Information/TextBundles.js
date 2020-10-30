import React from "react";
import classes from "../Information.module.css";

import text from "../../../shared/AboutUs.json";

const Display = () => {
    const [DisplayText1, setDisplayText1] = React.useState(text[0])
    const [DisplayText2, setDisplayText2] = React.useState()

    const onClick = (number) => (setDisplayText1(text[number]) & setDisplayText2(text[number+1]));
    return (
      <div>
        <div className={classes.ButtonDiv}>
        <input className={classes.Buttons} type="submit" value=""  onClick={() => onClick(1)} />
        <input className={classes.Buttons} type="submit" value=""  onClick={() => onClick(3)} />
        <input className={classes.Buttons} type="submit" value=""  onClick={() => onClick(5)} />
        <input className={classes.Buttons} type="submit" value=""  onClick={() => onClick(7)} />

        </div>
        <div className={classes.TextBundleDiv}>
        <div className={classes.textColumn}>
        {DisplayText1}
        </div>
        <div className={classes.textColumn}>
        {DisplayText2}
        </div>
        </div>
      </div>
    )
  }

  export default Display;