import React, { useState } from "react";
import ShopRender from "./ShopRender/ShopRender";
import { useHistory } from "react-router-dom";
import ShowAddedItem from "../UI/ShowAddedItem/ShowAddedItem";
import "./Shop.css";
import ShowOutOfStock from "../UI/ShowOutOfStock/ShowOutOfStock";

const Shop = (props) => {
  let history = useHistory();
  const [disableButton, setDisableButton] = useState(false);
  const [showItemAdded, setShowItemAdded] = useState(null);
  const [showOutOfStock, setShowOutOfStock] = useState(null);
  const [outOfStock, setOutOfStock] = useState(false);

  const addAndShowItem = (data) => {
    props.addToCart(data, 1, setOutOfStock);
    console.log(outOfStock)
    !outOfStock
      ? setShowItemAdded(
          <ShowAddedItem
            url={data.url}
            name={data.name}
            size={data.size}
            price={data.price}
          />
        )
      : setShowOutOfStock(
          <ShowOutOfStock
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
      setShowOutOfStock(null);
    }, 3000);
  };

  const goTo = (name, size) => {
    history.push("/Fragrance/" + name + "/" + size);
  };
  let content = (
    <div className="perfumes">
      {props.products.map((perfume, index) => (
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
      {showOutOfStock}
      {content}
    </div>
  );
};

export default Shop;
