import React from "react";
import { useLocation, useNavigate } from "react-router";
import { scroller } from "react-scroll";

import logoIcon from "../../../../assets/navigation bar/logoIcon.png";

import classes from "./Logo.module.css";

const Logo = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navigateToMain = () => {
    if (pathname !== "/") {
      navigate("/");
    } else {
      scroller.scrollTo("ראשי", {
        spy: true,
        smooth: true,
        offset: -100,
        duration: 500,
      });
    }
  };

  return (
    <div onClick={navigateToMain} className={classes.logo}>
      <img src={logoIcon} alt="logo" />
    </div>
  );
};

export default Logo;
