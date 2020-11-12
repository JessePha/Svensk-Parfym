import React, { useState, useEffect } from "react";
import Information from "../../components/Invent Component/Information/Information";
import { projectFirestore } from "../../firestore/config";
import Spinner from "../../components/UI/Spinner/Spinner";
import ErrorMessage from "../../components/UI/ErrorMessage/ErrorMessage";
let Invent = () => {
  const [aboutContent, setAoubtContent] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchItem = () => {
      projectFirestore
        .collection("invent")
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            setAoubtContent({ ...doc.data() });
          });
        })
        .catch((error) => {
          setError(true);
        });
    };
    fetchItem();
  }, []);
  let content = <Spinner loading={true} />;
  if (aboutContent) {
    content = <Information aboutContent={aboutContent} />;
  }
  let errorMsg = <ErrorMessage error={error} setError={setError} />;
  return (
    <div>
      {content}
      {errorMsg}
    </div>
  );
};

export default Invent;
