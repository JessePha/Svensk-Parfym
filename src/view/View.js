import React, { useState } from "react";
import Toolbar from "../components/NavigationBar/Toolbar/Toolbar";
import Sidebar from "../components/NavigationBar/NavigationItems/Sidebar/Sidebar";
import Footer from "../components/Footer Component/Footer";
import "./View.css";
import Cart from "../components/NavigationBar/Cart/Cart";
import { connect } from "react-redux";

const View = (props) => {
  const [sidebar, setSidebar] = useState(false);

  const [showOrderInfo, setShowOrderInfo] = useState(false);


  const sidebarToggleHandler = () => {
    setSidebar(!sidebar);
  };

  const closeSidebar = () => {
    setSidebar(false)
  }


  const cartSideBarHandler = () => {
    setShowOrderInfo(!showOrderInfo);
  };

  return (
    <div className="Content">
      <Toolbar
        amountInCart={props.cartItems.totalAmount}
        drawerToggleClicked={sidebarToggleHandler}
        cartToggle={cartSideBarHandler}
        sideBar = {sidebar}
        toggleSidebar={sidebarToggleHandler}
        closeSidebar = {closeSidebar}
      />
      <Sidebar open={sidebar} toggleSidebar={sidebarToggleHandler} />
      <Cart
        open={showOrderInfo}
        closed={cartSideBarHandler}
        products={props.cartItems.cartItem}
        setProducts={props.setCartProducts}
        totalPrice={props.cartItems.totalPrice}
        totalAmount={props.cartItems.totalAmount}
      />
      {props.children}
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.prd.items,
    cartItems: state.crt,
  };
};

export default connect(mapStateToProps, null)(View);
