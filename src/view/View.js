import React, { useState } from "react";
import Toolbar from "../components/NavigationBar/Toolbar/Toolbar";
import Sidebar from "../components/NavigationBar/NavigationItems/Sidebar/Sidebar";
import en from "../shared/Images/en.png";
import fröjd from "../shared/Images/fröjd.png";
import idyll from "../shared/Images/idyll.png";
import ljus from "../shared/Images/ljus.png";
import prakt from "../shared/Images/prakt.png";
import sadel from "../shared/Images/sadel.png";
import skymning from "../shared/Images/skymning.png";
import stilla from "../shared/Images/stilla.png";
import virke from "../shared/Images/virke.png";
import "./View.css";
import Cart from "../components/NavigationBar/Cart/Cart";

const View = (props) => {
  const [data] = useState([
    {
      img: en,
      name: "En",
      description: "Test data for perfume.",
      price: 175,
    },
    {
      img: fröjd,
      name: "Fröjd",
      description: "Test data for perfume.",
      price: 175,
    },
    {
      img: idyll,
      name: "Idyll",
      description: "Test data for perfume.",
      price: 175,
    },
    {
      img: ljus,
      name: "Ljus",
      description: "Test data for perfume.",
      price: 175,
    },
    {
      img: prakt,
      name: "Prakt",
      description: "Test data for perfume.",
      price: 175,
    },
    {
      img: sadel,
      name: "Sadel",
      description: "Test data for perfume.",
      price: 175,
    },
    {
      img: skymning,
      name: "Shymning",
      description: "Test data for perfume.",
      price: 175,
    },
    {
      img: stilla,
      name: "Stilla",
      description: "Test data for perfume.",
      price: 175,
    },
    {
      img: virke,
      name: "Virke",
      description: "Test data for perfume.",
      price: 175,
    },
  ]);

  const [cart, setCart] = useState([]);
  let [totalPrice, setTotalPrice] = useState(null);

  const addToCartHandler = (product) => {
    console.log(product);
    const cartItems = cart.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item.name === product.name) {
        item.count++;
        alreadyInCart = true;
        setTotalPrice((totalPrice += product.price));
      }
    });
    if (!alreadyInCart) {
      setTotalPrice((totalPrice += product.price));
      cartItems.push({ ...product, count: 1 });
    }
    setCart(cartItems);
  };

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
    console.log(showOrderInfo);
    setShowOrderInfo({ showOrderInfo: !showOrderInfo });
  };
  const searchBarToggle = () => {
    console.log(searchBar);
    setSearchBar(!searchBar);
  };

  const cloneChildren = () => {
    const childrenWithProps = React.Children.map(props.children, (child) => {
      // checking isValidElement is the safe way and avoids a typescript error too
      const props = { data: [...data], addToCartHandler };
      if (React.isValidElement(child)) {
        return React.cloneElement(child, props);
      }
      return child;
    });
    return <main>{childrenWithProps}</main>;
  };

  return (
    <div className="Content">
      <Toolbar
        amountInCart={cart.length}
        drawerToggleClicked={sidebarToggleHandler}
        cartToggle={cartSideBarHandler}
        searchToggle={searchBarToggle}
        searchBar={searchBar}
      />
      <Sidebar open={sidebar} closed={sidebarClosedHandler} />
      <Cart
        open={showOrderInfo}
        closed={cartSideBarClose}
        products={cart}
        setProducts={setCart}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
      />
      {cloneChildren()}
    </div>
  );
};

export default View;
