import React from "react";
import HomeText from "../../components/Home Component/HomeText/HomeText";
import "./HomeView.css";
import HomeImage from "../../components/Home Component/Image/HomeImage";
import Slide from "../../components/Home Component/Slide/Slide";
import { useHistory } from "react-router";

let HomeView = (props) => {
  let history = useHistory();
  const goTo = (name) => {
    history.push("/Fragrance/" + name);
  };

  return (
    <div>
      <section>
        <div className={"HomeImageDiv"}>
          <HomeImage />
        </div>
        <HomeText />
        <Slide products={props.data.items}  goTo={goTo}/>
      </section>
    </div>
  );
};

export default HomeView;
