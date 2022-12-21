import { useContext } from "react";
import { menuContext } from "../../../../store/menu-context";

import Data from "../data/Data";
import Menu from "../menu/menu/Menu";

import classes from "./NavigationBar.module.css";

const NavigationBar = () => {

  const { isMenuOpen } = useContext(menuContext);

  return (
    <header className={classes.header}>
      <Data />
      {isMenuOpen && <Menu isMobile={true} />}
    </header>
  );
};

export default NavigationBar;
