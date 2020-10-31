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
  const addAndShowItem = (data) => {

    const idFilter = props.itemInCart.filter((val) => {
      return val.id === data.id;
    });
    let productInCartCount = null;
    if (idFilter[0] !== undefined) {
      productInCartCount = idFilter[0].count;
    }
    if (productInCartCount >= data.stock) {
      props.addToCart(data, 1);
      setShowItemAdded(
        <ShowAddedItem
          url={data.url}
          name={data.name}
          size={data.size}
          price={data.price}
        />
      );
    } else {
      console.log("test");
      setShowOutOfStock(<ShowOutOfStock />);
    }

    setDisableButton(true);
    setTimeout(() => {
      setDisableButton(false);
      setShowItemAdded(null);
      setShowOutOfStock(null);
    }, 2000);
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
      {showOutOfStock}
      {showItemAdded}
      {content}
    </div>
  );
};

export default Shop;
