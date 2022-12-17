import React, { Fragment } from "react";
import { Link } from "react-scroll";

import classes from "./MenuItem.module.css";

const MenuItem = ({ title }) => {
  const menuItemClasses = `${classes["menu-item"]} ${title !== "/" ? classes["menu-item-title"] : undefined
    }`;
  return (
    <Fragment>
      {title !== "/" ? (
        <Link to={title} spy={true} smooth={true} className={menuItemClasses}>
          {title}
        </Link>
      ) : (
        <li className={menuItemClasses}>/</li>
      )}
    </Fragment>
  );
};

export default MenuItem;
