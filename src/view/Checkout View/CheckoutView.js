import React, { useState, useEffect } from "react";
import Checkout from "../../components/Checkout Component/Checkout";
import Styles from "./CheckoutView.module.css";
import { projectFirestore } from "../../firestore/config";
import Spinner from "../../components/UI/Spinner/Spinner";

const CheckoutView = () => {
  const [checkoutContent, setCheckoutContent] = useState([]);
  const [loading, setLoading] = useState(false);

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
          console.log(error);
        });
    };
    fetchContent();
    return () => fetchContent();
  }, []);
  
  let checkOut = (
    <Spinner style={{ backgroundColor: "black" }} loading={loading} />
  );
  if (checkoutContent.length > 0) {
    checkOut = <Checkout data={checkoutContent[0].countries} />;
  }
  return <div className={Styles.CheckoutView}>{checkOut}</div>;
};

export default CheckoutView;
