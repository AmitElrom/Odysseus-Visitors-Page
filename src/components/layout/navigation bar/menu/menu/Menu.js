import React, { useRef } from "react";
import { useContext } from "react";
import useClickOutside from "../../../../../hooks/use-click-outside";
import { sanityApiContext } from "../../../../../store/sanity-api-context";
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

const Menu = ({ isMobile, className }) => {
  const { menu } = useContext(sanityApiContext);
  console.log(menu);

  const menuRef = useRef();

  useClickOutside(menuRef);

  const titlesList = !isMobile
    ? menu.map((title, index) => {
        return <MenuItem key={index} title={title} />;
      })
    : menu
        .filter((title) => title !== "/")
        .map((title, index) => {
          return <MenuItem isMobile={isMobile} key={index} title={title} />;
        });

  const menuClasses = !isMobile ? classes.menu : classes["menu-mobile"];

  return (
    <ul className={`${className} ${menuClasses}`} ref={menuRef}>
      {titlesList}
    </ul>
  );
};

export default Menu;
