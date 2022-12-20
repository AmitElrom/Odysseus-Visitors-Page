import { useState } from "react";

import Data from "../data/Data";
import Menu from "../menu/menu/Menu";

import classes from "./NavigationBar.module.css";

const NavigationBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuHandler = () => {
    setIsMenuOpen(prevVal => !prevVal);
  };

  return (
    <header className={classes.header}>
      <Data onToggleMenu={toggleMenuHandler} isMenuOpen={isMenuOpen} />
      {isMenuOpen && <Menu isMobile={true} />}
    </header>
  );
};

export default NavigationBar;
