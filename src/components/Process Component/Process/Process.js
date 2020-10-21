import React, { useEffect, useState } from "react";
import classes from "./Process.module.css";

import { connect } from "react-redux";
import { fetchProduct } from "../../../store/actionFunc/indexAction";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";
import Spinner from "../../UI/Spinner/Spinner";
import ProcessBar from "./ProcessBar/ProcessBar";

const Process = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  let errorMsg = <ErrorMessage error={error} setError={setError} />;

  useEffect(() => {
    setLoading(true);
    try {
      props.fetchData();
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }, []);

  let render = <Spinner />;
  if (props.products.length !== 0 && !loading) {
    render = (
      <div className={classes.Process}>
        {errorMsg}
        <ProcessBar />
      </div>
    );
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
export default connect(mapStateToProps, mapDispatchToProps)(Process);
