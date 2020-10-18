import React from "react";
import Button from "../../UI/Button/Button";
import Price from "../../UI/Price/Price";
import classes from "./Select.module.css";
const Select = ({
  selectSize,
  viewProduct,
  selectedSize,
  showPrice,
  price,
  amount,
  chosenItem,
  addToCart,
  addItem,
  subtractItem,
  max,
}) => {
  let maxItems = max ? (
    <p style={{ fontSize: "1vw" }}>No available items left in stock</p>
  ) : null;
  return (
    <div className={classes.SelectOptions}>
      <div>
        <select
          value={selectSize}
          onChange={selectedSize}
          className={classes.SelectForm}
        >
          <option value="Select size">Select size</option>
          <option value={viewProduct.size[0]}>{viewProduct.size[0]} kr</option>
          <option value={viewProduct.size[1]}>{viewProduct.size[1]} kr</option>
        </select>
      </div>
      <div
        className={
          showPrice ? classes.AvailableButtons : classes.UnavailableButtons
        }
      >
        <div className={classes.Button}>
          <Button
            disable={showPrice}
            text="-"
            click={() => subtractItem(viewProduct.name)}
          />
        </div>
        <div className={classes.amount}>
          <p>{amount}</p>
        </div>
        <div className={classes.Button}>
          <Button
            disable={showPrice}
            text="+"
            click={() => addItem(viewProduct.name)}
          />
        </div>
        {maxItems}
      </div>
      <div> {showPrice ? <Price price={price} value="Kr" /> : ""}</div>
      <div
        className={classes.addToCart}
        style={showPrice ? { display: "block" } : { display: "none" }}
      >
        <Button
          text="Add to cart"
          click={() => addToCart(chosenItem, amount)}
          disable={showPrice}
        />
      </div>
    </div>
  );
};

export default Select;
