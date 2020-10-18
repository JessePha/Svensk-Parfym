import React, { useEffect } from "react";
import ShopRender from "./ShopRender/ShopRender";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import { fetchProduct } from "../../store/actionFunc/indexAction";
import "./Shop.css";

const Perfumes = (props) => {
  useEffect(() => {
    let active = true;
    props.fetchData();
    return () => (active = false);
  }, []);
  let history = useHistory();
  const goTo = (name, size) => {
    history.push("/Fragrance/" + name + "/" + size);
  };

  let content = (
    <>
      <Spinner />
    </>
  );
  if (props.products) {
    content = (
      <>
        {props.products.map((perfume, index) => (
          <ShopRender
            key={index}
            img={perfume.url}
            name={perfume.name}
            price={perfume.price}
            moreInfo={() => goTo(perfume.name, perfume.size[0])}
          />
        ))}
      </>
    );
  }
  return <div className="perfumes">{content}</div>;
};
const mapStateToProps = (state) => {
  return {
    products: state.prd.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchProduct()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Perfumes);
