import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import classes from "./ProductView.module.css";
import { connect } from "react-redux";
import { projectFirestore } from "../../firestore/config";
import { addItemToCart } from "../../store/actionFunc/indexAction";
import Spinner from "../../components/UI/Spinner/Spinner";
import ProductDetails from "../../components/Product Components/ProductDetails";
import ErrorMessage from "../../components/UI/ErrorMessage/ErrorMessage";

const ProductView = (props) => {
  let content = null;
  let [item, setItem] = useState([]);
  let { name } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    function fetchItem() {
      projectFirestore
        .collection("products")
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            if (doc.data().name === name) {
              setItem([doc.data()]);
            }
          });
        })
        .catch(() => {
          setError(true);
          setLoading(false);
        });
    }
    fetchItem();
    setLoading(true);
  }, [name]);

  content = <Spinner loading={loading} />;
  if (item.length > 0) {
    content = (
      <div>
        <ProductDetails
          products={props.products}
          addToCart={props.addToCart}
          item={item}
        />
      </div>
    );
  }

  return (
    <div className={classes.ProductView}>
      <ErrorMessage setError={setError} error={error} />
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
    addToCart: (item, amount, setOutOfStock) =>
      dispatch(addItemToCart(item, amount, setOutOfStock)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);
