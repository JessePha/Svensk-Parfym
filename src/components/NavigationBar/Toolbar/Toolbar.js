import React from "react";
import "./Toolbar.css";
import Burger from "../NavigationItems/Sidebar/DropDownButton/DropDownButton";
import NavigationItems from "../NavigationItems/NavigationItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Logo/Logo";

const toolbar = (props) => (
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
      />
    </div>
  </header>
);

export default toolbar;
