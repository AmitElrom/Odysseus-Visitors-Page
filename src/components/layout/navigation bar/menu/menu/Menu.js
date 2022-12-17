import React from "react";
import MenuItem from "../menu item/MenuItem";

import classes from "./Menu.module.css";

const TITLES = [
  "ראשי",
  "/",
  "אודות",
  "/",
  "ערכי הקרן",
  "/",
  "מאמרים",
  "/",
  "יצירת קשר",
];

const Menu = () => {
  const titlesList = TITLES.map((title) => {
    return <MenuItem key={title} title={title} />;
  });

  return <ul className={classes.menu}>{titlesList}</ul>;
};

export default Menu;
