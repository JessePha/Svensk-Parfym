import React, { useEffect, useState } from "react";
import ShopRender from "./ShopRender/ShopRender";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import { fetchProduct } from "../../store/actionFunc/indexAction";
import "./Shop.css";

const Perfumes = (props) => {
  console.log(props.products);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    let active = true;
    props.fetchData();
    return () => (active = false);
  }, []);

  let history = useHistory();
  const goTo = (name, size) => {
    history.push("/Fragrance/" + name + "/" + size);
  };

  let content = (
    <div>
      <Spinner loading={loading} />
    </div>
  );
  if (props.products.length > 0) {
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
  return <div>{content}</div>;
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
