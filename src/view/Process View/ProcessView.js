import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Process from "../../components/Process Component/Process/Process";
import Spinner from "../../components/UI/Spinner/Spinner";
import { setProduct } from "../../store/actionFunc/indexAction";
import { getAllProducts } from "../../handlepayment/handleProduct";

let ProcessView = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllProducts(props.fetchData,setError);
    setLoading(false)
  }, []);
  let render = null;
  if (props.products.length > 0 && !loading) {
    render = <Process products={props.products} error={error} />;
  } else {
    render = <Spinner />;
  }
  return <div>{render}</div>;
};

const mapStateToProps = (state) => {
  return {
    products: state.prd.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (products) => dispatch(setProduct(products)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProcessView);
