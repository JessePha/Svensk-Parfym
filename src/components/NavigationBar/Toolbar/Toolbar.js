import React from "react";
import "./Toolbar.css";
import Burger from "../NavigationItems/Sidebar/DropDownButton/DropDownButton";
import NavigationItems from "../NavigationItems/NavigationItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Logo/Logo";

const Toolbar = (props) => {
  let searchBar = null;

  if(props.searchBar === true) {
    searchBar = <input></input>
  }
  return (
    <header className="TToolbar">
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
          icon={faShoppingBag}
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
