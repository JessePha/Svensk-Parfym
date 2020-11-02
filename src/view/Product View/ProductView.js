import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";
import { projectFirestore } from "../../firestore/config";
import {
  addItemToCart,
  fetchProduct,
} from "../../store/actionFunc/indexAction";
import ProductDetails from "../../components/Product Components/ProductDetails";
import ErrorMessage from "../../components/UI/ErrorMessage/ErrorMessage";
import Spinner from "../../components/UI/Spinner/Spinner";

const ProductView = (props) => {
  let [item, setItem] = useState([]);
  let { name, size } = useParams();
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
        .catch((error) => {
          setError(true);
          setLoading(false);
        });
    }
    fetchItem();
    setLoading(true);
  }, [name]);
  let content = (
    <div>
      <Spinner loading={loading} />
    </div>
  );
  if (item.length > 0) {
    content = (
      <div>
        <ErrorMessage setError={setError} error={error} />
        <ProductDetails
          itemInCart={props.itemInCart}
          addToCart={props.addToCart}
          item={item}
          loading={loading}
        />
      </div>
    );
  }
  return <div> {content} </div>;
};

const mapStateToProps = (state) => {
  return {
    itemInCart: state.crt.cartItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItem: () => dispatch(fetchProduct()),
    addToCart: (item, amount) => dispatch(addItemToCart(item, amount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);
