import React, { Fragment, useEffect } from "react";
import { useNavigate } from 'react-router';
import { Link, scroller } from "react-scroll";

import classes from "./MenuItem.module.css";

const MenuItem = ({ title }) => {

  const navigate = useNavigate();

  const menuItemClasses = `${classes["menu-item"]} ${title !== "/" ? classes["menu-item-title"] : undefined
    }`;

  const clickMenuItemHandler = () => {
    sessionStorage.setItem("main-page-scroll-to", title);
    navigate('/', { replace: true });
  };

  useEffect(() => {
    let scrollTo = sessionStorage.getItem("main-page-scroll-to");
    scroller.scrollTo(scrollTo, {
      spy: true,
      smooth: true,
      offset: - 100,
      duration: 500
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionStorage.getItem("main-page-scroll-to")])

  return (
    <Fragment>
      {/* {title !== "/" ? (
        <Link to={title} spy={true} smooth={true} offset={-100} duration={500} className={menuItemClasses}>
          {title}
        </Link>
      ) : (
        <li className={menuItemClasses}>/</li>
      )} */}
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
