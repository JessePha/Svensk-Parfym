import React, { useEffect, useState } from "react";
import ShopRender from "./ShopRender/ShopRender";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import { fetchProduct } from "../../store/actionFunc/indexAction";
import { addItemToCart } from "../../store/actionFunc/indexAction";
import ShowAddedItem from "../UI/ShowAddedItem/ShowAddedItem";
import "./Shop.css";
import ErrorMessage from "../UI/ErrorMessage/ErrorMessage";

const Perfumes = (props) => {
  let history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showItemAdded, setShowItemAdded] = useState(null);
  useEffect(() => {
    setLoading(true);
    try {
      props.fetchData();
      setLoading(false);
      return () => props.fetchData();
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }, []);

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
    setTimeout(() => {
      setShowItemAdded(null);
    }, 3000);
  };

  const goTo = (name, size) => {
    history.push("/Fragrance/" + name + "/" + size);
  };
  let errorMsg = <ErrorMessage error={error} setError={setError} />;
  let content = (
    <div>
      <Spinner loading={loading} />
    </div>
  );
  if (props.products.length > 0 && !loading) {
    content = (
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
          />
        ))}
      </div>
    );
  }
  return (
    <div>
      {errorMsg}
      {showItemAdded}
      {content}
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
    fetchData: () => dispatch(fetchProduct()),
    addToCart: (item, amount) => dispatch(addItemToCart(item, amount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Perfumes);
