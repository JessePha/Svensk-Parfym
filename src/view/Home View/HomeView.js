import React from "react";
import HomeText from "../../components/Home Component/HomeText/HomeText";
import "./HomeView.css";
import HomeImage from "../../components/UI/HomeImage/HomeImage";
import Slide from "../../components/Home Component/Slide/Slide";
import { useHistory } from "react-router";
import { connect } from "react-redux";

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
        <Slide products={props.products} goTo={goTo} />
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.prd.items,
  };
};

export default connect(mapStateToProps, null)(HomeView);
