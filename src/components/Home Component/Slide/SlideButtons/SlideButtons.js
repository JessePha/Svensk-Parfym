import React from "react";

const LeftButton = (props) => {
  return (
    <button
      id={"left"}
      type={"button"}
      value={props.currentPage - props.shownData}
    >
      {"<"}
    </button>
  );
};
const RightButton = (props) => {
  return (
    <button
      id={"rigth"}
      type={"button"}
      value={props.currentPage + props.shownData}
    >
      {">"}
    </button>
  );
};

export { RightButton, LeftButton };
