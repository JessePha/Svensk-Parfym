import React from "react";
import HomeText from "../../components/Home Component/HomeText/HomeText";
import "./HomeView.css";
import HomeImage from "../../components/Home Component/Image/HomeImage";
import Slide from "../../components/Home Component/Slide/Slide";

let HomeView = (props) => {
  return (
    <div className="HomeView">
      <HomeImage />
      <HomeText />
      <Slide perfumes={props.data.items} addToCart={props.addToCartHandler} />
    </div>
  );
};

export default HomeView;
