import React from "react";
import { scroller } from "react-scroll";

import logoIcon from "../../../../assets/navigation bar/logoIcon.png";

import classes from "./Logo.module.css";

const Logo = () => {

  const scrollToMain = () => {
    scroller.scrollTo("ראשי", {
      spy: true,
      smooth: true,
      offset: -100,
      duration: 500,
    });
  };

  return (
    <div onClick={scrollToMain} className={classes.logo}>
      <img src={logoIcon} alt="logo" />
    </div>
  );
};

export default Logo;
