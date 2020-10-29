import React, { useState } from "react";
import { connect } from "react-redux";
import Process from "../../components/Process Component/Process/Process";
import Spinner from "../../components/UI/Spinner/Spinner";
import { fetchProduct } from "../../store/actionFunc/indexAction";

let ProcessView = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useState(() => {
    setLoading(true);
    try {
      props.fetchData();
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  });
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
    fetchData: () => dispatch(fetchProduct()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProcessView);
