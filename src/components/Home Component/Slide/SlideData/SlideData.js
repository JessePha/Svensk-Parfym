import React from "react";

const Data = ({ img, name, description, price, addToCart }) => {
  return (
    <div className="perfume">
      <img src={img} alt="perfume"></img>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price} Kr</p>
      <button className="toCartButton" onClick={addToCart}>
        Add to cart
      </button>
    </div>
  );
};

export default Data;
