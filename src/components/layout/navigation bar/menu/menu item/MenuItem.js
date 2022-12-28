import React, { Fragment, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { scroller } from "react-scroll";
import { menuContext } from "../../../../../store/menu-context";

import classes from "./MenuItem.module.css";

const MenuItem = ({ title, isMobile }) => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const { setIsMenuOpen } = useContext(menuContext);

  const menuItemClasses = !isMobile
    ? `${classes["menu-item"]} ${
        title !== "/" ? classes["menu-item-title"] : undefined
      }`
    : classes["menu-item-mobile"];

  const clickMenuItemHandler = () => {
    if (pathname !== "/") {
      sessionStorage.setItem("main-page-scroll-to", title);
      navigate("/", { replace: true });
    } else {
      sessionStorage.removeItem("main-page-scroll-to");
    }
    setIsMenuOpen(false);
    scroller.scrollTo(title, {
      spy: true,
      smooth: true,
      offset: -100,
      duration: 500,
    });
  };

  useEffect(() => {
    let scrollTo = sessionStorage.getItem("main-page-scroll-to");
    scroller.scrollTo(scrollTo, {
      spy: true,
      smooth: true,
      offset: -100,
      duration: 500,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionStorage.getItem("main-page-scroll-to")]);

  return (
    <Fragment>
      {title !== "/" ? (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a onClick={clickMenuItemHandler} className={menuItemClasses}>
          {title}
        </a>
      ) : (
        <li className={menuItemClasses}>/</li>
      )}
    </Fragment>
  );
};

export default MenuItem;
