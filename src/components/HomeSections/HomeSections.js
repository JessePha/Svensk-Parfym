import React from "react";
import HomeSection from "./HomeSection/HomeSection";

const HomeSections = ({ yCord, pxToVh, homeContent }) => {
  let texts = [];
  let cord = [
    [{ cord: -0.7 }, { cord: -1.1 }, { cord: -0.8 }, { cord: -1.3 }],
    [{ cord: -0.7 }, { cord: -0.5 }, { cord: -0.8 }, { cord: -0.9 }],
    [{ cord: -0.4 }, { cord: -0.5 }, { cord: -0.3 }, { cord: -0.6 }],
    [{ cord: -0.1 }, { cord: -0.3 }, { cord: -0.2 }, { cord: -0.2 }],
  ];
  texts = homeContent.map((section) => section.text);
  let sections = homeContent.map((section, index) => (
    <HomeSection
      key={index}
      section={section}
      cordination={cord[index]}
      yCord={yCord}
      texts={texts}
      showText={pxToVh}
    />
  ));
  return <div>{sections}</div>;
};

export default HomeSections;
