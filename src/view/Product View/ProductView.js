import React, { useState } from "react";
import { useParams } from "react-router";
import Button from "../../components/UI/Button/Button";
import classes from "./ProductView.module.css";

const ProductView = (props) => {
  let { name } = useParams();
  let [price, setPrice] = useState(0);
  let item = props.data.items.filter((product) => product.name === name)
  const [selectSize, setselectSize] = useState();
  const [showPrice, setShowPrice] = useState(false);
  let [amount,setAmount] = useState(0)
  const [viewProduct] = useState(...item);
  const [chosenItem,setChosenItem] = useState()

  const addItem = () => {
    setAmount(amount + 1)
  };

  const minusItem = () => {
    if(amount > 0){
      setAmount(amount - 1)
    }else{
      return;
    }
  };

  const selectedSize = (e) => {
    let temp = {...viewProduct}

    setselectSize(e.target.value);
    if (e.target.value === "Select size") {
      setPrice()
      setShowPrice(false);
    } 
    if(e.target.value === viewProduct.size[0]) {
      setPrice(850)
      setShowPrice(true);
      setChosenItem({...temp,price: 850, size: e.target.value})
    }
    if(e.target.value === viewProduct.size[1]){
      setPrice(175)
      setShowPrice(true);
      setChosenItem({...temp,price: 175, size: e.target.value})
    }
}
  
  return (
    <div className={classes.ProductView}>
      <img
        src={viewProduct.img}
        style={{ height: "35%", width: "35%" }}
        alt="perfume"
      />
      <div>
        <h3>{viewProduct.name}</h3>
        <p>{viewProduct.description}</p>
        <select value={selectSize} onChange={selectedSize}>
          <option value="Select size">Select size</option>
          <option value={viewProduct.size[0]}>
            {viewProduct.size[0]} kr
          </option>
          <option value={viewProduct.size[1]}>
            {viewProduct.size[1]} kr
          </option>
        </select>
        {price}
        <Button disable = {showPrice} text="-" click={() => minusItem(viewProduct.name)} />
        <p>{amount}</p>
        <Button disable = {showPrice} text="+" click={() => addItem(viewProduct.name)} />
        <Button
          text="Add to cart"
          click={() => props.addToCartHandler(chosenItem,amount)}
          disable = {showPrice}
        />
      </div>
    </div>
  );
};

export default ProductView;
