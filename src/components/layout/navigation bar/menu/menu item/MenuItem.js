import React from "react";

import classes from "./MenuItem.module.css";

const MenuItem = ({ title }) => {
  const menuItemClasses = `${classes["menu-item"]} ${
    title !== "/" ? classes["menu-item-title"] : undefined
  }`;
  return <li className={menuItemClasses}>{title}</li>;
};

export default MenuItem;
