import React, { useEffect, useState } from "react";
import ShopRender from "./ShopRender/ShopRender";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import { fetchProduct } from "../../store/actionFunc/indexAction";
import "./Shop.css";
import ErrorMessage from "../UI/ErrorMessage/ErrorMessage";

const Perfumes = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    try {
      props.fetchData();
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }, []);

  let history = useHistory();
  const goTo = (name, size) => {
    history.push("/Fragrance/" + name + "/" + size);
  };
  let errorMsg = <ErrorMessage error={error} setError={setError}/>
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
          />
        ))}
      </div>
    );
  }
  return <div>{errorMsg}{content}</div>;
};
const mapStateToProps = (state) => {
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
