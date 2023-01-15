import React, { useRef, useContext } from "react";
import useClickOutside from "../../../../../hooks/use-click-outside";
import { sanityApiContext } from "../../../../../store/sanity-api-context";
import MenuItem from "../menu item/MenuItem";

import classes from "./Menu.module.css";

const Menu = ({ isMobile, className }) => {
  const { menu, ltr } = useContext(sanityApiContext);

  const menuRef = useRef();

  useClickOutside(menuRef);

  const titlesList = !isMobile
    ? menu?.map((title, index) => {
      return <MenuItem key={index} title={title} />;
    })
    : menu
      ?.filter((title) => title !== "/")
      .map((title, index) => {
        return <MenuItem isMobile={isMobile} key={index} title={title} />;
      });

  const menuClasses = !isMobile ? classes.menu : classes["menu-mobile"];

  return (
    <ul
      className={`${className} ${menuClasses} ${!isMobile ? (ltr ? classes["menu-ltr"] : classes["menu-rtl"]) : undefined}`}
      style={!ltr ? { alignItems: "center" } : undefined}
      ref={menuRef}
    >
      {titlesList}
    </ul>
  );
};

export default Menu;
