import React from "react";
import Logo from "../logo/Logo";
import Menu from "../menu/menu/Menu";

import classes from "./Data.module.css";

const Data = () => {
  return (
    <div className={classes.data}>
      <Menu />
      <Logo />
    </div>
  );
};

export default Data;
