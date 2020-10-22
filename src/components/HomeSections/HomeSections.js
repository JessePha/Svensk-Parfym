import React, { useState, useEffect } from "react";
import HomeSection from "./HomeSection/HomeSection";
import { projectFirestore } from "../../firestore/config";
import Spinner from "../UI/Spinner/Spinner";
import ErrorMessage from "../UI/ErrorMessage/ErrorMessage";

const HomeSections = (props) => {
  const [homeContent, setHomeContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  let sections = <Spinner loading={loading} />;
  let errorMsg = <ErrorMessage error={error} setError={setError} />;
  useEffect(() => {
    function fetchContent() {
      let items = [];
      projectFirestore
        .collection("homeContent")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            items.push({ ...doc.data(), id: doc.id });
          });
          setHomeContent(items);
          setLoading(false);
        })
        .catch((error) => {
          setError(true);
          setLoading(false);
        });
    }
    fetchContent();
  }, []);
  if (!loading && homeContent.length !== 0) {
    let cord = [
      [{ cord: -0.7 }, { cord: -1.1 }, { cord: -0.8 }, { cord: -1.3 }],
      [{ cord: -0.7 }, { cord: -0.5 }, { cord: -0.8 }, { cord: -0.9 }],
      [{ cord: -0.4 }, { cord: -0.5 }, { cord: -0.3 }, { cord: -0.6 }],
      [{ cord: -0.1 }, { cord: -0.3 }, { cord: -0.2 }, { cord: -0.2 }],
    ];
    sections = homeContent.map((section, index) => (
      <HomeSection
        key={index}
        section={section}
        cordination={cord[index]}
        yCord={props.yCord}
      />
    ));
  }

  return (
    <div>
      {errorMsg}
      {sections}
    </div>
  );
};

export default HomeSections;
