import React, { useEffect, useState } from "react";
import UpperImages from "./UpperImages/UpperImages";
import classes from "./Process.module.css";
import MiddleText from "./MiddleText/MiddleText";
import Slider from "../../UI/Slide/Slide";
import { connect } from "react-redux";
import { fetchProduct } from "../../../store/actionFunc/indexAction";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";
import Spinner from "../../UI/Spinner/Spinner";

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
  if (!loading) {
    render = (
      <div className={classes.Process}>
        {errorMsg}
        <UpperImages />
        <MiddleText />
        <Slider products={props.products} fetchData={props.fetchData} />
      </div>
    );
  }
  return <div>{render}</div>;
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
export default connect(mapStateToProps, mapDispatchToProps)(Process);
