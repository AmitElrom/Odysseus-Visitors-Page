import React from "react";

import logoIcon from "../../../../assets/navigation bar/logoIcon.png";

import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <img src={logoIcon} alt="logo" />
    </div>
  );
};

export default Logo;
