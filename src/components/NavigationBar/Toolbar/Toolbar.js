import React, { useState, useEffect } from "react";
import "./Toolbar.css";
import Burger from "../NavigationItems/Sidebar/DropDownButton/DropDownButton";
import NavigationItems from "../NavigationItems/NavigationItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Logo/Logo";

const Toolbar = (props) => {
  const [show, setShow] = useState({
    visible: true,
    prevScroll: window.pageYOffset,
  });
  useEffect(() => {
    const handScroll = () => {
      const { prevScroll } = { ...show };
      const currentScrollPos = window.pageYOffset;
      const visible = prevScroll > currentScrollPos;
      setShow({ visible, prevScroll: currentScrollPos });
    };
    window.addEventListener("scroll", handScroll);
    return () => {
      window.removeEventListener("scroll", handScroll);
    };
  }, [show]);

  let searchBar = null;
  if (props.searchBar === true) {
    searchBar = <input></input>;
  }
  return (
    <header className={show.visible ? "TToolbar" : "Toolbar-hidden"}>
      <Burger clicked={props.drawerToggleClicked} />
      <div className="TLogo">
        <Logo />
      </div>
      <nav className="DesktopOnly">
        <NavigationItems />
      </nav>
      <div className="TCart-div">
        <p>{props.amountInCart}</p>
        <FontAwesomeIcon
          icon={faShoppingCart}
          className="TCart"
          onClick={props.cartToggle}
          amount={props.amountInCart}
        />
      </div>
      <div className="TSearchBar">
        {searchBar}
        <FontAwesomeIcon
          onClick={props.searchToggle}
          icon={faSearch}
          className="TSearchIcon"
        />
      </div>
    </header>
  );
};

export default Toolbar;
