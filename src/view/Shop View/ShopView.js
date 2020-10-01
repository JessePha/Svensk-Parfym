import React from "react";
import "./ShopView.css";
import Perfumes from "../../components/Perfumes/Perfumes";

const ShopView = (props) => {
  return (
    <div className="ShopView">
      <Perfumes
        perfumes={props.data.items}
        addToCart={props.addToCartHandler}
      />
    </div>
  );
};

export default ShopView;
