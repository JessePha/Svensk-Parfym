import React, { useState } from "react";
import ShopRender from "./ShopRender/ShopRender";
import ShopRenderForSet from "./ShopRender/ShopRenderForSet";
import { useHistory } from "react-router-dom";
import ShowAddedItem from "../UI/ShowAddedItem/ShowAddedItem";
import "./Shop.css";

const Shop = ({ addToCart, products, cartItem }) => {
  let history = useHistory();
  const [showItemAdded, setShowItemAdded] = useState(null);
  const [disableButton, setDisableButton] = useState(false);
  let discoverySet = products.filter(
    (product) =>
      product.name === "Discovery Set 1" ||
      product.name === "Discovery Set 2" ||
      product.name === "Discovery Set 3"
  );
  let perfumeSet = products.filter(
    (product) =>
      product.name !== "Discovery Set 1" &&
      product.name !== "Discovery Set 2" &&
      product.name !== "Discovery Set 3"
  );

  const addAndShowItem = (data) => {
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
      {discoverySet.map((set, index) => (
        <ShopRenderForSet
          key={index}
          img={set.url[0]}
          name={set.name}
          price={set.price}
          moreInfo={() => goTo(set.name, set.size)}
          addToCart={() =>
            addAndShowItem({
              ...set,
              size: set.size,
              price: set.price,
            })
          }
          disableButton={disableButton}
        />
      ))}
      {perfumeSet.map((perfume, index) => (
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
          disableButton={disableButton}
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
