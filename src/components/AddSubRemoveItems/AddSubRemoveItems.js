import React from "react";

import Render from "../AddSubRemoveItems/AddSubRemoveItemRender/AddSubRemoveItemRender";

const AddSubRemoveItems = (props) => {

  return (
    <div>
      {props.products.map((product, index) => (
        <Render
          key={index}
          products={props.products}
          index={index}
          setProducts={props.setProducts}
        />
      ))}
    </div>
  );
};

export default AddSubRemoveItems;
