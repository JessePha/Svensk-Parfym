import React, { useState, useEffect } from "react";
import classes from "./HomeView.module.css";
import HomeSections from "../../components/HomeSections/HomeSections";
import { projectFirestore } from "../../firestore/config";
import Spinner from "../../components/UI/Spinner/Spinner";
import Dots from "../../components/UI/Dots/Dots";
import ErrorMessage from "../../components/UI/ErrorMessage/ErrorMessage";

let HomeView = () => {
  const [homeContent, setHomeContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchContent = () => {
      setLoading(true);
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
        .catch(() => {
          setError(true);
        });
    };
    fetchContent();
  }, []);
  const [offSetY, setOffSetY] = useState(0);
  const handleScroll = () => {
    setOffSetY(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offSetY]);
  let pxToVh = offSetY / (window.innerHeight - 10);
  let showCase = <Spinner loading={loading} />;
  if (homeContent.length > 0) {
    let openUpShowcase = homeContent.slice(4, 5)[0];
    let homeSections = homeContent.slice(0, -1);
    showCase = (
      <div className={classes.HomeView}>
        <div className={classes.HomeOpenUp}>
          <div
            className={classes.ImagesContainer}
            style={{
              transform: `translateY(${-1.1 * offSetY}px)`,
              transition: ` 0.8s ease-out`,
            }}
          >
            <div className={classes.Image}>
              <img src={openUpShowcase.url} alt="perfume" />
            </div>
          </div>
          <div
            className={classes.innerShowcaseText}
            style={{
              transform: `translateY(${-0.6 * offSetY}px)`,
              transition: ` 0.8s ease-out`,
            }}
          >
            {openUpShowcase.text.map((text) => (
              <div key={text}>{text}</div>
            ))}
          </div>
        </div>
        <div className={classes.BlankSpace}></div>
        <HomeSections
          yCord={offSetY}
          pxToVh={pxToVh}
          homeContent={homeSections}
        />
        <Dots pxToVh={pxToVh} />
      </div>
    );
  }

  return (
    <div>
      <ErrorMessage error={error} setError={setError} />
      {showCase}
    </div>
  );
};

export default HomeView;
