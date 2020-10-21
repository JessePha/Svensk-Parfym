import React, { useEffect, useState } from "react";
import ShopRender from "./ShopRender/ShopRender";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import { fetchProduct } from "../../store/actionFunc/indexAction";
import "./Shop.css";
import ErrorMessage from "../UI/ErrorMessage/ErrorMessage";

const Perfumes = (props) => {
  console.log(props.products);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [active, setActive] = useState(false);
  let errorMsg = <ErrorMessage error={error} setError={setError} />;
  useEffect(() => {
    setLoading(true);
    setActive(true);
    try {
      props.fetchData();
      setLoading(false);
      return () => setActive(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }, []);

  let history = useHistory();
  const goTo = (name, size) => {
    history.push("/Fragrance/" + name + "/" + size);
  };

  let content = (
    <div>
      <Spinner />
    </div>
  );
  if (!loading && props.products.length !== 0) {
    console.log(props.products)
    content = (
      <div className="perfumes">
        {props.products.map((perfume, index) => (
          <ShopRender
            key={index}
            img={perfume.url}
            name={perfume.name}
            price={perfume.price}
            moreInfo={() => goTo(perfume.name, perfume.size[0])}
          />
        ))}
      </div>
    );
  }
  return (
    <div>
      {errorMsg}
      {content}
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state.prd.products);

  return {
    products: state.prd.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchProduct()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Perfumes);
