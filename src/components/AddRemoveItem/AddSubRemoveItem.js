import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./AddSubRemove.module.css";
import React from "react";
let AddRemoveItem = () => {
  return (
    <div>
      <button className={classes.AddSubRemoveButtons}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      
      <button className={classes.AddSubRemoveButtons}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <button className={classes.AddSubRemoveButtons}>Remove</button>
    </div>
  );
};

export default AddRemoveItem;
