import React, { useEffect, useState } from "react";
import { projectFirestore } from "../../firestore/config";
import ErrorMessage from "../../components/UI/ErrorMessage/ErrorMessage";
import Spinner from "../../components/UI/Spinner/Spinner";
import Policy from "../../components/Policy Component/Policy";
import { policyData } from "../../handlepayment/getCheckoutData";
const PolicyView = () => {
  const [policy, setPolicy] = useState([]);
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    policyData(setPolicy, setError, setLoading);
  }, []);

  let content = <Spinner loading={loading} />;
  if (policy.length > 0) {
    content = <Policy policy={policy} />;
  }

  let errorMsg = null;
  if (error) {
    errorMsg = <ErrorMessage error={error} setError={setError} />;
  }
  return (
    <div>
      {errorMsg}
      {content}
    </div>
  );
};

export default PolicyView;
