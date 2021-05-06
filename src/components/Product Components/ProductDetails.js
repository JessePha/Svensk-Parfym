import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import classes from "./ProductDetails.module.css";
import Description from "../../components/Product Components/Description/Description";
import ImageSlideShow from "../../components/Product Components/Image Slideshow/ImageSlideshow";
import { BiShoppingBag } from "react-icons/bi";
import ShowAddedItem from "../../components/UI/ShowAddedItem/ShowAddedItem";
import Price from "../../components/UI/Price/Price";
import ProductRender from "../../components/Product Components/ProductRender/ProductRender";

const ProductDetails = ({ addToCart, setShowItemAdded, products, item }) => {
  let content = null;
  let checkProductForDisplay = false;
  let viewProduct = [];
  let { name, size } = useParams();
  let [price, setPrice] = useState(850);
  const [chosenItem, setChosenItem] = useState(null);
  const [disableButton, setDisableButton] = useState(false);

  if (viewProduct) {
    checkProductForDisplay = products.some(
      (product) =>
        product.name === "Discovery Set 1" ||
        product.name === "Discovery Set 2" ||
        product.name === "Discovery Set 3"
    );
  }

  const addAndShowItem = (data) => {
    addToCart(data.data, data.amount);
    setShowItemAdded(
      <ShowAddedItem
        url={data.data.url}
        name={data.data.name}
        size={data.data.size}
        price={data.data.price}
      />
    );
    setDisableButton(true);
    setTimeout(() => {
      setDisableButton(false);
      setShowItemAdded(null);
    }, 2000);
  };
  useEffect(() => {
    setPrice(viewProduct.price[1]);
    setChosenItem({
      ...viewProduct,
      price: viewProduct.price[1],
      size: viewProduct.size[0],
    });
    if (
      viewProduct.name === "Discovery Set 1" ||
      viewProduct.name === "Discovery Set 2" ||
      viewProduct.name === "Discovery Set 3"
    ) {
      setPrice(viewProduct.price);
      setChosenItem({
        ...viewProduct,
        price: viewProduct.price,
        size: viewProduct.size,
      });
    }
  }, []);

  if (products) {
    viewProduct = products.filter(
      (product) => product.name === name && product.size[0] === size
    );
  }

  if (item !== null) {
    viewProduct = { ...item };
    const selectedSize = (e) => {
      if (e.target.value === viewProduct.size[0]) {
        setPrice(viewProduct.price[1]);
        setChosenItem({
          ...viewProduct,
          price: viewProduct.price[1],
          size: e.target.value,
        });
      } else if (e.target.value === viewProduct.size[1]) {
        setPrice(viewProduct.price[0]);
        setChosenItem({
          ...viewProduct,
          price: viewProduct.price[0],
          size: e.target.value,
        });
      }
    };
    content = (
      <>
        <ImageSlideShow viewProduct={viewProduct} />
        <div className={classes.Options}>
          <h1>{viewProduct.name}</h1>
          <ProductRender
            viewProduct={viewProduct}
            selectedSize={selectedSize}
            price={price}
            chosenItem={chosenItem}
            setPrice={setPrice}
            setChosenItem={setChosenItem}
            addToCart={addAndShowItem}
            addAndShowItem={addAndShowItem}
            disableButton={disableButton}
            displaySetProduct={checkProductForDisplay}
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
                <button
                  className={classes.AddToCartButton}
                  onClick={() =>
                    addAndShowItem({ data: chosenItem, amount: 1 })
                  }
                  disabled={disableButton}
                >
                  <BiShoppingBag className={classes.ShoppingBag} />
                  <p>Buy</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <div className={classes.ProductView}>{content}</div>;
};

export default ProductDetails;
