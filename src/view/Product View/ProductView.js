import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import classes from "./ProductView.module.css";
import { connect } from "react-redux";
import { projectFirestore } from "../../firestore/config";
import { addItemToCart } from "../../store/actionFunc/indexAction";
import Description from "../../components/Product Components/Description/Description";
import ImageSlideShow from "../../components/Product Components/Image Slideshow/ImageSlideshow";
import Select from "../../components/Product Components/Select/Select";
import Spinner from "../../components/UI/Spinner/Spinner";
import { BiShoppingBag } from "react-icons/bi";
import ShowAddedItem from "../../components/UI/ShowAddedItem/ShowAddedItem";
import Price from "../../components/UI/Price/Price";

const ProductView = (props) => {
  let content = null;
  let viewProduct = [];
  let [itm, setItm] = useState([]);
  let { name, size } = useParams();
  let [price, setPrice] = useState(850);
  const [chosenItem, setChosenItem] = useState(null);
  const [showItemAdded, setShowItemAdded] = useState(null);
  const [loading, setLoading] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  useEffect(() => {
    function fetchItem() {
      projectFirestore
        .collection("products")
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            if (doc.data().name === name) {
              setItm([doc.data()]);
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchItem();
    setLoading(true);
  }, [name]);

  const addAndShowItem = (data) => {
    props.addToCart(data.data, data.amount);
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
    }, 3000);
  };

  if (viewProduct) {
    content = (
      <>
        <Spinner loading={loading} />
      </>
    );
  }

  if (props.products) {
    viewProduct = props.products.filter(
      (product) => product.name === name && product.size[0] === size
    );
  }

  if (itm.length > 0) {
    viewProduct = itm.slice();
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
      </>
    );
  }

  return (
    <div className={classes.ProductView}>
      {content}
      {itm.length > 0 ? <div>{showItemAdded}</div> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.prd.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item, amount) => dispatch(addItemToCart(item, amount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);
