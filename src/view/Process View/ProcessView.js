import React, { useState } from "react";
import { connect } from "react-redux";
import Process from "../../components/Process Component/Process/Process";
import { fetchProduct } from "../../store/actionFunc/indexAction";

let ProcessView = (props) => {
  useState(() => {
    props.fetchData();
  });
  return <Process products={props.products} />;
};

const mapStateToProps = (state) => {
  console.log(state.prd.products);
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
