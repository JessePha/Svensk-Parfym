import React from "react";
import "./Perfume.css";

const Perfume = ({ img, name, description, price, addToCart }) => {
  return (
    <div className="perfume">
      <img src={img} alt="perfume"></img>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price} Kr</p>
      <button onClick={addToCart}>Add to card</button>
    </div>
  );
};

export default Perfume;
