import React, { useState } from "react";
import { useParams } from "react-router";
import classes from "./ProductDetails.module.css";
import Description from "../../components/Product Components/Description/Description";
import ImageSlideShow from "../../components/Product Components/Image Slideshow/ImageSlideshow";
import { BiShoppingBag } from "react-icons/bi";
import ShowAddedItem from "../../components/UI/ShowAddedItem/ShowAddedItem";
import Price from "../../components/UI/Price/Price";
import ProductRender from "../../components/Product Components/ProductRender/ProductRender";
import ShowOutOfStock from "../UI/ShowOutOfStock/ShowOutOfStock";

const ProductView = (props) => {
  let content = null;
  let viewProduct = [];
  let { name, size } = useParams();
  let [price, setPrice] = useState(850);
  const [chosenItem, setChosenItem] = useState(null);

  const [disableButton, setDisableButton] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);
  const addAndShowItem = (data) => {
    props.addToCart(data.data, data.amount, setOutOfStock);
    !outOfStock
      ? props.setShowItemAdded(
          <ShowAddedItem
            url={data.data.url}
            name={data.data.name}
            size={data.data.size}
            price={data.data.price}
          />
        )
      : props.setShowOutOfStock(
          <ShowOutOfStock
            url={data.data.url}
            name={data.data.name}
            size={data.data.size}
            price={data.data.price}
          />
        );
    setDisableButton(true);
    setTimeout(() => {
      props.setShowItemAdded(null);
      props.setShowOutOfStock(null);
            setDisableButton(false);

    }, 3000);
  };

  if (props.products) {
    viewProduct = props.products.filter(
      (product) => product.name === name && product.size[0] === size
    );
  }

  if (props.item.length > 0) {
    viewProduct = props.item.slice();
    const selectedSize = (e) => {
      if (e.target.value === viewProduct[0].size[0]) {
        setPrice(viewProduct[0].price[1]);
        setChosenItem({
          ...viewProduct[0],
          price: viewProduct[0].price[1],
          size: e.target.value,
        });
      }
      if (e.target.value === viewProduct[0].size[1]) {
        setPrice(viewProduct[0].price[0]);
        setChosenItem({
          ...viewProduct[0],
          price: viewProduct[0].price[0],
          size: e.target.value,
        });
      }
    };

    const defaultChosen = () => {
      setPrice(viewProduct[0].price[1]);
      setChosenItem({
        ...viewProduct[0],
        price: viewProduct[0].price[1],
        size: viewProduct[0].size[0],
      });
    };

    content = (
      <>
        <ImageSlideShow viewProduct={viewProduct[0]} />
        <div className={classes.Options}>
          <h1>{viewProduct[0].name}</h1>
          <ProductRender
            viewProduct={viewProduct[0]}
            selectedSize={selectedSize}
            price={price}
            chosenItem={chosenItem}
            setPrice={setPrice}
            setChosenItem={setChosenItem}
            addToCart={addAndShowItem}
            setDefault={defaultChosen}
            disableButton={disableButton}
            addAndShowItem={addAndShowItem}
          />
          <Description viewProduct={viewProduct} />
        </div>
        <div className={classes.PriceAndBuyButtonContainer}>
          <div className={classes.PriceAndBuyButton}>
            <div>
              <Price price={price} value="Kr" />
            </div>
            <div className={classes.addToCart}>
              <div className={classes.AddToCartButtonContain}>
                <div
                
                  className={classes.AddToCartButton}
                  onClick={() =>
                    addAndShowItem({ data: chosenItem, amount: 1 })
                  }
                >
                  <BiShoppingBag className={classes.ShoppingBag} />
                  <p>Buy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className={classes.ProductView}>
      {content}
    </div>
  );
};

export default ProductView;
