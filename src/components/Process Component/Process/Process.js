import React from "react";
import perfym1 from "../Pictures/perfym1.jpg";
import ProcessRender from "./ProcessRender/ProcessRender";

const Text = (props) => {
  let sections = [
    {
      sect: [
        { pic1: perfym1, cord: -1.1 },
        {pic2: perfym1, cord: -1.0},
        {
          text:
            "With focus on usability and versatility Svensk Parfym is a fine fragrances brand - made in Sweden, inspired by Sweden. The line of fragrances of Svensk Parfym will continue to grow as inspiration and creativity comes along always unique, generous and progressing.",
          cord: -1.5,
        },
      ],
    },
    {
      sect: [
        { pic1: perfym1, cord: -1.0 },
        {pic2: perfym1, cord: -1.0},
        {
          text:
            "Fragrant molecules are non-reagent structures, keys to our mind and soul, either sitting on surfaces or floating around in the air. The volatility and behaviour of these fantastic molecules depend totally on their structures and on environmental physical circumstances, temperature and humidity being the most important ones. All unique inventions needs bold creativity. Perfumery needs both unique inventions and total constancy - they are just different parts of the process; first invention then full systematic consistency.",
          cord: -1.5,
        },
      ],
    },
    {
      sect: [
        { pic1: perfym1, cord: -1.0 },
        {pic2: perfym1, cord: -0.9},
        {
          text:
            "Niche perfumery is specialist perfumery with all focus on perfume. Designer perfumes comes from brands that sells all sorts of things; clothes, shoes, bags, makeup, you name it. Svensk Parfym is definitely a niche brand in the sense that we focus entirely on fine fragrances. Niche is the best you can find if there is much dedication and talent behind it and consequently niche is very poor if there isn’t.",
          cord: -1.3,
        },
      ],
    },
    {
      sect: [
        { pic1: perfym1, cord: -1.0 },
        {pic2: perfym1, cord: -1.0},
        {
          text:
            "We love differences. Svensk Parfym fragrances are categorised as gender-free to signalise that anyone anywhere should think and feel by themselves what they want - freely and with all differences preserved.",
          cord: -1.2,
        },
      ],
    },
    {
      sect: [
        { pic1: perfym1, cord: -1.0},
        {pic2: perfym1, cord: -1.1},

        {
          text:
            "It all begins with an idea, a longing to create a composition that tells a certain story. The idea developes to a search for the best fragrance materials for the purpose - a movement of extrovert creativity, boldness and modesty. The results are finally tested and analysed to finally become accessable perfumes for you. ",
          cord: -1.2,
        },
      ],
    },
  ];

  /*return (
    <div className={classes.textdiv}>
      <div className={classes.process}>
        <h1> CONCEPT OF SVENSK PARFYM </h1>
        <p className={classes.breadText}>
          With focus on usability and versatility Svensk Parfym is a fine
          fragrances brand - made in Sweden, inspired by Sweden. The line of
          fragrances of Svensk Parfym will continue to grow as <br />{" "}
          inspiration and creativity comes along - <br /> always unique,
          generous and progressing.
        </p>
        <img src={perfym1} alt="Flowers" className={classes.pic} />
      </div>

      <div className={classes.process}>
        <h1> INVENTION</h1>
        <p className={classes.breadText}>
          Fragrant molecules are non-reagent structures, keys to our mind and
          soul, either sitting on surfaces or floating around in the air. The
          volatility and behaviour of these fantastic molecules depend totally
          on their structures and on environmental physical circumstances,
          temperature and humidity being the most important ones. <br /> All
          unique inventions needs bold creativity. Perfumery needs both unique
          inventions and total constancy - they are just different parts of the
          process; first invention then full systematic consistency.
        </p>
        <img src={perfym1} alt="Flowers" className={classes.pic} />
      </div>

      <div className={classes.process}>
        <h1> NICHE PERFUMERY </h1>
        <p className={classes.breadText}>
          Niche perfumery is specialist perfumery with all focus on perfume.
          Designer perfumes comes from brands that sells all sorts of things;
          clothes, shoes, bags, makeup, you name it. <br /> Svensk Parfym is
          definitely a niche brand in the sense that we focus entirely on fine
          fragrances. Niche is the best you can find if there is much dedication
          and talent behind it and consequently niche is very poor if there
          isn’t.
        </p>
        <img src={perfym1} alt="Flowers" className={classes.pic} />
      </div>

      <div className={classes.process}>
        <h1> FRAGRANCE IS GENDER-FREE </h1>
        <p className={classes.breadText}>
          We love differences. Svensk Parfym fragrances are categorised as
          gender-free to signalise that anyone anywhere should think and feel by
          themselves what they want - <br /> freely and with all differences
          preserved.
        </p>
        <img src={perfym1} alt="Flowers" className={classes.pic} />
      </div>

      <div className={classes.process}>
        <h1> INVENTION </h1>
        <p className={classes.breadText}>
          It all begins with an idea, a longing to create a composition that
          tells a certain story. The idea developes to a search for the best
          fragrance materials for the purpose - a movement of extrovert
          creativity, boldness and modesty. The results are finally tested and
          analysed to finally become accessable perfumes for you.
        </p>
        <img src={perfym1} alt="Flowers" className={classes.pic} />
      </div>
    </div>
  );*/
  return (
    <div>
      {sections.map((section, index) => (
        <ProcessRender key={index} section={section} yCord={props.yCord} />
      ))}
    </div>
  );
};

export default Text;
