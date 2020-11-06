import React from "react";
import "./Perfume.css";

const Perfume = ({ img, name, description, moreInfo }) => {
  return (
    <div className="perfume">
      <img src={img} alt="perfume"></img>
      <h3>{name}</h3>
      <p>{description}</p>
      <button onClick = {moreInfo}>View detail</button>
    </div>
  );
};

export default Perfume;
