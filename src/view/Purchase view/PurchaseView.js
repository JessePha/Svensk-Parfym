import React, { useState, useEffect } from "react";
import PurchaseConfirmed from "../../components/PurchaseAccepted Components/PurchasePage";
import { projectFirestore } from "../../firestore/config";
import { useParams } from "react-router-dom";
import Spinner from '../../components/UI/Spinner/Spinner'

const PurchaseView = () => {
  const [orderInfo, setOrderInfo] = useState(null);
  let { orderid } = useParams();
  useEffect(() => {
    localStorage.clear("itemCart");
    const fetchOrder = () => {
      projectFirestore
        .collection("Orders")
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            if(doc.id === orderid){
              setOrderInfo(doc.data())
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchOrder();
  }, [orderid]);
  let content = (<Spinner loading = {true}/>)
  if(orderInfo !== null){
    content = (<PurchaseConfirmed orderData = {orderInfo} />)
  }
  return (
    <div>
      {content}
    </div>
  );
};

export default PurchaseView;
