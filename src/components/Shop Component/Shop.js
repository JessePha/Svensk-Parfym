import React, { useState } from "react";
import ShopRender from "./ShopRender/ShopRender";
import { useHistory } from "react-router-dom";
import ShowAddedItem from "../UI/ShowAddedItem/ShowAddedItem";
import "./Shop.css";

const Shop = ({ addToCart, products }) => {
  let history = useHistory();
  const [showItemAdded, setShowItemAdded] = useState(null);
  const [disableButton, setDisableButton] = useState(false);

  const addAndShowItem = (data) => {
    console.log(data)
    addToCart(data, 1);
    setShowItemAdded(
      <ShowAddedItem
        url={data.url}
        name={data.name}
        size={data.size}
        price={data.price}
      />
    );
    setDisableButton(true);
    setTimeout(() => {
      setDisableButton(false);
      setShowItemAdded(null);
    }, 2000);
  };

  const goTo = (name, size) => {
    history.push("/Fragrance/" + name + "/" + size);
  };
  let content = (
    <div className="perfumes">
      {products.map((perfume, index) => (
        <ShopRender
          key={index}
          img={perfume.url}
          name={perfume.name}
          price={perfume.price}
          moreInfo={() => goTo(perfume.name, perfume.size[0])}
          addToCart={() =>
            addAndShowItem({
              ...perfume,
              size: perfume.size[0],
              price: perfume.price[1],
            })
          }
          disable={disableButton}
        />
      ))}
    </div>
  );
  return (
    <div>
      {showItemAdded}
      {content}
    </div>
  );
};

export default Shop;
