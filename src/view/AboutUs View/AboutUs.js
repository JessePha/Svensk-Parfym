import React, { useState, useEffect } from "react";
import Information from "../../components/AboutUs Component/Information/Information";
import { projectFirestore } from "../../firestore/config";
import Spinner from "../../components/UI/Spinner/Spinner";
let AboutUs = () => {
  const [aboutContent, setAoubtContent] = useState();

  useEffect(() => {
    const fetchItem = () => {
      projectFirestore
        .collection("invent")
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            setAoubtContent({...doc.data()});
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchItem();
  }, []);
  let content = (<Spinner loading = {true}/>)
    if(aboutContent){
      content = <Information aboutContent={aboutContent} />
    }
  return (
    <div>
      {content}
    </div>
  );
};

export default AboutUs;
