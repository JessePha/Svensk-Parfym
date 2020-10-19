import React, { useState, useEffect } from "react";
import HomeSection from "./HomeSection/HomeSection";
import { projectFirestore } from "../../firestore/config";
import Spinner from "../UI/Spinner/Spinner";

const HomeSections = (props) => {
  const [homeContent, setHomeContent] = useState([]);
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
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchContent();
  }, []);
  let sections = <Spinner />;

  if (homeContent.length > 0) {
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
  return <>{sections}</>;
};

export default HomeSections;
