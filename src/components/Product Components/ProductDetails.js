import React, { useState } from "react";
import { useParams } from "react-router";
import classes from "./ProductDetails.module.css";
import Description from "../../components/Product Components/Description/Description";
import ImageSlideShow from "../../components/Product Components/Image Slideshow/ImageSlideshow";
import Select from "../../components/Product Components/Select/Select";
import Spinner from "../../components/UI/Spinner/Spinner";
import { BiShoppingBag } from "react-icons/bi";
import ShowAddedItem from "../../components/UI/ShowAddedItem/ShowAddedItem";
import Price from "../../components/UI/Price/Price";
import ShowOutOfStock from "../../components/UI/ShowOutOfStock/ShowOutOfStock";

const ProductDetails = (props) => {
  let content = null;
  let viewProduct = [];
  let { name, size } = useParams();
  let [price, setPrice] = useState(850);
  const [chosenItem, setChosenItem] = useState(null);
  const [showItemAdded, setShowItemAdded] = useState(null);
  const [disableButton, setDisableButton] = useState(false);
  const [showOutOfStock, setShowOutOfStock] = useState(null);

  const addAndShowItem = (data) => {
    const idFilter = props.itemInCart.filter((val) => {
      return val.id === data.data.id;
    });
    let productInCartCount = null;
    if (idFilter[0] !== undefined) {
      console.log(idFilter[0].count);
      productInCartCount = idFilter[0].count;
    }
    if (productInCartCount < data.data.stock) {
      props.addToCart(data.data, data.amount);
      setShowItemAdded(
        <ShowAddedItem
          url={data.data.url}
          name={data.data.name}
          size={data.data.size}
          price={data.data.price}
        />
      );
    } else {
      setShowOutOfStock(
        <ShowOutOfStock
          url={data.data.url}
          name={data.data.name}
          size={data.data.size}
          price={data.data.price}
        />
      );
    }

    setDisableButton(true);
    setTimeout(() => {
      setDisableButton(false);
      setShowItemAdded(null);
      setShowOutOfStock(null);
    }, 3000);
  };

  if (viewProduct) {
    content = (
      <div>
        <Spinner loading={props.loading} />
      </div>
    );
  }

  if (props.products) {
    viewProduct = props.products.filter(
      (product) => product.name === name && product.size[0] === size
    );
  }

  if (props.item.length > 0) {
    viewProduct = props.item.slice();
    const selectedSize = (e) => {
      let target = e.target.value;
      if (target === viewProduct[0].size[0]) {
        setPrice(viewProduct[0].price[1]);
        setChosenItem({
          ...viewProduct[0],
          price: viewProduct[0].price[1],
          size: target,
        });
      }
      if (target === viewProduct[0].size[1]) {
        setPrice(viewProduct[0].price[0]);
        setChosenItem({
          ...viewProduct[0],
          price: viewProduct[0].price[0],
          size: target,
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
      <div>
        <ImageSlideShow viewProduct={viewProduct[0]} />
        <div className={classes.Options}>
          <h1>{viewProduct[0].name}</h1>
          <Select
            viewProduct={viewProduct[0]}
            selectedSize={selectedSize}
            price={price}
            chosenItem={chosenItem}
            setPrice={setPrice}
            setChosenItem={setChosenItem}
            addToCart={addAndShowItem}
            setDefault={defaultChosen}
            disableButton={disableButton}
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
      </div>
    );
  }

  return (
    <div className={classes.ProductView}>
      {showOutOfStock}
      {showItemAdded}
      {content}
    </div>
  );
};

export default ProductDetails;
