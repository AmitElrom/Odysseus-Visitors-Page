import React, { Fragment, useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import { scroller } from "react-scroll";
import { menuContext } from "../../../../../store/menu-context";
import { screenSizeContext } from "../../../../../store/screen-size-context";

import classes from "./MenuItem.module.css";

const MenuItem = ({ title, isMobile }) => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const { setIsMenuOpen } = useContext(menuContext);
  const { height } = useContext(screenSizeContext);

  const menuItemClasses = !isMobile
    ? `${classes["menu-item"]} ${title !== "/" ? classes["menu-item-title"] : undefined
    }`
    : classes["menu-item-mobile"];

  const clickMenuItemHandler = () => {
    setIsMenuOpen(false);
    if (pathname !== "/") {
      sessionStorage.setItem("main-page-scroll-to", title);
      navigate("/", { replace: true });
    } else {
      sessionStorage.removeItem("main-page-scroll-to");
      scroller.scrollTo(title, {
        spy: true,
        smooth: true,
        offset: height < 900 ? -100 : -150,
        duration: 500,
      });
    }
  };

  return (
    <Fragment>
      {title !== "/" ? (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          onClick={clickMenuItemHandler}
          className={`menuItem ${menuItemClasses}`}
        >
          {title}
        </a>
      ) : (
        !isMobile && <li className={menuItemClasses}>/</li>
      )}
    </Fragment>
  );
};

export default MenuItem;
