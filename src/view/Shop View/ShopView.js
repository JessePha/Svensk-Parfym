import React, { useEffect, useState } from "react";
import "./ShopView.css";
import Shop from "../../components/Shop Component/Shop";
import { connect } from "react-redux";
import {
  addItemToCart,
  fetchProduct,
} from "../../store/actionFunc/indexAction";
import ErrorMessage from "../../components/UI/ErrorMessage/ErrorMessage";
import Spinner from "../../components/UI/Spinner/Spinner";

const ShopView = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      try {
        props.fetchData();
        setLoading(false)
        return () => props.fetchData();
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }, 500);
  }, []);

  let errorMsg = <ErrorMessage error={error} setError={setError} />;
  let content = (
    <div>
      <Spinner loading={loading} />
    </div>
  );
  if (props.products.length > 0) {
    content = (
      <div className="ShopView">
        <section>
          <Shop products={props.products} addToCart={props.addToCart} />
        </section>
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
    fetchData: () => dispatch(fetchProduct()),
    addToCart: (item, amount) => dispatch(addItemToCart(item, amount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopView);
