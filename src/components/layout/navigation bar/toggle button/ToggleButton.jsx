import React, { useContext } from "react";
import { Spin as Hamburger } from "hamburger-react";

import classes from "./ToggleButton.module.css";
import { menuContext } from "../../../../store/menu-context";

const ToggleButton = ({ onClick }) => {
  const { isMenuOpen } = useContext(menuContext);

  return (
    <div id="toggle-btn" className={classes["toggle-btn"]}>
      <Hamburger
        onToggle={onClick}
        toggled={isMenuOpen}
        size={50}
        color="var(--blue)"
        distance="sm"
      />
    </div>
  );
};

export default ToggleButton;
