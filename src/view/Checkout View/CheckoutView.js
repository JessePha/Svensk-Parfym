import React, { useState, useEffect } from "react";
import Checkout from "../../components/Checkout Component/Checkout";
import Styles from "./CheckoutView.module.css";
import { projectFirestore } from "../../firestore/config";
import Spinner from "../../components/UI/Spinner/Spinner";
import ErrorMessage from "../../components/UI/ErrorMessage/ErrorMessage";
const CheckoutView = () => {
  const [checkoutContent, setCheckoutContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchContent = () => {
      setLoading(true);
      let items = [];
      projectFirestore
        .collection("checkout")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            items.push({ ...doc.data(), id: doc.id });
          });
          setCheckoutContent(items);
        })
        .catch((error) => {
          setError(true);
        });
    };
    fetchContent();
    return () => fetchContent();
  }, []);
  let checkOut = <Spinner style={{ color: "black" }} loading={loading} />;
  if (checkoutContent.length > 0) {
    checkOut = (
      <Checkout
        data={checkoutContent[0].countries}
        url={checkoutContent[0].url}
      />
    );
  }
  return (
    <div className={Styles.CheckoutView}>
      <ErrorMessage error={error} setError={setError} />
      {checkOut}
    </div>
  );
};

export default CheckoutView;
