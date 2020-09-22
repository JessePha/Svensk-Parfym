import React, { useState } from "react";
import "./ShowView.css";
import Perfumes from "../../components/Perfumes/Perfumes";

const ShopView = (props) => {
  return (
    <div className="ShowView">
      <Perfumes perfumes={props.data} addToCart={props.addToCartHandler} />
    </div>
  );
};

export default ShopView;
