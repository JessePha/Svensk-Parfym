import React from "react";
import HomeSection from "./HomeSection/HomeSection";
import En1 from "../../shared/Images/En_nature.jpg";
import En2 from "../../shared/Images/En_nature1.jpg";
import Virke from "../../shared/Images/Virke_nature.jpg";
import Idyll from "../../shared/Images/Idyll_nature.jpg";
import Ljus from "../../shared/Images/Ljus_nature.jpg";
import Prakt from "../../shared/Images/Prakt_nature.jpg";
import Prakt1 from "../../shared/Images/Prakt_nature1.jpg";
import Prakt2 from "../../shared/Images/Prakt_nature2.jpg";
import Sadel1 from "../../shared/Images/Sadel_nature1.jpg";
import Sadel2 from "../../shared/Images/Sadel_nature2.jpg";
import Sadel3 from "../../shared/Images/Sadel_nature3.jpg";
import Sadel4 from "../../shared/Images/Sadel_nature4.jpg";

const HomeSections = (props) => {
  let sections = [
    {
      sect: [
        { pic1: En1, cord: -0.7 },
        { pic2: En2, cord: -1.4 },
        { pic3: Virke, cord: -0.8 },
        { text: "En, a tribute to the Swedish juniper", cord: -1.3 },
      ],
    },
    {
      sect: [
        { pic1: Idyll, cord: -0.7 },
        { pic2: Ljus, cord: -0.5 },
        { pic3: Sadel1, cord: -0.8 },
        {
          text: "Idyll, the chilly air and the warming energy of spring.",
          cord: -0.9,
        },
      ],
    },
    {
      sect: [
        { pic1: Prakt, cord: -0.4 },
        { pic2: Prakt1, cord: -0.5 },
        { pic3: Prakt2, cord: -0.3 },
        {
          text: "Plenty of blackcurrant berries and blackcurrant leaves",
          cord: -0.6,
        },
      ],
    },
    {
      sect: [
        { pic1: Sadel2, cord: -0.1 },
        { pic2: Sadel3, cord: -0.3 },
        { pic3: Sadel4, cord: -0.2 },
        { text: "A tribute to Swedish design and craftsmanship.", cord: -0.2 },
      ],
    },
  ];
  return (
    <div>
      {sections.map((section, index) => (
        <HomeSection key={index} section={section} yCord={props.yCord} />
      ))}
    </div>
  );
};

export default HomeSections;
