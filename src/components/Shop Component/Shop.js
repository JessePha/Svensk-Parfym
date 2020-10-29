import React, { useEffect, useState } from "react";
import ShopRender from "./ShopRender/ShopRender";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import { fetchProduct } from "../../store/actionFunc/indexAction";
import { addItemToCart } from "../../store/actionFunc/indexAction";
import ShowAddedItem from "../UI/ShowAddedItem/ShowAddedItem";
import "./Shop.css";

const Shop = (props) => {
  let history = useHistory();
  const [disableButton, setDisableButton] = useState(false);
  const [showItemAdded, setShowItemAdded] = useState(null);

  const addAndShowItem = (data) => {
    props.addToCart(data, 1);
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
      {content}
    </div>
  );
};

export default Shop;
