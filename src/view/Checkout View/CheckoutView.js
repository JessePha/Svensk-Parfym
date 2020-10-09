import React from "react";

import Checkout from "../../components/Checkout Component/Checkout";
import Styles from "./CheckoutView.module.css";

const CheckoutView = () => {
  return (
    <div className={Styles.CheckoutView}>
      <Checkout />
    </div>
  );
};

export default CheckoutView;
