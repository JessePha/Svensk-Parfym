import { connect } from "react-redux";
import React from "react";
import { addItemToCart } from "../../store/actionFunc/indexAction";
import Spinner from "../../components/UI/Spinner/Spinner";
import ProductDetails from "../../components/Product Components/ProductDetails";
import ErrorMessage from "../../components/UI/ErrorMessage/ErrorMessage";
import { useState } from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import { getSingleProduct } from "../../handlepayment/handleProduct";

const ProductView = (props) => {
  let content = null;
  let [item, setItem] = useState(null);
  let { name } = useParams();
  const [loading, setLoading] = useState(false);
  const [showItemAdded, setShowItemAdded] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getSingleProduct(setItem, name, setError)
    setLoading(true);
  }, [name]);

  content = <Spinner loading={loading} />;
  if (item !== null) {
    content = (
      <>
        <ProductDetails
          products={props.products}
          addToCart={props.addToCart}
          item={item}
          setShowItemAdded={setShowItemAdded}
        />
      </>
    );
  }

  return (
    <div>
      <ErrorMessage setError={setError} error={error} />
      {content}
      {showItemAdded}
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
    addToCart: (item, amount) =>
      dispatch(addItemToCart(item, amount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);
