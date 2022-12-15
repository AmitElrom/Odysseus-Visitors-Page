import React from "react";

import Data from "../data/Data";

import classes from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <header className={classes.header}>
      <Data />
    </header>
  );
};

export default NavigationBar;
