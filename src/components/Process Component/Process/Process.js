import React, { useState, useEffect } from "react";
import classes from "./Process.module.css";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";
import Spinner from "../../UI/Spinner/Spinner";
import ProcessBar from "./ProcessBar/ProcessBar";
import Slide from "../../UI/Slide/Slide";
import { projectFirestore } from "../../../firestore/config";

const Process = (props) => {
  const [error, setError] = useState(props.error);
  const [processContent, setProcessContent] = useState([]);
  let errorMsg = <ErrorMessage error={error} setError={setError} />;
  let images = props.products.map((data) => data.url);
  const shownImages = 1;
  const [currentData, setCurrentData] = useState([]);
  const [lineFill, setLineFill] = useState(0);
  const [currentImages, setCurrentImages] = useState(
    images.slice(0, shownImages)
  );
  const [switchImage, setSwitchImage] = useState();
  useEffect(() => {
    let contents = [];
    const fetchItem = () => {
      projectFirestore
        .collection("process")
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            contents.push({ ...doc.data() });
          });
          setProcessContent(contents);
          setCurrentData(contents.slice(0, 1));
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchItem();
  }, []);


  let imageArr = [];
  let max = props.products.length;
  for (let i = 0; i < max; i++) {
    imageArr.push(i * shownImages);
  }
  const setPage = (e) => {
    const page = e.target.value;
    setSwitchImage(!switchImage)
    setCurrentData(processContent.slice(page, page + 1));
    setLineFill(page * 25);
    if (imageArr.includes(page + shownImages)) {
      setCurrentImages(images.slice(page, page + shownImages));
    }
  };
  let dots = processContent.map((data, index) => {
    return <li onClick={setPage} value={index} key={index}></li>;
  });
  let render = <Spinner loading={true} />;
  let screen = window.matchMedia("(min-width: 500px)").matches;
  if (processContent.length > 0) {
    let data = currentData.map((data) => {
      return (
        <div>
          <h2> {data.title} </h2>
          <p> {data.content}</p>
        </div>
      );
    });

    render = (
      <div className={classes.Process}>
        {errorMsg}
        <ProcessBar data={data} dots={dots} lineFill={lineFill} />
        <Slide
          shownImages={shownImages}
          products={props.products}
          currentImages={currentImages}
          screen={screen}
          switchImage={switchImage}
        />
      </div>
    );
  }
  return <div>{render}</div>;
};

export default Process;
