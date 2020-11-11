import React, { useEffect, useState } from "react";
import { projectFirestore } from "../../firestore/config";
import ErrorMessage from "../../components/UI/ErrorMessage/ErrorMessage";
import Spinner from "../../components/UI/Spinner/Spinner";
import Policy from "../../components/Policy Component/Policy";
const PolicyView = () => {
  const [policy, setPolicy] = useState([]);
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(true);
  let data = [];

  useEffect(() => {
    const fetchItem = () => {
      projectFirestore
        .collection("Policy")
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            data.push({ ...doc.data() });
          });
          setPolicy(data);
          setLoading(false);
        })
        .catch(() => {
          setError(true);
          setLoading(false);
        });
    };
    fetchItem();
  }, []);

 let content = <Spinner loading={loading} />;
  if (policy.length > 0 && !loading) {
    console.log(policy[0].title);
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
