import React, { useRef } from "react";
import useClickOutside from "../../../../../hooks/use-click-outside";
import MenuItem from "../menu item/MenuItem";

import classes from "./Menu.module.css";

const TITLES = [
  { id: "t1", title: "ראשי" },
  { id: "t2", title: "/" },
  { id: "t3", title: "אודות" },
  { id: "t4", title: "/" },
  { id: "t5", title: "ערכי הקרן" },
  { id: "t6", title: "/" },
  { id: "t7", title: "מאמרים" },
  { id: "t8", title: "/" },
  { id: "t9", title: "יצירת קשר" },
];

const Menu = ({ isMobile }) => {

  const menuRef = useRef();

  useClickOutside(menuRef);

  const titlesList = !isMobile
    ? TITLES.map((title) => {
      return <MenuItem key={title.id} title={title.title} />;
    })
    : TITLES.filter((title) => title !== "/").map((title) => {
      return <MenuItem isMobile={isMobile} key={title.id} title={title.title} />;
    });

  const menuClasses = !isMobile ? classes.menu : classes["menu-mobile"];

  return <ul className={menuClasses} ref={menuRef} >{titlesList}</ul>;
};

export default Menu;
