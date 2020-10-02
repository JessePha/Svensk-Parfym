import React from "react";
import ShopRender from "./ShopRender/ShopRender";
import "./Shop.css";

const Perfumes = (props) => {

  const perfumes = props.perfumes.map((perfume) => (
    <ShopRender
      key={perfume.name}
      img={perfume.img}
      name={perfume.name}
      description={perfume.description}
      moreInfo={() => props.goTo(perfume.name)}
    />
  ));
  return <div className="perfumes">{perfumes}</div>;
};

export default Perfumes;
