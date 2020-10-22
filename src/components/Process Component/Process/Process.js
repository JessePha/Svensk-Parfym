import React, { useEffect, useState } from "react";
import classes from "./Process.module.css";

import { connect } from "react-redux";
import { fetchProduct } from "../../../store/actionFunc/indexAction";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";
import Spinner from "../../UI/Spinner/Spinner";
import ProcessBar from "./ProcessBar/ProcessBar";

const Process = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
  const [lineFill, setLineFill] = useState(0);
  let setPage = (e) => {
    let page = e.target.value;
    setCurrentData(dataArr.slice(page, page + 1));
    setLineFill(page * 25);
    console.log(lineFill);
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
    return (
      <li onClick={setPage} value={index} key={index}>
        <div></div>
      </li>
    );
  });
  let errorMsg = <ErrorMessage error={error} setError={setError} />;

  useEffect(() => {
    setLoading(true);
    try {
      props.fetchData();
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }, []);

  let render = <Spinner />;
  if (!loading) {
    render = (
      <div className={classes.Process}>
        {errorMsg}
        <ProcessBar data={data} dots={dots} lineFill={lineFill} />
      </div>
    );
  } else {
    render = <Spinner />;
  }
  return <div>{render}</div>;
};

const mapStateToProps = (state) => {
  return {
    products: state.prd.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchProduct()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Process);
