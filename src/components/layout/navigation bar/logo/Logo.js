import React from "react";
import { useLocation, useNavigate } from "react-router";

import logoIcon from "../../../../assets/navigation bar/logoIcon.png";

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
      <img src={logoIcon} alt="logo" />
    </div>
  );
};

export default Logo;
