import React, { useState, useEffect } from "react";
import classes from "./Toolbar.module.css";
import Burger from "../NavigationItems/Sidebar/SidebarIcon/SidebarIcon";
import NavigationItems from "../NavigationItems/NavigationItems";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Logo from "../Logo/Logo";

const Toolbar = ({cartToggle, closeSidebar,amountInCart,toggleSidebar,sideBar, navPic}) => {
  const [show, setShow] = useState({
    visible: true,
    prevScroll: window.pageYOffset,
  });

  const closeSideAndOpenCartBar = () => {
    cartToggle();
    closeSidebar();
  };

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

  let header = null;
  if (navPic.url) {
    header = (
      <header
        className={show.visible ? classes.Toolbar : classes.Toolbarhidden}
      >
        <div className={classes.LogoAndNav}>
          <Logo logo={navPic.url[0]} />
          <div className={classes.NavigationItems}>
            <NavigationItems />
          </div>
        </div>
        <img src={navPic.url[1]} alt="logo" className={classes.LogoName} />
        <div className={classes.Cartdiv}>
          {amountInCart > 0 ? <span>{amountInCart}</span> : null}
          <HiOutlineShoppingBag
            className={classes.Cart}
            onClick={() => closeSideAndOpenCartBar()}
            amount={amountInCart}
          />
          <Burger clicked={toggleSidebar} isOpened={sideBar} />
        </div>
      </header>
    );
  }

  return <> {header} </>;
};

export default Toolbar;
