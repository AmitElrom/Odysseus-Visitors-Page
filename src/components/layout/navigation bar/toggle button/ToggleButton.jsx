import React from "react";
import { Spin as Hamburger } from "hamburger-react";

import classes from "./ToggleButton.module.css";

const ToggleButton = ({ isMenuOpen, onClick }) => {
  return (
    <div className={classes["toggle-btn"]}>
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
