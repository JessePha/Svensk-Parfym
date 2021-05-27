import React, { useState, useEffect } from "react";
import Checkout from "../../components/Checkout Component/Checkout";
import Styles from "./CheckoutView.module.css";
import Spinner from "../../components/UI/Spinner/Spinner";
import ErrorMessage from "../../components/UI/ErrorMessage/ErrorMessage";
import {checkoutData} from '../../handlepayment/getCheckoutData'
const CheckoutView = () => {
  const [checkoutContent, setCheckoutContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    checkoutData(setCheckoutContent,setError)
    setLoading(true)
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
