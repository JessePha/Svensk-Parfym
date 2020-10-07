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
    <div>
      <select value={selectSize} onChange={selectedSize}>
        <option value="Select size">Select size</option>
        <option value={viewProduct.size[0]}>{viewProduct.size[0]} kr</option>
        <option value={viewProduct.size[1]}>{viewProduct.size[1]} kr</option>
      </select>
      {showPrice ? <Price price={price} value="Kr" /> : ""}
      <div className={showPrice ? classes.Buttons : ""}>
        <Button
          disable={showPrice}
          text="-"
          click={() => minusItem(viewProduct.name)}
        />
        <p>{amount}</p>
        <Button
          disable={showPrice}
          text="+"
          click={() => addItem(viewProduct.name)}
        />
      </div>
      <Button
        text="Add to cart"
        click={() => addToCart(chosenItem, amount)}
        disable={showPrice}
      />
    </div>
  );
};

export default Select;
