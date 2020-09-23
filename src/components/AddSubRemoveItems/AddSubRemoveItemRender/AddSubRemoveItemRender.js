import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./AddSubRemoveRender.module.css";
import React, { useState } from "react";

let AddRemoveItem = (props) => {
  let [currentAmount, setCurrentAmount] = useState(1);

  let addFromItem = () => {
    setCurrentAmount(currentAmount + 1);
  };
  let subFromItem = () => {
    if (currentAmount !== 0) {
      setCurrentAmount(currentAmount - 1);
    }
  };
  let removeItem = (productIndex) => {
    const products = props.products;
    const filter = products.filter((product, index) => index !== productIndex);
    props.setProducts(filter);
  };
  return (
    <div>
   
      <p>{currentAmount}</p>
      <button onClick={addFromItem} className={classes.AddSubRemoveButtons}>
      <FontAwesomeIcon icon={faPlus} />
    </button>
      <button onClick={subFromItem} className={classes.AddSubRemoveButtons}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <button index={props.index} onClick={removeItem} className={classes.AddSubRemoveButtons}>
        Remove
      </button>
    </div>
  );
};

export default AddRemoveItem;
