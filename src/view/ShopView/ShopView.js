import React, { useState } from "react";
import "./ShowView.css";
import Perfumes from "../../components/Perfumes/Perfumes";
import Footer from "../../components/Footer/Footer"

const ShopView = (props) => {
  return (
    <div className="ShowView">
      <Perfumes perfumes={props.data} addToCart={props.addToCartHandler} />
      <Footer />
    </div>
  );
};

export default ShopView;
