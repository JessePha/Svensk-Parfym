import React from "react";
import Perfume from "./Perfume/Perfume";
import "./Perfumes.css";

const Perfumes = (props) => {
  const perfumes = props.perfumes.map((perfume) => (
    <Perfume
      key={perfume.name}
      img={perfume.img}
      name={perfume.name}
      description={perfume.description}
      addToCart = {() => props.addToCart(perfume)}
    />
  ));
  return <div className="perfumes">{perfumes}</div>;
};

export default Perfumes;
