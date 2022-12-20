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

const Menu = ({ isMobile }) => {
  const titlesList = !isMobile
    ? TITLES.map((title) => {
        return <MenuItem key={title} title={title} />;
      })
    : TITLES.filter((title) => title !== "/").map((title) => {
        return <MenuItem isMobile={isMobile} key={title} title={title} />;
      });

  const menuClasses = !isMobile ? classes.menu : classes["menu-mobile"];

  return <ul className={menuClasses}>{titlesList}</ul>;
};

export default Menu;
