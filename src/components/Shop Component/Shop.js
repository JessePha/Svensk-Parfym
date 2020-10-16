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
  if (props.perfumes.length > 0) {
    return <div className="perfumes">{perfumes}</div>;
  } else return <p>No products available</p>;
};

export default Perfumes;
