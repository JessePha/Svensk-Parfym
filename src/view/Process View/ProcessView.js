import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import Process from "../../components/Process Component/Process/Process";

let ProcessView = (props) => {
  return <Process products={props.products}/>;
};

const mapStateToProps = (state) => {
  return {
    products: state.prd.items,
  };
};
export default connect(mapStateToProps, null)(ProcessView);
