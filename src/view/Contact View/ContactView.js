import React, { useEffect, useState } from "react";
import ErrorMessage from "../../components/UI/ErrorMessage/ErrorMessage"
import Spinner from "../../components/UI/Spinner/Spinner";
import Contact from "../../components/Contact Component/Contact"
const ContactView = () => {
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, []);

  let content = <Spinner loading={loading} />;
    content = <Contact Contact={Contact} />;


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

export default ContactView;
