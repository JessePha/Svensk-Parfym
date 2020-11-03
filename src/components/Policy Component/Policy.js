import React, { useState, useEffect } from "react";
import Styles from "./Policy.module.css";
import { projectFirestore } from "../../firestore/config";
import Spinner from "../UI/Spinner/Spinner";

const Policy = () => {
  const [policy, setPolicy] = useState([]);
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
          console.log(error);
        });
    };
    fetchItem();
  }, []);

  let policyContent = <Spinner loading={true} />;

  if (policy.length > 0) {
    let tempContent = Object.values(policy[0]).slice();
    const index = tempContent.indexOf("TERMS & CONDITON");
    tempContent.splice(index, 1);
    policyContent = (
      <>
        <h1>{policy[0].title}</h1>
        <br />
        {tempContent.map((content) => (
          <div className={Styles.Paragraph}>
            <h4>{content[0]}</h4>
            <p>{content[1]}</p>
            <br />
          </div>
        ))}
      </>
    );
  }

  return <div className={Styles.MainDiv}>{policyContent}</div>;
};

export default Policy;
