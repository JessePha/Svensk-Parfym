import React, { useEffect, useState } from "react";
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
  const [data, setData] = useState({
    items: [
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
    ],
    totalPrice: 0,
    totalAmount: 0,
  });

  const [cart, setCart] = useState([]);

  useEffect(() => {
    let updataCart = [...cart];
    addAmount(updataCart);
  }, [, cart]);

  const addToCartHandler = (product) => {
    console.log(product);
    const cartItems = cart.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item.name === product.name) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    setCart(cartItems);
    addAmount(cartItems);
  };

  const addAmount = (itemInCart) => {
    const tempItem = { ...itemInCart };
    const tempData = { ...data.items };
    let amount = Object.values(tempItem)
      .map((item) => item.count)
      .reduce((num, sum) => {
        return num + sum;
      }, 0);
    let price = Object.values(tempItem)
      .map((item) => item.price)
      .reduce((num, sum) => {
        return num + sum;
      }, 0);

    setData({ items: tempData, totalAmount: amount, totalPrice: price });
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
    setShowOrderInfo({ showOrderInfo: !showOrderInfo });
  };
  const searchBarToggle = () => {
    setSearchBar(!searchBar);
  };

  const cloneChildren = () => {
    const childrenWithProps = React.Children.map(props.children, (child) => {
      const props = { data: { ...data }, addToCartHandler };
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
        totalPrice={data.totalPrice}
        totalAmount={data.totalAmount}
      />
      {cloneChildren()}
    </div>
  );
};

export default View;
