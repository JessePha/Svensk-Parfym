import React, { useState, useEffect } from "react";
import Styles from "./Policy.module.css";
import { projectFirestore } from "../../firestore/config";
import Spinner from "../UI/Spinner/Spinner";
import ErrorMessage from "../UI/ErrorMessage/ErrorMessage";
const Policy = () => {
  const [policy, setPolicy] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    let contents = [];
    const fetchItem = () => {
      projectFirestore
        .collection("Policy")
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            contents.push({ ...doc.data() });
          });
          setPolicy(contents);
        })
        .catch((error) => {
          setError(true);
        });
    };
    fetchItem();
  }, []);

  let policyContent = <Spinner loading={true} />;
  let errorMsg = <ErrorMessage error={error} setError={setError} />;
  if (policy.length > 0) {
    let tempContent = Object.values(policy[0]).slice();
    const index = tempContent.indexOf("TERMS & CONDITON");
    tempContent.splice(index, 1);
    console.log(tempContent)
    policyContent = (
      <div>
        <h1>{policy[0].title}</h1>
        <br />
        {tempContent.map((content, index) => (
          <div className={Styles.Paragraph} key={index}>
            <h4>{content[0]}</h4>
            <p>{content[1]}</p>
            <br />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={Styles.MainDiv}>
      {errorMsg} {policyContent}
    </div>
  );
};

export default Policy;
