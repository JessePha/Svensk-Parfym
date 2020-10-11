import React from "react";
import Button from "../../UI/Button/Button";
import Price from "../../UI/Price/Price";
import classes from "./Select.module.css";
let Select = ({
  selectSize,
  viewProduct,
  selectedSize,
  showPrice,
  price,
  amount,
  chosenItem,
  addToCart,
  addItem,
  minusItem,
}) => {
  return (
    <div className={classes.SelectOptions}>
      <div>
        <select value={selectSize} onChange={selectedSize}>
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
        <div>
          <Button
            disable={showPrice}
            text="-"
            click={() => minusItem(viewProduct.name)}
          />
        </div>
        <div className = {classes.amount}>
          <p>{amount}</p>
        </div>
        <div>
          <Button
            disable={showPrice}
            text="+"
            click={() => addItem(viewProduct.name)}
          />
        </div>
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
