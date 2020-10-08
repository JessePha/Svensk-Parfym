import React from "react";
import "./ShopView.css";
import Shop from "../../components/Shop Component/Shop";
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';

const ShopView = (props) => {
  let history = useHistory();
  const goTo = (name) => {
    history.push("/Fragrance/" + name);
  };
  
  return (
    <div className="ShopView">
      <section>
        <Shop
          perfumes={props.products}
          goTo={goTo}
        />
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.prd.items
  }
}

export default connect(mapStateToProps,null)(ShopView);
