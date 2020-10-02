import React from "react";
import "./ShopView.css";
import Shop from "../../components/Shop Component/Shop";
import { useHistory } from "react-router-dom";

const ShopView = (props) => {
  let history = useHistory();
  const goTo = (name) => {
    history.push("/Fragrance/" + name);
  };
  
  return (
    <div className="ShopView">
      <section>
        <Shop
          perfumes={props.data.items}
          goTo={goTo}
        />
      </section>
    </div>
  );
};

export default ShopView;
