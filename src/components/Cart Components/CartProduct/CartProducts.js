import React from "react";

import Render from "./CartProductRender/CartProductRender";

const AddSubRemoveItems = (props) => {
  return (
    <div>
      {props.products.map((product, index) => (
        <Render
          key={index}
          products={props.products}
          index={index}
          setProducts={props.setProducts}
          totalPrice={props.totalPrice}
          setTotalPrice={props.setTotalPrice}
        />
      ))}
    </div>
  );
};

export default AddSubRemoveItems;
