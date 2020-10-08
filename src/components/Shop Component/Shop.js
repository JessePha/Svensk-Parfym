import React from "react";
import ShopRender from "./ShopRender/ShopRender";
import "./Shop.css";

const Perfumes = (props) => {
  const perfumes = props.perfumes.map((perfume, index) => (
    <ShopRender
      key={index}
      img={perfume.img}
      name={perfume.name}
      price={perfume.price}
      moreInfo={() => props.goTo(perfume.name)}
    />
  ));
  return <div className="perfumes">{perfumes}</div>;
};

export default Perfumes;
