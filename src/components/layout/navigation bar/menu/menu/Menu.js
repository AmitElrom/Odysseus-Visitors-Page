import React, { useContext, useRef } from "react";
import useClickOutside from "../../../../../hooks/use-click-outside";
import { menuContext } from "../../../../../store/menu-context";
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

  const menuRef = useRef();

  useClickOutside(menuRef);

  const titlesList = !isMobile
    ? TITLES.map((title) => {
      return <MenuItem key={title} title={title} />;
    })
    : TITLES.filter((title) => title !== "/").map((title) => {
      return <MenuItem isMobile={isMobile} key={title} title={title} />;
    });

  const menuClasses = !isMobile ? classes.menu : classes["menu-mobile"];

  return <ul className={menuClasses} ref={menuRef} >{titlesList}</ul>;
};

export default Menu;
