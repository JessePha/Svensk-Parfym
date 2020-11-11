import React, { useState, useEffect } from "react";
import Toolbar from "../components/NavigationBar/Toolbar/Toolbar";
import Sidebar from "../components/NavigationBar/NavigationItems/Sidebar/Sidebar";
import Footer from "../components/Footer Component/Footer";
import "./View.css";
import Cart from "../components/NavigationBar/Cart/Cart";
import { connect } from "react-redux";
import { projectFirestore } from "../firestore/config";

const View = (props) => {
  const [navPic, setNavPic] = useState([]);

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

  useEffect(() => {
    const fetchItem = () => {
      projectFirestore
        .collection("navigation")
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            setNavPic(doc.data());
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchItem();
  }, []);

  return (
    <div className="Content">
      <Toolbar
        amountInCart={props.cartItems.totalAmount}
        drawerToggleClicked={sidebarToggleHandler}
        cartToggle={cartSideBarHandler}
        sideBar = {sidebar}
        toggleSidebar={sidebarToggleHandler}
        closeSidebar = {closeSidebar}
        navPic = {navPic}
      />
      <Sidebar open={sidebar} toggleSidebar={sidebarToggleHandler} navPic = {navPic} />
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
