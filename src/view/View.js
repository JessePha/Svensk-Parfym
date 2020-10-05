import React, {useState} from "react";
import Toolbar from "../components/NavigationBar/Toolbar/Toolbar";
import Sidebar from "../components/NavigationBar/NavigationItems/Sidebar/Sidebar";
import "./View.css";
import Cart from "../components/NavigationBar/Cart/Cart";
import {connect} from 'react-redux'

const View = (props) => {
  const [sidebar, setSidebar] = useState(false);

  const [showOrderInfo, setShowOrderInfo] = useState(false);

  const [searchBar, setSearchBar] = useState(false);

  const sidebarClosedHandler = () => {
    setSidebar(false);
  };

  const sidebarToggleHandler = () => {
    setSidebar({ sidebar: !sidebar });
  };

  const cartSideBarClose = () => {
    setShowOrderInfo(false);
  };

  const cartSideBarHandler = () => {
    setShowOrderInfo({ showOrderInfo: !showOrderInfo });
  };
  const searchBarToggle = () => {
    setSearchBar(!searchBar);
  };


  return (
    <div className="Content">
      <Toolbar
        amountInCart={props.cartItems.totalAmount}
        drawerToggleClicked={sidebarToggleHandler}
        cartToggle={cartSideBarHandler}
        searchToggle={searchBarToggle}
        searchBar={searchBar}
      />
      <Sidebar open={sidebar} closed={sidebarClosedHandler} />
      <Cart
        open={showOrderInfo}
        closed={cartSideBarClose}
        products={props.cartItems.cartItem}
        setProducts={props.setCartProducts}
        totalPrice={props.cartItems.totalPrice}
        totalAmount={props.cartItems.totalAmount}
      />
      {props.children}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.prd.items,
    cartItems: state.crt
  }
}

export default connect(mapStateToProps,null)(View);
