import React from "react";
import { useLocation, useNavigate } from "react-router";

import { ReactComponent as LogoIcon } from '../../../../assets/navigation bar/logo.svg';

import classes from "./Logo.module.css";

const Logo = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navigateToMain = () => {
    if (pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return (
    <div onClick={navigateToMain} className={classes.logo}>
      <LogoIcon className={classes["the-logo"]} />
    </div>
  );
};

export default Logo;
