import React, { useState } from "react";
import ShowMoreButton from "../../../UI/ShowMoreButton/ShowMoreButton";
import classes from "./MiddleText.module.css";
const MiddleText = () => {
  let [showMoreFirst, setShowMoreFirst] = useState(false);
  let [showMoreSecond, setShowMoreSecond] = useState(false);
  return (
    <div className={classes.MiddleText}>
      <div className={classes.firstColumn}>
        <h4>CONCEPT OF SVENSK PARFYM </h4>
        <p>
          With focus on usability and versatility Svensk Parfym is a fine
          fragrances brand - made in Sweden, inspired by Sweden. The line of
          fragrances of Svensk Parfym will continue to grow as inspiration and
          creativity comes along - always unique, generous and progressing.
        </p>
        <div className={showMoreFirst ? classes.showText : classes.hideText}>
          <br />
          <h4>FRAGRANCE</h4>
          <p>
            Fragrant molecules are non-reagent structures, keys to our mind and
            soul, either sitting on surfaces or floating around in the air. The
            volatility and behaviour of these fantastic molecules depend totally
            on their structures and on environmental physical circumstances,
            temperature and humidity being the most important ones. All unique
            inventions needs bold creativity. Perfumery needs both unique
            znventions and total constancy - they are just different parts of
            the process; first invention then full systematic consistency.
          </p>
        </div>
        <ShowMoreButton
          showMore={showMoreFirst}
          setShowMore={setShowMoreFirst}
        />
      </div>
      <div className={classes.SecondColumn}>
        <h4>NICHE PERFUMERY</h4>
        <p>
          Niche perfumery is specialist perfumery with all focus on perfume.
          Designer perfumes comes from brands that sells all sorts of things;
          clothes, shoes, bags, makeup, you name it. Svensk Parfym is definitely
          a niche brand in the sense that we focus entirely on fine fragrances.
          Niche is the best you can find if there is much dedication and talent
          behind it and consequently niche is very poor if there isn’t.
        </p>
        <div className={showMoreSecond ? classes.showText : classes.hideText}>
          <br />
          <h4>FRAGRANCE IS GENDER-FREE</h4>
          <p>
            We love differences. Svensk Parfym fragrances are categorised as
            gender-free to signalise that anyone anywhere should think and feel
            by themselves what they want - freely and with all differences
            preserved.
          </p>
          <br />

          <h4>INVENTION</h4>
          <p>
            It all begins with an idea, a longing to create a composition that
            tells a certain story. The idea developes to a search for the best
            fragrance materials for the purpose - a movement of extrovert
            creativity, boldness and modesty. The results are finally tested and
            analysed to finally become accessable perfumes for you.
          </p>
        </div>

        <ShowMoreButton
          showMore={showMoreSecond}
          setShowMore={setShowMoreSecond}
        />
      </div>
    </div>
  );
};

export default MiddleText;
