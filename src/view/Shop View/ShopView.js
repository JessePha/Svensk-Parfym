import React, { useEffect, useState } from "react";
import classes from "./ShopView.module.css";
import Shop from "../../components/Shop Component/Shop";
import { connect } from "react-redux";
import { addItemToCart, setProduct } from "../../store/actionFunc/indexAction";
import ErrorMessage from "../../components/UI/ErrorMessage/ErrorMessage";
import Spinner from "../../components/UI/Spinner/Spinner";
import { getAllProducts } from "../../handlepayment/handleProduct";

const ShopView = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    getAllProducts(props.fetchData, setError)
  }, []);
  let errorMsg = <ErrorMessage error={error} setError={setError} />;
  let content = (
    <div>
      <Spinner loading={loading} />
    </div>
  );
  if (props.products.length > 0) {
    content = (
      <div className={classes.ShopView}>
        <Shop products={props.products} addToCart={props.addToCart} />
      </div>
    );
  }
  return (
    <div>
      {errorMsg}
      {content}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.prd.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (products) => dispatch(setProduct(products)),
    addToCart: (item, amount) => dispatch(addItemToCart(item, amount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopView);
