import classes from "./ProcessBar.module.css";
import React, { useState } from "react";

let ProcessBar = () => {
  let [first, setFirst] = useState(false);
  let [second, setSecond] = useState(false);
  let [third, setThird] = useState(false);
  let [fourth, setFourth] = useState(false);
  let [fifth, setFifth] = useState(false);

  let setFirstActive = () => {
    setFirst(true);
    setSecond(false);
    setThird(false);
    setFourth(false);
    setFifth(false);
  };
  let setSecondActive = () => {
    setFirst(false);
    setSecond(true);
    setThird(false);
    setFourth(false);
    setFifth(false);
  };
  let setThirdActive = () => {
    setFirst(false);
    setSecond(false);
    setThird(true);
    setFourth(false);
    setFifth(false);
  };
  let setFourthActive = () => {
    setFirst(false);
    setSecond(false);
    setThird(false);
    setFourth(true);
    setFifth(false);
  };
  let setFifthActive = () => {
    setFirst(false);
    setSecond(false);
    setThird(false);
    setFourth(false);
    setFifth(true);
  };

  return (
    <div>
      <div className={classes.ProcessWrapper}>
        <div id={classes.ProgressBarContainer}>
          <ul>
            <li className={classes.Step01} onClick={setFirstActive}>
              <div className={classes.StepInner}></div>
            </li>
            <li className={classes.Step02} onClick={setSecondActive}>
              <div className={classes.StepInner}></div>
            </li>
            <li className={classes.Step03} onClick={setThirdActive}>
              <div className={classes.StepInner}></div>
            </li>
            <li className={classes.Step04} onClick={setFourthActive}>
              <div className={classes.StepInner}></div>
            </li>
            <li className={classes.Step05} onClick={setFifthActive}>
              <div className={classes.StepInner}></div>
            </li>
          </ul>
          <div id={classes.Line}>
            <div id={classes.LineProcess}></div>
          </div>
        </div>
        <div id={classes.ProgressContentSection}>
          <div
            className={classes.SectionContentDiscoveryActive}
            style={!first ? { display: "none" } : { display: "block" }}
          >
            <h2>CONCEPT OF SVENSK PARFYM</h2>
            <p>
              With focus on usability and versatility Svensk Parfym is a fine
              fragrances brand - made in Sweden, inspired by Sweden. The line of
              fragrances of Svensk Parfym will continue to grow as inspiration
              and creativity comes along - always unique, generous and
              progressing.
            </p>
          </div>

          <div
            className={classes.SectionContentDiscoveryActive}
            style={!second ? { display: "none" } : { display: "block" }}
          >
            <h2>INVENTION</h2>
            <p>
              Fragrant molecules are non-reagent structures, keys to our mind
              and soul, either sitting on surfaces or floating around in the
              air. The volatility and behaviour of these fantastic molecules
              depend totally on their structures and on environmental physical
              circumstances, temperature and humidity being the most important
              ones. All unique inventions needs bold creativity. Perfumery needs
              both unique inventions and total constancy - they are just
              different parts of the process; first invention then full
              systematic consistency.
            </p>
          </div>
          <div
            className={classes.SectionContentDiscoveryActive}
            style={!third ? { display: "none" } : { display: "block" }}
          >
            <h2>NICHE PERFUMERY</h2>
            <p>
              Niche perfumery is specialist perfumery with all focus on perfume.
              Designer perfumes comes from brands that sells all sorts of
              things; clothes, shoes, bags, makeup, you name it. Svensk Parfym
              is definitely a niche brand in the sense that we focus entirely on
              fine fragrances. Niche is the best you can find if there is much
              dedication and talent behind it and consequently niche is very
              poor if there isn’t.
            </p>
          </div>
          <div
            className={classes.SectionContentDiscoveryActive}
            style={!fourth ? { display: "none" } : { display: "block" }}
          >
            <h2>FRAGRANCE IS GENDER-FREE</h2>
            <p>
              We love differences. Svensk Parfym fragrances are categorised as
              gender-free to signalise that anyone anywhere should think and
              feel by themselves what they want - freely and with all
              differences preserved.
            </p>
          </div>
          <div
            className={classes.SectionContentDiscoveryActive}
            style={!fifth ? { display: "none" } : { display: "block" }}
          >
            <h2>INVENTION</h2>
            <p>
              It all begins with an idea, a longing to create a composition that
              tells a certain story. The idea developes to a search for the best
              fragrance materials for the purpose - a movement of extrovert
              creativity, boldness and modesty. The results are finally tested
              and analysed to finally become accessable perfumes for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessBar;
