import React from "react";
import "./ShopView.css";
import Perfumes from "../../components/Perfumes/Perfumes";
import { useHistory } from "react-router-dom";

const ShopView = (props) => {
  let history = useHistory();
  const goTo = (name) => {
    history.push("/Fragrance/" + name);
  };
  
  return (
    <div className="ShopView">
      <section>
        <Perfumes
          perfumes={props.data.items}
          goTo={goTo}
        />
      </section>
    </div>
  );
};

export default ShopView;
