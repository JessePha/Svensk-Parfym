import React, { useEffect, useState } from "react";
import classes from "./Process.module.css";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";
import Spinner from "../../UI/Spinner/Spinner";
import ProcessBar from "./ProcessBar/ProcessBar";
import barClasses from "./ProcessBar/ProcessBar.module.css";

const Process = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  let errorMsg = <ErrorMessage error={error} setError={setError} />;

  useEffect(() => {
    setLoading(true);
    try {
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }, []);

  let dataArr = [
    {
      header: "CONCEPT OF SVENSK PARFYM",
      text:
        "With focus on usability and versatility Svensk Parfym is a fine fragrances brand - made in Sweden, inspired by Sweden. The line of fragrances of Svensk Parfym will continue to grow as inspiration and creativity comes along - always unique, generous and progressing.",
    },
    {
      header: "INVENTION",
      text:
        "Fragrant molecules are non-reagent structures, keys to our mind and soul, either sitting on surfaces or floating around in the air. The volatility and behaviour of these fantastic molecules depend totally on their structures and on environmental physical circumstances, temperature and humidity being the most important ones. All unique inventions needs bold creativity. Perfumery needs both unique inventions and total constancy - they are just different parts of the process; first invention then full systematic consistency.",
    },
    {
      header: "NICHE PERFUMERY",
      text:
        "Niche perfumery is specialist perfumery with all focus on perfume. Designer perfumes comes from brands that sells all sorts of things; clothes, shoes, bags, makeup, you name it. Svensk Parfym is definitely a niche brand in the sense that we focus entirely on fine fragrances. Niche is the best you can find if there is much dedication and talent behind it and consequently niche is very poor if there isn’t.",
    },
    {
      header: "FRAGRANCE IS GENDER-FREE",
      text:
        "We love differences. Svensk Parfym fragrances are categorised as gender-free to signalise that anyone anywhere should think and feel by themselves what they want - freely and with all differences preserved.",
    },
    {
      header: "INVENTION",
      text:
        "It all begins with an idea, a longing to create a composition that tells a certain story. The idea developes to a search for the best fragrance materials for the purpose - a movement of extrovert creativity, boldness and modesty. The results are finally tested and analysed to finally become accessable perfumes for you.",
    },
  ];
  const [currentData, setCurrentData] = useState(dataArr.slice(0, 1));
  const [currentPage, setCurrentPage] = useState(0);
  const [lineFill, setLineFill] = useState(0);
  const [background, setBackground] = useState(false);

  let setPage = (e) => {
    let page = e.target.value;
    setCurrentData(dataArr.slice(page, page + 1));
    setLineFill(page * 25);
    setCurrentPage(page);
  };

  let data = currentData.map((data, index) => {
    return (
      <div>
        <h2> {data.header} </h2>
        <p> {data.text}</p>
      </div>
    );
  });
  let dots = dataArr.map((data, index) => {
    console.log(index === currentPage);
    return (
      <div>
        <li
          className={barClasses.Step}
          onClick={setPage}
          value={index}
          key={index}
        >
          <div className={barClasses.StepInner}></div>
        </li>
      </div>
    );
  });

  let render = <Spinner />;
  if (!loading) {
    render = (
      <div className={classes.Process}>
        {errorMsg}
        <ProcessBar
          data={data}
          dots={dots}
          lineFill={lineFill}
          page={currentPage}
          setBackground={setBackground}
          background={background}
        />
      </div>
    );
  } else {
    render = <Spinner />;
  }
  return <div>{render}</div>;
};

export default Process;
