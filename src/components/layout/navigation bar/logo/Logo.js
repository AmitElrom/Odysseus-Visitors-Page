import React from "react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import { screenSizeContext } from "../../../../store/screen-size-context";

import { ReactComponent as LogoIcon } from "../../../../assets/navigation bar/logo.svg";

import classes from "./Logo.module.css";

const Logo = ({ className }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isMobile } = useContext(screenSizeContext);

  const navigateToMain = () => {
    if (pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={navigateToMain}
      className={`${className} ${classes.logo} ${!isMobile ? classes["logo-nonmobile"] : undefined
        }`}
    >
      <LogoIcon className={classes["the-logo"]} />
    </div>
  );
};

export default Logo;
