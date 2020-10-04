import React, { useState, useEffect } from "react";
import classes from "./Toolbar.module.css";
import Burger from "../NavigationItems/Sidebar/Burger/Burger";
import NavigationItems from "../NavigationItems/NavigationItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
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

  return (
    <header className={show.visible ? classes.Toolbar : classes.Toolbarhidden}>
      <Logo />
      <div className={classes.NavigationItems}>
        <NavigationItems />
      </div>
      <div className={classes.Cartdiv}>
        {props.amountInCart > 0 ? <span>{props.amountInCart}</span> : null}
        <FontAwesomeIcon
          icon={faShoppingCart}
          className={classes.Cart}
          onClick={props.cartToggle}
          amount={props.amountInCart}
        />
        <Burger clicked={props.drawerToggleClicked} />
      </div>
    </header>
  );
};

export default Toolbar;
