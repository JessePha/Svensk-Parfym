import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./CartProductRender.module.css";
import React, { useState } from "react";

let AddRemoveItem = (props) => {
  let [currentAmount, setCurrentAmount] = useState(1);
  console.log(props.totalPrice);

  let addFromItem = () => {
    console.log(props.products[props.index].price);
    props.setTotalPrice(props.totalPrice + props.products[props.index].price);
    setCurrentAmount(currentAmount + 1);
  };

  let subFromItem = () => {
    if (currentAmount !== 1) {
      props.setTotalPrice(props.totalPrice - props.products[props.index].price);
      setCurrentAmount(currentAmount - 1);
    }
  };

  let removeItem = () => {
    const products = props.products;
    const filter = products.filter((product, index) => index !== props.index);
    props.setTotalPrice(
      props.totalPrice - currentAmount * props.products[props.index].price
    );
    props.setProducts(filter);
  };
  return (
    <div>
      <div className={classes.infoDiv}>
        <img
          className={classes.productImage}
          src={props.products[props.index].img}
          alt="product"
        />
        <div className={classes.dataDiv}>
          <p>{props.products[props.index].name}</p>
          <p>{props.products[props.index].price} Kr</p>
          <div className={classes.buttonsDiv}>
            <button
              onClick={addFromItem}
              className={classes.AddSubRemoveButtons}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <p>{currentAmount}</p>
            <button
              onClick={subFromItem}
              className={classes.AddSubRemoveButtons}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <button
              index={props.index}
              onClick={removeItem}
              className={classes.AddSubRemoveButtons}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default AddRemoveItem;
